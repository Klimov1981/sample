function createLogger() {
 const messages = [] 
 return {
   log: function(message) { 
    if(typeof(message) === "string"){
     messages.push(message)
    } else {
     console.log("Сообщение должно быть строкой")
    }
   },
   getLogs: function() {
     return messages
   }
 }
}

// Почему массив messages недоступен извне?
// Область видимости:

// Массив messages объявлен внутри функции createLogger. Это означает, что он существует только в области видимости этой функции.

// Замыкание:

// Методы log и getLogs имеют доступ к массиву messages, потому что они созданы внутри той же функции (createLogger). Они "замыкают" на себе переменную messages.

// Инкапсуляция:

// Поскольку messages не возвращается напрямую и не присваивается глобальной переменной, доступ к нему возможен только через методы объекта, возвращаемого функцией createLogger.
const logger = createLogger();

logger.log("Первое сообщение");
logger.log("Второе сообщение");

console.log(logger.getLogs()); // ["Первое сообщение", "Второе сообщение"]

// Попытка получить доступ к messages напрямую
console.log(logger.messages); // undefined

// задача 2

function createRandomGenerator(min, max) {
 // Проверяем типы и условия при создании генератора
 if (typeof min !== "number" || typeof max !== "number") {
   console.log("min и max должны быть числами")
   return function () {
     return null // Возвращаем функцию, которая ничего не делает
   }
 }
 if (min >= max) {
   console.log("min должно быть меньше max")
   return function () {
     return null // Возвращаем функцию, которая ничего не делает
   }
 }

 // Возвращаем функцию для генерации случайных чисел
 return function () {
   return Math.floor(Math.random() * (max - min) + min)
 }
}

const generateRandom = createRandomGenerator(1, 10)
console.log(generateRandom()) // Случайное число от 1 до 10
console.log(generateRandom()) // Другое случайное число от 1 до 10

const invalidGenerator = createRandomGenerator("1", 10); // Ошибка: min и max должны быть числами
const invalidGenerator2 = createRandomGenerator(10, 1); // Ошибка: min должно быть меньше max