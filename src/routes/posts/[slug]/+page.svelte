<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="mt-6">
	<h1 class="title text-5xl">{data.title}</h1>
	<div class="">
		<h2 class="subTitle mt-1 text-2xl">
			{data.subTitle}
		</h2>
		<div class="inline-flex space-x-2 text-xs">
			{#each data.tags as tag (tag)}
				<h2 class="subTitle text-xl">
					<a href="/" class="title-hover">{tag}</a>
				</h2>
			{/each}
		</div>
		<p class="mt-4">{data.content}</p>
	</div>
</div>
