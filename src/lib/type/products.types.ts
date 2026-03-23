import { type Icon as IconType } from '@lucide/svelte';

export type ProductsList = ProductData[];

export enum Product {
	CARE = 'CARE',

	STORE = 'STORE',
	APIS = 'APIS',
	NOTES = 'NOTES',

	AI = 'AI',
	PAY = 'PAY',
	AUTH = 'AUTH'
}

export enum LabProduct {
	BETIZEN = 'BETIZEN',
	LNBEER = 'TAPTAPGO',
	BIBLIO = 'BIBLIO'
}

export interface ProductData {
	id: string;
	isMain: boolean;
	name: string;
	slogan?: string;
	sloganSimple?: string;
	icon?: typeof IconType;
	details: string;
	// subMenu: boolean;
	url?: string;
	isBold?: boolean;
	primary: boolean;
	logo?: string;
	logoSquare?: string;
	underDevelopment?: boolean;
	online?: boolean;
	unavailable?: boolean;
	newWindow?: boolean;
}
