// Part 1

fetch("02/02.txt")
  .then((response) => response.text())
  .then((text) => {
    let myList = text.split(",");
    console.log(myList);
    // for (i = 0; i < 20; i++) {
    if (myList[0] == 1) {
      let firstIndex = myList[1];
      let secondIndex = myList[2];
      let outputIndex = myList[3];
      console.log(outputIndex);
      myList[outputIndex] =
        parseInt(myList[firstIndex]) + parseInt(myList[secondIndex]);
      console.log(myList[outputIndex]);
    } else if (myList[i] == 2) {
      let firstValue = myList[parseInt(myList[i + 1])];
      let secondValue = myList[parseInt(myList[i + 2])];
      let outputIndex = myList[parseInt(myList[i + 3])];
      myList[outputIndex] = firstValue * secondValue;
      console.log(myList[outputIndex]);
    }
    // }
  });

// använd switch? case och break; eller while.
