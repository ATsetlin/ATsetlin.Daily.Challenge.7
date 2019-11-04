var array = ["Baanana", "Apples", "Oranges", "Blueberries"];
// 1. Remove the Banana from the array
array.shift()
// 1. Done.

// 2. Sort the array in order.
array.sort()
// 2. Easy. Now what?

// 3. Put "Kiwi" at the end of the array.
array.push("kiwi")
// 3. Ok, fruitsalad...kiwis.

// 4. Remove "Apples" from the array
array.shift()
// 4. Getting rid of Apples. Theyre gone. Kaput. Finished. No Apples.

// 5. Sort the array in reverse order.
array.reverse()
// 5. Jesus. Ok. Reorganizing a perfect;y good array to be back to front, instead of front to back...
console.log(array);
// Ok? We good now? Can I go back to ["Steaks", "Ribs", "Jerkey", "Burgers", "Hotdogs", "Biltong"]?


//accessing Array2.
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1]);

//By the way, if someone actually checks this work, please let me knkow you read this.