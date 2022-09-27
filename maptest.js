let map = new Map();
let n = { keys: "keys" };
map.set("banana", 1);
map.set(n, 2);
map.set("meat", 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(obj);

function unique(arr) {
  let set = new Set(arr);
  return set;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        console.log(sorted)
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"