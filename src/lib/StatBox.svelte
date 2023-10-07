<script>
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
        <div id={codeName}>
            <img src="stats/{codeName}.png" alt={formalName} />
            <span
                class="statValue"
                style:font-size={`${
                    baseHeight ? baseHeight / 25.2 : baseWidth / 39
                }px`}>123</span
            >
        </div>
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
        z-index: -1;
        container-type: size;
    }
    div {
        display: flex;
        align-items: center;
        position: relative;
        height: 25%;
        width: calc(100% / 3);
        white-space: nowrap;
    }
    img {
        height: 90%;
        margin-right: 5%;
    }
    .statValue {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .statBox
        > div:not(#endurance, #ammoReturn)
        .statValue:not(.negative)::before {
        content: "+";
    }
    div#endurance .statValue::after,
    div#ammoReturn .statValue::after {
        content: "%";
    }
</style>
