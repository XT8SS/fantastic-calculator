<script>
    import { createEventDispatcher } from "svelte";
    import { selectedGearData, buildStats } from "../stores";
    import { stats, noneItemData } from "../vars";

    export let itemData, slotOpen, eqSlotName;
    const dispatch = createEventDispatcher();

    let listItem;
    let itemSelected = false;
    let itemName = itemData.name;
    let fontSizeChange;

    if (itemName == "Woodwhack Legionnaire Helmet") {
        fontSizeChange = 2.13;
    } else if (itemName == "Woodwhack Legionnaire Chestpiece") {
        fontSizeChange = 1.77;
    } else if (itemName == "Broken Thumb Drillbit Emporium Chassis") {
        fontSizeChange = 1.89;
    } else if (itemName.includes("Spectral Vanguard Platebody")) {
        fontSizeChange = 2.04;
    } else if (itemName == "Pettyganger's Parade Legwarmers") {
        fontSizeChange = 2.06;
    } else if (itemName.includes("Spectral Vanguard Platelegs")) {
        fontSizeChange = 2.14;
    }

    function selectItem(e) {
        if (slotOpen || (!slotOpen && e.isTrusted == false)) {
            dispatch("itemSelect", listItem);
            if (!listItem.classList.contains("selectedItem")) {
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

<li bind:this={listItem} class:selectedItem={itemSelected}>
    <button on:click={selectItem}>
        <img src={itemData.image} alt="" />
        <span
            style:font-size={`${
                fontSizeChange ? `calc(var(--zlhm) * ${fontSizeChange})` : ""
            }`}>{itemName}</span
        >
    </button>
</li>

<style>
    li {
        height: 23.25%;
        width: 97.5%;
        margin-bottom: 2.5%;
    }
    li.selectedItem > button {
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
    li.selectedItem > button:hover,
    li.selectedItem > button:focus {
        background-color: #00000075;
    }
    li > button > img {
        height: 100%;
        padding: 2.5%;
        margin-right: 2.5%;
    }
    li > button > span {
        padding-right: 5%;
        font-size: calc(var(--zlhm) * 2.1);
    }
</style>
