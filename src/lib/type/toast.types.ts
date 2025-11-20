export type ToastType = 'success' | 'error' | 'warning' | 'info' | '';
export type ToastPosition = 'top' | 'bottom';
export interface ToastState {
	active: boolean;
	duration: number;
	type: ToastType;
	message: string;
	position: ToastPosition;
}
