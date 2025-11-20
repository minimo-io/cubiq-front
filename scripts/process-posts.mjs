// scripts/process-posts.mjs

import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'gray-matter';

const postsDir = path.resolve(process.cwd(), 'src/lib/data/posts');
const outputDir = path.resolve(process.cwd(), 'src/lib/data');
const outputFile = path.join(outputDir, 'posts.ts');
const featuredPostsOutputFile = path.join(outputDir, 'featuredPosts.ts');
const blogPostsOutputFile = path.join(outputDir, 'blogPostsForVite.ts');

// Function to format date as "Month Day"
function formatDate(dateString, locale) {
	const date = new Date(dateString);
	const options = { month: 'long', day: 'numeric' };
	return date.toLocaleDateString(locale, options);
}

const languages = ['en', 'es', 'pt'];
const postsByLanguage = {};
const featuredPostsByLanguage = {};
languages.forEach((lang) => {
	postsByLanguage[lang] = [];
	featuredPostsByLanguage[lang] = [];
});

const allPosts = [];
const allFeaturedPosts = [];
const blogPostsMap = new Map(); // To group posts by ID

fs.readdirSync(postsDir)
	.filter((file) => file.endsWith('.md'))
	.forEach((file) => {
		// Updated regex to capture ID, slug, and language
		// Expected format: {id}-{slug}-{lang}.md
		const match = file.match(/^(\d+)-(.+)-([a-z]{2})\.md$/);
		if (!match) {
			console.warn(
				`Skipping file with invalid name format: ${file}. Expected format: id-slug-lang.md (e.g., 1-my-post-en.md)`
			);
			return;
		}

		const id = match[1];
		const slug = match[2];
		const lang = match[3];

		if (!languages.includes(lang)) {
			console.warn(
				`Skipping file with unknown language: ${file}. Supported languages are: ${languages.join(
					', '
				)}`
			);
			return;
		}

		const filePath = path.join(postsDir, file);
		const content = fs.readFileSync(filePath, 'utf-8');
		const { data, content: body } = matter(content);
		const htmlContent = marked(body);

		// Map 'name' to 'fullName' for authors
		const authors = data.authors
			? data.authors.map((author) => ({
					fullName: author.name,
					avatar: author.avatar
				}))
			: [];

		const post = {
			id: id,
			title: data.title,
			excerpt: data.excerpt,
			content: htmlContent,
			date: data.date, // Store raw date for sorting
			slug: lang === 'pt' ? `/blog/${slug}` : `/${lang}/blog/${slug}`,
			isMain: data.isMain || false,
			iconName: data.icon || null, // Store as iconName for now
			authors: authors,
			featured: data.featured || false // Add featured property
		};

		// Add to featured posts if featured: true, otherwise add to regular posts
		if (data.featured === true) {
			featuredPostsByLanguage[lang].push(post);
			allFeaturedPosts.push(post);
		} else {
			postsByLanguage[lang].push(post);
		}

		allPosts.push(post);

		// Group posts by ID for blogPosts generation
		if (!blogPostsMap.has(id)) {
			blogPostsMap.set(id, {});
		}
		blogPostsMap.get(id)[lang] = post.slug;
	});

// Sort posts by date in descending order (newest first)
languages.forEach((lang) => {
	postsByLanguage[lang].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	featuredPostsByLanguage[lang].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
});

// Collect all unique icons used (from regular posts only)
const iconsUsed = new Set();
languages.forEach((lang) => {
	postsByLanguage[lang].forEach((post) => {
		if (post.iconName && typeof post.iconName === 'string') {
			iconsUsed.add(post.iconName);
		}
	});
});

// Collect all unique icons used (from featured posts)
const featuredIconsUsed = new Set();
allFeaturedPosts.forEach((post) => {
	if (post.iconName && typeof post.iconName === 'string') {
		featuredIconsUsed.add(post.iconName);
	}
});

// Generate imports for posts.ts
const iconImports =
	Array.from(iconsUsed).length > 0
		? `import { ${Array.from(iconsUsed).join(', ')} } from '@lucide/svelte';

`
		: `import { type Icon as IconType } from '@lucide/svelte';

`;

// Generate imports for featuredPosts.ts
const featuredIconImports =
	Array.from(featuredIconsUsed).length > 0
		? `import { ${Array.from(featuredIconsUsed).join(', ')} } from '@lucide/svelte';

`
		: `import { type Icon as IconType } from '@lucide/svelte';

`;

