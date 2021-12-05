// 1. Using node.js for the first time PART ONE
let fs = require("fs");
let text = fs.readFileSync("2021/01.txt");
text = text.toString();
let array = text.split("\n");

let count = 0;
for (i = 1; i < array.length; i++) {
  if (array[i] - array[i - 1] > 0) {
    count++;
  }
}
console.log(count);

// 1. PART TWO
