// Первый способ решеия

const calculateEngravingPrice = (message = '', pricePerWord = 0) => {
  let wordsNumber = message.split(' ').length;
  let total = wordsNumber * pricePerWord;
  return total;
};

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

// Второй способ решения

const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
  pricePerWord * message.split(' ').length;

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

console.log(calculateEngravingPrice('Uno', 100));
