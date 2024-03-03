// EXAMPLE 1 - Check if String contains only Letters and Numbers in JavaScript

function onlyLettersAndNumbers(str) {
  return /^[A-Za-z0-9]*$/.test(str);
}

const str1 = 'hello42';
const str2 = 'contains spaces';
const str3 = 'with symbols !@#$%^&';

console.log(onlyLettersAndNumbers(str1)); // 👉️ true
console.log(onlyLettersAndNumbers(str2)); // 👉️ false
console.log(onlyLettersAndNumbers(str3)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if String contains only Letters and Numbers using `match()`

// function onlyLettersAndNumbers(str) {
//   return str.match(/^[A-Za-z0-9]*$/) !== null;
// }

// const str1 = 'hello42';
// const str2 = 'contains spaces';
// const str3 = 'with symbols !@#$%^&';

// console.log(onlyLettersAndNumbers(str1)); // 👉️ true
// console.log(onlyLettersAndNumbers(str2)); // 👉️ false
// console.log(onlyLettersAndNumbers(str3)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove non-letters and non-numbers from a string

// const str = 'WITH symbols !@#$%^&';

// const replaced = str.replace(/[^a-z0-9]/gi, '');
// console.log(replaced); // 👉️ WITHsymbols

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a String contains any Letters in JavaScript

// function containsAnyLetters(str) {
//   return /[a-zA-Z]/.test(str);
// }

// console.log(containsAnyLetters('bobby')); // 👉️ true
// console.log(containsAnyLetters('ABC')); // 👉️ true
// console.log(containsAnyLetters('123')); // 👉️ false
// console.log(containsAnyLetters(' ')); // 👉️ false
// console.log(containsAnyLetters('')); // 👉️ false

// if (containsAnyLetters('hello')) {
//   // 👇️ this runs
//   console.log('✅ string contains at least 1 letter');
// } else {
//   console.log('⛔️ string does NOT contain any letters');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove the non-letters from a string in JavaScript

// function removeNonLetters(str) {
//   return str.replace(/[^a-z]/gi, '');
// }

// console.log(removeNonLetters('b!@32ob%by')); // 👉️ bobby
// console.log(removeNonLetters('ab@#$c%^d')); // 👉️ abcd

// ------------------------------------------------------------------

// // EXAMPLE 6 - Check if a String contains any Letters using `String.match`

// function removeNonLetters(str) {
//   return str.match(/[a-zA-Z]/) !== null;
// }

// console.log(removeNonLetters('abc123')); // 👉️ true
// console.log(removeNonLetters('!@#$')); // 👉️ false
// console.log(removeNonLetters('')); // 👉️ false
