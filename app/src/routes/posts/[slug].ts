import type { RequestHandlerOutput } from '@sveltejs/kit';

export async function get(): Promise<RequestHandlerOutput> {
	return {
		status: 200,
		body: {
			message: `${Date.now()}`
		}
	};
}
