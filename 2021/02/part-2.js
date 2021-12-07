// Part 2
let fs = require("fs");
let text = fs.readFileSync("2021/02/02.txt");
text = text.toString();
let array = text.split("\n");

let aim = 0;
let forwardCount = 0;
let depth = 0;

for (i = 0; i < array.length; i++) {
  if (array[i].includes("forward")) {
    forward = parseInt(array[i][8]);
    forwardCount += forward;
    depth += forward * parseInt(aim);
  }
  if (array[i].includes("down")) {
    aim += parseInt(array[i][5]);
  }
  if (array[i].includes("up")) {
    aim += parseInt(array[i][3]) * -1;
  }
}

console.log(forwardCount * depth);
console.log(depth);
