<script>
    import { onMount } from "svelte";
    import ArmorBox from "./lib/ArmorBox/ArmorBox.svelte";
    import StatBox from "./lib/StatBox/StatBox.svelte";
    import WeaponBox from "./lib/WeaponBox.svelte";

    let mainHeight;
    let winHeight, winWidth, landscape;

    function updateSizes() {
        setTimeout(() => (landscape = winWidth > winHeight), 10);
    }
    onMount(updateSizes);
</script>

<svelte:window
    bind:outerHeight={winHeight}
    bind:outerWidth={winWidth}
    on:resize={updateSizes}
    on:popstate={(e) => {
        console.log(e.state);
    }}
/>

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
        <WeaponBox />
    </div>
</main>

<style>
    main {
        position: absolute;
        height: 75%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
