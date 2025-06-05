<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="container mx-auto">
	<div class="relative top-4 flex justify-center">
		<h1 id="title" class="link text-6xl font-bold decoration-4 underline-offset-4">
			<a href="/" data-sveltekit-preload-data>AR·CHI·PEL·AGO</a>
		</h1>
	</div>

	<div class="pt-16">
		{@render children()}
	</div>
</div>
