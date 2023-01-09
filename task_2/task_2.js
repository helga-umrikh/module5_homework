const x = true;
let result;

switch(typeof(x)) {
    case 'number':
        result = 'x - is a number';
        break;
    case 'string':
            result = 'x - is a string';
            break;
    case 'boolean':
        result = 'x - is a boolean';
        break;
    default:
        result = 'Type of x is undefined!'
}

console.log(result)