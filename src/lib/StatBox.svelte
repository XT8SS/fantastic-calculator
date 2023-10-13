<script>
    import StatSlot from "./StatSlot.svelte";

    export let baseHeight, baseWidth;

    let stats = {
        armor: "Armor",
        magicDmg: "Magic",
        meleeDmg: "Melee",
        rangedDmg: "Ranged",
        hpRegen: "HP Regen",
        endurance: "Endurance",
        sightRange: "Sight Range",
        walkSpeed: "Walk Speed",
        height: "Height",
        jumpPower: "Jump Power",
        ammoReturn: "Ammo Return",
    };
</script>

<div class="statBox">
    {#each Object.entries(stats) as [codeName, formalName]}
        <StatSlot
            bind:codeName
            bind:formalName
            bind:baseHeight
            bind:baseWidth
        />
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
        border-radius: 1.5% / 4.5%;
        color: #dfdfdf;
        font-family: "Source Sans 3";
        container-type: size;
    }
</style>
