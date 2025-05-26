import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = ({ params }) => {
	try {
		return {
			tag: params
		};
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (e) {
		throw error(404, 'Tags not found');
	}
};
