<script>
    export let codeName, formalName;

    let statContainerWidth;

    let hover;
    let fontSizeMultipliers = {
        armor: 5.725,
        magicDmg: 5.51,
        meleeDmg: 5.545,
        rangedDmg: 6.254,
        hpRegen: 7.131,
        endurance: 7.631,
        sightRange: 8.201,
        walkSpeed: 8.043,
        height: 5.9,
        jumpPower: 8.456,
        ammoReturn: 9.017,
    };
</script>

<div bind:offsetWidth={statContainerWidth} id={codeName}>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <img
        src="stats/{codeName}.svg"
        alt={formalName}
        tabindex="0"
        on:mouseenter={() => (hover = true)}
        on:mouseleave={() => (hover = false)}
        on:focusin={() => (hover = true)}
        on:focusout={() => (hover = false)}
    />
    <span class="statValue" class:hidden={hover}> 123 </span>
    {#if hover}
        <span
            class="statName"
            style:font-size={`${
                (statContainerWidth * 0.7) / fontSizeMultipliers[codeName]
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
    img:focus {
        outline: none;
    }
    .statValue {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: calc(var(--zlhm) * 2.85);
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
