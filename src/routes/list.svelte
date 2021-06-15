<script>
    let chapters = [
        {
            title: "圖文滿版區塊",
        },
        {
            title: "製作一個互動圖文卡片",
        },
        {
            title: "人員介紹卡片",
        },
        {
            title: "交錯漂浮版",
        },
    ];

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleClick(title, id) {
        return () => {
            dispatch("message", {
                text: title,
                id: id + 1,
            });
        };
    }
</script>

<main class="py-4">
    <div class="px-4">
        <div class="block sm:flex sm:-mx-2 sm:flex-wrap">
            {#each chapters as chapter, i}
                <div
                    class="card h-[250px] sm:w-1/2 lg:w-1/3 mb-4 sm:px-2 sm:mb-4 relative transition transform hover:-translate-y-1 hover:text-white cursor-pointer"
                    on:click={handleClick(chapter.title, i)}
                >
                    <img
                        class="h-full object-cover w-full shadow-lg"
                        src={`assets/image/${i > 9 ? "" : "0"}${i + 1}.jpg`}
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

<style>
    .card p {
        transition-duration: 300ms;
    }
    .card:hover p {
        background-color: rgb(245, 158, 11);
    }
</style>
