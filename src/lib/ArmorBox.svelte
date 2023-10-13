<script>
    import EquipmentSlot from "./EquipmentSlot.svelte";

    export let baseHeight, baseWidth;
    let eqSlotNames = [
        "head",
        "body",
        "legs",
        "feet",
        "neck",
        "back",
        "ring",
        "misc",
    ];
</script>

<div class="armorBox">
    {#each eqSlotNames as eqSlotName}
        <EquipmentSlot bind:eqSlotName bind:baseHeight bind:baseWidth />
    {/each}
</div>

<style>
    .armorBox {
        background: repeating-linear-gradient(
            -35deg,
            #00000008,
            #00000008 0.5%,
            var(--ff-blue) 0,
            var(--ff-blue) 3.25%
        );
        background-color: var(--ff-blue);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 64.54%;
        width: 100%;
        padding: 5%;
        border-radius: 2.25% / 3%;
        z-index: 1;
        container-type: size;
    }
</style>
