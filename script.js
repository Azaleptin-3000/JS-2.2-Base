                                         
        //1. Переменные и типы данных

let firstName = "Алексей"; // строка
let age = 54;      // число
let city = "Красногорск"; // строка

// Определение типов данных
console.log(typeof firstName); // "string"
console.log(typeof age);  // "number"
console.log(typeof city); // "string"


        //2. Конкатенация строк

let firstName = "Алексей";
let lastName = "Косицын";

// Создание строки с полным именем
let fullName = firstName + " " + lastName;

// Вывод полного имени
console.log(fullName); // "Алексей Косицын"


        //3. Преобразование типов

// Создаем переменную, содержащую строку с числом
let strNumber = "18";

// Преобразуем строку в число
let num = Number(strNumber);

// Проверяем, является ли число целым
let isInteger = Number.isInteger(num);

// Выводим результат
console.log(Число: ${num});
console.log(Является целым: ${isInteger});


        //4. Методы строк

// Создаем строковую переменную
let text = "JavaScript is fun!";

// Получаем подстроку "fun"
let substring = text.substring(15, 18);

// Преобразуем подстроку в заглавные буквы
let upperCaseSubstring = substring.toUpperCase();

// Выводим результат
console.log(upperCaseSubstring); // Выведет: FUN


        //5. Шаблонные строки

const товар = "Ноутбук";
const цена = 50000;

const сообщение = Цена на ${товар} составляет ${цена} рублей.;
console.log(сообщение);


        //6. Работа с числами

// Создаем переменную с вещественным числом
const вещественноеЧисло = 12.7;

// Округляем число до ближайшего целого
const округленноеЧисло = Math.round(вещественноеЧисло);

// Выводим результат
console.log(округленноеЧисло); // 13


        //7. Сравнение значений

// Создаем две переменные с числовыми значениями
const число1 = 10;
const число2 = 70;

// Определяем, какое из чисел больше, и сохраняем результат в булевой переменной
const большеПервого = число2 > число1;

// Выводим результат
console.log(большеПервого); // true


        // 8. Написание литералов
const myInfo = {
    firstName: "Алексей",
    age: 54, // пример возраста
    favoriteColor: "фиолетовый"
};


        // 9. Методы чисел

let number = 3.1415926; // Исходное число
let roundedNumber = number.toFixed(2); // Округляем до двух знаков после запятой

console.log(roundedNumber); // Вывод: "3.14"


        // 10. Преобразование строки в массив

let fruitString = "apple, orange, banana"; // Создаем строковую переменную
let fruitArray = fruitString.split(", "); // Преобразуем строку в массив

console.log(fruitArray); // Вывод: ["apple", "orange", "banana"]


        // 11. Проверка на NaN

let result = "привет" / 3; // Некорректное математическое выражение

// Проверка, является ли результат NaN
if (isNaN(result)) {
    console.log("Результат является NaN");
} else {
    console.log("Результат: " + result);
}


        // 12. Многострочный текст

const multiLineText = `Первая строка.
Вторая строка.
Третья строка.`;

console.log(multiLineText);


        // 13. Преобразование данных

// Создаем переменную с булевым значением true
let boolValue = true;

// Преобразуем булевое значение в строку
let stringValue = String(boolValue);

// Определяем тип данных результата
let typeOfResult = typeof stringValue;

console.log(stringValue); // Вывод: "true"
console.log(typeOfResult); // Вывод: "string"


        // 14. Использование Symbol

// Создаем символ с описанием "id"
const idSymbol = Symbol("id");

// Создаем объект
const myObject = {
    [idSymbol]: 123, // Используем символ в качестве ключа
    name: "Example"  // Обычное строковое свойство
};

// Выводим значения свойств объекта
console.log(myObject[idSymbol]); // Вывод: 123
console.log(myObject.name);      // Вывод: "Example"

// Проверяем наличие свойства с символом
console.log(myObject.hasOwnProperty(idSymbol)); // Вывод: true
console.log(myObject.hasOwnProperty("name"));   // Вывод: true


        // 15. Работа с массивом
        
// Создаем массив с несколькими числами
const numbers = [10, 20, 30, 40, 50];

// Определяем количество элементов в массиве
const count = numbers.length;

// Выводим результат
console.log(count); // Вывод: 5
