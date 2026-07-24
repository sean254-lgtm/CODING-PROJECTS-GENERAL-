function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the character code of the next letter is not consecutive
    if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
      // Return the missing letter
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  // If no letters are missing, return undefined
  return undefined;
}

console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
