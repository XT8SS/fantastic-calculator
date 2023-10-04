<script>
    let statSlots = [
        "armor",
        "magicDmg",
        "meleeDmg",
        "rangedDmg",
        "hpRegen",
        "endurance",
        "sightRange",
        "walkSpeed",
        "height",
        "jumpPower",
        "ammoReturn",
    ];
    let statNames = [
        "Armor",
        "Magic",
        "Melee",
        "Ranged",
        "HP Regen",
        "Endurance",
        "Sight Range",
        "Walk Speed",
        "Height",
        "Jump Power",
        "Ammo Return",
    ];
</script>

<div class="statBox">
    {#each statSlots as statSlot, i}
        <div id={statSlot}>
            <img src="src/assets/stats/{statSlot}.png" alt={statNames[i]} />
            <span class="statValue">123</span>
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
        font-size: 5cqw;
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
