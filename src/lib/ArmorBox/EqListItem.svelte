<script>
    import { createEventDispatcher } from "svelte";
    import { selectedEqData, buildStats } from "../stores";
    import { stats, noneEqData } from "../vars";
    import { calcFontSize } from "../funcs";

    export let itemData, slotOpen, eqSlotName;
    const dispatch = createEventDispatcher();

    let listItem;
    let itemSelected = false;
    let itemName = itemData.name;
    let fontSize = 2.8;

    function call(node) {
        calcFontSize(node, fontSize, itemName);
    }

    function selectItem(e) {
        if (slotOpen || (!slotOpen && e.isTrusted == false)) {
            dispatch("itemSelect", listItem);
            if (!listItem.classList.contains("selectedItem")) {
                itemSelected = false;
            }
            (itemSelected = !itemSelected), (slotOpen = false);
            $selectedEqData[eqSlotName] = itemSelected ? itemData : noneEqData;
            for (let stat of Object.keys(stats)) {
                $buildStats[stat] = 0;
                for (let slot in $selectedEqData) {
                    $buildStats[stat] += $selectedEqData[slot].stats[stat];
                    $buildStats[stat] = Math.round($buildStats[stat] * 10) / 10;
                }
            }
        }
    }
</script>

<li bind:this={listItem} class:selectedItem={itemSelected} use:call>
    <button on:click={selectItem}>
        <img src={itemData.image} alt="" />
        <span>
            {itemName}
        </span>
    </button>
</li>
