// main.js

const { URL } = require('url');

// Константи для варіанту 7
const date = "20230201";
const time_period = "m";

// Базовий URL сервера НБУ
const baseURL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation";

// Створюємо обʼєкт URL
const url = new URL(baseURL);

// Додаємо параметри через SearchParams
url.searchParams.append("date", date);
url.searchParams.append("period", time_period);
url.searchParams.append("json", "true");   // json=true

// Виводимо URL у консоль
console.log(url.toString());

// --- Перевірка URL ---
const fetch = require('node-fetch'); // якщо Node.js < 18, встанови: npm install node-fetch

fetch(url.toString())
  .then(res => res.json())
  .then(data => {
    console.log(data); // виведе дані від сервера
  })
  .catch(err => console.error(err));
