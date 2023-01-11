const arr =  [0, 1, null, 6, 'f', 5, 8];
const arrOnlyNumbers = arr.filter( element => typeof(element) === 'number');

let odd = 0;
let even = 0;
let zero = 0;
let result;

for(let i = 0; arrOnlyNumbers.length > i; i++) {
    if (arrOnlyNumbers[i] === 0) {
    zero++;
    } else if(arrOnlyNumbers[i] % 2 === 0) {
    even++;
    } else {
    odd++;
    }
}

result = 'even numbers: ' + even + ', odd numbers: ' + odd + ', zero symbols: ' + zero;

console.log(result)