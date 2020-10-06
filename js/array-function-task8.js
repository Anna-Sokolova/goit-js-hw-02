// Первый способ через цикл for...of

function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line
  for (const number of array) {
    total += number;
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));

// Второй способ через цикл for с указанием метода .length и счетчиком

function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
