<div class="dropdown">
    <div class="searchBarCont">
        <input type="text" class="searchBarInput" placeholder="Search..." />
    </div>
    <ul>
        {#each Array(10) as lol}
            <li>
                <button>
                    <img
                        src="https://static.wikia.nocookie.net/fantastic-frontier-roblox/images/e/ec/SpiderHat.png"
                        alt=""
                    />
                    <span>Guardian Helmet</span>
                </button>
            </li>
        {/each}
    </ul>
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
        margin-top: 10%;
        padding: 1%;
        border: 1cqmin solid #00000075;
        border-radius: 1.25%;
        box-shadow: 0 1.5cqmin 2.75cqmin var(--dark-semi-transparent);
        font-family: "highway_gothicregular";
        transition: visibility 0.15s, opacity 0.15s ease;
        z-index: 1;
        aspect-ratio: 1 / 1.25;
    }
    .searchBarCont {
        display: flex;
        position: absolute;
        height: 12.5%;
        width: 95%;
        padding: 2% 2.5%;
        color: var(--dark);
        background-color: #00000050;
        border: 1cqmin #00000075 solid;
        border-radius: 1cqmin;
    }
    .searchBarInput {
        height: 100%;
        width: 100%;
        font-size: 3.5cqw;
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
        width: 2.5cqmin;
    }
    ul::-webkit-scrollbar-thumb {
        border-radius: 5cqmin;
    }
    ul > li:last-of-type {
        margin-bottom: 0;
    }
    ul > li {
        height: 23.25%;
        width: 97.5%;
        margin-bottom: 2.5%;
    }
    ul > li > button {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        border-radius: 1.25cqmin;
        transition: background 0.25s;
    }
    ul > li > button:hover,
    ul > li > button:focus {
        background-color: #00000035;
    }
    ul > li > button > img {
        height: 100%;
        padding: 2.5%;
        margin-right: 1%;
    }
    ul > li > button > span {
        font-size: 3.5cqw;
    }
</style>
