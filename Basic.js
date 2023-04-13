// Output
console.log("Hello World");

// variable, typeof value
var text = "Sample Text";
console.log(text);
console.log(typeof text);

// number type variable
var num = 20;
console.log(num);
console.log(typeof num);

// value.uppercase() and value.lowercase()
var myName = "nuru";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// value.split() and value.indexOf()
var myFd = "Nuru Sabbir Shahin Akram Mamun Dishan";
console.log(myFd.split(" "));
console.log(myFd.indexOf("S"));

// parseInt(value)
var num1 = "75.456";
var num2 = parseInt(num1);
console.log(num2, typeof num2);

// parsefloat(value)
var num3 = parseFloat(num1);
console.log(num3, typeof num3);

// number to string
var num4 = 70;
var str1 = "" + num4;
console.log(str1, typeof str1);

// Plus
var num1 = 40;
var num2 = 50;
var total = num1 + num2;
console.log(total);

// minus
var num1 = 60;
var num2 = 50;
var total = num1 - num2;
console.log(total);

// multiply
var num1 = 40;
var num2 = 50;
var total = num1 * num2;
console.log(total);

// Division
var num1 = 60;
var num2 = 50;
var total = num1 / num2;
console.log(total);

// Reminder / Modulas
var num1 = 60;
var num2 = 50;
var total = num1 % num2;
console.log(total);

// Math.abs()
var num = -20;
var output = Math.abs(num);
console.log(output);

// Math.round()
var num1 = 5.56;
var num2 = 5.456;
var output1 = Math.round(num1);
var output2 = Math.round(num2);
console.log(output1, output2);

// Math.ceil()
var num = 5.4;
var output = Math.ceil(num);
console.log(output);

// Math.floor()
var num = 5.6;
var output = Math.floor(num);
console.log(output);

// Math.random()
var num = Math.ceil(Math.random() * 5);
console.log(num);