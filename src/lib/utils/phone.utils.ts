export function formatPhoneNumberForWhatsapp(phone: string | null | undefined): string | null {
	if (!phone) {
		return null;
	}

	// Remove all non-numeric characters
	let cleaned = phone.replace(/\D/g, '');

	// Check if it already has the country code
	if (cleaned.length === 13 && cleaned.startsWith('55')) {
		return cleaned;
	}

	// If it's a typical Brazilian number without the country code, add it
	if (cleaned.length === 11 || cleaned.length === 10) {
		return `55${cleaned}`;
	}

	// For other cases, we can't be sure, so we don't format it as a wa.me link
	return null;
}
