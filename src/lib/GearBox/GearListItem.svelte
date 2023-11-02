<script>
    import { createEventDispatcher } from "svelte";
    import { selectedGearData } from "../stores";
    import { noneGearData } from "../vars";

    export let itemData, slotOpen, index;
    const dispatch = createEventDispatcher();

    let listItem;
    let itemSelected = false,
        duplicate = false;
    let itemName = itemData.name;
    let fontSizeChange;

    if (itemName == "Eyeball of Reckoning Ultradagger") {
        fontSizeChange = 1.9;
    }

    function selectItem(e) {
        if (!duplicate && (slotOpen || (!slotOpen && e.isTrusted == false))) {
            dispatch("itemSelect", listItem);
            if (!listItem.classList.contains("selectedItem")) {
                itemSelected = false;
            }
            (itemSelected = !itemSelected), (slotOpen = false);
            $selectedGearData[index] = itemSelected ? itemData : noneGearData;
        }
    }

    $: if ($selectedGearData) {
        for (let slot in $selectedGearData) {
            if (slot != index && $selectedGearData[slot].name == itemName) {
                duplicate = true;
                break;
            } else {
                duplicate = false;
            }
        }
    }
</script>

<li bind:this={listItem} class:selectedItem={itemSelected} class:duplicate>
    <button on:click={selectItem} disabled={duplicate}>
        <img src={itemData.image} alt="" />
        <span
            style:font-size={fontSizeChange
                ? `calc(var(--zlhm) * ${fontSizeChange})`
                : ""}>{itemName}</span
        >
    </button>
</li>
