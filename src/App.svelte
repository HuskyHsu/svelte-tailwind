<script>
	import Tailwindcss from "./lib/Tailwindcss.svelte";
	import Navbar from "./lib/Navbar.svelte";
	import ArticleList from "./routes/list.svelte";

	let target = true;
</script>

<Tailwindcss />
<Navbar bind:target />
<section class="text-gray-600">
	<ArticleList bind:target />
</section>
