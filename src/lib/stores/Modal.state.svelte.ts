// src/lib/stores/Modal.state.svelte.ts
import type { Component, Snippet } from 'svelte';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalConfig {
	component?: Component;
	snippet?: Snippet<[Record<string, unknown>?]>;
	props?: Record<string, unknown>;
	size?: ModalSize;
	closeOnBackdrop?: boolean;
	closeOnEscape?: boolean;
	onClose?: () => void;
}

class ModalState {
	private _isOpen = $state(false);
	private _config = $state<ModalConfig | null>(null);

	get isOpen() {
		return this._isOpen;
	}

	get config() {
		return this._config;
	}

	open(config: ModalConfig) {
		this._config = {
			size: 'lg',
			closeOnBackdrop: true,
			closeOnEscape: true,
			...config
		};
		this._isOpen = true;
	}

	close() {
		if (this._config?.onClose) {
			this._config.onClose();
		}
		this._isOpen = false;
		// Small delay before clearing config to allow animation
		setTimeout(() => {
			this._config = null;
		}, 200);
	}

	updateProps(props: Record<string, unknown>) {
		if (this._config) {
			this._config = {
				...this._config,
				props: { ...this._config.props, ...props }
			};
		}
	}
}

export const modalState = new ModalState();
