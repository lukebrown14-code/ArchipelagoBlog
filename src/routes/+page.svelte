<script lang="ts">
	let { data } = $props();
	import '../app.css';
</script>

<h1 class="subTitle">AR·TI·CLES</h1>

<div class="mt-8 space-y-4">
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
