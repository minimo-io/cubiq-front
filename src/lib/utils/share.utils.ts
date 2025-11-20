// src/lib/utils.js
import { browser } from '$app/environment';

// Cubiq object for sharing stuff
export const FwShare = {
	hasShareAPI: Boolean('share' in navigator),

	share: async function ({ title, text, url }) {
		// 1. Check if we are in the browser.
		if (!browser) {
			throw new Error('Attempted to share from the server. navigator is not defined.');
		}

		// 2. Check if the Web Share API is supported.
		if (!navigator.share) {
			throw new Error('Web Share API is not supported in this browser/environment.');
		}

		// 3. Execute the share command.
		try {
			await navigator.share({ title, text, url });
		} catch (error) {
			// --- FIX IS HERE ---
			// 1. Narrow the type: Check if the error is an instance of a standard Error object.
			if (error instanceof Error) {
				// 2. Now TypeScript knows 'error' has '.name' and '.message'.
				if (error.name !== 'AbortError') {
					throw new Error(`Sharing failed: ${error.message}`);
				}
			} else {
				// Handle non-Error objects (like strings, numbers, etc.) which are rare
				// but possible in JS and still typed as 'unknown'.
				throw new Error(`Sharing failed with an unknown error: ${String(error)}`);
			}
		}
	},

	copyToClipboard: async function (url) {
		try {
			return await navigator.clipboard.writeText(url);
		} catch (error) {
			const errorMsg = `Copying to clipboard failed: ${error instanceof Error ? error?.message : error}`;
			console.error(errorMsg);
			throw new Error(errorMsg);
		}
	}
};
