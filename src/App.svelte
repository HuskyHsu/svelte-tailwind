<script>
	import Tailwindcss from "./lib/Tailwindcss.svelte";
	import Navbar from "./lib/Navbar.svelte";
	import ArticleList from "./routes/list.svelte";

	import Goldfish_01 from "./routes/goldfish/01.svelte";

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
	{:else if showDesign === "圖文滿版區塊"}
		<Goldfish_01 />
	{/if}
</section>