// Build the posts object manually to include proper icon references
let postsObject = 'export const posts = {\n';
for (const lang of languages) {
	postsObject += `\t${lang}: [\n`;
	const posts = postsByLanguage[lang];
	posts.forEach((post, index) => {
		const iconRef = post.iconName ? post.iconName : 'undefined';

		postsObject += '\t\t{\n';
		postsObject += `\t\t\ttitle: ${JSON.stringify(post.title)},\n`;
		postsObject += `\t\t\texcerpt: ${JSON.stringify(post.excerpt)},\n`;
		postsObject += `\t\t\tcontent: ${JSON.stringify(post.content)},\n`;
		postsObject += `			date: ${JSON.stringify(formatDate(post.date, lang))},
`;
		postsObject += `\t\t\tslug: ${JSON.stringify(post.slug)},\n`;
		postsObject += `\t\t\tisMain: ${post.isMain},\n`;
		postsObject += `\t\t\ticon: ${iconRef},\n`;
		postsObject += '\t\t\tauthors: [\n';

		post.authors.forEach((author, authorIndex) => {
			postsObject += '\t\t\t\t{\n';
			postsObject += `\t\t\t\t\tfullName: ${JSON.stringify(author.fullName)},\n`;
			postsObject += `\t\t\t\t\tavatar: ${JSON.stringify(author.avatar)}\n`;
			postsObject += '\t\t\t\t}';
			if (authorIndex < post.authors.length - 1) postsObject += ',';
			postsObject += '\n';
		});

		postsObject += '\t\t\t]\n';
		postsObject += '\t\t}';
		if (index < posts.length - 1) postsObject += ',';
		postsObject += '\n';
	});
	postsObject += `\t]`;
	if (languages.indexOf(lang) < languages.length - 1) {
		postsObject += ',\n';
	} else {
		postsObject += '\n';
	}
}
postsObject += '};';

// Build the featured posts object
let featuredPostsObject = 'export const featuredPosts = {\n';
for (const lang of languages) {
	featuredPostsObject += `\t${lang}: [\n`;
	const posts = featuredPostsByLanguage[lang];
	posts.forEach((post, index) => {
		const iconRef = post.iconName ? post.iconName : 'undefined';

		featuredPostsObject += '\t\t{\n';
		featuredPostsObject += `\t\t\ttitle: ${JSON.stringify(post.title)},\n`;
		featuredPostsObject += `\t\t\texcerpt: ${JSON.stringify(post.excerpt)},\n`;
		featuredPostsObject += `\t\t\tcontent: ${JSON.stringify(post.content)},\n`;
		featuredPostsObject += `			date: ${JSON.stringify(formatDate(post.date, lang))},
`;
		featuredPostsObject += `\t\t\tslug: ${JSON.stringify(post.slug)},\n`;
		featuredPostsObject += `\t\t\tisMain: ${post.isMain},\n`;
		featuredPostsObject += `\t\t\ticon: ${iconRef},\n`;
		featuredPostsObject += '\t\t\tauthors: [\n';

		post.authors.forEach((author, authorIndex) => {
			featuredPostsObject += '\t\t\t\t{\n';
			featuredPostsObject += `\t\t\t\t\tfullName: ${JSON.stringify(author.fullName)},\n`;
			featuredPostsObject += `\t\t\t\t\tavatar: ${JSON.stringify(author.avatar)}\n`;
			featuredPostsObject += '\t\t\t\t}';
			if (authorIndex < post.authors.length - 1) featuredPostsObject += ',';
			featuredPostsObject += '\n';
		});

		featuredPostsObject += '\t\t\t]\n';
		featuredPostsObject += '\t\t}';
		if (index < posts.length - 1) featuredPostsObject += ',';
		featuredPostsObject += '\n';
	});
	featuredPostsObject += `\t]`;
	if (languages.indexOf(lang) < languages.length - 1) {
		featuredPostsObject += ',\n';
	} else {
		featuredPostsObject += '\n';
	}
}
featuredPostsObject += '};';

// Write posts.ts file
const fileContent = `${iconImports}${postsObject}`;
fs.writeFileSync(outputFile, fileContent);

// Write featuredPosts.ts file
const featuredFileContent = `${featuredIconImports}${featuredPostsObject}`;
fs.writeFileSync(featuredPostsOutputFile, featuredFileContent);

// Generate blogPostsForVite.ts
const blogPostsArray = [];

for (const [id, posts] of blogPostsMap.entries()) {
	// Only generate blog post patterns for posts that have all three languages
	if (posts.pt && posts.en && posts.es) {
		const blogPost = {
			pattern: posts.pt, // Use the Portuguese slug as the pattern (base locale)
			localized: [
				['pt', posts.pt],
				['en', posts.en],
				['es', posts.es]
			]
		};
		blogPostsArray.push(blogPost);
	} else {
		console.warn(
			`Post with ID "${id}" is missing translations. Available languages: ${Object.keys(posts).join(', ')}`
		);
	}
}

