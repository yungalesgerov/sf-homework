"use strict"
// Напишите программу, которая работала бы следующим образом: в prompt вводится значение.
//  С помощью унарного плюса (арифметический оператор)
//  необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

// let isNum = prompt("введите что-то");

// isNum = +(isNum);
// let x = NaN;    
// console.log(typeof (isNum % 2 == 0));
// console.log(isNum/1);
// // console.log(isNaN(isNum));
// if(isNaN(isNum)) {
//     console.log("trouble");
// }
// else {
//     if(isNum %2== 0) {
//         console.log(`${isNum}` + "-четное число");
//     }   else if(isNum%2==1) {
//         console.log(`${isNum}` + "-нечетное число");
//     } else console.log("chto-to poshlo ne tak");
// }

// Дана переменная x, которая может принимать любое значение.
//  Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

// let x = typeof 14;

// if (x === `number`) {
//     console.log(x + "-число");
// } else if (x === `string`) {  
//     console.log(`${x}` + "-string");
// } else if (x === `boolean`) {
//     console.log(`${x}` +"-boolean");
// } else {
//     console.log("тип x не определен");
// }


// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
// let str = "hello";
// let reverse = str.split("").reverse().join("");
// console.log(reverse);

// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

//  let x = Math.random(1,100);

//  console.log(x *100);

// Дан произвольный массив. Необходимо вывести количество элементов массива,
//  затем перебрать его и вывести в консоль каждый элемент массива.

// let arr = [1, 2, 3, 4, "bool", "y"];
// console.log(arr.length);

// for(let elem of arr) {
//     console.log(elem);
// }

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

// let arr = [1,1,1,1,2,1];
//     // console.log(elem++);

//     for (let i = 0; i < arr.length; i++) {
//        if(arr[0] === arr[i]) {
//            console.log("true"); 
//        } else console.log("false");
//     }

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// let arr = [0, 1, 2, 3, 4, 5, `~`, undefined];
// let countEven = 0;
// let countOdd = 0;
// let countAnother = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0) {
//         countEven += 1; 
//     }
//     else if(arr[i] %2==1) {
//         countOdd +=1; 
//     }
//     else if ( arr[i] != `number`) {
//         countAnother += 1;
//     }
    
// }
// console.log(countEven);
// console.log(countOdd);
// console.log(countAnother);

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// let cars = new Map([
//     ["lamba", "aventador"],
//     ["vaz", "2107"],
//     ["mitsubishi", "evolution"]
// ]);


// for(let elem of cars) {
//     console.log( "ключ - " + elem[0]+ ", " + "значение - " + elem[1]);
// }