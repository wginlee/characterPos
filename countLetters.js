function countLetters(input){
  var resultObj = {}
  var lower = input.toLowerCase();

  for (var i = 0 ; i < lower.length - 1 ; i +=1 ){
    let str = lower.charAt(i);
      if (str !== " "){
        resultObj[str] ? resultObj[str] += (" " + i) : resultObj[str] = "" + i;
      }
  }

  return resultObj;
}

console.log(countLetters("Lighthouse In the house"));