<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="mx-16 my-8">
	<div class="relative flex flex-col items-start justify-start">
		<div class="text-left">
			<h1 id="title" class="title-hover title text-6xl">
				<a href="/">AR·CHI·PEL·AGO</a>
			</h1>
			<h2 id="about" class="title-hover subTitle text-lg">
				<a href="/about">Luke Brown</a>
			</h2>
		</div>
	</div>

	{@render children()}
</div>
