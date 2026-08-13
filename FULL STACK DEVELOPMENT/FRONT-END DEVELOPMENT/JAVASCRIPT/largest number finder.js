function largestOfAll(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    // Start with the first number in the sub-array as the largest candidate
    let largestNumber = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }

    // Store the largest number found for this sub-array
    results.push(largestNumber);
  }

  return results;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
