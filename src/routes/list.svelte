<script>
    export let target;
    import Goldfish_01 from "./goldfish/01.svelte";

    let Unit;
    let chapters = [
        {
            title: "圖文滿版區塊",
            html: Goldfish_01,
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
    chapters.forEach(
        (chapter, i) => (chapter.id = `${i > 9 ? "" : "0"}${i + 1}`)
    );
    function handleClick(i) {
        target = false;
        Unit = chapters[i].html;
    }
</script>

<div>
    {#if target}
        <main class="py-4">
            <div class="px-4">
                <div class="block sm:flex sm:-mx-2 sm:flex-wrap">
                    {#each chapters as chapter, i}
                        <div
                            class="card h-[250px] sm:w-1/2 lg:w-1/3 mb-4 sm:px-2 sm:mb-4 relative transition transform hover:-translate-y-1 hover:text-white cursor-pointer"
                            on:click={() => handleClick(i)}
                        >
                            <img
                                class="h-full object-cover w-full shadow-lg"
                                src={`assets/image/${chapter.id}.jpg`}
                                alt=""
                            />
                            <p
                                class="absolute bottom-4 bg-white bg-opacity-95 shadow-md rounded-r-full p-3 font-bold text-xs"
                            >
                                {`${chapter.id}-${chapter.title}`}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        </main>
    {:else}
        <svelte:component this={Unit} />
    {/if}
</div>

<style>
    .card p {
        transition-duration: 300ms;
    }
    .card:hover p {
        background-color: rgb(245, 158, 11);
    }
</style>
