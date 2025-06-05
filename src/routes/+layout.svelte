<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="mx-16 my-8">
	<div class="relative flex flex-col items-start justify-start">
		<h1 id="title" class="title link link-transition text-6xl">
			<a href="/">AR·CHI·PEL·AGO</a>
		</h1>
		<!-- <div class="mt-2">
				<h2 id="about" class="link link-transition">
					<a href="/about">Luke Brown</a>
				</h2>
			</div> -->
	</div>
	<div class="mt-6">
		{@render children()}
	</div>
</div>
