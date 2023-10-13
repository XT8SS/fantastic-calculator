<script>
    export let codeName, formalName, baseHeight, baseWidth;

    let hover;
    let fontSizesHeight = {
        armor: 31.2,
        magicDmg: 30,
        meleeDmg: 30,
        rangedDmg: 35.454,
        hpRegen: 39,
        endurance: 41.052,
        sightRange: 45.882,
        walkSpeed: 45.882,
        height: 31.2,
        jumpPower: 48.75,
        ammoReturn: 48.75,
    };
    let fontSizeWidth = {
        armor: 57.6,
        magicDmg: 55.384,
        meleeDmg: 55.384,
        rangedDmg: 65.454,
        hpRegen: 72,
        endurance: 75.789,
        sightRange: 84.705,
        walkSpeed: 84.705,
        height: 57.6,
        jumpPower: 90,
        ammoReturn: 90,
    };
</script>

<div id={codeName}>
    <img
        src="stats/{codeName}.png"
        alt={formalName}
        on:mouseenter={() => (hover = true)}
        on:mouseleave={() => (hover = false)}
    />
    <span
        class="statValue"
        class:hidden={hover}
        style:font-size={`${baseHeight ? baseHeight / 25.2 : baseWidth / 39}px`}
    >
        123
    </span>
    {#if hover}
        <span
            class="statName"
            style:font-size={`${
                baseHeight
                    ? baseHeight / fontSizesHeight[codeName]
                    : baseWidth / fontSizeWidth[codeName]
            }px`}
        >
            {`${formalName} Bonus`}
        </span>
    {/if}
</div>

<style>
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
    img:hover {
        cursor: pointer;
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
