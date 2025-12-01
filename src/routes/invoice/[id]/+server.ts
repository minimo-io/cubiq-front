import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import pdf1 from '$lib/data/invoices/123e4567-e89b-12d3-a456-426614174000.pdf?url';
import pdf2 from '$lib/data/invoices/7f2a4e2a-bb83-4a3f-8e56-bb7a7c3e2a4d.pdf?url';
import pdf3 from '$lib/data/invoices/c1a8b3b4-2f37-4e1b-9dfb-3c76ad3c87f4.pdf?url';
import pdf4 from '$lib/data/invoices/e7b2f3c4-0f6a-4c0e-8d3e-9c1a4f8fcb52.pdf?url';

const invoices: Record<string, string> = {
	'123e4567-e89b-12d3-a456-426614174000': pdf1,
	'7f2a4e2a-bb83-4a3f-8e56-bb7a7c3e2a4d': pdf2,
	'c1a8b3b4-2f37-4e1b-9dfb-3c76ad3c87f4': pdf3,
	'e7b2f3c4-0f6a-4c0e-8d3e-9c1a4f8fcb52': pdf4
};

export const GET: RequestHandler = async ({ params, fetch }) => {
	const { id } = params;

	const pdfUrl = invoices[id];

	if (!pdfUrl) {
		error(404, 'Invoice not found');
	}

	try {
		const response = await fetch(pdfUrl);
		const pdfBuffer = await response.arrayBuffer();

		return new Response(pdfBuffer, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `inline; filename="${id}.pdf"`
			}
		});
	} catch (err) {
		console.error('Error fetching PDF:', err);
		error(500, 'Error loading invoice');
	}
};
