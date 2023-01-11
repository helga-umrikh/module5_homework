const arr =  [1, null, 6, 'f', 5, 8];
const arrOnlyNumbers = arr.filter( element => typeof(element) === 'number');

let odd = 0;
let even = 0;
let result;

for(let i = 0; arrOnlyNumbers.length > i; i++) {
    if (arrOnlyNumbers[i] % 2 === 0) {
    even++;
    } else {
    odd++;
    }
}

result = 'even numbers: ' + even + ' and odd numbers: ' + odd;

console.log(result)