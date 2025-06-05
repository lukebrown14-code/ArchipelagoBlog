<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="mx-6">
	<div class="justify-left relative top-4 flex">
		<h1
			id="title"
			class="link link-transition bg-red-400 text-6xl font-bold decoration-4 underline-offset-4"
		>
			<a href="/">AR·CHI·PEL·AGO</a>
		</h1>
	</div>

	<div class="pt-16">
		{@render children()}
	</div>
</div>
