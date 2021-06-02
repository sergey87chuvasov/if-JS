"use strict"


// 1 часть - Работа с переменными:

let user = "John Doe";
console.log(user);

let student = "Sergey";
console.log('Выведет имя:', student);

user = student;
// выведет имя Sergey, тк перезаписали занчение переменной student в user
console.log(user);

console.log(student);
// значение в переменной тоже не менялось


// 2 часть - Работа с примитивами:

let test = 1;
++test;
// «префиксная форма»-как и test++«постфиксная форма» увел знач. на +1,с небольшой разницей
console.log(test);

test+=1; // test = test + 1 увеличиваем значение и получаем =3
console.log(test);

test-=1;
console.log(test); // test = test - 1  уменьшаем значение и получаем =2

//приведите test к типу bool;

test = Boolean(test);
console.log(typeof test);

// Задача 1
/* Дан массив [2, 3, 5, 8]. 
С помощью цикла for найдите произведение элементов этого массива. 
Результат выведите в консоль. */

const arr  = [2, 3, 5, 8];  // индекс массива 0,1,2,3; длинна массива = 4;
let multipl = 1; // ставим начальное знач 1 тк умножать на 0 нет смысла; 1*2*3*5*8
for (let i = 0; i < arr.length; i++) {
    multipl = multipl*arr[i]
    console.log(multipl); // 2,6,30,240
}
console.log(multipl); //240

 //1-1

const arr1  = [2, 3, 5, 8];  // индекс массива 0,1,2,3; длинна массива = 4;
let multipl1 = 2; // ставим начальное знач 2 это первый индекс массива 2*3*5*8
for (let i = 1; i < arr.length; i++) {  // i = 1 тк мы уже начинаем с 2(i=0)
    multipl1 = multipl1*arr1[i]
    console.log(multipl1); // 6,30,240
}
console.log(multipl1); //240

// Задача 2
/*
Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. 
С помощью цикла for и оператора if выведите в консоль те элементы массива, 
которые больше 5-ти, но меньше 10-ти. */

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {  // применили логический оператор И &&
        console.log('Вывести число:', arr2[i]) // 8,6
    }
}

/*  Задача 3 - Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. 
С помощью цикла for и оператора if выведите в консоль четные элементы массива. 
0 - это четное число - но тут убрал его для вывода */
const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
    if (!(arr3[i] % 2)) {
        console.log('Вывести четное число:', arr3[i])
    }
}

/* Задача 4 - Функция palindrome (Слово палиндром может читаться справа-налево 
и слева-направо одинаково. Прим "шалаш".):
создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, 
является ли переданное функции слово палиндромом или нет. */

function isPalindrome (words) {
  // преобраз букв в нижний регистр (на всякий случай) можно и toApperCase
     words = words.toLowerCase()
  // сраниваем наше слово с перевернутым словом
  // метод split - преобр слово в массив из букв ('ш','а','л','а','ш') (добавл пустую строку)
  // метод reverse - переворачивает массив
  // метод join - преобразует массив в слово (убирает пустую строку - шалаш)
   return words === words.split('').reverse().join('')
}
console.log(isPalindrome('шаЛаш')); //true
console.log(isPalindrome('шаГраш')); //false

// 2 вариант 

const isPalindrome2  = str => {
    str = str.toLowerCase();
    let str2 = str.split('');
    str2 = str2.reverse();
    str2 = str2.join('');
    if (str==str2) return true;
    else return false;

    return str2;
}
console.log(isPalindrome2('шалаш')); // true
console.log(isPalindrome2('шалгаш')); // false

/* Задача 5
Функция min(a, b) и функция max(a,b):
напишите функцию min(a,b), которая возвращает меньшее из чисел;
напишите функцию max(a,y), которая возвращает большее из чисел;
попробуйте переписать функцию, используя тернарный оператор.
*/

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(3,22));
  console.log(min(-3,0));


  function min(a, b) {
    return a < b ? a : b;
  }


  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(max(4,12));
  console.log(max(-3,3));

  function max(a, b) {
    return a > b ? a : b;
  }

  /* Задача 6
Замена элементов массива:
создайте массив с десятью случайными элементами от 0 до 100;
напишите функцию, которая будет заменять все 0 на строку 'zero';
выведите полученный массив в консоль 
(пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).
*/

let arr5 = [1, 5, 10, 33, 100, 50, 2, 7, 80, 0];

function changeZero () {
  
  let arr5toString = arr5.toString(); // преобразовали массив в строку (это не массив)
  // console.log(arr5toString);
  // console.log(typeof arr5toString);
  let arr5toPseudo = arr5toString.split(','); // преобр строку обратно в массив
  // console.log('arr5toPseudo ' + arr5toPseudo); // вывели массив
  let resultArr = []; // иниц пустой массив
  for (let i = 0; i < arr5toPseudo.length; i++) {
    if(!arr5toPseudo[i].includes('0')){ // проверяет, содержит ли строка заданную подстроку
      resultArr.push(+arr5toPseudo[i]); // если нет склад в resultArr элемент как число
    } else {
      var regex = /0/gi; // регуляр выражение для поиска '0'
        let element = arr5toPseudo[i].replace(regex, 'zero'); // заменяем 0 на зиро и склад в массив резулАрр
        resultArr.push(element);
      }
  }
  console.log(resultArr);
 }
changeZero ();