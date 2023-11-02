import { writable } from "svelte/store";

let selectedEqData = writable({}), buildStats = writable({}), selectedGearData = writable({});

export {selectedEqData, buildStats, selectedGearData};