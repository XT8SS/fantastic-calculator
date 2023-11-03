<script>
    import GearSlot from "./GearSlot.svelte";

    let gearBox;
</script>

<div class="gearBox" bind:this={gearBox}>
    {#each [1, 2, 3, 4, 5] as index}
        <GearSlot slotName="gear" {index} />
    {/each}
</div>

<style>
    .gearBox {
        background: repeating-linear-gradient(
            -35deg,
            #00000008,
            #00000008 0.5%,
            var(--ff-duller-sand) 0,
            var(--ff-duller-sand) 3.25%
        );
        background-color: var(--ff-duller-sand);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        height: 100%;
        width: 40.987%;
        padding: 2.5% 2.5% 2.5% 0.5%;
        border-radius: calc(var(--u) * 2.35);
    }
</style>
