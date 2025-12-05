// // src/lib/data/lab.data.ts

// src/lib/data/lab.data.ts
import { m } from '$paraglide/messages';
import { localizeHref } from '$paraglide/runtime';

export interface LabToolProject {
	id: string;
	title: string;
	github?: string;
	figma?: string;
	href: string;
	description: string;
	tags: string[];
	badge?: string;
}

export const getLabToolsAndProjects = (locale?: 'pt' | 'en' | 'es'): LabToolProject[] => [
	{
		id: 'bzstats',
		title: 'Betizen Stats',
		github: 'https://github.com/minimo-io/betizen-stats',
		figma: '',
		href: '',
		description: m.labBzStatsDescription({}, { locale }),
		tags: ['bitcoin', 'payments'],
		badge: ''
	},
	{
		id: 'nostr-followback',
		title: 'Nostr Followback',
		github: 'https://github.com/minimo-io/appticles/tree/main/nostr-followback',
		figma: '',
		href: '',
		description: m.labNostrFollowbackDescription({}, { locale }),
		tags: ['nostr', 'social'],
		badge: ''
	},

	{
		id: 'viivpay',
		title: 'ViiVPay',
		github: '',
		figma: 'https://www.figma.com/design/3OLTGWFRbMPiQb9Pvv5MgM/Cubiq?node-id=0-1',
		href: '',
		description: m.labViiVPayDescription({}, { locale }),
		tags: ['food', 'e-commerce'],
		badge: ''
	},

	{
		id: 'loveinabox',
		title: 'LoveInABox',
		github: '',
		figma: 'https://www.figma.com/design/1iGs2RMrqusUPN5RxWDops/LoveInABox',
		href: localizeHref('/lab/loveinabox', { locale }),
		description: m.labLoveInABoxDescription({}, { locale }),
		tags: ['food', 'e-commerce'],
		badge: ''
	}
];

// export const labToolsAndProjects = [
// 	{
// 		title: 'Nostr_Followback',
// 		github: 'https://github.com/yourorg/nostr-followback',
// 		figma: '',
// 		href: '/lab/nostr-followback',
// 		description:
// 			'This is a concept micro-app with the goal of having a first contact with the Nostr Protocol, and trying out libraries like NDK by pablof7z. Find the Github repo for bugs and To Do lists.',
// 		tags: ['nostr', 'social'],
// 		badge: ''
// 	},
// 	{
// 		title: 'BzStats',
// 		github: 'https://github.com/yourorg/bzstats',
// 		figma: '',
// 		href: '/lab/bzstats',
// 		description:
// 			'Pagamentos globais transparentes: receba via PIX no Brasil e liquide em USDT/Bitcoin no exterior. Velocidade, segurança e custos disruptivos.',
// 		tags: ['bitcoin', 'payments'],
// 		badge: ''
// 	},

// 	{
// 		title: 'LoveInABox',
// 		github: '',
// 		figma: 'https://www.figma.com/design/1iGs2RMrqusUPN5RxWDops/LoveInABox',
// 		href: '/lab/loveinabox',
// 		description: 'A cooking app that lets you order a kit of ingredients for each recipe',
// 		tags: ['food', 'e-commerce'],
// 		badge: ''
// 	}
// ];
