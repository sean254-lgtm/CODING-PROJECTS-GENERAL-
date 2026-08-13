function findElement(arr, fx){
  
  //transversing through the array elements
  for(let i = 0; i < arr.length; i++){

    //comparing the value x along with the test elements
    let x = arr[i];

    //if the element is at per with the call back function it passes the true test
    if(fx(x)){
      return x;
    } 
  }
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(x) { return x % 2 === 0; }))
console.log(findElement([1, 2, 3, 4], function(num) { return num > 2; }));
