/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"

Notes:
  the returned string should only contain lowercase letters
*/


// Solution 

function kebabize(str) {
  const tmpStr = str.split("").filter(e => e.toLowerCase() !== e.toUpperCase()).join("")
  let res = tmpStr[0].toLowerCase();
  for(let i = 1; i < tmpStr.length; i++){
    if(tmpStr[i].toUpperCase() == tmpStr[i]){
      res = res + "-" + tmpStr[i].toLowerCase()
    } else {
      res += tmpStr[i]
    }
  }
  return res;
}