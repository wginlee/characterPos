function countLetters(input){
  var resultObj = {}
  var noSpaces = input.toLowerCase().split(" ").join("");

  for (str of noSpaces){
    resultObj[str] ? resultObj[str] += 1 : resultObj[str] = 1;
  }

  return resultObj;
}

console.log(countLetters("Lighthouse in the house"));