import { m } from '$paraglide/messages';

export function getCurrentYear(): number {
	return new Date().getFullYear();
}

export function formatEventTime(dateString: string): string {
	const date = new Date(dateString);
	const now = new Date();

	// Set both dates to midnight to compare only the day part
	const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	const nowOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	const diffTime = nowOnly.getTime() - dateOnly.getTime();
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays === 0) {
		return m.today();
	} else if (diffDays === 1) {
		return m.yesterday();
	} else if (diffDays <= 7) {
		// Use Paraglide for pluralization
		return m.days_ago({ count: diffDays });
	} else {
		// Format as DD/MM/YYYY HH:MM
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
		const year = date.getFullYear();
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');

		return `${day}/${month}/${year} ${hours}:${minutes}`;
	}
}
