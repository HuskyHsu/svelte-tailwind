<script>
	import Tailwindcss from "./lib/Tailwindcss.svelte";
	import Navbar from "./lib/Navbar.svelte";
	import ArticleList from "./routes/list.svelte";

	let showDesign = "list";
	function handleMessage(event) {
		showDesign = event.detail.text;
	}
</script>

<Tailwindcss />
<section class="text-gray-600">
	<Navbar on:message={handleMessage} />
	{#if showDesign === "list"}
		<ArticleList on:message={handleMessage} />
	{/if}
</section>
