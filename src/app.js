// console.log("Hello, from console");

// //задача 1 по переменным

// let admin, name;

// name = "Джон";
// admin = name;
// alert(admin);

// // Задача 2 по переменным

// let ourPlanetName = "Земля"
// let currentUserName = "Герасим"

// // Задача 3 по переменным 

// const BIRTHDAY = '18.04.1982'; // здесь допустимо, тк известно заранее

// const age = someCode(birthday); // здесь вычисляемое в ходе скрипта, заглавные не допускаются



// Функция для генерации случайного числа от min до max
function getRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Первый компьютер загадывает число
const secretNumber = getRandomNumber(1, 100);
console.log("Первый компьютер загадал: " + secretNumber + ".");

// Второй компьютер пытается угадать число
function secondCompThinking() {
 let min = 1;
 let max = 100;
 let guess;
 let attempts = 0;
 return {
  min,
  max,
  guess,
  attempts
 }
}

function game(secretNumber) {
 let secondCompMove = secondCompThinking()
 while (true) {
  // Используем бинарный поиск для угадывания
  secondCompMove.guess = Math.floor((secondCompMove.min + secondCompMove.max) / 2);
  secondCompMove.attempts++;
 
  console.log(`Компьютер 2: Пробую  число ${secondCompMove.guess}.`);
 
  if (secondCompMove.guess === secretNumber) {
      console.log(`Компьютер угадал число ${secretNumber} за ${secondCompMove.attempts} попыток!`);
      break;
  } else if (secondCompMove.guess < secretNumber) {
      console.log("Компьютер 1: Больше.");
      secondCompMove.min = secondCompMove.guess + 1; // Увеличиваем нижнюю границу
  } else {
      console.log("Компьютер 1: Меньше.");
      secondCompMove.max = secondCompMove.guess - 1; // Уменьшаем верхнюю границу
  }
 }
}

game(secretNumber);
