<script>
    import { onMount } from "svelte";
    import ArmorBox from "./lib/ArmorBox.svelte";
    import StatBox from "./lib/StatBox.svelte";
    import WpBox from "./lib/WpBox.svelte";

    let winHeight, winWidth, baseHeight, baseWidth, landscape, supported;

    function updateSizes() {
        setTimeout(() => {
            winWidth > winHeight ? (landscape = true) : (landscape = false);
            [baseHeight, baseWidth] = [winHeight * 0.75, winWidth * 0.75];
            landscape ? (baseWidth = null) : (baseHeight = null);
        }, 100);
    }
    onMount(updateSizes);

    supported =
        window.CSS.supports("aspect-ratio", "1") &&
        window.CSS.supports("font-size", "1cqw") &&
        window.CSS.supports("border-width", "1cqmin");
</script>

<svelte:window
    bind:outerHeight={winHeight}
    bind:outerWidth={winWidth}
    on:resize={updateSizes}
/>

<main class:unsupported={!supported}>
    <div
        class="calcBox"
        class:portrait={!landscape}
        style={baseHeight
            ? `height: ${baseHeight}px; width: ${baseHeight * 1.56}px`
            : `height: ${baseWidth / 1.56}px; width: ${baseWidth}px`}
    >
        <div class="eqCont">
            <ArmorBox bind:baseHeight bind:baseWidth />
            <StatBox bind:baseHeight bind:baseWidth />
        </div>
        <WpBox />
    </div>
    {#if !supported}
        <div id="warning">
            <button on:click={() => (supported = !supported)}>continue</button>
        </div>
    {/if}
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
