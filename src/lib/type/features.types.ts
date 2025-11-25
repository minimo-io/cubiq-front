import { type Icon as Icontype } from '@lucide/svelte';
// Feature type definition using actual Pill types
export type Feature = {
	icon?: typeof Icontype;
	img?: string;
	title: string;
	desc: string;
	pill?: {
		text: string;
		color: 'light' | 'primary' | 'dark' | 'primary-transparent';
		customCss: string;
	} | null;
};
