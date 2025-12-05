import { Beer, Database, Braces } from '@lucide/svelte';

export const posts = {
	en: [
		{
			title: "🍺 BeerChain: Discover and buy local craft beers",
			image: "/products/project-lightning-beer.webp",
			excerpt: "Discover local craft beers and pay with bitcoin. BeerChain brings breweries and bitcoiners together with seamless satoshi payments.",
			content: "<p>BeerChain is as a proof-of-concept app for those of us willing to use bitcoin as money, not just as one more speculative asset, so we can buy our craft 6-packs using satoshis, instead of just sitting above them.</p>\n<p>Beers will be delivered by 3rd party #bitcoin friendly retail stores.</p>\n<p>If you are a store owner and are interested please get in touch!</p>\n<p><a rel=\"nofollow noreferrer noopener\" target=\"_blank\" href=\"https://www.figma.com/design/A9ZpwzFjlfZSZlWIrNfztG/Lightning-Beer?node-id=2-3&t=XKNaVwyAoxWPFXNB-1\" class=\"btn md:btn-lg hover:bg-primary hover:text-white bg-primary/10 border border-primary text-primary\">Visit project</a></p>\n",
			date: "August 31",
			slug: "/en/blog/beer-app",
			isMain: false,
			icon: Beer,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				}
			]
		},
		{
			title: "Using SQLite for Delivering Blazingly Fast Read-Heavy Operations",
			image: "",
			excerpt: "A strategic approach to optimize data delivery, improve performance, and significantly reduce cloud costs for popular content.",
			content: "<p>SQLite is one of the most popular databases today, and <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">you might have miss it</a>.</p>\n<p>So we decided to give it a try for delivering ready-heavy blog posts in our <a href=\"https://www.cubiq.lat/en/store\">e-Commerce solution</a>... via <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "August 30",
			slug: "/en/blog/sqlite",
			isMain: false,
			icon: Database,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Puppeteer & EasyOCR for Slots Automation",
			image: "",
			excerpt: "This post explores how we can automate slot games using Puppeteer to control the game's interface and EasyOCR for real-time data extraction. Puppeteer acts as our programmatic \"player,\" navigating the game, initiating spins, and interacting with elements just like a human would. Meanwhile, EasyOCR provides the critical visual intelligence, reading key information directly from the screen, such as spin results, credit balances, and bonus indicators.",
			content: "<p>This was an experiment inspired by <a href=\"https://www.youtube.com/watch?v=iz9lUMSQBfY\">this John Carmack talk</a>, on Upper Bound 2025, about &quot;a robot that plays a real Atari console using a camera and a robotic joystick.&quot;</p>\n<p>The goal of this experiment was to proove that with the appropiate AI API access it is possible to:</p>\n<ol>\n<li>Automate the gameplay for slots games at (fun) iGaming (using <a href=\"https://github.com/microsoft/playwright-python\">Playwright for Python</a>).</li>\n<li>Extract jackpots, scores, and balances (using <a href=\"https://github.com/JaidedAI/EasyOCR\">EasyOCR</a>.)</li>\n<li>Send those captured values to an AI Ollama model for gameplay suggestions (using censored models like <a href=\"https://ollama.com/library/gemma3n\">gemma3n</a> or uncensored models at HuggingFace).</li>\n</ol>\n",
			date: "August 29",
			slug: "/en/blog/puppeteer-and-easyocr-for-igaming-automation",
			isMain: false,
			icon: Braces,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "tmux, multiplexing for local espionage",
			image: "/blog/tmuxing.webp",
			excerpt: "* * *",
			content: "<p>It is a fair goal in life to move around light: a handful of clothes, a lightning wallet, a plastic card, some cheap laptop, and a bag.</p>\n<p>It&#39;s useful to wander around attached to a minimum of stuff—and of noise. It&#39;s useful to live a social life outside the rat wheel of impressing friends and foes. And it is particularly useful when doing knowledge work, like coding, sticking our businesses to the terminal.</p>\n<p>To only need a couple of SSH tunnels, <a href=\"https://github.com/tmux/tmux/wiki\">tmux</a> multiplexing and NeoVim to get, literally, everywhere.</p>\n<p>Craving a heavy GUI IDE is like living life for showing external signs of success. Silly business.</p>\n<p>Like building muscle to look strong instead of being strong, capable of things.\nLike looking successful instead of focusing on generating wealth, capable of hodling some Bitcoin and buying your own time &amp; freedom.</p>\n<p>Avoiding fancy, heavy tools is a goal of this wandering man.\nInitially, the idea took me from VSCode to Rust-coded tools like <a href=\"https://zed.dev/\">Zed</a>, from the macOS Terminal to <a href=\"https://alacritty.org/\">Alacritty</a>.</p>\n<p>Previous years have thrown me into the claws of Eleventy, from there to Svelte, then to ...Kit, then to Svelte 5, then to Tailwind.</p>\n<p>Eventually, the whole thing made me think it&#39;s time to move away from my comfortable multi-window terminal emulator to more advanced ways to complicate my craving for a minimalistic developer life—while feeling good about it.</p>\n<p>It is time, then, for some multiplexing experiments. It&#39;s time to finally learn how to exit NeoVim.</p>\n<p>And what better way to start than with some experiments in local espionage?\n<br>\nBecause at the beginning, there must always be fun.</p>\n<p>So here we go.</p>\n",
			date: "March 19",
			slug: "/en/blog/tmux-multiplexing-for-local-espionage",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "A whirlwind romance with the Zed AI Editor",
			image: "/blog/zed-editor-2.webp",
			excerpt: "Look, VS Code, it's not you, it's me. Well, actually... it's Zed 😬",
			content: "<h2>Tha-Zed</h2>\n<p>I&#39;ve been seeing this new editor, and things are getting pretty serious.</p>\n<blockquote>\n    <p>\n        Designed for high-performance collaboration with humans and AI.\n    </p>\n</blockquote>\n\n<p>After years of watching the CPU fan of my old MacBook Air (13-inch, early 2015) go crazy just to open a TypeScript file,\nI stumbled upon Zed - a next-gen code editor written in Rust, <em>designed for high-performance collaboration with humans and AI</em>.</p>\n<p>Yep, <a href=\"https://zed.dev/\">Zed</a> is another AI editor on the rise. There is also some <a href=\"https://www.cursor.com/\">Cursor</a> out there, for which I could not care less at the moment. But an open-source editor that <a href=\"https://techcrunch.com/2023/03/15/zed-code-editor-raises-10m/\">rises $10M</a>, well, it just happens that I am.</p>\n<p>But the real game-changer? I&#39;ve hooked it up with <a href=\"https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct\">llama3.2-3b-instruct</a> through Ollama as my AI coding buddy (yep, i do like tiny open source models, and nope, they are not as good as Claude or ChatGPT),\nand things are rolling just fine.</p>\n<p>Of course you can configure Zed to work with Anthropic, GitHub Copilot or OpenAI. For this you will just need to upload your API keys in the corresponding Assistant config.</p>\n<p>The editor is in v0.158.2 as the time of writing, has few useful extensions and basic snippets, but boy it&#39;s fast.</p>\n<p>I&#39;ve been switching my stack since 2023, focusing more and more on performance.\nI still have a long way to go, but as was my interest in Eleventy and Static-Site-Generators, it&#39;s now time for editors like Zed and the Rust Language for my backend and AI related adventures.</p>\n<p>(Stay tuned for my upcoming article about <a href=\"https://ollama.com/\">Ollama</a> - it&#39;s a whole other rabbit hole of local AI goodness).</p>\n<p>Speaking of Rust - as someone diving into the world of zero-cost abstractions and fighting the borrow checker, Zed feels like the best choice.</p>\n<p>Weekly updates tell me that the development is undergoing at a good rythm, and that the team is being quite open about decisions (check <a href=\"https://www.youtube.com/@zeddotdev\">their youtube channel</a> for more details).</p>\n<p>So I am hopeful to fully substitute Visual Studio Code soon.</p>\n<h2>Zed&#39;s Configuration, my setup</h2>\n<p>I&#39;ll be sharing my actual Zed config here that you can shamelessly copy.\nExpect some carefully crafted settings for both Rust and (Svelte + TypeScript + Tailwind) development, plus my Ollama integration setup.</p>\n<p>👉 <a href=\"https://github.com/minimo-io/dev-config-files\">Check it out in Github</a>.</p>\n<h2>My verdict</h2>\n<p>Quite an ambitious piece of software that&#39;s in its early days, but if you&#39;re tired of your editor using more RAM than Chrome,\nor if you&#39;re curious about integrating AI into your workflow without paying for tokens to get paid for groceries or selling your soul, give Zed a shot.\nSee if it fits your needs. Check its performance, its AI integration and Collaboration capabilities, and decide if its worth your time.</p>\n<p>BTW: You can configure Zed to have the same base keymap as VSCode and it also includes &quot;Vim Mode&quot;, check it out <a href=\"https://zed.dev/docs/vim\">here</a>.</p>\n<p>In any case, use its powers responsibly. Don&#39;t say I didn&#39;t warn you... Now go forth and may the code be with you!\n<br><br></p>\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/JGz7Ou0Nwo8?si=YizD-YfWYuMIOo1h\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>\n\n<p>Long format fans 👇\n<br><br></p>\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/fV4aPy1bmY0?si=mDyyQ-NVF9rWOjP1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>\n<br><br>\nFarewell you coders!\n",
			date: "October 23",
			slug: "/en/blog/the-zed-ai-editor",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Migrating a +800 pages affiliate Wordpress site to Eleventy",
			image: "/blog/betizen-wordpress-vs-eleventy-2.webp",
			excerpt: "How to successfully migrate an iGaming site to (dramatically) increase performance and security",
			content: "<h2>Results first</h2>\n<p><strong>The challenge:</strong> Lowering costs, have better performance and security + forgetting about time-consuming Wordpress maintenance.</p>\n<p>So I decided to migrate Betizen.org from my self-managed DigitalOcean Droplet (2 GB Memory / 2 AMD vCPUs / 60 GB Disk) to Vercel. From a dynamic Wordpress to a static site generated with 11ty.</p>\n<p>✅ <strong>Performance</strong> measured by GTMetrix went from a lousy F (32%) to an A (96%)</p>\n<p>✅ <strong>Costs</strong> for Vercel Hobbie plan is free so costs went from $39.57/mo to $0, checked</p>\n<p>✅ <strong>Security</strong> is now close to ideal, since Vercel is a managed solution and a static site has very fewer attack vectors.</p>\n<p>Plus maintenance went from solving plugin incompatibilities after an update on a weekend to literally zero time spent.</p>\n<h2>The scenario</h2>\n<p>The site has reviews, articles, pages and categories in 3 different languages: pt-br, es, and en.</p>\n<p>It has a total of 809 urls with unique content.</p>\n<p>Wordpress is a great tool, I love it and love my clients who use it even more 😜\nI do specialize in Woocommerce &amp; Payments but the site, as a side thing, quickly became a pain in the a#@ to maintain.</p>\n<p><a href=\"https://www.betizen.org/\">Betizen.org</a>, tries to provide reliable listings and extreme transparecny of and for online casinos, games and affiliate programs, without scams or BS! Receiving lots of junk traffic, which overlows the lazy DigitalOcean server.</p>\n<p>For this project Wordpress was an obvious bad choice. It is thus, the standard all over the internet for affiliates, AND IT SHOULD NOT! Particularly if you are starting out and are bootstraping.</p>\n<p>So after some time dealing with it, I decided moving to greener pastures, to a light, clean, simple static site using the one and only SSG: <a href=\"https://www.11ty.dev/\">Eleventy</a>.</p>\n<p>Some thoughts went through my head about using Svelte as a SSG, buy hey, why not use a (great) and more specific tool for the task, while using the experience to improve on my 11ty&#39;s skills?</p>\n<p>So thre I went.</p>\n<h2>The challenge</h2>\n<p>Convert Betizen.org in a Static Site.<br></p>\n<p>508 urls for games reviews.\n<br>\n43 blog articles.\n<br>\n21 pages.\n<br>\n126 casino reviews.\n<br>\n28 categories.\n<br>\n83 game provider pages.\n<br>\n<strong>= 809+ unique and indexable urls.</strong>\n<br><br></p>\n<ol>\n<li>The first idea was to progresively migrate categories of pages one by one. Making tests with low traffic (and low authority) pages and them slowly moving high traffic ones. Two different structures should coexist until all pages were migrated.</li>\n<li>Another idea was to create a dev-tool that uses the Wordpress Rest API to fetch all content and create all necessary Markdown entries at once. Comparing outputs and migrate!</li>\n<li>Third option was to download the whole dam thing via a website copier tool like <a href=\"https://www.httrack.com/\">HTTrack</a>, work my bt locally and the ship the entire site at once.</li>\n</ol>\n<p>A basic structure was needed. And as always, the <a href=\"https://github.com/11ty/eleventy-base-blog\">11ty base blog</a> seemed as a great start.</p>\n<p>Also i18n and l10n functionalities were a must. Here is an interesting article about <a href=\"https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/\">i18n with Eleventy</a> by <a href=\"https://www.lenesaile.com/en/about/\">Lene Saile</a> and here an Smashingmagazine article about <a href=\"https://www.smashingmagazine.com/2020/11/internationalization-localization-static-sites/\">Internationalization And Localization For Static Sites</a>.</p>\n<p>For deployment Vercel, as I had some other projects hosted at Netlify, consuming quota.</p>\n<p>As many examples in 11ty&#39;s documentation are foused on Netlify, this <a href=\"https://vercel.com/guides/migrate-to-vercel-from-netlify\">Migrate to Vercel from Netlify</a> guide was useful.</p>\n<p>After one month, many tests, lot&#39;s of importing/scrapping tools created and many hours during weekends invested, betizen.org went live as a static site with an <strong>11ty template</strong> inspired on Wordpress theme (that I also have created to customize and original template for the betting industry).</p>\n<p>The idea is to continue to push 11ty for iGaming affiliates, maybe offer some free quality eleventy templates via minimo.io, ideally hooked up with a Headless CMS. As you can see in the results of this migration it makes all the sense, from costs, security and performance perspective.</p>\n<p>And it was fun to keep learning the Eleventy SSG! BTW: What a great community.</p>\n",
			date: "April 3",
			slug: "/en/blog/migrating-a-800-pages-wordpress-site-to-eleventy",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Nostrification 101",
			image: "/blog/nostrification-101.webp",
			excerpt: "Interesting Nostr stuff for newcommers",
			content: "<p>In my process of nostrification I stumble upon some interesting stuff worth checking for newcommers.</p>\n<p>Here follow both an <a href=\"#apps-and-services\">Apps &amp; Services</a> and <a href=\"#guides\">Guides</a> lists.</p>\n<p>👉 Also check this Svelte micro-app I created to check <a href=\"/app/nostr-followback\">who follows you back at Nostr</a>.</p>\n<h2>Developer Resources</h2>\n<ul>\n<li><a href=\"https://nostr.net/\">nostr.net</a>: A collection of projects and resources built on nostr to help developers and users.</li>\n<li><a href=\"https://github.com/nostr-dev-kit\">NDK</a>: Nostr Development Kit by pablof7z.</li>\n</ul>\n<h2>Apps &amp; Services</h2>\n<ul>\n<li><a href=\"https://nostr.watch/\">nostr.watch</a>: Find fast nostr relays.</li>\n<li><a href=\"https://habla.news/faq\">habla.news</a>: A nostr-based web app that enables anyone to earn from their writing.</li>\n<li><a href=\"https://www.nostrapps.com/\">nostrapps.com</a>: A curated list of Nostr apps.</li>\n<li><a href=\"https://nostrsync.live/\">nostrsync.live</a>: Download a copy of your Data.</li>\n<li><a href=\"https://zaplife.lol/\">zaplife.lol</a>: Zapping stats.</li>\n<li><a href=\"https://stats.nostr.band/\">stats.nostr.band</a>: Nostr Real Time Stats.</li>\n<li><a href=\"https://nostrends.vercel.app/\">nostrends.vercel.app</a>: What&#39;s trending on Nostr?</li>\n<li><a href=\"https://github.com/minimo-io/appticles/tree/main/nostr-followback\">nostr-followback</a>: Who&#39;s not following you back?</li>\n</ul>\n<h2>Guides</h2>\n<ul>\n<li><a href=\"https://www.youtube.com/watch?v=4qOVxq9lUbs\">Build your First Nostr App by Super Testnet</a>.</li>\n<li><a href=\"https://nostr.how/en/guides/get-verified\">Get NIP-05 verified</a>, also <a href=\"https://gist.github.com/metasikander/609a538e6a03b2f67e5c8de625baed3e\">this gist</a>.</li>\n</ul>\n",
			date: "December 13",
			slug: "/en/blog/nostrification-101",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "⚡️ Bitcoin & The Lightning Network",
			image: "",
			excerpt: "Lighting Network´s Capacity and other resources",
			content: "<div class=\"wrapper wrapper-wide\">\n  <iframe width=\"100%\" height=\"420\" class=\"img-rounded\" frameborder=\"0\" src=\"https://www.theblock.co/data/on-chain-metrics/bitcoin/lightning-networks-capacity-daily/embed\" title=\"Lightning Network's Capacity\"></iframe>\n</div>\n",
			date: "March 26",
			slug: "/en/blog/bitcoin-and-the-lightning-network",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Understanding Wordpress translation system",
			image: "/blog/wordpress-i18n.webp",
			excerpt: "A practical guide of the common errors (and solutions) when translating Wordpress & Woocommerce",
			content: "<h2>Intro.</h2>\n<p>Over 810 million websites are estimated to use WordPress (representing 40% of all websites on the Internet), and estimates suggest that Woocommerce powers over 5 millon active online stores.</p>\n<p>For someone offering services related to those technologies sounds like a nice client base. Everyones goto platform is Wordpress related, which also leads to many misuses and pitiful configurations (to not talk about performance!)</p>\n<p>So after being confronted to every kind of confussions from clients asking for my services at Fiverr, I decided to create the simplest, minimal guide possible, to explain how Wordpress Translations work (and how they don&#39;t), taking some of those confussions as a starting point.</p>\n<p>The identity of the aforementioned will remain anonymous 😜\nBut first, let&#39;s understand how Wordpress translations actually work.</p>\n<h2>How does Wordpress translations actually work?</h2>\n<p>Here we will cover the basics of Wordpress translations, from the practical to the theorical, convering:</p>\n<ol>\n<li><strong>What are pot, po and mo files?</strong></li>\n<li><strong>Loading translations</strong></li>\n<li><strong>Wordpress translation functions</strong></li>\n</ol>\n<hr>\n<h3>1. What are pot, po and mo files?</h3>\n<p>Wordpress (and all of its plugins like Woocommerce or Budypress) use the GNU gettext internationalization (i18n) and localization (l10n) system for writing multi-lingual programs.</p>\n<p>The file extensions used by this system are: .POT (Portable Object Template), .PO (Portable Object) and .MO (Machine Object) files, more <a href=\"https://en.wikipedia.org/wiki/Gettext\">here at Wikipedia</a>.</p>\n<p>The idea behind using a system like this is to <strong>separate programming from translating</strong>, so themes, child themes and plugins can be easily translated into other languages by specialist with no undestanding of coding.</p>\n<ul>\n<li><strong>POT files</strong> (<code>.pot</code>): The first step for the internationalization of our theme or plugin is to create our <code>.pot</code> file. This file will have no translations of its own, but <strong>it will be the template for all localization files to come</strong>.\nThese files are often created by the developer and make available in the <code>./languages</code> folder of a theme or plugin.\n<br><br>\nA <code>wp-cli</code> command line tool command can be run to scan the theme or plugin for available internationalization strings.\n<a href=\"https://wp-cli.org/\">WP-cli</a> is a command-line interface for Wordpress.\n<br><br>\nIt is worth mentioning that the theme must be developed with this in mind, using Wordpress internationalization functions (more in the next section). On the contrary our resulting <code>.pot</code> file will have no translatable strings or texts.\n<br><br>\n<strong>Many times, a client comes asking for me to translate a theme that it was not created with this capability. In such cases it is mandatory to do some development work in order to make the required texts translatable</strong>. It is sometimes hard to make the client understand that this not a translation work, but a development shenanigan.\n<br><br>\nAlso in these cases it is better to contact the original developer itself first, and ask for an internationalization-ready theme or plugin, in order to avoid conflicting versions. Other times this can be partially solved with the development of child theme.\n<br><br>\nIn case its all good with our code, we can run the following <code>wp-cli</code> command, and create our <code>.pot</code> file.\n<br><br></li>\n</ul>\n<pre><code class=\"language-bash\">wp i18n make-pot ~/Wordpress/wp-content/themes/my-theme/\n</code></pre>\n<ul>\n<li><p><strong>PO files</strong> (<code>.po</code>): A translator will take the <code>.pot</code> template file and translate the strings using a software like <a href=\"https://poedit.net/\">Poedit</a> or <a href=\"https://glotpress.blog/\">GlotPress</a> (web-based). The translator will choose the target locale, translate all or some of the strings and a <code>.po</code> file will be created.\n<br><br>\nIn case a plugin or a themes continues its development cycle and more translations are added, a new <code>.pot</code> file will be generated by the developer, and the initial <code>.po</code> translation can be updated with the new strings, to be in turn, also translated.\n<br><br>\nSometimes <code>.po</code> files are only partially translated, resulting in partial texts translations in the front-end of the site. This can be easily checked opening the <code>.po</code> file being loaded and searching for the un-translated string detected in the site.\n<br><br>\nIt is often the case that some of this strings were not correctly created by the developer. Which require, in many cases, some nasty hacks to solve.</p>\n</li>\n<li><p><strong>MO files</strong> (<code>.mo</code>): From a <code>.po</code> file, all nice and ready with all (or some) translations a <code>.mo</code> binary file is <strong>compiled</strong> by the software. This file contains all the original strings and their translations, in a format ready for fast extraction. These are the real translations files used by the Wordpress software and all its plugins.</p>\n</li>\n</ul>\n<h3>2. Loading Translations</h3>\n<pre><code class=\"language-php\">/*\n* Theme Name: My Theme\n* Author: Theme Author\n* Text Domain: my-theme\n*/\n</code></pre>\n<p>A key concept when loading Wordpress translations is the &quot;text domain&quot; of our theme or plugin.</p>\n<p>The &quot;Text Domain&quot; is a unique identifier that WordPress will use to load the necessary translation specific files to our theme, child theme or plugin. Specifically our <code>.mo</code> files.</p>\n<p>The <strong>Text Domain</strong> is defined in the header of our style.css file. It must be in lower case, without spaces and if necessary we must use hyphens instead of underscores.</p>\n<p>The next step is to check where our translation files are being searched for. The standard for themes and plugins is to configure these files to be loaded in a “languages” folder, located in the root directory of our WordPress theme, child theme or plugin.</p>\n<p>The special function <code>load_theme_textdomain</code> is used in order to specify this.</p>\n<pre><code class=\"language-php\">function mytheme_setup{\n    load_theme_textdomain( &#39;my-theme&#39;, get_template_directory() . &#39;/languages&#39;  );\n}\n</code></pre>\n<p>Then that setup can be attached to</p>\n<p>The .mo files must be named based on the locale exactly. Meaning that <code>/languages/</code>folder, inside a theme or plugin root, a Brazilian Portuguese translation file should be <code>pt_BR.mo</code> and <code>pt_BR.po</code>.</p>\n<p>Now, many non-experienced Wordpress users that want to modify a plugin or theme translations, usually grabs that same <code>.po</code> file, edit with PoEdit and save the changes. <strong>This normally results in modifications being overriden once the plugin or theme is updated</strong>.</p>\n<h4>How to solve this?</h4>\n<p>Wordpress will check for other directories for each theme or plugin translation files.\nSo, in case you need to modify a translation (or create one using the <code>.pot</code> files provided by the developer), <strong>the resulting files must be placed in other directory, specifically at the <code>wp-content/languages/</code> folder</strong>.</p>\n<p>If translation are for a theme you should place your files at <code>wp-content/languages/themes/</code> and <code>wp-content/languages/plugins</code> well, for plugins. A special consideration should be taken in relation to the file names.</p>\n<p>So for example, if our theme has a text-domain of <code>twentytwentyfour</code>, then our Brazilian Portuguese translation files should be named <code>twentytwentyfour-pt_BR.mo</code> and <code>.po</code> respectively.\nIf the configured locale for our Wordpress instance is <code>pt_BR</code> then translations will be loaded from that file, which takes priority.</p>\n<p>This is very important, and often a cause of confussions on whay translations are not loading correctly.</p>\n<p>To configure our locale for our Wordpress instance we must go to <code>Configurations &gt; General</code> or setup a <code>WPLANG</code> constant in our <code>wp-config.php</code> file.</p>\n<h3>3. Wordpress translation functions</h3>\n<p>Translations functions should be used on any Wordpress theme or plugin that is supposed to be &quot;translatable&quot; or in more technical terms, on any theme or plugin that what to be internationalized (and later localized).</p>\n<p>Without using these functions in your themes or plugins texts (aka. strings) will be &quot;hard-coded&quot;, non-&quot;translatable&quot;, fixed: subsequently they won&#39;t be detected by the software scanning the code when creating the corresponding <code>.pot</code> file, and you&#39;ill end up with translations problems.</p>\n<p>This is why if you have no coding skills, should always use professional themes and plugins.\nOr you can reach out to me asking for help, and I will be more than glad to help indeed, but at the same time pissed of with the lazy developer that created the problem in the first place.</p>\n<p>So, here are the most common translations functions that should be used in any internationalized Wordpress theme or plugin. There many non-obvious ones, but for those more in-depth matters you can Otto&#39;s great article about <a href=\"http://ottopress.com/2012/more-internationalization-fun/\">More Internationalization Fun</a>.\nWithour further addo:</p>\n<ul>\n<li><a href=\"https://developer.wordpress.org/reference/functions/__/\">__()</a>: Retrieves the translation for the first argument.</li>\n<li><a href=\"https://developer.wordpress.org/reference/functions/_e/\">_e()</a>: Displays the translated text.</li>\n<li><a href=\"https://developer.wordpress.org/reference/functions/_x/\">_x()</a>: Retrieves translated string with gettext context.</li>\n<li><a href=\"https://developer.wordpress.org/reference/functions/_ex/\">_ex()</a>: Displays the above.</li>\n<li><a href=\"https://developer.wordpress.org/reference/functions/_n/\">_n()</a>: Translates and retrieves the singular or plural based on the number supplied.</li>\n</ul>\n<p>If you are not a developer just keep in mind that your theme or plugin should be developed using this functions in order to have internationalization and localization capabilities.</p>\n<p><strong>Let&#39;s follow with a summary of the misconceptions and errors detected when takling to clients.</strong></p>\n<h2>Common confusions around i18n and l10n</h2>\n<h3>Confussion #1</h3>\n<h4>Themes and child themes</h4>\n<blockquote>\n<p>Basically i want to keep the parent them in English and have a Portuguese translation in the child theme therefore the website will have two languages</p>\n</blockquote>\n<p>Child themes are there to extend parent themes functionality, but they work in the same locale context.\nIn order to get the site in two languages within a Wordpress structure, you can use a Multi-site installation and keep different structures under the same install, or use a multilingual plugin like <a href=\"https://wpml.org/?aid=367613&affiliate_key=XEdBwktpBwNO\">WPML</a> (paid) or <a href=\"https://wordpress.org/plugins/polylang/\">Polylang</a> (free, paid).</p>\n<h3>Confussion #2.</h3>\n<h4>Overriding files</h4>\n<p>Another common problem is when &quot;translations disappear&quot;.</p>\n<p>As stated before the right way to (somewhat) persistently modify a translation for a theme or plugin that has been correctly created using translation functions, is to upload files, with the correct filename (considering text-domains) in the <code>wp-content/languages/{plugins|themes}</code> folder. Else all translations will be replaced when the theme or plugin is updated and new original <code>.po</code>, <code>.mo</code> and hopefully <code>.pot</code> files are downloaded.</p>\n<h3>Confussion #3.</h3>\n<h4>Files are named and placed ok, but still no translations?</h4>\n<p>Check the <strong>Sites language</strong> locale configured at <code>Configurations &gt; General</code> or via the <code>WPLANG</code> constant.</p>\n<p>In order for Wordpress, Woocommerce or any other plugin to pick the right translation files, not only the filename must have the correct locale but they must match the configured (and active) locale for the site.</p>\n<p>For example, for the <code>woocommerce-pt_BR.mo</code> translation file to be loaded, then the site configured locale must be <code>pt_BR</code>, else your nice and tidy translations won&#39;t load 🤷</p>\n<h3>Confussion #4.</h3>\n<h4>Can&#39;t find some texts to be translated in my <code>.po</code> or <code>.pot</code> file.</h4>\n<p>In Wordpress not all translations are handled by the theme. Each plugin has its own translations files. Many plugins participate in some form of front-end screen rendering, so their translations files must also be translated.</p>\n<p>Other texts are not part of translation files but part of the content itself. Maybe some Elementor Block? In this cases we must detect and change the text from each individual content piece (article or block), using the Elementor interface.</p>\n<h3>Confussion #5.</h3>\n<h4>Admin Dashboard not translated.</h4>\n<p>When more or one translation is present and configured, admins (and most registered users) can choose their locale in their logged-in user profile. This can thus be different from the anonymous user front-end locale.\nSo make sure which locale is configured for your user at <code>{your_site}/wp-admin/profile.php</code> url once logged-in.</p>\n<h2>Final thoughts</h2>\n<p>Wordpress i18n and l10n can be confusing at first contact, but it is a well tested and efficient system wich goes back to 1995 with the release of the GNU gettext, free software implementation.</p>\n<p>That said, Mālama pono, legyen szép napja, tenha um ótimo dia, and have a great day 😻!</p>\n",
			date: "February 19",
			slug: "/en/blog/understanding-wordpress-translation-system",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		}
	],
	es: [
		{
			title: "🍺 BeerChain: Descubre y compra cervezas artesanales locales",
			image: "/products/project-lightning-beer.webp",
			excerpt: "Descubre cervezas artesanales locales y paga con bitcoin. BeerChain conecta cervecerías y bitcoiners con pagos en satoshis sin fricción.",
			content: "<p>BeerChain es una aplicación de prueba de concepto para quienes queremos usar bitcoin como dinero, no solo como otro activo especulativo, para así poder comprar nuestros packs de 6 artesanales usando satoshis en lugar de simplemente tenerlos acumulados.</p>\n<p>Las cervezas serán entregadas por tiendas minoristas asociadas y amigables con #bitcoin.</p>\n<p>Si eres dueño de una tienda y estás interesado, ¡ponte en contacto!</p>\n<p><a rel=\"nofollow noreferrer noopener\" target=\"_blank\" href=\"https://www.figma.com/design/A9ZpwzFjlfZSZlWIrNfztG/Lightning-Beer?node-id=2-3&t=XKNaVwyAoxWPFXNB-1\" class=\"btn md:btn-lg hover:bg-primary hover:text-white bg-primary/10 border border-primary text-primary\">Visitar proyecto</a></p>\n",
			date: "31 de agosto",
			slug: "/es/blog/beer-app",
			isMain: false,
			icon: Beer,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				}
			]
		},
		{
			title: "Uso de SQLite para Entregar Operaciones de Lectura Intensiva Increíblemente Rápidas",
			image: "",
			excerpt: "Un enfoque estratégico para optimizar la entrega de datos, mejorar el rendimiento y reducir significativamente los costos en la nube para contenido popular.",
			content: "<p>SQLite es una de las bases de datos más populares en la actualidad, y <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">quizás la hayas pasado por alto</a>.</p>\n<p>Por ello, decidimos probarla para entregar posts de blog con gran cantidad de lecturas en nuestra <a href=\"https://www.cubiq.lat/es/store\">solución de e-Commerce</a>... a través de <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "30 de agosto",
			slug: "/es/blog/sqlite",
			isMain: false,
			icon: Database,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Puppeteer y EasyOCR para la Automatización de Slots",
			image: "",
			excerpt: "Este post muestra cómo podemos usar Puppeteer para controlar juegos de tragamonedas mientras EasyOCR extrae datos en tiempo real, conectando los resultados de los giros a modelos locales de Ollama para sugerencias.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "29 de agosto",
			slug: "/es/blog/puppeteer-y-easyocr-para-automatizaciones-en-igaming",
			isMain: false,
			icon: Braces,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "tmux, multiplexación para espionaje local",
			image: "/blog/tmuxing.webp",
			excerpt: "* * *",
			content: "<p>Es un objetivo razonable en la vida moverse ligero: un puñado de ropa, una lightning wallet, una tarjeta de plástico, una laptop barata y una mochila.</p>\n<p>Es útil deambular cargando lo mínimo—y con el mínimo ruido. Es útil vivir una vida social fuera de la rueda de hámster de impresionar amigos y enemigos. Y es particularmente útil cuando hacemos trabajo de conocimiento, como programar, manteniendo nuestros asuntos atados al terminal.</p>\n<p>Necesitar solo un par de túneles SSH, multiplexación con <a href=\"https://github.com/tmux/tmux/wiki\">tmux</a> y NeoVim para llegar, literalmente, a cualquier parte.</p>\n<p>Desear un IDE gráfico pesado es como vivir para mostrar señales externas de éxito. Un negocio tonto.</p>\n<p>Como construir músculo para parecer fuerte en vez de ser fuerte, capaz de hacer cosas.\nComo parecer exitoso en lugar de enfocarse en generar riqueza, capaz de holdear algo de Bitcoin y comprar tu propio tiempo y libertad.</p>\n<p>Evitar herramientas pesadas y llenas de adornos es un objetivo de este hombre errante.\nInicialmente, la idea me llevó de VSCode a herramientas escritas en Rust como <a href=\"https://zed.dev/\">Zed</a>, del Terminal de macOS a <a href=\"https://alacritty.org/\">Alacritty</a>.</p>\n<p>Años anteriores me arrojaron a las garras de Eleventy, de ahí a Svelte, luego a ...Kit, luego a Svelte 5, luego a Tailwind.</p>\n<p>Eventualmente, todo esto me hizo pensar que era hora de alejarme de mi cómodo emulador de terminal con múltiples ventanas hacia formas más avanzadas de complicar mi deseo de una vida de desarrollador minimalista—sintiéndome bien al respecto.</p>\n<p>Es hora, entonces, de algunos experimentos de multiplexación. Es hora de finalmente aprender a salir de NeoVim.</p>\n<p>Y qué mejor manera de empezar que con algunos experimentos de espionaje local?\n<br>\nPorque al principio, siempre debe haber diversión.</p>\n<p>Así que allá vamos.</p>\n",
			date: "19 de marzo",
			slug: "/es/blog/tmux-multiplexing-for-local-espionage",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Un romance vertiginoso con el Editor Zed AI",
			image: "/blog/zed-editor-2.webp",
			excerpt: "Mira, VS Code, no eres tú, soy yo. Bueno… en realidad es Zed 😬",
			content: "<h2>Tha-Zed</h2>\n<p>He estado usando este nuevo editor, y las cosas se están poniendo bastante serias.</p>\n<blockquote>\n    <p>\n        Diseñado para colaboración de alto rendimiento entre humanos e IA.\n    </p>\n</blockquote>\n\n<p>Después de años viendo el ventilador de mi viejo MacBook Air (13 pulgadas, principios de 2015) volverse loco solo para abrir un archivo TypeScript,\nme crucé con Zed – un editor de próxima generación escrito en Rust, <em>diseñado para colaboración de alto rendimiento entre humanos e IA</em>.</p>\n<p>Sí, <a href=\"https://zed.dev/\">Zed</a> es otro editor con IA en ascenso. También existe <a href=\"https://www.cursor.com/\">Cursor</a>, del cual honestamente no me importa nada ahora mismo. Pero un editor open-source que <a href=\"https://techcrunch.com/2023/03/15/zed-code-editor-raises-10m/\">levanta 10 millones de dólares</a>? Bueno, eso definitivamente llama mi atención.</p>\n<p>Pero el verdadero cambio de juego: lo conecté con <a href=\"https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct\">llama3.2-3b-instruct</a> usando Ollama como mi compañero de programación con IA (sí, me gustan los modelos pequeños y open source, y no, no son tan buenos como Claude o ChatGPT),\ny todo está funcionando muy bien.</p>\n<p>Por supuesto puedes configurar Zed para trabajar con Anthropic, GitHub Copilot u OpenAI. Para eso solo necesitas subir tus API keys en la configuración del Asistente correspondiente.</p>\n<p>El editor está en la versión v0.158.2 al momento de escribir esto, tiene pocas extensiones útiles y snippets básicos, pero vaya que es rápido.</p>\n<p>Desde 2023 vengo cambiando mi stack, enfocándome cada vez más en rendimiento.\nTodavía tengo un largo camino por recorrer, pero así como me interesé en Eleventy y los generadores de sitios estáticos, ahora es el turno de editores como Zed y del lenguaje Rust para mis aventuras en backend e IA.</p>\n<p>(Mantente atento a mi próximo artículo sobre <a href=\"https://ollama.com/\">Ollama</a> — es otra madriguera de IA local.)</p>\n<p>Hablando de Rust — como alguien que está entrando en el mundo de las abstracciones de costo cero y peleando con el borrow checker, Zed se siente como la mejor opción.</p>\n<p>Las actualizaciones semanales me muestran que el desarrollo avanza a buen ritmo y que el equipo está siendo bastante abierto sobre sus decisiones (mira <a href=\"https://www.youtube.com/@zeddotdev\">su canal de YouTube</a> para más detalles).</p>\n<p>Así que tengo esperanzas de sustituir Visual Studio Code pronto.</p>\n<h2>Configuración de Zed, mi setup</h2>\n<p>Voy a compartir aquí mi configuración actual de Zed para que la copies sin culpa.\nEspera ajustes cuidadosamente pensados para Rust y (Svelte + TypeScript + Tailwind), además de mi integración con Ollama.</p>\n<p>👉 <a href=\"https://github.com/minimo-io/dev-config-files\">Échale un vistazo en Github</a>.</p>\n<h2>Mi veredicto</h2>\n<p>Un software bastante ambicioso que aún está en sus primeros días, pero si estás cansado de que tu editor use más RAM que Chrome,\no si tienes curiosidad por integrar IA a tu flujo de trabajo sin pagar tantos tokens que te quedes sin dinero para el súper o termines vendiendo tu alma, dale una oportunidad a Zed.\nMira si se ajusta a tus necesidades. Prueba su rendimiento, su integración con IA y sus capacidades de colaboración, y decide si vale tu tiempo.</p>\n<p>PD: Puedes configurar Zed para tener el mismo keymap base que VSCode y también incluye “Vim Mode”, míralo <a href=\"https://zed.dev/docs/vim\">aquí</a>.</p>\n<p>En cualquier caso, usa sus poderes con responsabilidad. No digas que no te avisé… ¡Ahora ve, y que el código te acompañe!\n<br><br></p>\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/JGz7Ou0Nwo8?si=YizD-YfWYuMIOo1h\" ...></iframe>\n\n<p>Para fans del formato largo 👇\n<br><br></p>\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/fV4aPy1bmY0?si=mDyyQ-NVF9rWOjP1\" ...></iframe>\n\n<p><br><br>\n¡Hasta luego, programadores!</p>\n",
			date: "23 de octubre",
			slug: "/es/blog/the-zed-ai-editor",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Migrando un sitio de afiliados de Wordpress con +800 páginas a Eleventy",
			image: "/blog/betizen-wordpress-vs-eleventy-2.webp",
			excerpt: "Cómo migrar con éxito un sitio de iGaming para aumentar (drásticamente) el rendimiento y la seguridad",
			content: "<h2>Resultados primero</h2>\n<p><strong>El desafío:</strong> Reducir costos, mejorar el rendimiento y la seguridad + olvidarse del mantenimiento agotador de Wordpress.</p>\n<p>Así que decidí migrar Betizen.org de mi Droplet autogestionado de DigitalOcean (2 GB Memory / 2 AMD vCPUs / 60 GB Disk) a Vercel. De un Wordpress dinámico a un sitio estático generado con 11ty.</p>\n<p>✅ <strong>Rendimiento</strong> medido por GTMetrix pasó de una lamentable F (32%) a una A (96%)</p>\n<p>✅ <strong>Costos</strong> en el plan Hobby de Vercel son gratuitos, así que los costos bajaron de USD 39.57/mes a USD 0, comprobado</p>\n<p>✅ <strong>Seguridad</strong> ahora es casi ideal, ya que Vercel es una solución gestionada y un sitio estático tiene muchos menos vectores de ataque.</p>\n<p>Además, el mantenimiento pasó de resolver incompatibilidades de plugins después de una actualización en un fin de semana a literalmente cero tiempo invertido.</p>\n<h2>El escenario</h2>\n<p>El sitio tiene reseñas, artículos, páginas y categorías en 3 idiomas diferentes: pt-br, es y en.</p>\n<p>Tiene un total de 809 URLs con contenido único.</p>\n<p>Wordpress es una gran herramienta, la amo y amo aún más a mis clientes que la usan 😜<br>Me especializo en Woocommerce &amp; Pagos, pero el sitio, como proyecto paralelo, rápidamente se volvió un dolor de cabeza para mantener.</p>\n<p><a href=\"https://www.betizen.org/\">Betizen.org</a> intenta ofrecer listados confiables y transparencia extrema de y para casinos online, juegos y programas de afiliados, sin estafas ni tonterías. Recibiendo mucho tráfico basura, lo que sobrecargaba el servidor limitado de DigitalOcean.</p>\n<p>Para este proyecto, Wordpress era una mala elección obvia. Aun así es el estándar en internet para afiliados, ¡Y NO DEBERÍA SERLO! Especialmente si estás empezando y bootstrappeando.</p>\n<p>Así que después de un tiempo lidiando con esto, decidí moverme a mejores tierras: un sitio estático ligero, limpio y simple usando el único y gran SSG: <a href=\"https://www.11ty.dev/\">Eleventy</a>.</p>\n<p>Pensé en usar Svelte como SSG, pero ¿por qué no usar una herramienta (excelente) y más específica para la tarea, mientras aprovecho para mejorar mis habilidades con 11ty?</p>\n<p>Así que allá fui.</p>\n<h2>El desafío</h2>\n<p>Convertir Betizen.org en un sitio estático.<br></p>\n<p>508 URLs de reseñas de juegos.<br>\n43 artículos de blog.<br>\n21 páginas.<br>\n126 reseñas de casinos.<br>\n28 categorías.<br>\n83 páginas de proveedores de juegos.<br>\n<strong>= 809+ URLs únicas e indexables.</strong><br><br></p>\n<ol>\n<li>La primera idea fue migrar progresivamente categorías de páginas una por una. Hacer pruebas con páginas de bajo tráfico (y baja autoridad) y luego mover lentamente las de alto tráfico. Dos estructuras diferentes debían coexistir hasta que todas fueran migradas.</li>\n<li>Otra idea fue crear una herramienta de desarrollo que use la Rest API de Wordpress para obtener todo el contenido y generar todas las entradas Markdown de una vez. Comparar salidas ¡y migrar!</li>\n<li>La tercera opción era descargar absolutamente todo usando una herramienta como <a href=\"https://www.httrack.com/\">HTTrack</a>, trabajar localmente y luego enviar el sitio completo.</li>\n</ol>\n<p>Se necesitaba una estructura básica. Y como siempre, el <a href=\"https://github.com/11ty/eleventy-base-blog\">11ty base blog</a> fue un gran punto de partida.</p>\n<p>También eran imprescindibles las funcionalidades i18n y l10n. Aquí hay un artículo interesante sobre <a href=\"https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/\">i18n con Eleventy</a> por <a href=\"https://www.lenesaile.com/en/about/\">Lene Saile</a>, y otro en Smashingmagazine sobre <a href=\"https://www.smashingmagazine.com/2020/11/internationalization-localization-static-sites/\">Internacionalización y Localización para sitios estáticos</a>.</p>\n<p>Para el despliegue, Vercel —ya tenía otros proyectos en Netlify consumiendo cuota.</p>\n<p>Como muchos ejemplos en la documentación de 11ty están orientados a Netlify, esta guía de <a href=\"https://vercel.com/guides/migrate-to-vercel-from-netlify\">Migrar a Vercel desde Netlify</a> fue útil.</p>\n<p>Después de un mes, muchas pruebas, herramientas de scrapping/importación creadas y muchas horas de fines de semana invertidas, betizen.org salió en vivo como sitio estático con una <strong>plantilla 11ty</strong> inspirada en el theme de Wordpress (que también había creado para personalizar un template original para la industria de apuestas).</p>\n<p>La idea es seguir impulsando 11ty para afiliados de iGaming, tal vez ofrecer plantillas gratuitas de calidad vía minimo.io, idealmente conectadas a un Headless CMS. Como se ve en los resultados, tiene todo el sentido en costos, seguridad y rendimiento.</p>\n<p>Y fue divertido seguir aprendiendo el SSG Eleventy. BTW: Qué gran comunidad.</p>\n",
			date: "3 de abril",
			slug: "/es/blog/migrating-a-800-pages-wordpress-site-to-eleventy",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Nostrificación 101",
			image: "/blog/nostrification-101.webp",
			excerpt: "Cosas interesantes de Nostr para principiantes",
			content: "<p>En mi proceso de nostrificación me encontré con algunas cosas interesantes que vale la pena revisar para principiantes.</p>\n<p>Aquí siguen listas de <a href=\"#aplicaciones-y-servicios\">Aplicaciones y Servicios</a> y <a href=\"#guias\">Guías</a>.</p>\n<p>👉 También echa un vistazo a esta micro-aplicación Svelte que creé para verificar <a href=\"/app/nostr-followback\">quién te sigue de vuelta en Nostr</a>.</p>\n<h2>Recursos para Desarrolladores</h2>\n<ul>\n<li><a href=\"https://nostr.net/\">nostr.net</a>: Una colección de proyectos y recursos construidos en nostr para ayudar a desarrolladores y usuarios.</li>\n<li><a href=\"https://github.com/nostr-dev-kit\">NDK</a>: Kit de Desarrollo Nostr por pablof7z.</li>\n</ul>\n<h2>Aplicaciones y Servicios</h2>\n<ul>\n<li><a href=\"https://nostr.watch/\">nostr.watch</a>: Encuentra relays nostr rápidos.</li>\n<li><a href=\"https://habla.news/faq\">habla.news</a>: Una aplicación web basada en nostr que permite a cualquiera ganar dinero con su escritura.</li>\n<li><a href=\"https://www.nostrapps.com/\">nostrapps.com</a>: Una lista curada de aplicaciones Nostr.</li>\n<li><a href=\"https://nostrsync.live/\">nostrsync.live</a>: Descarga una copia de tus datos.</li>\n<li><a href=\"https://zaplife.lol/\">zaplife.lol</a>: Estadísticas de zapping.</li>\n<li><a href=\"https://stats.nostr.band/\">stats.nostr.band</a>: Estadísticas en tiempo real de Nostr.</li>\n<li><a href=\"https://nostrends.vercel.app/\">nostrends.vercel.app</a>: ¿Qué está en tendencia en Nostr?</li>\n<li><a href=\"http://localhost:8080/app/nostr-followback/\">nostr-followback</a>: ¿Quién no te está siguiendo de vuelta?</li>\n</ul>\n<h2>Guías</h2>\n<ul>\n<li><a href=\"https://www.youtube.com/watch?v=4qOVxq9lUbs\">Construye tu Primera Aplicación Nostr por Super Testnet</a>.</li>\n<li><a href=\"https://nostr.how/en/guides/get-verified\">Obtén verificación NIP-05</a>, también <a href=\"https://gist.github.com/metasikander/609a538e6a03b2f67e5c8de625baed3e\">este gist</a>.</li>\n</ul>\n",
			date: "13 de diciembre",
			slug: "/es/blog/nostrification-101",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "⚡️ Bitcoin & The Lightning Network",
			image: "",
			excerpt: "Capacidad de la Lightning Network y otros recursos",
			content: "<div class=\"wrapper wrapper-wide\">\n  <iframe width=\"100%\" height=\"420\" class=\"img-rounded\" frameborder=\"0\" src=\"https://www.theblock.co/data/on-chain-metrics/bitcoin/lightning-networks-capacity-daily/embed\" title=\"Capacidad de la Lightning Network\"></iframe>\n</div>\n",
			date: "26 de marzo",
			slug: "/es/blog/bitcoin-and-the-lightning-network",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		}
	],
	pt: [
		{
			title: "🍺 BeerChain: Descubra e compre cervejas artesanais locais",
			image: "/products/project-lightning-beer.webp",
			excerpt: "Descubra cervejas artesanais locais e pague com bitcoin. A BeerChain aproxima cervejarias e bitcoiners com pagamentos em satoshis sem fricção.",
			content: "<p>BeerChain é um aplicativo de prova de conceito para aqueles de nós que desejam usar bitcoin como dinheiro, não apenas como mais um ativo especulativo, para que possamos comprar nossos packs de 6 artesanais usando satoshis, em vez de apenas deixá-los parados.</p>\n<p>As cervejas serão entregues por lojas de varejo parceiras e amigáveis ao #bitcoin.</p>\n<p>Se você é dono de uma loja e tem interesse, entre em contato!</p>\n<p><a rel=\"nofollow noreferrer noopener\" target=\"_blank\" href=\"https://www.figma.com/design/A9ZpwzFjlfZSZlWIrNfztG/Lightning-Beer?node-id=2-3&t=XKNaVwyAoxWPFXNB-1\" class=\"btn md:btn-lg hover:bg-primary hover:text-white bg-primary/10 border border-primary text-primary\">Vistar projeto</a></p>\n",
			date: "31 de agosto",
			slug: "/blog/beer-app",
			isMain: false,
			icon: Beer,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				}
			]
		},
		{
			title: "Usando SQLite para Entregar Operações de Leitura Intensiva Incrivelmente Rápidas",
			image: "",
			excerpt: "Uma abordagem estratégica para otimizar a entrega de dados, melhorar o desempenho e reduzir significativamente os custos de nuvem para conteúdo popular.",
			content: "<p>SQLite é um dos bancos de dados mais populares hoje, e <a href=\"https://www.youtube.com/watch?v=qf0GqRz-c74\">você pode tê-lo ignorado</a>.</p>\n<p>Então, decidimos experimentá-lo para entregar posts de blog com alta demanda de leitura em nossa <a href=\"https://www.cubiq.lat/store\">solução de e-Commerce</a>... via <a href=\"https://turso.tech/\">Turso</a>.</p>\n",
			date: "30 de agosto",
			slug: "/blog/sqlite",
			isMain: false,
			icon: Database,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Puppeteer e EasyOCR para Automação de Slots",
			image: "",
			excerpt: "Este post mostra como podemos usar o Puppeteer para controlar jogos de slot enquanto o EasyOCR extrai dados em tempo real, conectando os resultados das rodadas a modelos locais do Ollama para sugestões.",
			content: "<p>This is the content of my first post. It&#39;s written in Markdown.</p>\n",
			date: "29 de agosto",
			slug: "/blog/puppeteer-e-easyocr-para-automacoes-em-igaming",
			isMain: false,
			icon: Braces,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "tmux, multiplexação para espionagem local",
			image: "/blog/tmuxing.webp",
			excerpt: "* * *",
			content: "<p>É um objetivo razoável na vida mover-se com leveza: um punhado de roupas, uma lightning wallet, um cartão de plástico, um laptop barato e uma mochila.</p>\n<p>É útil vagar por aí carregando o mínimo de coisas—e de ruído. É útil viver uma vida social fora da roda de hamster de impressionar amigos e inimigos. E é particularmente útil quando fazemos trabalho de conhecimento, como programar, mantendo nossos negócios presos ao terminal.</p>\n<p>Precisar apenas de alguns túneis SSH, multiplexação com <a href=\"https://github.com/tmux/tmux/wiki\">tmux</a> e NeoVim para chegar, literalmente, a qualquer lugar.</p>\n<p>Desejar um IDE gráfico pesado é como viver para mostrar sinais externos de sucesso. Negócio bobo.</p>\n<p>Como construir músculos para parecer forte em vez de ser forte, capaz de fazer coisas.\nComo parecer bem-sucedido em vez de focar em gerar riqueza, capaz de guardar um pouco de Bitcoin e comprar seu próprio tempo e liberdade.</p>\n<p>Evitar ferramentas pesadas e cheias de firulas é um objetivo desse homem errante.\nInicialmente, a ideia me levou do VSCode para ferramentas escritas em Rust como o <a href=\"https://zed.dev/\">Zed</a>, do Terminal do macOS para o <a href=\"https://alacritty.org/\">Alacritty</a>.</p>\n<p>Anos anteriores me jogaram nas garras do Eleventy, de lá para o Svelte, depois para o ...Kit, depois para o Svelte 5, depois para o Tailwind.</p>\n<p>Eventualmente, tudo isso me fez pensar que era hora de me afastar do meu confortável emulador de terminal com múltiplas janelas para maneiras mais avançadas de complicar meu desejo por uma vida de desenvolvedor minimalista—sentindo-me bem com isso.</p>\n<p>É hora, então, de alguns experimentos de multiplexação. É hora de finalmente aprender a sair do NeoVim.</p>\n<p>E que melhor maneira de começar do que com alguns experimentos de espionagem local?\n<br>\nPorque no começo, sempre deve haver diversão.</p>\n<p>Então vamos lá.</p>\n",
			date: "19 de março",
			slug: "/blog/tmux-multiplexing-for-local-espionage",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Um romance turbulento com o Editor Zed AI",
			image: "/blog/zed-editor-2.webp",
			excerpt: "Olha, VS Code, não és tu, sou eu. Bom... na verdade é o Zed 😬",
			content: "<h2>Tha-Zed</h2>\n<p>Tenho usado este novo editor, e as coisas estão ficando bem sérias.</p>\n<blockquote>\n    <p>\n        Projetado para colaboração de alto desempenho com humanos e IA.\n    </p>\n</blockquote>\n\n<p>Depois de anos vendo o cooler do meu velho MacBook Air (13 polegadas, início de 2015) enlouquecer só para abrir um arquivo TypeScript,\ntopei com o Zed – um editor de código de nova geração escrito em Rust, <em>projetado para colaboração de alto desempenho com humanos e IA</em>.</p>\n<p>Sim, o <a href=\"https://zed.dev/\">Zed</a> é mais um editor com IA em ascensão. Também existe o <a href=\"https://www.cursor.com/\">Cursor</a> por aí, que honestamente pouco me importa no momento. Mas um editor open-source que <a href=\"https://techcrunch.com/2023/03/15/zed-code-editor-raises-10m/\">levanta 10 milhões de dólares</a>? Aí sim chama minha atenção.</p>\n<p>Mas o verdadeiro divisor de águas? Eu o conectei ao <a href=\"https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct\">llama3.2-3b-instruct</a> via Ollama como meu parceiro de programação em IA (sim, eu gosto de modelos pequenos e open source, e não, eles não são tão bons quanto Claude ou ChatGPT),\ne tudo está funcionando muito bem.</p>\n<p>Claro que você pode configurar o Zed para funcionar com Anthropic, GitHub Copilot ou OpenAI. Para isso, só precisa adicionar suas API keys na configuração do Assistente correspondente.</p>\n<p>O editor está na versão v0.158.2 no momento desta escrita, tem poucas extensões úteis e snippets básicos, mas meu amigo… ele é rápido.</p>\n<p>Venho trocando meu stack desde 2023, focando cada vez mais em performance.\nAinda tenho um longo caminho pela frente, mas assim como foi meu interesse por Eleventy e geradores de sites estáticos, agora é a vez de editores como o Zed e da linguagem Rust para minhas aventuras de backend e IA.</p>\n<p>(Fique ligado para meu próximo artigo sobre o <a href=\"https://ollama.com/\">Ollama</a> — é outra toca de coelho de IA local.)</p>\n<p>Falando em Rust — como alguém se aventurando no mundo das abstrações de custo zero e lutando com o borrow checker, o Zed parece a melhor escolha.</p>\n<p>As atualizações semanais mostram que o desenvolvimento está num ritmo bom, e que a equipe está sendo bastante transparente sobre as decisões (confira <a href=\"https://www.youtube.com/@zeddotdev\">o canal deles no YouTube</a> para mais detalhes).</p>\n<p>Então estou esperançoso de substituir totalmente o Visual Studio Code em breve.</p>\n<h2>Configuração do Zed, meu setup</h2>\n<p>Vou compartilhar aqui minha configuração atual do Zed que você pode copiar sem culpa.\nEspere algumas configurações bem ajustadas para desenvolvimento com Rust e (Svelte + TypeScript + Tailwind), além da minha integração com o Ollama.</p>\n<p>👉 <a href=\"https://github.com/minimo-io/dev-config-files\">Veja no Github</a>.</p>\n<h2>Meu veredito</h2>\n<p>Um software bastante ambicioso e ainda nos primeiros dias, mas se você está cansado de seu editor usar mais RAM que o Chrome,\nou se está curioso para integrar IA ao seu fluxo de trabalho sem pagar tokens a ponto de faltar para as compras do mês ou vender sua alma, dê uma chance ao Zed.\nVeja se ele atende às suas necessidades. Teste sua performance, integração de IA e capacidades de colaboração, e decida se vale o seu tempo.</p>\n<p>Ah: Você pode configurar o Zed para usar o mesmo keymap base do VSCode e ele também inclui “Vim Mode”, confira <a href=\"https://zed.dev/docs/vim\">aqui</a>.</p>\n<p>Em qualquer caso, use seus poderes com responsabilidade. Não diga que não te avisei… Agora vá, e que o código esteja contigo!\n<br><br></p>\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/JGz7Ou0Nwo8?si=YizD-YfWYuMIOo1h\" ...></iframe>\n\n<p>Fãs de formato longo 👇\n<br><br></p>\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/fV4aPy1bmY0?si=mDyyQ-NVF9rWOjP1\" ...></iframe>\n\n<p><br><br>\nAdeus, programadores!</p>\n",
			date: "23 de outubro",
			slug: "/blog/the-zed-ai-editor",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Migrando um site de afiliados Wordpress com +800 páginas para Eleventy",
			image: "/blog/betizen-wordpress-vs-eleventy-2.webp",
			excerpt: "Como migrar com sucesso um site de iGaming para aumentar (drasticamente) o desempenho e a segurança",
			content: "<h2>Resultados primeiro</h2>\n<p><strong>O desafio:</strong> Reduzir custos, ter melhor desempenho e segurança + esquecer a manutenção trabalhosa do Wordpress.</p>\n<p>Então decidi migrar o Betizen.org do meu Droplet autogerenciado da DigitalOcean (2 GB Memory / 2 AMD vCPUs / 60 GB Disk) para a Vercel. De um Wordpress dinâmico para um site estático gerado com 11ty.</p>\n<p>✅ <strong>Desempenho</strong> medido pelo GTMetrix foi de um péssimo F (32%) para um A (96%)</p>\n<p>✅ <strong>Custos</strong> no plano Hobby da Vercel são gratuitos, então os custos foram de USD 39,57/mês para USD 0, comprovado</p>\n<p>✅ <strong>Segurança</strong> agora está próxima do ideal, já que a Vercel é uma solução gerenciada e um site estático tem muito menos vetores de ataque.</p>\n<p>Além disso, a manutenção passou de resolver incompatibilidades de plugins após uma atualização no fim de semana para literalmente zero tempo gasto.</p>\n<h2>O cenário</h2>\n<p>O site possui reviews, artigos, páginas e categorias em 3 idiomas diferentes: pt-br, es e en.</p>\n<p>Ele tem um total de 809 URLs com conteúdo único.</p>\n<p>Wordpress é uma ótima ferramenta, eu adoro — e adoro ainda mais meus clientes que a utilizam 😜<br>Sou especializado em Woocommerce &amp; Pagamentos, mas o site, como projeto paralelo, rapidamente virou uma dor de cabeça para manter.</p>\n<p><a href=\"https://www.betizen.org/\">Betizen.org</a> tenta oferecer listas confiáveis e transparência extrema de e para cassinos online, jogos e programas de afiliados, sem golpes ou baboseiras! Recebendo muito tráfego lixo, o que sobrecarregava o servidor limitado da DigitalOcean.</p>\n<p>Para este projeto, Wordpress era uma má escolha óbvia. Ainda assim, é o padrão na internet para afiliados — E NÃO DEVERIA SER! Principalmente se você está começando e fazendo tudo bootstrapping.</p>\n<p>Depois de um tempo lidando com isso, decidi ir para algo melhor: um site estático leve, limpo e simples usando o grande SSG: <a href=\"https://www.11ty.dev/\">Eleventy</a>.</p>\n<p>Pensei em usar Svelte como SSG, mas por que não usar uma ferramenta (ótima) e mais específica para a tarefa, enquanto aproveito para melhorar minhas habilidades com 11ty?</p>\n<p>E lá fui eu.</p>\n<h2>O desafio</h2>\n<p>Converter Betizen.org em um site estático.<br></p>\n<p>508 URLs de reviews de jogos.<br>\n43 artigos de blog.<br>\n21 páginas.<br>\n126 reviews de cassinos.<br>\n28 categorias.<br>\n83 páginas de provedores de jogos.<br>\n<strong>= 809+ URLs únicas e indexáveis.</strong><br><br></p>\n<ol>\n<li>A primeira ideia foi migrar progressivamente categorias de páginas uma a uma. Testar com páginas de baixo tráfego (e baixa autoridade) e depois mover lentamente as de alto tráfego. Duas estruturas diferentes precisariam coexistir até que tudo estivesse migrado.</li>\n<li>Outra ideia foi criar uma ferramenta que usa a Rest API do Wordpress para buscar todo o conteúdo e criar todas as entradas Markdown de uma vez. Comparar resultados e migrar!</li>\n<li>A terceira opção era baixar absolutamente tudo com uma ferramenta como <a href=\"https://www.httrack.com/\">HTTrack</a>, trabalhar localmente e depois enviar o site completo.</li>\n</ol>\n<p>Uma estrutura básica era necessária. E, como sempre, o <a href=\"https://github.com/11ty/eleventy-base-blog\">11ty base blog</a> pareceu um ótimo começo.</p>\n<p>Funcionalidades i18n e l10n também eram obrigatórias. Aqui está um artigo interessante sobre <a href=\"https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/\">i18n com Eleventy</a> por <a href=\"https://www.lenesaile.com/en/about/\">Lene Saile</a> e outro da Smashingmagazine sobre <a href=\"https://www.smashingmagazine.com/2020/11/internationalization-localization-static-sites/\">Internacionalização e Localização para Sites Estáticos</a>.</p>\n<p>Para o deploy, Vercel — eu já tinha outros projetos no Netlify consumindo quota.</p>\n<p>Como muitos exemplos na documentação do 11ty são focados no Netlify, este guia de <a href=\"https://vercel.com/guides/migrate-to-vercel-from-netlify\">Migrar do Netlify para Vercel</a> foi útil.</p>\n<p>Após um mês, muitos testes, várias ferramentas de importação/scraping criadas e muitas horas investidas nos finais de semana, betizen.org foi ao ar como um site estático com um <strong>template 11ty</strong> inspirado no tema de Wordpress (que eu também havia criado para customizar um template original para o setor de apostas).</p>\n<p>A ideia é continuar impulsionando o Eleventy para afiliados de iGaming, talvez oferecer alguns templates gratuitos de qualidade via minimo.io, idealmente conectados a um Headless CMS. Como mostram os resultados desta migração, faz total sentido em custos, segurança e desempenho.</p>\n<p>E foi divertido continuar aprendendo o SSG Eleventy! Aliás: que comunidade incrível.</p>\n",
			date: "3 de abril",
			slug: "/blog/migrating-a-800-pages-wordpress-site-to-eleventy",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Nicolas Erramuspe",
					avatar: "/me.jpeg"
				},
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "Nostrificação 101",
			image: "/blog/nostrification-101.webp",
			excerpt: "Coisas interessantes sobre Nostr para iniciantes",
			content: "<p>No meu processo de nostrificação, encontrei algumas coisas interessantes que valem a pena conferir para iniciantes.</p>\n<p>Aqui seguem listas de <a href=\"#aplicativos-e-servicos\">Aplicativos &amp; Serviços</a> e <a href=\"#guias\">Guias</a>.</p>\n<p>👉 Também confira este micro-aplicativo Svelte que criei para verificar <a href=\"/app/nostr-followback\">quem te segue de volta no Nostr</a>.</p>\n<h2>Recursos para Desenvolvedores</h2>\n<ul>\n<li><a href=\"https://nostr.net/\">nostr.net</a>: Uma coleção de projetos e recursos construídos no nostr para ajudar desenvolvedores e usuários.</li>\n<li><a href=\"https://github.com/nostr-dev-kit\">NDK</a>: Kit de Desenvolvimento Nostr por pablof7z.</li>\n</ul>\n<h2>Aplicativos &amp; Serviços</h2>\n<ul>\n<li><a href=\"https://nostr.watch/\">nostr.watch</a>: Encontre relays nostr rápidos.</li>\n<li><a href=\"https://habla.news/faq\">habla.news</a>: Um aplicativo web baseado em nostr que permite que qualquer pessoa ganhe dinheiro com sua escrita.</li>\n<li><a href=\"https://www.nostrapps.com/\">nostrapps.com</a>: Uma lista selecionada de aplicativos Nostr.</li>\n<li><a href=\"https://nostrsync.live/\">nostrsync.live</a>: Baixe uma cópia dos seus dados.</li>\n<li><a href=\"https://zaplife.lol/\">zaplife.lol</a>: Estatísticas de zapping.</li>\n<li><a href=\"https://stats.nostr.band/\">stats.nostr.band</a>: Estatísticas em tempo real do Nostr.</li>\n<li><a href=\"https://nostrends.vercel.app/\">nostrends.vercel.app</a>: O que está em alta no Nostr?</li>\n<li><a href=\"http://localhost:8080/app/nostr-followback/\">nostr-followback</a>: Quem não está te seguindo de volta?</li>\n</ul>\n<h2>Guias</h2>\n<ul>\n<li><a href=\"https://www.youtube.com/watch?v=4qOVxq9lUbs\">Construa seu Primeiro Aplicativo Nostr por Super Testnet</a>.</li>\n<li><a href=\"https://nostr.how/en/guides/get-verified\">Obtenha verificação NIP-05</a>, também <a href=\"https://gist.github.com/metasikander/609a538e6a03b2f67e5c8de625baed3e\">este gist</a>.</li>\n</ul>\n",
			date: "13 de dezembro",
			slug: "/blog/nostrification-101",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		},
		{
			title: "⚡️ Bitcoin & The Lightning Network",
			image: "",
			excerpt: "Capacidade da Lightning Network e outros recursos",
			content: "<div class=\"wrapper wrapper-wide\">\n  <iframe width=\"100%\" height=\"420\" class=\"img-rounded\" frameborder=\"0\" src=\"https://www.theblock.co/data/on-chain-metrics/bitcoin/lightning-networks-capacity-daily/embed\" title=\"Capacidade da Lightning Network\"></iframe>\n</div>\n",
			date: "26 de março",
			slug: "/blog/bitcoin-and-the-lightning-network",
			isMain: false,
			icon: undefined,
			authors: [
				{
					fullName: "Gemini",
					avatar: "/gemini-logo.png"
				}
			]
		}
	]
};