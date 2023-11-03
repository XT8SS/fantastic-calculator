<script>
    import StatSlot from "./StatSlot.svelte";
    import { stats } from "../vars.js";
</script>

<div class="statBox">
    {#each Object.entries(stats) as [codeName, formalName]}
        <StatSlot bind:codeName bind:formalName />
    {/each}
</div>

<style>
    .statBox {
        background: repeating-linear-gradient(
            -25deg,
            #00000008,
            #00000008 0.5%,
            var(--ff-dull-sand) 0,
            var(--ff-dull-sand) 2%
        );
        background-color: var(--ff-dull-sand);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        height: 34.96%;
        width: 100%;
        padding: 2.75%;
        border-radius: calc(var(--u));
        color: var(--light);
        font-family: "Source Sans 3";
    }
</style>
