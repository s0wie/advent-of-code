const fs = require("fs");
const array = fs.readFileSync("03.txt").toString().split("\n");

let gamma = [];
let epsilon = [];

for (o = 0; o < array[0].length; o++) {
  let oneCounter = 0;
  let zeroCounter = 0;

  array.forEach((element) => {
    if (element[o] == 1) {
      oneCounter++;
    } else {
      zeroCounter++;
    }
  });

  if (oneCounter >= zeroCounter) {
    gamma.push("1");
    epsilon.push("0");
  } else {
    gamma.push("0");
    epsilon.push("1");
  }
}

let gammaBinary = gamma.join("");
let epsilonBinary = epsilon.join("");
let gammaDigit = parseInt(gammaBinary, 2);
let epsilonDigit = parseInt(epsilonBinary, 2);

console.log(gammaDigit);
console.log(epsilonDigit);
console.log(gammaDigit * epsilonDigit);
