import type { PostAuthor } from '$types/blog.types';
import type { MachineType } from '$types/care/care.machines.types';

export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function authorsComposeName(authors: PostAuthor[]): string {
	const firstNames = authors.map((author) => author.fullName.trim().split(' ')[0]);
	return firstNames.join(' & ');
}

export function machineTypeCode(type: MachineType | string) {
	if (type == 'NOTEBOOK') {
		return 'NT';
	} else if (type == 'DESKTOP') {
		return 'DT';
	} else if (type == 'ALLINONE') {
		return 'AI';
	} else {
		return 'N/A';
	}
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
