// main.js

// Підключаємо модуль URL (вбудований в Node.js)
const { URL, URLSearchParams } = require('url');

// Константи для варіанту 7
const date = "20230201";      // дата для запиту
const time_period = "m";      // період (month)

// Базовий URL сервера НБУ
const baseURL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation";

// Створюємо обʼєкт URL
const url = new URL(baseURL);

// Додаємо параметри через SearchParams
url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "true"); 

// Виводимо URL у консоль
console.log(url.toString());
