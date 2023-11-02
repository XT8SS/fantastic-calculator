<script>
    import Dropdown from "../Dropdown.svelte";
    import { fade } from "svelte/transition";
    import { selectedEqData } from "../stores";
    import { noneEqData } from "../vars";

    export let eqSlotName;

    let eqSlotCont, eqSlotIcon, eqSlotIconHeight;
    let selectedSlotData = noneEqData;
    let slotOpen, clearAllowed;
    let selectedItem;

    $: if (
        $selectedEqData[eqSlotName] &&
        $selectedEqData[eqSlotName].name != selectedSlotData.name
    ) {
        selectedSlotData = $selectedEqData[eqSlotName];
    }
</script>

<svelte:window
    on:mousedown={(e) => {
        if (
            !eqSlotCont.contains(e.target) ||
            e.target == eqSlotCont ||
            e.target == eqSlotIcon
        ) {
            slotOpen = false;
            if (e.target != eqSlotCont && e.target != eqSlotIcon) {
                clearAllowed = false;
            }
        }
    }}
    on:keydown={(e) => {
        if (e.key == "Tab") {
            setTimeout(() => {
                clearAllowed = eqSlotCont.contains(document.activeElement);
            });
        }
    }}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="eqSlotCont"
    class:slotOpen
    class:clearAllowed={clearAllowed && selectedItem}
    bind:this={eqSlotCont}
    on:keydown={(e) => {
        if (e.key == "Escape") {
            slotOpen = false;
        }
    }}
    on:mouseenter={() => (clearAllowed = true)}
    on:mouseleave={() => {
        if (!eqSlotCont.contains(document.activeElement)) {
            clearAllowed = false;
        }
    }}
>
    <div
        class="eqSlotIcon"
        bind:this={eqSlotIcon}
        bind:offsetHeight={eqSlotIconHeight}
        style:width={`${eqSlotIconHeight}px`}
    >
        {#key selectedSlotData}
            <a
                transition:fade={{ duration: 150 }}
                href={selectedSlotData.link}
                target="_blank"
                style:display={selectedSlotData.link ? "" : "none"}
                on:focusin={(e) => {
                    if (e.relatedTarget == null) {
                        clearAllowed = true;
                    }
                }}
            >
                <img
                    src={selectedSlotData.image}
                    alt={selectedSlotData.name}
                    draggable="false"
                />
                <span class="tooltip" id="left">{selectedSlotData.name}</span>
            </a>
        {/key}
    </div>
    <button class="ddButton" on:click={() => (slotOpen = !slotOpen)}>
        {eqSlotName.charAt(0).toUpperCase() + eqSlotName.slice(1)}
        <iconify-icon icon="iconamoon:arrow-down-2-fill" />
    </button>
    <button
        class="clearButton"
        on:click={() => {
            clearAllowed = false;
            if (eqSlotCont.classList.contains("clearAllowed")) {
                selectedItem.querySelector("button").click();
            }
        }}
    >
        <iconify-icon icon="maki:cross" />
        <span class="tooltip" id="top">Clear selection</span>
    </button>
    <Dropdown
        slotName={eqSlotName}
        index={null}
        bind:slotOpen
        bind:clearAllowed
        on:itemSelect={(e) => {
            setTimeout(() => {
                selectedItem = e.detail.classList.contains("selectedItem")
                    ? e.detail
                    : null;
            });
        }}
    />
</div>

<style>
    .eqSlotCont {
        display: flex;
        height: 22.5%;
        width: 50%;
    }
    .eqSlotIcon {
        height: 100%;
        margin-right: 2%;
        padding: 0.75% 0.5% 0.5% 0.75%;
        border-radius: calc(var(--zlhm));
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
        right: 1.25%;
        bottom: 1.25%;
        border-radius: calc(var(--zlhm) * 0.5);
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
    .ddButton {
        flex-direction: column;
        align-items: center;
    }
    .ddButton > iconify-icon {
        margin: -3%;
        font-size: calc(var(--zlhm) * 4.5);
    }
    .slotOpen .ddButton > iconify-icon {
        transform: scaleY(-1);
    }
    .clearButton {
        position: relative;
        margin: auto;
        padding: 1%;
        border-radius: calc(var(--zlhm));
        color: var(--dark-semi-transparent);
        background-color: #00000020;
        opacity: 0;
        visibility: hidden;
        transition: background 0.15s, visibility 0.15s, opacity 0.15s;
    }
    .clearButton:hover,
    .clearButton:focus {
        background-color: var(--dark-almost-transparent);
    }
    .clearButton > iconify-icon {
        display: block;
        font-size: calc(var(--zlhm) * 4);
    }
    .clearAllowed .clearButton {
        opacity: 1;
        visibility: visible;
    }
</style>
