import type { PostAuthor } from '$types/blog.types';

export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function authorsComposeName(authors: PostAuthor[]): string {
	const firstNames = authors.map((author) => author.fullName.trim().split(' ')[0]);
	return firstNames.join(' & ');
}

function isValidEmail(email) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

// Receives or an email, or a nostr login and returns a username
// For now only email
export function getUsername(str) {
	if (isValidEmail(str)) {
		return str.split('@')[0];
	} else {
		return str.substr(0, 5) + '...';
	}
}
