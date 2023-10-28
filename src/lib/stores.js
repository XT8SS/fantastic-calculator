import { writable } from "svelte/store";

let selectedGearData = writable({}), buildStats = writable({});

export {selectedGearData, buildStats};