// Generate the blogPostsForVite.ts content with proper TypeScript typing
let blogPostsContent = `const blogPosts: Array<{
	pattern: string;
	localized: [string, string][];
}> = [\n`;
blogPostsArray.forEach((post, index) => {
	blogPostsContent += `\t{\n`;
	blogPostsContent += `\t\tpattern: '${post.pattern}',\n`;
	blogPostsContent += `\t\tlocalized: [\n`;
	post.localized.forEach((locale, localeIndex) => {
		blogPostsContent += `\t\t\t['${locale[0]}', '${locale[1]}']`;
		if (localeIndex < post.localized.length - 1) blogPostsContent += ',';
		blogPostsContent += '\n';
	});
	blogPostsContent += `\t\t]\n`;
	blogPostsContent += `\t}`;
	if (index < blogPostsArray.length - 1) blogPostsContent += ',';
	blogPostsContent += '\n';
});
blogPostsContent += `];\n\n`;
blogPostsContent += `export { blogPosts };`;

fs.writeFileSync(blogPostsOutputFile, blogPostsContent);

console.log('Posts processed successfully!');
console.log(`Generated ${blogPostsArray.length} blog post patterns for Vite config.`);
console.log(`Generated ${allFeaturedPosts.length} featured posts across all languages.`);

// Count posts per language
languages.forEach((lang) => {
	const regularCount = postsByLanguage[lang].length;
	const featuredCount = featuredPostsByLanguage[lang].length;
	console.log(`Regular posts in ${lang}: ${regularCount}`);
	console.log(`Featured posts in ${lang}: ${featuredCount}`);
});

// // scripts/process-posts.mjs

// import fs from 'fs';
// import path from 'path';
// import { marked } from 'marked';
// import matter from 'gray-matter';

// const postsDir = path.resolve(process.cwd(), 'src/lib/data/posts');
// const outputDir = path.resolve(process.cwd(), 'src/lib/data');
// const outputFile = path.join(outputDir, 'posts.ts');
// const featuredPostsOutputFile = path.join(outputDir, 'featuredPosts.ts');
// const blogPostsOutputFile = path.join(outputDir, 'blogPostsForVite.ts');

// // Function to format date as "Month Day"
// function formatDate(dateString, locale) {
// 	const date = new Date(dateString);
// 	const options = { month: 'long', day: 'numeric' };
// 	return date.toLocaleDateString(locale, options);
// }

// const languages = ['en', 'es', 'pt'];
// const postsByLanguage = {};
// const featuredPostsByLanguage = {};
// languages.forEach((lang) => {
// 	postsByLanguage[lang] = [];
// 	featuredPostsByLanguage[lang] = [];
// });

// const allPosts = [];
// const allFeaturedPosts = [];
// const blogPostsMap = new Map(); // To group posts by ID

// fs.readdirSync(postsDir)
// 	.filter((file) => file.endsWith('.md'))
// 	.forEach((file) => {
// 		// Updated regex to capture ID, slug, and language
// 		// Expected format: {id}-{slug}-{lang}.md
// 		const match = file.match(/^(\d+)-(.+)-([a-z]{2})\.md$/);
// 		if (!match) {
// 			console.warn(
// 				`Skipping file with invalid name format: ${file}. Expected format: id-slug-lang.md (e.g., 1-my-post-en.md)`
// 			);
// 			return;
// 		}

// 		const id = match[1];
// 		const slug = match[2];
// 		const lang = match[3];

// 		if (!languages.includes(lang)) {
// 			console.warn(
// 				`Skipping file with unknown language: ${file}. Supported languages are: ${languages.join(
// 					', '
// 				)}`
// 			);
// 			return;
// 		}

// 		const filePath = path.join(postsDir, file);
// 		const content = fs.readFileSync(filePath, 'utf-8');
// 		const { data, content: body } = matter(content);
// 		const htmlContent = marked(body);

// 		// Map 'name' to 'fullName' for authors
// 		const authors = data.authors
// 			? data.authors.map((author) => ({
// 					fullName: author.name,
// 					avatar: author.avatar
// 				}))
// 			: [];

