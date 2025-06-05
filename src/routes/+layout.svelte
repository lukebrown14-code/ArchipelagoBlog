<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();
	let scrollY = $state(0);
	let smoothSize = $derived(Math.max(20, 48 - scrollY / 8)); // 96px (text-6xl) down to 32px (text-2xl)

	function handleScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	});
</script>

<div class="mx-6">
	<div class="fixed top-4 z-20 flex justify-center">
		<h1
			id="title"
			class="link link-transition bg-red-400 font-bold decoration-4 underline-offset-4 transition-all duration-300 ease-out"
			style="font-size: {smoothSize}px;"
		>
			<a href="/">AR·CHI·PEL·AGO</a>
		</h1>
	</div>

	<div class="pt-26">
		{@render children()}
	</div>
</div>
