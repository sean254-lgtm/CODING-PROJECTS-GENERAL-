function sumFibs(num){
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while(curr <= num){
    if(curr % 2 !== 0){
      sum += curr;
    }

    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return sum;
}

console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
