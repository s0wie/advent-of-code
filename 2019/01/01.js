//1

fetch("01/01.txt")
  .then((response) => response.text())
  .then((text) => {
    const myList = text.split("\n");
    console.log(myList);
    let sum = 0;
    myList.forEach((item) => {
      const mass = Math.floor(item / 3) - 2;
      sum = sum + mass;
    });
    console.log(sum);
  });

//2

fetch("01/01.txt")
  .then((response) => response.text())
  .then((text) => {
    const myList = text.split("\n");
    console.log(myList);
    let sum = 0;
    myList.forEach((item) => {
      let fuel = Math.floor(item / 3) - 2;
      let moreFuel = fuel;
      while (fuel > 0) {
        fuel = Math.floor(fuel / 3) - 2;
        if (fuel > 0) {
          moreFuel += fuel;
        }
      }
      sum = sum + moreFuel;
    });
    console.log(sum);
  });

// 2 Adams rekursion
