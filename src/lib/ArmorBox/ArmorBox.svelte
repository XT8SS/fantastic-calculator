<script>
    import EquipmentSlot from "./EquipmentSlot.svelte";
    import { eqSlotNames } from "../vars.js";
</script>

<div class="armorBox">
    {#each Array(...eqSlotNames) as eqSlotName}
        <EquipmentSlot bind:eqSlotName />
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
        border-radius: calc(var(--u) * 2);
        z-index: 1;
    }
</style>
