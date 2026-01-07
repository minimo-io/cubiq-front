<script lang="ts">
	import { AppConfig } from '$lib/configs';
	import { m } from '$paraglide/messages';
	import { getLocale, localizeHref } from '$paraglide/runtime';

	let locale = $state(getLocale());
</script>

<a
	target="_blank"
	rel="nofollow noopener"
	href={AppConfig.cubiq.socials.telegram}
	class="bg-base-200 hover:bg-base-100 relative hidden rounded-full px-7 py-2 font-sans text-[19px] font-normal md:block"
>
	{m.help()}
</a>
