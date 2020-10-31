// function mapArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));

// console.log(mapArray([-2.5, 0, 2.5]));




// Второй способ решения методом массива map()
function mapArray(array) {
  'use strict';
  const numbers = array.map(num => num * 10)
  
  return numbers;
}

console.log(mapArray([-2, 0, 2]));

console.log(mapArray([-2.5, 0, 2.5]));

