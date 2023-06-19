///1.
let ham = 4;
let fri = 4;
let friends = 3;

if (ham >= friends && fri >= friends) {
    console.log("Мы поели");
} else
    console.log("Мы идем в другое кафе");

///2.
let price = 1500;

if (price >= 1000 && price <= 1900) {
    console.log("Цена товара находится между 1000 и 1900");
} else {
    console.log("Цена товара не находится между 1000 и 1900");
}

///3.

let price1 = 2500;

if (!(price1 >= 1000 && price1 <= 1900)) {
    console.log("Цена товара не находится между 1000 и 1900");
} else {
    console.log("Цена товара находится между 1000 и 1900");
}

let price2 = 2500;

if (price2 < 1000 || price2 > 1900) {
    console.log("Цена товара не находится между 1000 и 1900");
} else {
    console.log("Цена товара находится между 1000 и 1900");
}

///4.

let season = 3;

if (season === 1) {
    console.log("Весна");
} else if (season === 2) {
    console.log("Лето");
} else if (season === 3) {
    console.log("Осень");
} else if (season === 4) {
    console.log("Зима");
} else {
    console.log("Попробуйте еще");
}

///5.
let a = 1;
let b = 2;
let c = 3;

if (a > b) {
    if (b > c) {
        console.log("Среднее число: " + b);
    } else if (a > c) {
        console.log("Среднее число: " + c);
    } else {
        console.log("Среднее число: " + a);
    }
} else {
    if (a > c) {
        console.log("Среднее число: " + a);
    } else if (b > c) {
        console.log("Среднее число: " + c);
    } else {
        console.log("Среднее число: " + b);
    }
}

///6.

let dayoftheweek = 6;

switch (dayoftheweek) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    case 6:
        console.log("Суббота");
        break;
    case 7:
        console.log("Воскресение");
        break;
    default:
        console.log("Неверный номер дня недели");
}

///7.

let operation = "+";
let num1 = 1;
let num2 = 2;
let result1;

switch (operation) {
    case "+":
        result1 = num1 + num2;
        console.log("Результат сложения: " + result1);
        break;
    case "-":
        result1 = num1 - num2;
        console.log("Результат вычитания: " + result1);
        break;
    case "*":
        result1 = num1 * num2;
        console.log("Результат умножения: " + result1);
        break;
    case "/":
        result1 = num1 / num2;
        console.log("Результат деления: " + result1);
        break;
    default:
        console.log("Неверная математическая операция");
}

///8.

let word = "Hello";

let result = word.replace(/[aeiou]/gi, '');

console.log(result);

///9.
let meters = 107;
let kilometers;

if (meters >= 1000) {
    kilometers = meters / 1000;
    if (meters % 10 === 1) {
        console.log(meters + " метр это " + kilometers + " километр");
    } else if (meters % 10 >= 2 && meters % 10 <= 4) {
        console.log(meters + " метра это " + kilometers  + " километра");
    } else {
        console.log(meters + " метров это " + kilometers + " километров");
    }
} else {
    console.log(meters + " метр это " + meters + " метр");
}

