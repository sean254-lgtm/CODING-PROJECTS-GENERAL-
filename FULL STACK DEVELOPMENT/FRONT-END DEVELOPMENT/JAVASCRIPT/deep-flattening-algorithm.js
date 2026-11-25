function steamrollArray (arr){
  const flattened = [];
  for(const item of arr){
    if(Array.isArray(item)){
      flattened.push(...steamrollArray(item))
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}

console.log(steamrollArray([[["a"]], [["b"]]]))

console.log(steamrollArray([1, [2], [3, [[4]]]]));