// 		const post = {
// 			id: id,
// 			title: data.title,
// 			excerpt: data.excerpt,
// 			content: htmlContent,
// 			date: data.date, // Store raw date for sorting
// 			slug: lang === 'pt' ? `/blog/${slug}` : `/${lang}/blog/${slug}`,
// 			isMain: data.isMain || false,
// 			iconName: data.icon || null, // Store as iconName for now
// 			authors: authors,
// 			featured: data.featured || false // Add featured property
// 		};

// 		postsByLanguage[lang].push(post);
// 		allPosts.push(post);

// 		// Add to featured posts if featured: true
// 		if (data.featured === true) {
// 			featuredPostsByLanguage[lang].push(post);
// 			allFeaturedPosts.push(post);
// 		}

// 		// Group posts by ID for blogPosts generation
// 		if (!blogPostsMap.has(id)) {
// 			blogPostsMap.set(id, {});
// 		}
// 		blogPostsMap.get(id)[lang] = post.slug;
// 	});

// // Sort posts by date in descending order (newest first)
// languages.forEach((lang) => {
// 	postsByLanguage[lang].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
// 	featuredPostsByLanguage[lang].sort(
// 		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
// 	);
// });

// // Collect all unique icons used (from all posts)
// const iconsUsed = new Set();
// allPosts.forEach((post) => {
// 	if (post.iconName && typeof post.iconName === 'string') {
// 		iconsUsed.add(post.iconName);
// 	}
// });

// // Collect all unique icons used (from featured posts)
// const featuredIconsUsed = new Set();
// allFeaturedPosts.forEach((post) => {
// 	if (post.iconName && typeof post.iconName === 'string') {
// 		featuredIconsUsed.add(post.iconName);
// 	}
// });

// // Generate imports for posts.ts
// const iconImports =
// 	Array.from(iconsUsed).length > 0
// 		? `import { ${Array.from(iconsUsed).join(', ')} } from '@lucide/svelte';

// `
// 		: `import { type Icon as IconType } from '@lucide/svelte';

// `;

// // Generate imports for featuredPosts.ts
// const featuredIconImports =
// 	Array.from(featuredIconsUsed).length > 0
// 		? `import { ${Array.from(featuredIconsUsed).join(', ')} } from '@lucide/svelte';

// `
// 		: `import { type Icon as IconType } from '@lucide/svelte';

// `;

// // Build the posts object manually to include proper icon references
// let postsObject = 'export const posts = {\n';
// for (const lang of languages) {
// 	postsObject += `\t${lang}: [\n`;
// 	const posts = postsByLanguage[lang];
// 	posts.forEach((post, index) => {
// 		const iconRef = post.iconName ? post.iconName : 'undefined';

// 		postsObject += '\t\t{\n';
// 		postsObject += `\t\t\ttitle: ${JSON.stringify(post.title)},\n`;
// 		postsObject += `\t\t\texcerpt: ${JSON.stringify(post.excerpt)},\n`;
// 		postsObject += `\t\t\tcontent: ${JSON.stringify(post.content)},\n`;
// 		postsObject += `			date: ${JSON.stringify(formatDate(post.date, lang))},
// `;
// 		postsObject += `\t\t\tslug: ${JSON.stringify(post.slug)},\n`;
// 		postsObject += `\t\t\tisMain: ${post.isMain},\n`;
// 		postsObject += `\t\t\ticon: ${iconRef},\n`;
// 		postsObject += '\t\t\tauthors: [\n';

// 		post.authors.forEach((author, authorIndex) => {
// 			postsObject += '\t\t\t\t{\n';
// 			postsObject += `\t\t\t\t\tfullName: ${JSON.stringify(author.fullName)},\n`;
// 			postsObject += `\t\t\t\t\tavatar: ${JSON.stringify(author.avatar)}\n`;
// 			postsObject += '\t\t\t\t}';
// 			if (authorIndex < post.authors.length - 1) postsObject += ',';
// 			postsObject += '\n';
// 		});

// 		postsObject += '\t\t\t]\n';
// 		postsObject += '\t\t}';
// 		if (index < posts.length - 1) postsObject += ',';
// 		postsObject += '\n';
// 	});
// 	postsObject += `\t]`;
// 	if (languages.indexOf(lang) < languages.length - 1) {
// 		postsObject += ',\n';
// 	} else {
// 		postsObject += '\n';
// 	}
// }
// postsObject += '};';

// // Build the featured posts object
// let featuredPostsObject = 'export const featuredPosts = {\n';
// for (const lang of languages) {
// 	featuredPostsObject += `\t${lang}: [\n`;
// 	const posts = featuredPostsByLanguage[lang];
// 	posts.forEach((post, index) => {
// 		const iconRef = post.iconName ? post.iconName : 'undefined';

