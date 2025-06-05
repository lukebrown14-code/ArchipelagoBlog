<script lang="ts">
	export let data;
</script>

<h1 class="subTitle">{data.meta.title}</h1>
<div class="inline-flex space-x-2">
	{#each data.meta.tags as tag (tag)}
		<h2 class="link text-xl font-bold">
			<a href="/tags/{tag}" class="title-hover">{tag}</a>
		</h2>
	{/each}
</div>

<div>
	<div class="mt-4">
		<svelte:component this={data.content} />
	</div>
</div>
