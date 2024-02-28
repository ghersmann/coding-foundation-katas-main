function zipStrings(strA, strB) {
  //Which string is the longest string? To ensure we get all characters
  const maxLength = Math.max(strA.length, strB.length);

  //Declare empty string as result
  let result = "";

  //Loop over the parameter strings, ending with the longest one, defined above in maxLength
  for (let i = 0; i < maxLength; i++) {
    //make sure to loop through all of strA
    if (i < strA.length) {
      //add the character at index[i] in strA to result
      result += strA[i];
    }
    //Loop through all of strB
    if (i < strB.length) {
      //add the character at index[i] to result
      result += strB[i];
    }
  }
  //Log what the function found
  console.log(result);

  return result;
}
