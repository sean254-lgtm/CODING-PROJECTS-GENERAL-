function findLongestWordLength(str){
  const words = str.split(" ");
  let longest = 0;
  for(let word = 0; word < words.length; word++){
    if(words[word].length > longest){
      longest = words[word].length;
    }
  }
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWordLength("May the force be with you"));
