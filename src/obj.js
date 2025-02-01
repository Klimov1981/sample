function myObjSum(obj){
  let sum = 0

  // объект ли obj?

  if(typeof obj === 'object' && typeof obj !== null) {
    // проходим циклом по свойствам
    for(key in obj){
      //есть ли вложенные свойства
      if( obj.hasOwnProperty(key)){
        // сознаняем своство в value
        const value = obj[key]
        // дальше проверяем число в этом свойстве

        if(typeof value === 'number'){
          //добавляем к сумме
          sum += value
          // если это объект вызываем рекурсивно этот метод для этого объекта из value и добавляем результат к сумме
        } else if (typeof value === 'object') {
          sum += myObjSum(value)
        }
      }
    }
  }
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

console.log(myObjSum(testObj)); // 40