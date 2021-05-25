<script lang="ts">
	import Tailwindcss from "./Tailwindcss.svelte";
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
			<div class="block md:flex md:-mx-2">
				<div
					class="h-[250px] w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 sm:w-96 relative bg-green-100"
				>
					<img
						class="h-full object-cover w-full"
						src="https://i.imgur.com/B8D7A3d.jpg"
						alt=""
					/>
					<p
						class="absolute bottom-4 bg-white bg-opacity-95 shadow-md rounded-r-full p-3 font-bold text-xs"
					>
						01-圖文滿版區塊
					</p>
				</div>
				<div
					class="h-[250px] w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 sm:w-96 relative bg-green-100"
				>
					<img
						class="h-full object-cover w-full"
						src="https://i.imgur.com/O1jK6Op.jpg"
						alt=""
					/>
					<p
						class="absolute bottom-4 bg-white bg-opacity-95 shadow-md rounded-r-full p-3 font-bold text-xs"
					>
						02-製作一個互動圖文卡片
					</p>
				</div>
				<div
					class="h-[250px] w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 sm:w-96 relative bg-green-100"
				>
					<img
						class="h-full object-cover w-full"
						src="https://i.imgur.com/td9zZ21.jpg"
						alt=""
					/>
					<p
						class="absolute bottom-4 bg-white bg-opacity-95 shadow-md rounded-r-full p-3 font-bold text-xs"
					>
						03-人員介紹卡片
					</p>
				</div>
			</div>
		</div>
	</main>
</section>

<style>
</style>
