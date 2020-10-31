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


/* Второй способ решения методом массива ForEach
function findLongestWord (string = "") {
    const arrFromStr = string.split(' ');
    let longestWord = arrFromStr[0];

    arrFromStr.forEach(word => { 
        if (longestWord.length < word.length) {
            longestWord = word;
    }
    })
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
*/
