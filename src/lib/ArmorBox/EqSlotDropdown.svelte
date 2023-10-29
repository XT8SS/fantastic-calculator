<script>
    import ListItem from "./ListItem.svelte";

    export let eqSlotName, slotOpen;

    let dropdownWidth, searchBarInput, itemList, lastItem;

    let dataFile = `https://raw.githubusercontent.com/XT8SS/fc-sv/main/src/assets/ff-data/${eqSlotName}.json`;
    let data,
        elementData = {};

    let pendingSearchClear = false;

    const fetchFile = fetch(dataFile)
        .then(async (response) => {
            if (response.status != 200) {
                console.error(
                    `Failed to fetch ${eqSlotName} slot data from ${dataFile}\nResponse status: ${response.status}`
                );
                return;
            }
            data = await response.json();
            return data;
        })
        .catch((e) => {
            console.error(
                `Failed to initiate ${eqSlotName} slot data fetch from ${dataFile}\n${e}`
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
        } else {
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
        let oldSelectedItem = itemList.querySelector(".itemSelected");
        if (oldSelectedItem && oldSelectedItem != e.detail) {
            oldSelectedItem.classList.remove("itemSelected");
        }
        pendingSearchClear = true;
    }

    $: if (slotOpen && itemList) {
        setTimeout(() => {
            searchBarInput.select();
        }, 25);
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

<div
    bind:offsetWidth={dropdownWidth}
    style:height={`${dropdownWidth * 1.25}px`}
    class="dropdown"
    on:transitionend={(e) => {
        if (e.propertyName == "visibility" && pendingSearchClear) {
            pendingSearchClear = false;
            searchBarInput.value = "";
            filterItemList();
        }
    }}
    on:transitioncancel={(e) => {
        if (e.propertyName == "visibility") {
            pendingSearchClear = false;
        }
    }}
>
    {#await fetchFile}
        <span>Loading...</span>
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
                <ListItem
                    bind:itemData={item}
                    bind:slotOpen
                    bind:eqSlotName
                    on:itemSelect={updateItemList}
                />
            {/each}
        </ul>
    {/await}
</div>

<style>
    .dropdown {
        background: repeating-linear-gradient(
            -45deg,
            #00000008,
            #00000008 0.5%,
            var(--ff-sand) 0,
            var(--ff-sand) 3.5%
        );
        background-color: var(--ff-sand);
        display: flex;
        justify-content: center;
        position: absolute;
        width: 45%;
        margin-top: 12.5%;
        padding: 1%;
        border: calc(var(--zlhm) * 0.5) solid #00000075;
        border-radius: 1.25%;
        box-shadow: 0 calc(var(--zlhm) * 0.75) calc(var(--zlhm) * 1.375)
            var(--dark-semi-transparent);
        font-family: "highway_gothicregular";
        transition: visibility 0.15s, opacity 0.15s ease;
        z-index: 2;
    }
    .dropdown > span {
        position: absolute;
        width: 60%;
        top: 50%;
        font-size: calc(var(--zlhm) * 3);
        transform: translate(0, -50%);
        text-align: center;
    }
    .searchBarCont {
        display: flex;
        position: absolute;
        height: 12.5%;
        width: 95%;
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
