
function myObjSum(obj) {
  // переменная для записи результатов сложения
  let sum = 0
  // если obj объект и не null
  if (typeof obj === "object" && typeof obj !== "null") {
    //проходим циклом по свойствам
    for (key in obj) {
      //проверяем на наличие  свойств у obj
      obj.hasOwnProperty(key)
      // сохраняем значения свойства в value
      const value = obj[key]
      // если в проверяем свойстве число
      if (typeof value === "number") {
        // прибавляем его к общей сумме
        sum += value
        // иначе если это свойство объект
      } else if (typeof value === "object") {
        // вызываем этот метод для текщего свойства - объекта
        sum += myObjSum(value)
      }
    }
  }
  // возвращаем итоговыый результат
  return sum
}
// тестовый объект 
const testObj = {
  a: 10,
  b: "hello",
  c: {
      d: 5,
      e: "world",
      f: {
          g: 7,
          h: [3, 4, "test", { i: 2 }]
      }
  },
  j: [1, 2, "string", null, { k: 8 }]
};


console.log(myObjSum(testObj))


// задача со звёздочкой

const myObj = {
  name: "Alice",
  age: 25,
  city: "New York",
  country: "USA"
}
// способ более короткий
// Object.keys работает только с собственными, не наследованными , перечисляемыми свойствами
function sortedArr(obj){
  const arr = Object.keys(obj)
  arr.sort((a, b) => b.length - a.length)
  return arr
}
console.log(sortedArr(myObj))
// способ второй используем цикл для перебора ключей
function sortedByLength(obj) {
  let arr = [];
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  // Сортируем массив по длине ключей
  arr.sort((a, b) => b.length - a.length);
  return arr;
}

console.log(sortedByLength(myObj))