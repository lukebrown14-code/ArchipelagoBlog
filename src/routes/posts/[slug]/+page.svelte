<script lang="ts">
	export let data;
</script>

<h1 class="title text-5xl">{data.meta.title}</h1>
<div class="">
	<h2 class="subTitle mt-1 text-2xl">
		{data.meta.subTitle}
	</h2>
	<div class="inline-flex space-x-2 text-xs">
		{#each data.meta.tags as tag (tag)}
			<h2 class="subTitle text-xl">
				<a href="/tags/{tag}" class="title-hover">{tag}</a>
			</h2>
		{/each}
	</div>

	<div class="mt-4">
		<svelte:component this={data.content} />
	</div>
</div>
