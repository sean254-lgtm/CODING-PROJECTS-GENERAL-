
function truncateString(str, int){
  if(str.length > int){
    return str.slice(0, int) + "...";
  }else{
    return str;
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
