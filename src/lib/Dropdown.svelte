<script>
    import EqListItem from "./ArmorBox/EqListItem.svelte";
    import GearListItem from "./GearBox/GearListItem.svelte";
    import { createEventDispatcher } from "svelte";

    export let slotName, index, slotOpen, clearAllowed;
    const dispatch = createEventDispatcher();

    let dropdownWidth, searchBarInput, itemList, lastItem;

    let file = `https://raw.githubusercontent.com/XT8SS/fc-sv/main/src/assets/ff-data/${slotName}.json`;
    let data,
        elementData = {};

    let pendingSearchClear = false;

    const fetchFile = fetch(file)
        .then(async (response) => {
            if (response.status != 200) {
                console.error(
                    `Failed to fetch ${
                        (index ? "weapon #" : "") + slotName
                    } slot data from ${file}\nResponse status: ${
                        response.status
                    }`
                );
                return;
            }
            data = await response.json();
            return data;
        })
        .catch((e) => {
            console.error(
                `Failed to initiate ${
                    (index ? "weapon #" : "") + slotName
                } slot data fetch from ${file}\n${e}`
            );
        });

    function updateLastItem() {
        if (lastItem) {
            lastItem.classList.remove("lastItem");
        }
        itemList.classList.remove("no-scrollbar");
        let visibleItems = itemList.querySelectorAll("li:not(.hidden)");
        lastItem = visibleItems[visibleItems.length - 1];
        if (lastItem) {
            lastItem.classList.add("lastItem");
        }
        if (!lastItem || lastItem.classList.contains("duplicate")) {
            lastItem = searchBarInput;
        }
        if (visibleItems.length <= 4) {
            itemList.classList.add("no-scrollbar");
        }
    }

    function changeEndFocus(e) {
        if (!e.shiftKey && e.key == "Tab") {
            setTimeout(() => {
                searchBarInput.focus();
            });
        }
    }

    function trapFocusFromLast() {
        if (lastItem) {
            lastItem.removeEventListener("keydown", changeEndFocus);
        }
        updateLastItem();
        if (lastItem) {
            lastItem.addEventListener("keydown", changeEndFocus);
        }
    }

    function trapFocusFromStart(e) {
        if (e.shiftKey && e.key == "Tab") {
            setTimeout(() => {
                (lastItem.querySelector("button") || lastItem).focus();
            });
        }
    }

    function filterItemList() {
        let search = searchBarInput.value.toLowerCase();
        for (let item in elementData) {
            let itemName = item.toLowerCase();
            if (itemName.includes(search)) {
                elementData[item].element.classList.remove("hidden");
            } else {
                elementData[item].element.classList.add("hidden");
            }
        }
        trapFocusFromLast();
    }

    function updateItemList(e) {
        dispatch("itemSelect", e.detail);
        let oldSelectedItem = itemList.querySelector(".selectedItem");
        if (oldSelectedItem && oldSelectedItem != e.detail) {
            oldSelectedItem.classList.remove("selectedItem");
        }
        pendingSearchClear = true;
    }

    $: if (itemList) {
        for (let i = 0; i < itemList.childElementCount; i++) {
            elementData[data[i].name] = {
                element: itemList.children[i],
                data: data[i],
            };
        }
        updateLastItem();
        trapFocusFromLast();
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:offsetWidth={dropdownWidth}
    style:height={`${dropdownWidth * 1.25}px`}
    class="dropdown"
    on:mouseenter={() => (clearAllowed = false)}
    on:mouseleave={() => (clearAllowed = true)}
    on:transitionend={(e) => {
        if (e.propertyName == "visibility") {
            if (pendingSearchClear) {
                pendingSearchClear = false;
                searchBarInput.value = "";
                filterItemList();
            }
            if (slotOpen) {
                setTimeout(() => {
                    searchBarInput.select();
                });
            }
        }
    }}
    on:transitioncancel={(e) => {
        if (e.propertyName == "visibility") {
            pendingSearchClear = false;
        }
    }}
>
    {#await fetchFile}
        <span>Loading items...</span>
    {:then items}
        <div class="searchBarCont">
            <input
                bind:this={searchBarInput}
                on:keydown={trapFocusFromStart}
                on:input={filterItemList}
                type="text"
                class="searchBarInput"
                placeholder="Search..."
            />
        </div>
        <ul bind:this={itemList}>
            {#each items as item}
                {#if index}
                    <GearListItem
                        itemData={item}
                        bind:slotOpen
                        {index}
                        on:itemSelect={updateItemList}
                    />
                {:else}
                    <EqListItem
                        itemData={item}
                        bind:slotOpen
                        eqSlotName={slotName}
                        on:itemSelect={updateItemList}
                    />
                {/if}
            {/each}
        </ul>
    {/await}
</div>

<style>
    .dropdown > span {
        position: absolute;
        width: min-content;
        top: 50%;
        font-size: calc(var(--zlhm) * 3);
        transform: translate(0, -50%);
        text-align: center;
    }
    .searchBarCont {
        display: flex;
        position: relative;
        height: 12.5%;
        width: 100%;
        padding: 2% 2.5%;
        color: var(--dark);
        background-color: #00000050;
        border: calc(var(--zlhm) * 0.375) #00000075 solid;
        border-radius: calc(var(--zlhm) * 0.5);
    }
    .searchBarInput {
        height: 100%;
        width: 100%;
        font-size: calc(var(--zlhm) * 2);
    }
    ul {
        position: absolute;
        height: 81.5%;
        width: 95%;
        bottom: 2%;
        overflow: auto;
        list-style: none;
        overflow-anchor: none;
    }
    ul::-webkit-scrollbar {
        width: calc(var(--zlhm));
    }
    ul::-webkit-scrollbar-thumb {
        border-radius: calc(var(--zlhm) * 2.5);
    }
</style>
