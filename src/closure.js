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