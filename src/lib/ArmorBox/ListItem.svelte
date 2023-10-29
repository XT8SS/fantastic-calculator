<script>
    import { createEventDispatcher } from "svelte";
    import { selectedGearData, buildStats } from "../stores";
    import { stats, noneItemData } from "../vars";

    export let itemData, slotOpen, eqSlotName;
    const dispatch = createEventDispatcher();

    let listItem;
    let itemSelected = false;

    function selectItem() {
        if (slotOpen) {
            dispatch("itemSelect", listItem);
            if (!listItem.classList.contains("itemSelected")) {
                itemSelected = false;
            }
            (itemSelected = !itemSelected), (slotOpen = false);
            if (itemSelected) {
                $selectedGearData[eqSlotName] = itemData;
            } else {
                $selectedGearData[eqSlotName] = noneItemData;
            }
            for (let stat of Object.keys(stats)) {
                $buildStats[stat] = 0;
                for (let slot in $selectedGearData) {
                    $buildStats[stat] += $selectedGearData[slot].stats[stat];
                    $buildStats[stat] = Math.round($buildStats[stat] * 10) / 10;
                }
            }
        }
    }
</script>

<li bind:this={listItem} class:itemSelected>
    <button on:click={selectItem}>
        <img src={itemData.image} alt="" />
        <span>{itemData.name}</span>
    </button>
</li>

<style>
    li {
        height: 23.25%;
        width: 97.5%;
        margin-bottom: 2.5%;
    }
    li.itemSelected > button {
        background-color: #00000050;
    }
    li > button {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        border-radius: calc(var(--zlhm) * 0.625);
        transition: background 0.25s;
    }
    li > button:hover,
    li > button:focus {
        background-color: #00000035;
    }
    li.itemSelected > button:hover,
    li.itemSelected > button:focus {
        background-color: #00000075;
    }
    li > button > img {
        height: 100%;
        padding: 2.5%;
        margin-right: 2.5%;
    }
    li > button > span {
        padding-right: 5%;
        font-size: calc(var(--zlhm) * 2);
    }
</style>
