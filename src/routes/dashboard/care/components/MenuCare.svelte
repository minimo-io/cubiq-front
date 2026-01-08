<!-- src/routes/dashboard/care/components/MenuCare.svelte -->
<script lang="ts">
	import { AppConfig } from '$lib';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { dashboardLeftMenuState } from '$stores/DashboardLeftMenu.state.svelte';
	import { DeviceType } from '$types/care/care.devices.types';
	import { getTranslationFromCode } from '$utils/translations.utils';
	import {
		BookOpen,
		ChevronDown,
		ClipboardMinus,
		Laptop,
		LifeBuoy,
		ReceiptText,
		Recycle,
		Store,
		TriangleAlert,
		UsersRound
	} from '@lucide/svelte';

	interface Props {
		isDrawer?: boolean;
	}

	let { isDrawer = false }: Props = $props();
	let isCollapsed = $derived(dashboardLeftMenuState.collapsed);
</script>

{#if isDrawer}
	<!-- Drawer Mode: Simple list of links -->
	<a
		href={localizeHref(AppConfig.dashboards.care.base)}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-t border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Laptop class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.inventory()}</span>
		</div>
	</a>

	<a
		href={localizeHref(AppConfig.dashboards.care.alerts)}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<TriangleAlert class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.alerts()}</span>
		</div>
		<span class="badge badge-xs badge-primary self-center">32</span>
	</a>

	<a
		href={localizeHref(AppConfig.dashboards.care.services)}
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<LifeBuoy class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.serviceOrders()}</span>
		</div>
	</a>

	<a
		href="/"
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<ClipboardMinus class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.reports()}</span>
		</div>
	</a>

	<details class="border-base-300 border-b">
		<summary
			class="font-roboto text-grey-dark shine-effect flex cursor-pointer justify-between px-[30px] py-3 text-left align-middle text-sm"
		>
			<div class="flex w-full justify-center self-center text-left align-middle">
				<div class="flex w-full items-center justify-between">
					<div class="flex">
						<UsersRound class="text-sun mr-2 h-4 w-4 self-center" />
						<span class="self-center font-semibold">{m.admnistration()}</span>
					</div>
					<div>
						<ChevronDown class="h-4" />
					</div>
				</div>
			</div>
		</summary>
		<ul class="bg-base-200 pb-2">
			<li>
				<a
					href="/"
					class="font-roboto text-grey-dark shine-effect hover:bg-base-300 flex px-[30px] py-2 text-left align-middle text-sm"
				>
					{m.organizations()}
				</a>
			</li>
			<li>
				<a
					href="/"
					class="font-roboto text-grey-dark shine-effect hover:bg-base-300 flex px-[30px] py-2 text-left align-middle text-sm"
				>
					{m.users()}
				</a>
			</li>
			<li>
				<a
					href={localizeHref(AppConfig.dashboards.care.actions.addAgent)}
					class="font-roboto text-grey-dark shine-effect hover:bg-base-300 flex px-[30px] py-2 text-left align-middle text-sm"
				>
					{m.clientsEmployees()}
				</a>
			</li>
			<li>
				<a
					href="/"
					class="font-roboto text-grey-dark shine-effect hover:bg-base-300 flex px-[30px] py-2 text-left align-middle text-sm"
				>
					{m.technicians()}
				</a>
			</li>
		</ul>
	</details>

	<a
		href="/"
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<Recycle class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.recycling()}</span>
		</div>
	</a>

	<div class="border-base-300 border-b px-[30px] py-3">
		<a href={localizeHref('/loja')} class="btn btn-sm btn-primary w-full rounded-lg">
			<Store class="h-4 w-4" />
			<span class="text-[15px]">{m.onlineStore()}</span>
		</a>
	</div>

	<a
		href="/"
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<ReceiptText class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.billing()}</span>
		</div>
	</a>

	<a
		href="https://any.coop/AAgC1MK4YpFsTa9gfi822CM4eHbm83ovkrQQYDFnTvyDw2hN/tools-and-technologies"
		target="_blank"
		rel="nofollow"
		class="border-base-300 font-roboto text-grey-dark shine-effect flex justify-between border-b px-[30px] py-3 text-left align-middle text-sm"
	>
		<div class="flex justify-center self-center text-left align-middle">
			<BookOpen class="text-sun mr-2 h-4 w-4 self-center" />
			<span class="self-center font-semibold">{m.knowledgeBase()}</span>
		</div>
	</a>
{:else}
	<!-- Original Menu Structure -->
	<li>
		<a href={localizeHref(AppConfig.dashboards.care.base)} class="active text-primary">
			<Laptop class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.inventory()}</span>
		</a>
		<ul
			class="hidden {isCollapsed
				? ''
				: 'md:block'} before:bg-primary pb-2 before:opacity-50 md:pl-4"
		>
			<li>
				<a href={localizeHref(AppConfig.dashboards.care.base)}>{m.allAssets()}</a>
			</li>
			{#each Object.values(DeviceType) as type}
				<li>
					<a class="capitalize" href={localizeHref(AppConfig.dashboards.care.base)}>
						{getTranslationFromCode(type)}
					</a>
				</li>
			{/each}
		</ul>
	</li>
	<li>
		<a href={localizeHref(AppConfig.dashboards.care.alerts)}>
			<TriangleAlert class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<div class="indicator hidden md:block">
				<span class="indicator-item indicator-end indicator-middle badge badge-xs badge-primary">
					32
				</span>
				<span class="hidden {isCollapsed ? '' : 'md:mr-5 md:inline'}">{m.alerts()}</span>
			</div>
		</a>
	</li>
	<li>
		<a href={localizeHref(AppConfig.dashboards.care.services)}>
			<LifeBuoy class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.serviceOrders()}</span>
		</a>
	</li>

	<li>
		<a href="/">
			<ClipboardMinus class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.reports()}</span>
		</a>
	</li>
	<li class="hidden md:block">
		<details>
			<summary>
				<UsersRound class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
				<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.admnistration()}</span>
			</summary>
			<ul
				class="hidden {isCollapsed
					? ''
					: 'md:block'} before:bg-primary pb-2 pl-8 before:opacity-50 md:pl-4"
			>
				<li>
					<a href="/">{m.organizations()}</a>
				</li>
				<li>
					<a href="/">{m.users()}</a>
				</li>

				<li>
					<a href={localizeHref(AppConfig.dashboards.care.actions.addAgent)}
						>{m.clientsEmployees()}</a
					>
				</li>
				<li><a href="/">{m.technicians()}</a></li>
			</ul>
		</details>
	</li>
	<li class="border-base-200 mt-3 border-t pt-2 md:hidden">
		<a href="/">
			<UsersRound class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.admnistration()}</span>
		</a>
	</li>

	<!-- Marketplaces & Recycling -->
	<li>
		<a href="/">
			<Recycle class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.recycling()}</span>
		</a>
	</li>

	<li class="my-2">
		<a
			href={localizeHref('/loja')}
			class="btn btn-sm btn-primary mx-auto w-fit rounded-lg md:ml-4 md:pr-5!"
		>
			<Store class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />

			<span class="hidden text-[15px] {isCollapsed ? '' : 'md:inline'}">{m.onlineStore()}</span>
		</a>
	</li>

	<li class="border-base-200 mt-3 border-t border-b py-2">
		<a href="/">
			<ReceiptText class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.billing()}</span>
		</a>
	</li>
	<li class="border-base-200 border-b py-2">
		<a
			href="https://any.coop/AAgC1MK4YpFsTa9gfi822CM4eHbm83ovkrQQYDFnTvyDw2hN/tools-and-technologies"
			target="_blank"
			rel="nofollow"
		>
			<BookOpen class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
			<span class="hidden {isCollapsed ? '' : 'md:inline'}">{m.knowledgeBase()}</span>
		</a>
	</li>
{/if}
