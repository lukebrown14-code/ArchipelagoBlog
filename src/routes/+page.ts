import type { PageLoad } from './$types';
import type { PostsPageData } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	try {
		return {
			content: {
				1: {
					id: 1,
					title: 'A-Brief-History-of-England',
					subTitle: 'From Stonehenge to Empire: A Journey Through Time',
					tags: ['England', 'History']
				},
				2: {
					id: 2,
					title: 'Post',
					subTitle: 'Post 2',
					tags: ['four', 'three']
				},
				3: {
					id: 3,
					title: 'Post-two',
					subTitle: 'The trust about 1',
					tags: ['four', 'three']
				}
			}
		};
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (e) {
		throw error(500, 'Posts not found');
	}
}) satisfies PageLoad<PostsPageData>;
