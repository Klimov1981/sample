const users = [
    { id: 1, name: "Александр", age: 25 },
    { id: 2, name: "Мария", age: 30 },
    { id: 3, name: "Иван", age: 22 },
    { id: 4, name: "Елена", age: 28 },
    { id: 5, name: "Дмитрий", age: 35 },
    { id: 6, name: "Анна", age: 27 },
    { id: 7, name: "Сергей", age: 32 },
    { id: 8, name: "Ольга", age: 29 },
    { id: 9, name: "Николай", age: 40 },
    { id: 10, name: "Татьяна", age: 33 }
];

// Функция mySlice принимает три параметра:

// arr — обязательный массив, который нужно "нарезать".
// start — необязательный индекс начала извлечения (по умолчанию 0).
// end — необязательный индекс окончания извлечения (по умолчанию длина массива).
// Параметры start и end могут быть как положительными, так и отрицательными числами.
function mySlice(arr, start = 0, end = arr.length) {
    const result = []
    
    // Ограничение границ

    start = Math.min(start, arr.length)
    end = Math.min(end, arr.length)

    // Отрицательные границы
    if(start < 0) start = Math.max(arr.length + start, 0) 
        // start ьожет быть отрицательным числом, считая с конца массива. Например, старт -2, длина массива 9. 9 - 2 = 7. То есть элемент с индксом 7, что в данном случае является вторым с конца элементом
    if(end < 0) end = Math.max(arr.length + end, 0) 
        // end  может быть отрицательным числом, считая с конца массива

   //Проходим по исходному массиву  

    for(let i = start; i < end ; i++) {
        result.push(arr[i])
    }
    return result
}
console.log(mySlice(users, 2, 4))

function myIndexOf(arr, item, from = 0){

     // Отрицательный from
    // if(from < 0) from = Math.max(arr.length + from, 0)
    
    // Ограничение границ

    // from = Math.min(from, arr.length)

    //Проходим по исходному массиву

    for(let i = from; i < arr.length; i++){
        if(arr[i]===item){
            return i
        }
    }
    return -1
}
const cities = [
    "Токио",
    "Нью-Йорк",
    "Лондон",
    "Париж",
    "Москва",
    "Пекин",
    "Дубай",
    "Сингапур",
    "Сидней",
    "Рим"
];

console.log(myIndexOf(cities, "Париж"));
console.log(cities.indexOf("Рим"));