import { writable } from "svelte/store";

export let count = writable(5);


let n = JSON.parse(localStorage.getItem("names")) || []; 
export let names = writable(n);

names.subscribe(n=>{
    localStorage.setItem("names", JSON.stringify(n));
})