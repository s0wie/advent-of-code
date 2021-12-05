// 1. Using node.js for the first time PART ONE
// Got correct answer, but should be wrong since it's still a string?
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
count = 0;
for (i = 0; i < array.length; i++) {
  if (
    parseInt(array[i + 1]) + parseInt(array[i + 2]) + parseInt(array[i + 3]) >
    parseInt(array[i]) + parseInt(array[i + 1]) + parseInt(array[i + 2])
  ) {
    count++;
  }
}
console.log(count);
