// 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i < 11; i++) {
    if (i == 0) { console.log(i + ' this is zero') } else(i % 2 == 0) ? console.log(i + ' this is even number') : console.log(i + ' this is not even number')
}

// 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);


// 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
let GetValue = a => a = Number(Math.floor(Math.random() * 9));
let Sum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
let MinValue = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        };
    }
    return min;
}
let ValueSearch = (array) => {
    array.includes(3) ? console.log('There is 3 in this array') : console.log('There is no 3 in this array');
}

const arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = GetValue();
}
console.log(arr);
console.log('Sum = ' + Sum(arr));
console.log('Minimal value is ' + MinValue(arr));
ValueSearch(arr);


// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
for (var x = 0; x < 20; x++) {
    var str = "";
    for (var y = 0; y <= x; y++) {
        str += "x";
    }
    console.log(str);
}