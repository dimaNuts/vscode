//рисуем котиков
/*var drawCats = function (howManyTimes) {
   for (var i = 1;
      i < howManyTimes;
      i++) {
      console.log(i + "." + " =^.^= ");
   };
}
drawCats(5);*/

/*console.log("Вот длинная строка".slice(0, 6));
var age=12;
age=23;
console.log(age);*/
/*var numberOfSimblings = 1 + 3;
var numberOfCandies = 8;
console.log(numberOfCandies / numberOfSimblings);*/
/*var secondsInMinute = 60;
var minuteInHour = 60;
var secondsInHour = secondsInMinute * minuteInHour;
console.log(secondsInHour);
var hoursInDay = 24;
var secondInDay = secondsInHour * hoursInDay;
console.log(secondInDay);
var daysInYear = 365;
var secondsInYear = secondInDay * daysInYear;
console.log(secondsInYear);
var age = 34;
++age;
--age;
console.log(age * secondsInYear);*/
/*var x = 10;
x /= 5;
console.log(x);*/
/*var greeting = " Hi";
var name = " Nick ";
var total = (((greeting + name).length) * 2);
console.log(total);*/
//регистр и срез(объединение) строк
/*var longString = " It is long string !";
console.log((longString.slice(7, 20)).toUpperCase());
var longString = " It is Long String !";
console.log((longString.slice(7, 20)).toLowerCase());
var sillyString = "эЙ, кАК	деЛа?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString); */
/*function testSum(a, b) {
   return a + b;
}
let result = testSum(1, 9);
console.log(result);
*/
/*function showMessage() {
   let message = " Hi, Im JS!";
   alert(message);
}
showMessage();
//alert(message); будет ошибка, т.к. переменная видна только внутри ф-ции*/
/*let userName = 'Вася';
function showMessage() {
   userName = 'Петя'
   let message = 'Привет, ' + userName;
   alert(message);
}
alert(userName);
showMessage();
alert(userName);*/ // ф-ция обладает полным доступом к внешним переменным и может изменять их значение
/*внешняя переменная используется,только если внутри ф-ции не такой локальной.
если одноименная переменная объявляется внутри ф-ции, тогда она перекрывает внешнюю.
let userName = 'Вася';
function showMessage() {
   let userName = 'Петя';
   let message = 'Привет, ' + userName;
   alert(message);
}
showMessage();
alert(userName);*/
/*// если параметр text не указан, то значением будет "text no add"
function showMessage(from, text = "text no add") {
   alert(from + ": " + text);
}
showMessage("Ann");*/
/*//вызов return может быть несколько
function checkAge(age) {
   if (age > 25) {
      return true;
   } else {
      return confirm('А родиетели разрешили?');
   }
}
let age = prompt('Сколько вам лет?', 15);
if (checkAge(age)) {
   alert('Доступ получен');
} else {
   alert('Доступ закрыт');
}*/
/*
function testOperation(a, b) {
   return ((a * b) % (a + b)) * 2;
}
console.log(testOperation(3, 2));*/

/*function testOperation(a, b) {
   var x;
   x = ((a * b) % (a + b)) * 2;
   return x;
}
console.log(testOperation(2, 2));*/
/*//if
function testIf(a, b) {
   var x;
   if (a > b) {
      x = a + b;
   } else {
      x = a * b
   }
   return x;
}
console.log(testIf(3, 2));*/
/*//if else
function testIf(a, b) {
   var x;
   if (a < b) {
      x = a + b;
   } else if (a > b) {
      x = a - b
   } else {
      x = a * b;
   }
   return x;
}
console.log(testIf(1, 2));*/
/*//switch позволяет выбирать варианты
function testCase(a) {
   var x;
   switch (a) {
      case 0:
         x = 'ноль';
         break;
      case 1:
         x = 'один';
         break;
      case 2:
         x = 'два';
         break;
      case 3:
         x = 'три';
         break;
   }
   return x;
}
console.log(testCase(3));*/
/*//цикл for
for (let i = -5; i <= 5; i = i + 1) {
   console.log(i = + i);
}*/
/*
function testFactorial(a) {
   var x = 1;
   for (let i = 1; i <= a; i = i + 1) {
      console.log(x = i * x);
   }
}
testFactorial(8);*/
//сумма четных чисел от 0 до а 
/*function testWhile(a) {
   var x = 0;
   var y = 1;
   while (y <= a) {
      if (y % 2 == 0) {
         x = x + y;
      }
      y = y + 1;
   }
   return x;
}
console.log(testWhile(1240));
//прерывание цикла
for (i = 1; i<10; i=i+1){
   if (i==5){
      break;
   }
   console.log('i= '+i);
}
//игнорирует 5(прер-ет итерацию цикла)
for (i = 1; i < 10; i = i + 1) {
   if (i == 5) {
      continue;
   }
   console.log('i= ' + i);
}
//метка
function printText() {
   document.write("Hello world");
};
printText();
function printText(a) {
   document.write(a);
}
printText("Hello world");
function mySquare(x) {
   return x * x;
}
console.log(mySquare(8));
function divideOneTwo(x) {
   if (x != 0) {
      return 1 / x;
   } else {
      return "а на ноль делить нельзя!";
   }
}
console.log(divideOneTwo(0.25));
function factorial(x) {
   if (x <= 1) return 1;
   return x * factorial(x - 1);
}
console.log(factorial(4));
function naturalNumber(n) {
   if (n <= 1) return n;
   return naturalNumber(n - 1) + " " + n;
}
console.log(naturalNumber(8));*/


//фрилансер

/*console.log('Учим JS');
['Учим', 'JS'].forEach(alert);*/

//console.log('Учим' + ' JS');

//примеры выражения
/*let num = 4;//выражение(expression) с присвоением
console.log(num);
' Учим' + ' JS';// выражение без присвоения*/
// пример блока инструкций
/*function names() {
   console.log('Учим');
   console.log('JS');
}
names();*/

//Ключевое слово для объявления переменной
/*
let age;
let info124;
let $dollar;
let _names;
$dollar = 'Dollar';
console.log($dollar);
let myName = 'free',
   myAge = 34;
myMessage = 'Живи, а работай в свободное время!';
console.log(myName, myAge, myMessage);*/
//передача значений переменных
/*info124 = myMessage;
console.log(info124);*/
/*for (let i = 0; i < 3; i++) {
   console.log(i);
}
for (let i = 0; i < 3; i++) {
   console.log(i);
}*/
//const age = 18;
//age = 20; нельзя изменить константу

//тип  данных
/*let userName;
console.log(typeof userName);
console.log(userName);
if (userName === undefined) {
   console.log('Переменная не определена');
} else {
   console.log('Переменная определена');
}
if (typeof userName === 'undefined') {
   console.log('Переменная не определена');
} else {
   console.log('Переменная определена');
}*/
//строки
let userAge = 32;
let userAgeInfo = `Возраст ${userAge}`;
console.log(userAgeInfo);





