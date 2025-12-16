<script lang="ts">
	import { AppConfig } from '$lib';
	import { m } from '$paraglide/messages';
	import { localizeHref } from '$paraglide/runtime';
	import { dashboardLeftMenuState } from '$stores/DashboardLeftMenu.state.svelte';
	import { DeviceType } from '$types/care/care.devices.types';
	import { getTranslationFromCode } from '$utils/translations.utils';
	import {
		BookOpen,
		ClipboardMinus,
		Coins,
		Home,
		Laptop,
		LifeBuoy,
		ReceiptText,
		Recycle,
		Store,
		TriangleAlert,
		UsersRound
	} from '@lucide/svelte';

	let isCollapsed = $derived(dashboardLeftMenuState.collapsed);
</script>

<!-- <li>
	<a href={localizeHref(AppConfig.dashboards.care.base)}>
		<Home class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Dashboard</span>
	</a>
</li> -->
<li>
	<a href={localizeHref(AppConfig.dashboards.care.base)} class="active text-primary">
		<Laptop class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Inventário</span>
	</a>
	<ul
		class="hidden {isCollapsed ? '' : 'md:block'} before:bg-primary pb-2 before:opacity-50 md:pl-4"
	>
		<li>
			<a href={localizeHref(AppConfig.dashboards.care.base)}>Todos os ativos</a>
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
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Ordens de Serviço</span>
	</a>
</li>

<li>
	<a href="/">
		<ClipboardMinus class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Relatórios</span>
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
				<a href="/">Usuários</a>
			</li>

			<li>
				<a href={localizeHref(AppConfig.dashboards.care.actions.addAgent)}
					>Clientes / Funcionários</a
				>
			</li>
			<li><a href="/">Técnicos</a></li>
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
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Reciclagem</span>
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

<!-- <li class="mt-2 mb-0"><hr class="border-base-200 h-[1px] border-t" /></li> -->
<li class="border-base-200 mt-3 border-t border-b py-2">
	<a href="/">
		<ReceiptText class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Faturamento</span>
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
<!-- <li class="border-base-200 border-b py-2">
	<a href="/">
		<BookOpen class="fw-dashboard-left-menu-icon {isCollapsed ? '!h-5' : ''}" />
		<span class="hidden {isCollapsed ? '' : 'md:inline'}">Docs</span>
	</a>
</li> -->
