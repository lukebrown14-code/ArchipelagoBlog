<script lang="ts">
	let { data } = $props();
	import '../app.css';
</script>

<div>
	<h1 class="title text-left text-5xl">AR·TI·CLES</h1>
	<div class="mt-4 pl-4">
		{#each data.BlogData as post (post.id)}
			<div class="mt-2">
				<h2 class="link-transition link right-0 text-3xl decoration-2 underline-offset-2">
					<a href="/posts/{post.title}">{post.title.replaceAll('-', ' ')}</a>
				</h2>
				<p class="mx-2 text-2xl opacity-80">{post.subTitle}</p>
			</div>
		{/each}
	</div>
</div>
