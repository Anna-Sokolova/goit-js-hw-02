function formatString(string, maxLength = 40) {
  return string.length <= maxLength
    ? string
    : string.slice(0, maxLength) + '...';
}

// **** Второй способ решения

// function formatString(string, maxLength = 40) {
//   if (string.length <= maxLength) {
//     return string;
//   }
//   if (string.length > maxLength) {
//     return string.slice(0, maxLength) + '...';
//   }
// }

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);