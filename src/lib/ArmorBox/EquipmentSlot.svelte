<script>
    import EqSlotDropdown from "./EqSlotDropdown.svelte";
    import { fade } from "svelte/transition";
    import { selectedGearData } from "../stores";
    import { noneItemData } from "../vars";

    export let eqSlotName;

    let eqSlotCont, eqSlotIcon, eqSlotIconHeight, slotOpen;

    $: selectedSlotData = $selectedGearData[eqSlotName] || noneItemData;
</script>

<svelte:window
    on:mousedown={(e) => {
        if (
            !eqSlotCont.contains(e.target) ||
            (eqSlotCont.contains(e.target) && e.target == eqSlotIcon)
        ) {
            slotOpen = false;
        }
    }}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="eqSlotCont"
    class:slotOpen
    bind:this={eqSlotCont}
    on:keydown={(e) => {
        if (e.key == "Escape") {
            slotOpen = false;
        }
    }}
>
    <div
        class="eqSlotIcon"
        bind:this={eqSlotIcon}
        bind:offsetHeight={eqSlotIconHeight}
        style:min-width={`${eqSlotIconHeight}px`}
    >
        {#key selectedSlotData}
            <a
                transition:fade={{ duration: 150 }}
                href={selectedSlotData.link}
                target="_blank"
                style={selectedSlotData.link ? "" : "display: none;"}
            >
                <img
                    src={selectedSlotData.image}
                    alt={selectedSlotData.name}
                    draggable="false"
                />
            </a>
        {/key}
    </div>
    <button class="eqSlotDDButton" on:click={() => (slotOpen = !slotOpen)}>
        {eqSlotName.charAt(0).toUpperCase() + eqSlotName.slice(1)}
    </button>
    <EqSlotDropdown bind:eqSlotName bind:slotOpen />
</div>

<style>
    .eqSlotCont {
        display: flex;
        height: 22.5%;
        width: calc(100% / 3);
    }
    .eqSlotIcon {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 100%;
        margin-right: 3%;
        padding: 0.75% 0.5% 0.5% 0.75%;
        border-radius: 7.5%;
        border-top: calc(var(--zlhm) * 0.45) solid #00000035;
        border-left: calc(var(--zlhm) * 0.45) solid #00000035;
        border-right: calc(var(--zlhm) * 0.45) solid var(--transparent);
        border-bottom: calc(var(--zlhm) * 0.45) solid var(--transparent);
        background-color: #00000020;
    }
    .eqSlotIcon > a {
        display: block;
        position: absolute;
        height: 95%;
        width: 95%;
        border-radius: 5.5%;
        transition: background 0.15s;
    }
    .eqSlotIcon > a:hover,
    .eqSlotIcon > a:focus {
        outline: none;
        background-color: var(--dark-almost-transparent);
    }
    .eqSlotIcon > a > img {
        height: 100%;
    }
    .eqSlotDDButton {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        width: fit-content;
        font-family: "comic_neue_angularbold";
        font-size: calc(var(--zlhm) * 4.25);
        color: var(--dark-almost-transparent);
        transition: color 0.1s ease;
    }
    .eqSlotDDButton::after {
        content: "";
        margin-top: 5%;
        border-left: calc(var(--zlhm) * 1.15) solid transparent;
        border-right: calc(var(--zlhm) * 1.15) solid transparent;
        border-top: calc(var(--zlhm) * 1.25) solid
            var(--dark-almost-transparent);
        transition: border 0.1s ease, transform 0.3s;
    }
    .eqSlotDDButton:hover,
    .eqSlotDDButton:focus,
    .slotOpen .eqSlotDDButton {
        color: var(--dark-semi-transparent);
    }
    .eqSlotDDButton:hover::after,
    .eqSlotDDButton:focus::after,
    .slotOpen .eqSlotDDButton::after {
        border-top-color: var(--dark-semi-transparent);
    }
    .slotOpen .eqSlotDDButton:hover,
    .slotOpen .eqSlotDDButton:focus {
        color: var(--dark-hardly-transparent);
    }
    .slotOpen .eqSlotDDButton:hover::after,
    .slotOpen .eqSlotDDButton:focus::after {
        border-top-color: var(--dark-hardly-transparent);
    }
</style>
