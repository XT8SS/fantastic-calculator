<script>
    import { onMount } from "svelte";
    import ArmorBox from "./lib/ArmorBox.svelte";
    import StatBox from "./lib/StatBox.svelte";
    import WpBox from "./lib/WpBox.svelte";

    let winHeight,
        winWidth,
        ccScaledHeight,
        ccScaledWidth,
        scrOrient = "";
    let calcCont;
    function updateSizes() {
        scrOrient = screen.orientation.type;
        setTimeout(() => {
            [ccScaledHeight, ccScaledWidth] = [
                winHeight * 0.75,
                winWidth * 0.75,
            ];
            scrOrient.includes("landscape")
                ? (ccScaledWidth = null)
                : (ccScaledHeight = null);
        });
    }
    onMount(updateSizes);
</script>

<svelte:window
    bind:outerHeight={winHeight}
    bind:outerWidth={winWidth}
    on:resize={updateSizes}
/>

<main>
    <div
        bind:this={calcCont}
        class="calcBox"
        class:portrait={scrOrient.includes("portrait")}
        style={ccScaledHeight
            ? `height: ${ccScaledHeight}px`
            : `width: ${ccScaledWidth}px`}
    >
        <div class="eqCont">
            <ArmorBox />
            <StatBox />
        </div>
        <WpBox />
    </div>
</main>

<style>
    main {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .calcBox {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        aspect-ratio: 1.56;
    }
    .eqCont {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        height: 100%;
        left: 0;
        aspect-ratio: 83 / 96;
    }
</style>
