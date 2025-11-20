// src/lib/services/crypto.service.ts

/**
 * Crypto Service - Symmetric encryption using Web Crypto API
 * Uses AES-256-GCM with PBKDF2 key derivation
 * Asymetric encrption uses the bcrypt module and its (for now), outside this module
 */

export function createCryptoService() {
	async function deriveKey(password: string, salt: BufferSource): Promise<CryptoKey> {
		const encoder = new TextEncoder();
		const keyMaterial = await crypto.subtle.importKey(
			'raw',
			encoder.encode(password),
			'PBKDF2',
			false,
			['deriveBits', 'deriveKey']
		);

		return crypto.subtle.deriveKey(
			{
				name: 'PBKDF2',
				salt: salt,
				iterations: 100000,
				hash: 'SHA-256'
			},
			keyMaterial,
			{ name: 'AES-GCM', length: 256 },
			false,
			['encrypt', 'decrypt']
		);
	}

	return {
		async encrypt(plaintext: string, password: string): Promise<string> {
			const encoder = new TextEncoder();
			const salt = crypto.getRandomValues(new Uint8Array(16));
			const iv = crypto.getRandomValues(new Uint8Array(12));
			const key = await deriveKey(password, salt);

			const encrypted = await crypto.subtle.encrypt(
				{ name: 'AES-GCM', iv: iv },
				key,
				encoder.encode(plaintext)
			);

			// Combine salt + iv + encrypted data
			const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
			combined.set(salt, 0);
			combined.set(iv, salt.length);
			combined.set(new Uint8Array(encrypted), salt.length + iv.length);

			// Convert to base64 for storage
			return btoa(String.fromCharCode(...combined));
		},

		async decrypt(encryptedData: string, password: string): Promise<string> {
			const decoder = new TextDecoder();

			// Decode from base64
			const combined = Uint8Array.from(atob(encryptedData), (c) => c.charCodeAt(0));

			// Extract salt, iv, and encrypted content
			const salt = combined.slice(0, 16);
			const iv = combined.slice(16, 28);
			const encrypted = combined.slice(28);

			const key = await deriveKey(password, salt);

			const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, key, encrypted);

			return decoder.decode(decrypted);
		}
	};
}
