const arr =  [1, 2, 1, 1, 1];
let result;
let i = 0;

if (arr.every(el => el === arr[0])) {
    result = true;
} else {
    result = false;
}

console.log(result)