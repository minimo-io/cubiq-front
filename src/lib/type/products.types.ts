import { type Icon as IconType } from '@lucide/svelte';

export type ProductsList = ProductData[];

export enum Product {
	CARE = 'CARE',
	PAY = 'PAY',
	STORE = 'STORE',
	APIS = 'APIS',
	NOTES = 'NOTES'
}

export enum LabProduct {
	BETIZEN = 'BETIZEN',
	LNBEER = 'LNBEER'
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
	underDevelopment?: boolean;
	online?: boolean;
	unavailableBrazil?: boolean;
}
