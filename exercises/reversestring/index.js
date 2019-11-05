// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //Take Str into array
  // let stringArray = str.split('');
  // let stringArray = []
  // stringArray.push(str)
  // // call reverse method on array
  // stringArray.reverse();
  // // Join the array back into a string
  // // return the result
  // return stringArray.join('')

  function rev(str) {
    // .split() takes the string and puts into an array like ["H","E","L","L","O"]
    let array = str.split("")
    // .reverse()  makes the array ["O","L","L","E","H"]
      array.reverse()
      
      // .join() makes all the characters join like OLLEH
      let result = array.join("")
      return result
  }
}
rev("abc")
module.exports = reverse;
