import type { Action } from 'svelte/action';

// export function smoothScroll(node: HTMLElement) {
// 	node.addEventListener('click', (event) => {
// 		event.preventDefault();

// 		const targetId = node.getAttribute('href')?.slice(1); // Remove the #
// 		const targetElement = targetId ? document.getElementById(targetId) : null;

// 		if (targetElement) {
// 			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
// 		}
// 	});

// 	return {
// 		destroy() {
// 			node.removeEventListener('click', () => {});
// 		}
// 	};
// }

export const conditionalSmoothScroll: Action<HTMLElement, string> = (node, url) => {
	if (url === '#more' || url == '#prices') {
		return smoothScroll(node); // must return { destroy } or nothing
	}
};

export function smoothScroll(node: HTMLElement | string, offset = 40) {
	// Store the handler so we can remove it later
	function onClick(event: MouseEvent | undefined) {
		if (event) event.preventDefault();

		const href = typeof node === 'string' ? node : node.getAttribute('href');
		if (!href?.startsWith('#')) return;

		const targetId = href.slice(1);
		const targetEl = document.getElementById(targetId);
		if (!targetEl) return;

		// Calculate top of element relative to document, then subtract offset
		const elementTop = targetEl.getBoundingClientRect().top + window.pageYOffset;
		const scrollToY = Math.max(0, elementTop - offset);

		window.scrollTo({
			top: scrollToY,
			behavior: 'smooth'
		});

		// Listen for scroll end event and set hash again
		let hasScrolled = false;
		function onScrollEnd() {
			if (!hasScrolled) {
				hasScrolled = true;
				// pushState(href || '', '');
				history.pushState(null, '', href);
			}
		}

		window.addEventListener('scrollend', onScrollEnd);
		// setTimeout(() => (document.location.hash = href), 1000);
	}
	if (typeof node === 'string') {
		onClick(undefined);
	} else {
		node.addEventListener('click', onClick);
	}

	return {
		// Clean up listener correctly
		destroy() {
			if (typeof node !== 'string') node.removeEventListener('click', onClick);
		}
	};
}
