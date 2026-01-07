// src/routes/dashboard/+layout.server.ts
// import { productState } from '$stores/Product.state.svelte';
import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { Product } from '$types/products.types';
import { AuthService } from '$services/auth.service';
import { localizeHref } from '$paraglide/runtime';

export const load: LayoutServerLoad = async (params) => {
	const { route } = params;

	let selectedProduct = route.id.split('/').filter(Boolean)[1]?.toUpperCase() || null;
	const permissionList: string[] = await AuthService.getUserPermissionList(params.locals.session!);

	// STEP1: No product selected
	// If dasboard route does not have any product then select the first product for which the user has permissions
	// and then redirect to it
	if (route.id === '/dashboard') {
		// Get first product from the user permission list and redirect to it
		const firstProductWithPermission = permissionList?.[0];
		if (!firstProductWithPermission) {
			console.error("User doesn't have any dashboard on user permission list.");
			error(403, 'No product/dashboard on user permission list.');
		}

		redirect(302, localizeHref(`/dashboard/${String(firstProductWithPermission).toLowerCase()}`));
	}

	// STEP 2: Product selected
	// When we do have a full product route (eg. /dashboard/care)
	// then we check that the product exists, select it and pass it to the front
	if (!selectedProduct || !Object.values(Product).includes(selectedProduct as Product)) {
		// If product does not exists on our list or products then it is an error in the url
		const errorMsg = `Product ${selectedProduct} does not exists.`;
		console.error(errorMsg);
		error(404, errorMsg);
	} else {
		// Check if the user has permissions to use this product
		selectedProduct = selectedProduct as Product;
		// If product code is not on the permission list then you can't use this product
		if (!permissionList.includes(selectedProduct)) {
			const errorMsg = 'Product is not on user´s permission list.';
			console.error(errorMsg);
			error(401, errorMsg);
		}
		// In the future we will check other reasons why the user can have access to the product
		// like payment due
	}

	// return user data
	const userData = params.locals.user;

	// Check for user permissions for the given product
	return {
		selectedProduct,
		permissionList,
		userData
	};
};
