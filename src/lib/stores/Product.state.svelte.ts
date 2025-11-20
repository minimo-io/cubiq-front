import { Product } from '$lib/type/products.types';

// eslint-disable-next-line prefer-const
export let productState = $state<{ active: Product | undefined }>({
	active: undefined
});
