// Part 1
const fs = require("fs");
const text = fs.readFileSync("2021/02/02.txt").toString();
const array = text.split("\n");

let forwardCount = 0;
let downCount = 0;
array.forEach((element) => {
  if (element.includes("forward")) {
    let forward = parseInt(element[8]);
    forwardCount += forward;
  }
  if (element.includes("down")) {
    let down = parseInt(element[5]);
    downCount += down;
  }
  if (element.includes("up")) {
    let up = parseInt(element[3]);
    downCount -= up;
  }
});
console.log(forwardCount);
console.log(downCount);
console.log(forwardCount * downCount);
