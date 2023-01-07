a = prompt('Please enter your value');
a = +a;

if (typeof(a) == NaN) {
    alert(a + " is not a number!");
} else if (a % 2 === 0) {
    alert(a + ' is an integer number');
} else if (a % 2 !== 0) {
    alert(a + ' is an odd number');
}