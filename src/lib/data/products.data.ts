import { Activity, Cable, ShoppingBag, Zap } from '@lucide/svelte';
import { LabProduct, Product, type ProductsList } from '$lib/type/products.types';
import { localizeHref } from '$paraglide/runtime';
import { m } from '$paraglide/messages';
import { AppConfig } from '$lib/configs';

export const getProducts = (locale?: 'pt' | 'en' | 'es'): ProductsList => [
	{
		id: Product.CARE,
		name: Product.CARE,
		isMain: true,
		slogan: m.productCareSlogan({}, { locale: locale }),
		sloganSimple: m.productCareSloganSimple({}, { locale: locale }),
		details: m.productCareDetails({}, { locale: locale }),
		icon: Activity,
		isBold: true,
		primary: false,
		underDevelopment: false,
		url: localizeHref('/care', { locale: locale })
	},

	{
		id: Product.STORE,
		name: Product.STORE,
		isMain: true,
		slogan: m.productStoreSlogan({}, { locale: locale }),
		sloganSimple: m.productStoreSloganSimple({}, { locale: locale }),
		details: m.productStoreDetails({}, { locale: locale }),
		icon: ShoppingBag,
		primary: false,
		isBold: true,
		online: true,
		url: localizeHref('/store', { locale: locale })
	},
	{
		id: Product.PAY,
		name: Product.PAY,
		isMain: true,
		slogan: m.productPaySlogan({}, { locale: locale }),
		sloganSimple: m.productPaySloganSimple({}, { locale: locale }),
		details: m.productPayDetails({}, { locale: locale }),
		icon: Zap,
		isBold: true,
		primary: false,
		underDevelopment: true,
		unavailable: true,
		url: localizeHref('/pay', { locale: locale })
	},

	{
		id: Product.APIS,
		name: 'APIs',
		isMain: true,
		slogan: m.productAPISlogan({}, { locale: locale }),
		sloganSimple: m.productAPISloganSimple({}, { locale: locale }),
		details: m.productAPIDetails({}, { locale: locale }),
		icon: Cable,
		primary: true,
		isBold: true,
		underDevelopment: true,
		url: localizeHref(AppConfig.cubiq.docs, { locale: locale })
	},
	{
		id: Product.NOTES,
		name: Product.NOTES,
		isMain: false,
		slogan: m.productNotesSlogan({}, { locale: locale }),
		sloganSimple: m.productNotesSloganSimple({}, { locale: locale }),
		details: m.productNotesDetails({}, { locale: locale }),
		icon: Cable,
		primary: true,
		isBold: true,
		underDevelopment: true,
		url: localizeHref('/dashboard/notes', { locale: locale })
	}
];

export const getProductsFromLab = (locale?: 'pt' | 'en' | 'es'): ProductsList => [
	{
		id: LabProduct.BETIZEN,
		name: LabProduct.BETIZEN,
		logo: '/products/betizen-logo.png',
		isMain: true,
		slogan: m.productBetizenSlogan({}, { locale: locale }),
		sloganSimple: '',
		details: m.productBetizenDetails({}, { locale: locale }),
		isBold: true,
		primary: true,
		underDevelopment: false,
		url: 'https://www.betizen.org'
	},
	{
		id: LabProduct.LNBEER,
		name: LabProduct.LNBEER,
		logo: '/products/hopchain-logo.png',
		isMain: true,
		slogan: m.productLnBeerSlogan({}, { locale: locale }),
		sloganSimple: '',
		details: m.productLnBeerDetails({}, { locale: locale }),
		isBold: true,
		primary: true,
		underDevelopment: true,
		url: 'https://www.figma.com/design/A9ZpwzFjlfZSZlWIrNfztG/Lightning-Beer?node-id=2-3&t=XKNaVwyAoxWPFXNB-1'
	}
	// {
	// 	id: LabProduct.BIBLIO,
	// 	name: LabProduct.BIBLIO,
	// 	logo: '/products/biblio-logo.png',
	// 	isMain: true,
	// 	slogan: m.productBilbioSlogan({}, { locale: locale }),
	// 	sloganSimple: '',
	// 	details: m.productBilbioSlogan({}, { locale: locale }),
	// 	isBold: true,
	// 	primary: true,
	// 	underDevelopment: true,
	// 	url: '#'
	// }
];
