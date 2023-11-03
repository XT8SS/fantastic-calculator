<script>
    import { onMount } from "svelte";
    import ArmorBox from "./lib/ArmorBox/ArmorBox.svelte";
    import StatBox from "./lib/StatBox/StatBox.svelte";
    import GearBox from "./lib/GearBox/GearBox.svelte";

    let mainHeight;
    let winHeight, winWidth, landscape;

    onMount(() => {
        landscape = winWidth > winHeight;
    });

    $: landscape = winWidth > winHeight;
    $: landscape
        ? document.documentElement.style.setProperty("--u", "0.75vh")
        : document.documentElement.style.setProperty("--u", "0.75vw");
</script>

<svelte:window bind:outerHeight={winHeight} bind:outerWidth={winWidth} />

<main
    bind:offsetHeight={mainHeight}
    class:portrait={!landscape}
    style:width={landscape ? `${mainHeight * 1.56}px` : "75%"}
>
    <div class="calcBox">
        <div class="eqCont">
            <ArmorBox />
            <StatBox />
        </div>
        <GearBox />
    </div>
</main>

<style>
    main {
        position: absolute;
        height: 75%;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }
    main.portrait {
        height: 87.5%;
        width: 75%;
    }
    .calcBox {
        display: flex;
        justify-content: space-between;
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .portrait .calcBox {
        flex-direction: column;
    }
    .eqCont {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        height: 100%;
        width: 55.421%;
        left: 0;
    }
    .portrait .eqCont {
        height: 45.757%;
        width: 100%;
    }
</style>
