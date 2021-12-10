const fs = require("fs");
const array = fs.readFileSync("input.txt").toString().split("\n");
// Oxygen generator rating
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
  for (p = 0; p < array.length; p++) {
    if (array.length === 1) {
      break;
    }
    if (oneCounter >= zeroCounter) {
      if (array[p][o] == "0") {
        array.splice(p, 1);
        p--;
      }
    }
    if (zeroCounter > oneCounter) {
      if (array[p][o] == "1") {
        array.splice(p, 1);
        p--;
      }
    }
  }
}

const oxygenBinary = array[0];
const oxygenDecimal = parseInt(oxygenBinary, 2);
console.log(oxygenDecimal);

const co2array = fs.readFileSync("input.txt").toString().split("\n");

for (o = 0; o < co2array[0].length; o++) {
  let oneCounter = 0;
  let zeroCounter = 0;

  co2array.forEach((element) => {
    if (element[o] == 1) {
      oneCounter++;
    } else {
      zeroCounter++;
    }
  });
  for (p = 0; p < co2array.length; p++) {
    if (co2array.length === 1) {
      break;
    }
    if (oneCounter < zeroCounter) {
      if (co2array[p][o] == "0") {
        co2array.splice(p, 1);
        p--;
      }
    }
    if (zeroCounter <= oneCounter) {
      if (co2array[p][o] == "1") {
        co2array.splice(p, 1);
        p--;
      }
    }
  }
}

const co2Binary = co2array[0];
const co2Decimal = parseInt(co2Binary, 2);
console.log(co2Decimal);
console.log(oxygenDecimal * co2Decimal);
