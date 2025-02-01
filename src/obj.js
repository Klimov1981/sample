// при условии, что ззранее известно - только числовые свойства 
const myObj = {
  num: 3,
  copies: 8,
  price: 38,
}

function myObjSum(obj){
  let sum = 0
  for(key in obj){
    sum = sum + obj[key]
  }
  return sum
}

console.log(myObjSum(myObj))



