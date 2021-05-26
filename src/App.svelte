<script lang="ts">
	import Tailwindcss from "./Tailwindcss.svelte";

	let chapters = [
		{
			title: "圖文滿版區塊",
			imgUrl: "https://i.imgur.com/B8D7A3d.jpg",
		},
		{
			title: "製作一個互動圖文卡片",
			imgUrl: "https://i.imgur.com/O1jK6Op.jpg",
		},
		{
			title: "人員介紹卡片",
			imgUrl: "https://i.imgur.com/td9zZ21.jpg",
		},
		{
			title: "交錯漂浮版",
			imgUrl: "https://i.imgur.com/n3ztRBl.jpg",
		},
	];
</script>

<Tailwindcss />
<section class="text-gray-600">
	<nav
		class="flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full"
	>
		<div class="mb-2 sm:mb-0 inner">
			<a
				href="/home"
				class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
				>tailwindcss練習</a
			><br />
		</div>

		<div class="sm:mb-0 self-center" />
	</nav>
	<main class="py-4">
		<div class="px-4">
			<div class="block md:flex md:-mx-2 md:flex-wrap">
				{#each chapters as chapter, i}
					<div
						class="h-[250px] w-full lg:w-1/3 md:px-2 mb-4 md:mb-4 sm:w-96 relative"
					>
						<img
							class="h-full object-cover w-full shadow-lg"
							src={chapter.imgUrl}
							alt=""
						/>
						<p
							class="absolute bottom-4 bg-white bg-opacity-95 shadow-md rounded-r-full p-3 font-bold text-xs"
						>
							{`${i > 9 ? "" : "0"}${i + 1}-${chapter.title}`}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</main>
</section>

<style>
</style>
