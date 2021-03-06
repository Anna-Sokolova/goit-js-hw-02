// Task 1

const friends = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const numbers = [5, 10, 15];

const getItemsString = function (array) {
  let result = '';

  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};

getItemsString(friends);
getItemsString(numbers);

console.log(getItemsString(friends));

console.log(getItemsString(numbers));

// Результатом вызова функции должна быть пустая строка, если array - пустой массив



/* Второй способ решения методом массива ForEach

const getItemsString = function(array) {
    'use strict';
    let result = '';
  array.forEach((el, idx) => result += `${idx +1} - ${el}\n`)
    return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
*/