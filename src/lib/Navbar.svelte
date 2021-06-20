<script>
    export let target;
</script>

<nav
    class="flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full"
>
    <div class="my-2 sm:my-0 inner">
        <p
            class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold cursor-pointer"
            on:click={() => (target = true)}
        >
            tailwindcss練習
        </p>
    </div>

    <div class="sm:mb-0 self-center" />
</nav>
