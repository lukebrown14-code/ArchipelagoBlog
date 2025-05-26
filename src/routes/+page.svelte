<script lang="ts">
	import type { PostsPageData } from '$lib/types';
	export let data: PostsPageData;
</script>

<div class="mt-6">
	<h1 class="title text-left text-5xl">READ·ING</h1>
	<div class="mt-4">
		{#each Object.values(data.content) as post (post.id)}
			<div class="mt-2">
				<h2 class="title-hover title text-xl">
					<a href="/posts/{post.title}">{post.title.replaceAll('-', ' ')}</a>
				</h2>
				<p class="subTitle mx-2 text-sm">{post.subTitle} - {post.tags.join(', ')}</p>
			</div>
		{/each}
	</div>
</div>
