<script>
    import { buildStats } from "../stores";

    export let codeName, formalName;

    let armorStatValue;
    let statContainerWidth;
    let hover, armorHover;

    let fontSizeDivisors = {
        armor: 5.9,
        magicDmg: 5.65,
        meleeDmg: 5.7,
        rangedDmg: 6.45,
        hpRegen: 7.35,
        endurance: 7.85,
        sightRange: 8.45,
        walkSpeed: 8.3,
        jumpPower: 8.7,
        ammoReturn: 9.3,
        height: 6.1,
    };

    $: statValue = $buildStats[codeName] || 0;
</script>

<div
    bind:offsetWidth={statContainerWidth}
    class:hidden={statValue == 0}
    id={codeName}
>
    <img
        src="stats/{codeName}.svg"
        alt={formalName}
        on:mouseenter={() => (hover = true)}
        on:mouseleave={() => (hover = false)}
    />
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#if codeName != "armor"}
        <span
            class="statValue"
            class:hidden={hover}
            class:negative={statValue < 0}
        >
            {codeName != "endurance" ? statValue : statValue.toFixed(2)}
        </span>
    {:else}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <span
            class="statValue"
            tabindex="0"
            class:hidden={hover}
            class:negative={statValue < 0}
            class:reduction={armorHover}
            style={armorHover
                ? `font-size: ${(statContainerWidth * 0.7) / 6.85}px;`
                : ""}
            bind:this={armorStatValue}
            on:mouseenter={() => (armorHover = true)}
            on:mouseleave={() => (armorHover = false)}
            on:focusin={() => (armorHover = true)}
            on:focusout={() => (armorHover = false)}
        >
            {armorHover
                ? `${Math.floor(
                      $buildStats[codeName] * 0.675 + 19.8
                  )}% Reduction`
                : statValue}
        </span>
    {/if}
    {#if hover}
        <span
            style:font-size={`${
                (statContainerWidth * 0.7) / fontSizeDivisors[codeName]
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
    .statValue:focus {
        outline: none;
    }
    .statBox
        > div:not(#endurance, #ammoReturn)
        .statValue:not(.negative, .reduction)::before {
        content: "+";
    }
    div#endurance .statValue::after,
    div#ammoReturn .statValue::after {
        content: "%";
    }
</style>
