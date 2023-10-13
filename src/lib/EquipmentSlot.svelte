<script>
    import EqSlotDropdown from "./EqSlotDropdown.svelte";
    export let eqSlotName, baseHeight, baseWidth;
    let eqSlotCont, eqSlotIcon, eqSlotIconHeight, active;
</script>

<svelte:window
    on:mousedown={(e) => {
        if (!eqSlotCont.contains(e.target)) {
            active = false;
        } else if (e.target == eqSlotIcon) {
            active = false;
        }
    }}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="eqSlotCont"
    class:active
    id={eqSlotName}
    bind:this={eqSlotCont}
    on:keydown={(e) => {
        if (e.key == "Escape") {
            active = false;
        }
    }}
>
    <div
        class="eqSlotIcon"
        bind:this={eqSlotIcon}
        bind:offsetHeight={eqSlotIconHeight}
        style:min-width={`${eqSlotIconHeight}px`}
    />
    <button
        class="eqSlotDDButton"
        style:font-size={`${baseHeight ? baseHeight / 18 : baseWidth / 30}px`}
        on:click={() => (active = !active)}
    >
        {eqSlotName.charAt(0).toUpperCase() + eqSlotName.slice(1)}
    </button>
    <EqSlotDropdown bind:eqSlotName bind:active />
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
    }
    .eqSlotDDButton {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: fit-content;
        width: 100%;
        font-family: "comic_neue_angularbold";
        color: var(--dark-almost-transparent);
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
    .eqSlotDDButton:focus,
    .active .eqSlotDDButton {
        color: var(--dark-semi-transparent);
    }
    .eqSlotDDButton:hover::after,
    .eqSlotDDButton:focus::after,
    .active .eqSlotDDButton::after {
        border-top-color: var(--dark-semi-transparent);
    }
    .active .eqSlotDDButton:hover,
    .active .eqSlotDDButton:focus {
        color: var(--dark-hardly-transparent);
    }
    .active .eqSlotDDButton:hover::after,
    .active .eqSlotDDButton:focus::after {
        border-top-color: var(--dark-hardly-transparent);
    }
</style>
