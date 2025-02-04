// задача 1
function firstLetterToUpperCase(str) {
  if (!str) { return str }
  return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(firstLetterToUpperCase("hjkhsjdhfj"));

// задача 2
function makeSlice(str, size) {
  // Еслтрока короче или равна размеру, возвращаем её без изменений
  if (str.length <= size) {
    return str
  }
  // Обрезаем строку до указанного размера
  let newStr = str.slice(0, size);

  // Определяем список знаков препинания и пробела
  const punctuation = ".,!?;:-()[]{}'\" ";

  // Находим последний пробел или знак препинания в обрезанной строке
  for (let i = newStr.length - 1; i >= 0; i--) {
    const char = newStr[i]
    if (punctuation.includes(char)) {
      return newStr.slice(0, i + 1) + "..."
    }
  }

  // Если ничего не найдено, возвращаем обрезанную строку с многоточием
  return `${newStr}...`;
}

console.log(makeSlice("В JavaScript строка является примитивным типом данных (string).", 29));

//Задача 3

function isSubstr(str1, str2){
  return str1.includes(str2) || str2.includes(str1)
}
console.log(isSubstr("xyz", "abcdef"))