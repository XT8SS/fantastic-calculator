<script>
    import EqSlotDropdown from "./PieceDropdown.svelte";
    export let eqSlotName;
    let eqSlotCont, eqSlotIcon, active;
</script>

<svelte:window
    on:click={(e) => {
        if (!eqSlotCont.contains(e.target)) {
            active = false;
        } else if (e.target == eqSlotIcon) {
            active = false;
        }
    }}
/>

<div class="eqSlotCont" class:active id={eqSlotName} bind:this={eqSlotCont}>
    <div class="eqSlotIcon" bind:this={eqSlotIcon} />
    <button class="eqSlotDDButton" on:click={() => (active = !active)}>
        {eqSlotName.charAt(0).toUpperCase() + eqSlotName.slice(1)}
    </button>
    <EqSlotDropdown />
</div>

<style>
    .eqSlotCont {
        display: flex;
        height: 22.5%;
        width: calc(100% / 3);
    }
    .eqSlotIcon {
        height: 100%;
        padding: 0.75% 0.5% 0.5% 0.75%;
        border-radius: 7.5%;
        border-top: 0.95cqmin solid #00000035;
        border-left: 0.95cqmin solid #00000035;
        border-right: 0.95cqmin solid var(--transparent);
        border-bottom: 0.95cqmin solid var(--transparent);
        background-color: #00000020;
        aspect-ratio: 1;
    }
    .eqSlotDDButton {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        width: 100%;
        font-family: "comic_neue_angularbold";
        font-size: 7cqw;
        color: var(--dark-almost-transparent);
        cursor: pointer;
        transition: color 0.1s ease;
    }
    .eqSlotDDButton::after {
        content: "";
        margin-top: 5%;
        border-left: 2.5cqmin solid transparent;
        border-right: 2.5cqmin solid transparent;
        border-top: 3.125cqmin solid var(--dark-almost-transparent);
        transition: border 0.1s ease, transform 0.3s;
    }
    .eqSlotDDButton:hover,
    .eqSlotDDButton:focus {
        color: var(--dark-semi-transparent);
    }
    .eqSlotDDButton:hover::after,
    .eqSlotDDButton:focus::after {
        border-top-color: var(--dark-semi-transparent);
    }
</style>
