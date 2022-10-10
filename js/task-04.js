// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні 
// збільшувати і зменшувати його значення на одиницю.

//     Створи змінну counterValue, в якій буде зберігатися поточне 
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або 
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const takeNumberRef = document.querySelector(".takenumber")
const addNumberRef = document.querySelector(".addnumber")
let counterValue = 0;

addNumberRef.addEventListener('click', (event) => {
    counterValue = counterValue + 1;
    const valueRef = document.querySelector('span')
    valueRef.textContent = counterValue;
});

takeNumberRef.addEventListener('click', (event) => {
    counterValue = counterValue - 1;
    const valueRef = document.querySelector('span')
    valueRef.textContent = counterValue;
});
