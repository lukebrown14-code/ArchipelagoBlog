import { supabase } from '$lib/superbaseClient';

export async function load() {
	const { data } = await supabase.from('BlogData').select();
	return {
		BlogData: data ?? []
	};
}
