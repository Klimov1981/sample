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



function mySlice(arr, start = 0, end = arr.length) {
    const result = []
    
    // Ограничение границ

    start = Math.min(start, arr.length)
    end = Math.min(end, arr.length)

    // Отрицательные границы
    if(start < 0) start = Math.max(arr.length + start, 0)
    if(end < 0) end = Math.max(arr.length + end, 0)

    //Проходим по исходному массиву 

    for(let i = start; i < end ; i++) {
        result.push(arr[i])
    }
    return result
}
console.log(mySlice(users, 2, 4))