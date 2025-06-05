<script lang="ts">
	let { data } = $props();
	import '../app.css';
</script>

<div class="px-4">
	<h1 class="mb-6 text-5xl font-bold underline decoration-4 underline-offset-4">AR·TI·CLES</h1>

	<div class="space-y-4">
		{#each data.BlogData as post (post.id)}
			<div>
				<h2 class="link mx-4 text-4xl font-semibold decoration-2 underline-offset-2">
					<a href="/posts/{post.title}">
						{post.title.replaceAll('-', ' ')}
					</a>
				</h2>
				<p class="mx-8 mt-2 text-3xl opacity-80">{post.subTitle}</p>
			</div>
		{/each}
	</div>
</div>
