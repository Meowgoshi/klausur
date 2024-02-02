/*
let arr;
arr = ["a","b","c","d"];
console.log(arr[0] + arr[3]);
*/
/*
let arr;
arr = ["a","b","c","d"];
console.log(arr[arr.length-1]);
*/
/*
var struc =
{
level1:
{
level2:
{
param1: 3.14,
param2: 10.01
}
}
};

console.log("param1: " + struc.level1.level2.param1);
console.log("param1: " + struc.level1.level2.param2);
*/
/*
const prompt = require('prompt-sync')({sigint: true});

startApp();
function startApp() {
	output(calculator(getNum1(),getNum2(),getOp()));
}

function getNum1() {
	return parseInt(prompt("Zahl1?: ")) ;
}

function getNum2() {
	return parseInt(prompt("Zahl2?: ")) ;
}

function getOp() {
	return prompt("OP?: ");
}

function calculator(a,b,op) {
	switch (op) {
		case "+": // add()
			return add(a,b);
		case "-": // sub()
			return subtract(a,b);
		case "*": // mul()
			return multiply(a,b);
		case ":": // div()
		case "/": // div()
			return divide(a,b)
		default: // Error
			return "Nope";
	}
}
function output(outputData) {
	console.log(outputData);
}
*/