// 		featuredPostsObject += '\t\t{\n';
// 		featuredPostsObject += `\t\t\ttitle: ${JSON.stringify(post.title)},\n`;
// 		featuredPostsObject += `\t\t\texcerpt: ${JSON.stringify(post.excerpt)},\n`;
// 		featuredPostsObject += `\t\t\tcontent: ${JSON.stringify(post.content)},\n`;
// 		featuredPostsObject += `			date: ${JSON.stringify(formatDate(post.date, lang))},
// `;
// 		featuredPostsObject += `\t\t\tslug: ${JSON.stringify(post.slug)},\n`;
// 		featuredPostsObject += `\t\t\tisMain: ${post.isMain},\n`;
// 		featuredPostsObject += `\t\t\ticon: ${iconRef},\n`;
// 		featuredPostsObject += '\t\t\tauthors: [\n';

// 		post.authors.forEach((author, authorIndex) => {
// 			featuredPostsObject += '\t\t\t\t{\n';
// 			featuredPostsObject += `\t\t\t\t\tfullName: ${JSON.stringify(author.fullName)},\n`;
// 			featuredPostsObject += `\t\t\t\t\tavatar: ${JSON.stringify(author.avatar)}\n`;
// 			featuredPostsObject += '\t\t\t\t}';
// 			if (authorIndex < post.authors.length - 1) featuredPostsObject += ',';
// 			featuredPostsObject += '\n';
// 		});

// 		featuredPostsObject += '\t\t\t]\n';
// 		featuredPostsObject += '\t\t}';
// 		if (index < posts.length - 1) featuredPostsObject += ',';
// 		featuredPostsObject += '\n';
// 	});
// 	featuredPostsObject += `\t]`;
// 	if (languages.indexOf(lang) < languages.length - 1) {
// 		featuredPostsObject += ',\n';
// 	} else {
// 		featuredPostsObject += '\n';
// 	}
// }
// featuredPostsObject += '};';

// // Write posts.ts file
// const fileContent = `${iconImports}${postsObject}`;
// fs.writeFileSync(outputFile, fileContent);

// // Write featuredPosts.ts file
// const featuredFileContent = `${featuredIconImports}${featuredPostsObject}`;
// fs.writeFileSync(featuredPostsOutputFile, featuredFileContent);

// // Generate blogPostsForVite.ts
// const blogPostsArray = [];

// for (const [id, posts] of blogPostsMap.entries()) {
// 	// Only generate blog post patterns for posts that have all three languages
// 	if (posts.pt && posts.en && posts.es) {
// 		const blogPost = {
// 			pattern: posts.pt, // Use the Portuguese slug as the pattern (base locale)
// 			localized: [
// 				['pt', posts.pt],
// 				['en', posts.en],
// 				['es', posts.es]
// 			]
// 		};
// 		blogPostsArray.push(blogPost);
// 	} else {
// 		console.warn(
// 			`Post with ID "${id}" is missing translations. Available languages: ${Object.keys(posts).join(', ')}`
// 		);
// 	}
// }

// // Generate the blogPostsForVite.ts content with proper TypeScript typing
// let blogPostsContent = `const blogPosts: Array<{
// 	pattern: string;
// 	localized: [string, string][];
// }> = [\n`;
// blogPostsArray.forEach((post, index) => {
// 	blogPostsContent += `\t{\n`;
// 	blogPostsContent += `\t\tpattern: '${post.pattern}',\n`;
// 	blogPostsContent += `\t\tlocalized: [\n`;
// 	post.localized.forEach((locale, localeIndex) => {
// 		blogPostsContent += `\t\t\t['${locale[0]}', '${locale[1]}']`;
// 		if (localeIndex < post.localized.length - 1) blogPostsContent += ',';
// 		blogPostsContent += '\n';
// 	});
// 	blogPostsContent += `\t\t]\n`;
// 	blogPostsContent += `\t}`;
// 	if (index < blogPostsArray.length - 1) blogPostsContent += ',';
// 	blogPostsContent += '\n';
// });
// blogPostsContent += `];\n\n`;
// blogPostsContent += `export { blogPosts };`;

// fs.writeFileSync(blogPostsOutputFile, blogPostsContent);

// console.log('Posts processed successfully!');
// console.log(`Generated ${blogPostsArray.length} blog post patterns for Vite config.`);
// console.log(`Generated ${allFeaturedPosts.length} featured posts across all languages.`);

// // Count featured posts per language
// languages.forEach((lang) => {
// 	const count = featuredPostsByLanguage[lang].length;
// 	console.log(`Featured posts in ${lang}: ${count}`);
// });
