<script>
    import { fade } from "svelte/transition";
    import Dropdown from "../Dropdown.svelte";
    import { selectedGearData } from "../stores";
    import { noneGearData } from "../vars";

    export let slotName, index;

    let gearSlot, gearInfoCont, gearSlotIconHeight;
    let selectedSlotData = noneGearData;
    let slotOpen;

    $: if (
        $selectedGearData[index] &&
        $selectedGearData[index].name != selectedSlotData.name
    ) {
        selectedSlotData = $selectedGearData[index];
    }
</script>

<svelte:window
    on:mousedown={(e) => {
        if (
            !gearSlot.contains(e.target) ||
            (gearSlot.contains(e.target) && gearInfoCont.contains(e.target))
        ) {
            slotOpen = false;
        }
    }}
    on:keydown={(e) => {
        if (e.key == "Escape") {
            slotOpen = false;
        }
    }}
/>

<div class="gearSlot" class:slotOpen bind:this={gearSlot}>
    <button class="ddButton" on:click={() => (slotOpen = !slotOpen)}>
        <iconify-icon icon="iconamoon:arrow-down-2-fill" rotate="90deg" />
        Gear
    </button>
    <div class="gearInfoCont" bind:this={gearInfoCont}>
        <div class="gearAtkPreviews" />
        <div
            class="gearSlotIcon"
            bind:offsetHeight={gearSlotIconHeight}
            style:width={`${gearSlotIconHeight}px`}
        >
            {#key selectedSlotData}
                <a
                    transition:fade={{ duration: 150 }}
                    href={selectedSlotData.link}
                    target="_blank"
                    style:display={selectedSlotData.link ? "" : "none"}
                >
                    <img
                        src={selectedSlotData.image}
                        alt={selectedSlotData.name}
                        draggable="false"
                    />
                </a>
            {/key}
        </div>
    </div>
    <Dropdown {slotName} {index} bind:slotOpen clearAllowed />
</div>

<style>
    .gearSlot {
        display: flex;
        position: relative;
        height: 17.5%;
        width: 100%;
    }
    .ddButton {
        flex-direction: row;
        align-items: center;
        margin-right: 3%;
    }
    .slotOpen .ddButton > iconify-icon {
        transform: scaleX(-1);
    }
    .gearInfoCont {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 70%;
        padding: 3%;
        border-radius: calc(var(--zlhm));
        background-color: var(--dark-almost-transparent);
    }
    .gearAtkPreviews {
        height: 100%;
        width: 50%;
    }
    .gearSlotIcon {
        height: 100%;
    }
    .gearSlotIcon > a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: calc(var(--zlhm) * 0.75);
        transition: background 0.15s;
    }
    .gearSlotIcon > a:hover,
    .gearSlotIcon > a:focus {
        outline: none;
        background-color: var(--dark-almost-transparent);
    }
    .gearSlotIcon > a > img {
        height: 90%;
    }
</style>
