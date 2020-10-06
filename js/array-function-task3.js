// const words = 'The quick brown fox jumped over the lazy dog';

function findLongestWord(string = '') {
  let arriveWords = string.split(' ');
  let longestWord = arriveWords[0];

  for (let i = 1; i < arriveWords.length; i += 1) {
    if (arriveWords[i].length > longestWord.length) {
      longestWord = arriveWords[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'
