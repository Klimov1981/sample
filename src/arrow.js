function myFilter(array, callback){
 const res = []
 for(let i = 0; i < array.length; i++){
  // Получаем результат вызова callback
  if(callback(array[i])){
   // Если результат истинный, добавляем элемент в результат
   res.push(array[i])
  }
 }
 return res
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = myFilter(numbers, function(num) {
  return num % 2 === 0;
})
console.log((evenNumbers))
console.log(numbers)