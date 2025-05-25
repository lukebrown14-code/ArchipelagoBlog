import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../content/${params.slug}.md`);

		console.log(post);

		return {
			content: post.default,
			meta: post.metadata
		};
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (e) {
		throw error(404, 'Post not found');
	}
};
