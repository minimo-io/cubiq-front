// eslint-disable-next-line prefer-const
export let loader = $state({ active: false });

export function toggleLoader() {
	loader.active = !loader.active;
}
