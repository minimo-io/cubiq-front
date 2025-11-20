import { AppConfig } from '$lib/configs';
import type { ToastPosition, ToastState, ToastType } from '$types/toast.types';

const toastState: ToastState = {
	active: false,
	duration: AppConfig.toast.duration,
	type: '',
	message: 'success',
	position: 'top'
};

export const FwToastState = $state(toastState);

export const FwToast = {
	launch: (
		message: string,
		type: ToastType = 'success',
		position: ToastPosition = 'top',
		duration = AppConfig.toast.duration
	) => {
		FwToastState.active = true;
		FwToastState.type = type;
		FwToastState.message = message;
		FwToastState.position = position;
		setTimeout(() => {
			FwToastState.active = false;
		}, duration);
	}
};
