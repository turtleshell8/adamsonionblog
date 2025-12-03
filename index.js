console.log("hello world");
console.log("anyway seeing that your here i want to show you some extra");
console.log("stuff i wanted to add but couldnt because itll make it ugly");
console.log("https://www.calculatorsoup.com thats my fav calculator website thats it");
// creds to https://www.programiz.com/javascript/examples/simple-calculator for the calculator i aint gonna learn js
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);
