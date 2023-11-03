<script>
    import { createEventDispatcher } from "svelte";
    import { selectedEqData, buildStats } from "../stores";
    import { stats, noneEqData } from "../vars";

    export let itemData, slotOpen, eqSlotName;
    const dispatch = createEventDispatcher();

    let listItem;
    let itemSelected = false;
    let itemName = itemData.name;
    let fontSizeChange;

    if (itemName == "Woodwhack Legionnaire Chestpiece") {
        fontSizeChange = 2.59;
    } else if (itemName == "Broken Thumb Drillbit Emporium Chassis") {
        fontSizeChange = 2.76;
    } else if (itemName.includes("Spectral Vanguard Platebody")) {
        fontSizeChange = 2.74;
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

<li bind:this={listItem} class:selectedItem={itemSelected}>
    <button on:click={selectItem}>
        <img src={itemData.image} alt="" />
        <span
            style:font-size={fontSizeChange
                ? `calc(var(--u) * ${fontSizeChange})`
                : ""}
            style:line-height={fontSizeChange ? "95%" : ""}
        >
            {itemName}
        </span>
    </button>
</li>
