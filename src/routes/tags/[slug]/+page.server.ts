import { supabase } from '$lib/superbaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;

	if (!slug) {
		throw error(400, 'Tag parameter is required');
	}

	const { data, error: supabaseError } = await supabase
		.from('BlogData')
		.select('*')
		.ilike('tags', `%${slug}%`)
		.not('tags', 'is', null); // Exclude null tags

	if (supabaseError) {
		console.error('Supabase error:', supabaseError);
		throw error(500, `Failed to fetch posts with tag: ${slug}`);
	}

	return {
		BlogData: data ?? [],
		tag: slug
	};
};
