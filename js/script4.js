"use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = + prompt("Вам есть 18?", "18");
// console.log(answer +5);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);

console.log(typeoff(answers));
console.log(typeoff(null));

