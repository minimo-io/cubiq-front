<script lang="ts">
	interface Props {
		title: string;
	}

	let { title }: Props = $props();
</script>

<button
	class={[
		'!cursor-auto rounded-tl-3xl rounded-br-3xl bg-white px-8 py-2 text-[13px] font-black text-black uppercase hover:opacity-100 md:px-10 md:text-[16px]'
	]}
>
	{title}
</button>
