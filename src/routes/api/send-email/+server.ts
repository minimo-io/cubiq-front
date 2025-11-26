// import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
// import Mailgun from 'mailgun.js';

export const GET: RequestHandler = () => {
	// sendSimpleMessage();

	return new Response(String('OK'));
};
