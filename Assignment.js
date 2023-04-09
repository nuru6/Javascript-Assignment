// ১. Variable কি ?
Ans: Variable হচ্ছে String অথবা Number Store করে রাখার একটি মাধ্যম।
Exp: var x = 20;

// ২. Variable কিভাবে লিখতে হয় ?
Ans: Variable লেখার জন্য var লিখে variable টির একটি নাম দিতে হয়, তারপর equal-sign(=) দিয়ে value বসিয়ে শেষে একটি সেমিকোলন দিতে হয়।
Exp: var myAge = 17;

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
Ans: যে variable গুলো text আকারে জমা হয় সেগুলোকে String type variable বলা হয়। String type variable গুলোর value কে দুটি single-quote('') অথবা double-quote("") অথবা caret-sign(``) এর ভেতরে লিখতে হয়।
Exp: var myName = "Nuru";

// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
Ans: যে variable গুলো number আকারে জমা হয় সেগুলোকে Number type variable বলা হয়। Number type variable গুলোর value কে কোন প্রকার quote বা চিহ্ন ছাড়াই লিখতে হয়।
Exp: var myAge = 17;

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
Ans: যদি কোন variable এর value true অথবা false হয়, তাহলে সেগুলোকে Boolean type variable বলে। Boolean type variable কে কোন প্রকার quote বা চিহ্ন ছাড়াই লিখতে হয়।
Exp: var adult = false;

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ?
Ans: toUpperCase() এর ব্যাবহারঃ
=> var myName = "Nuru";
=> var upperCase = myName.toUpperCase();
=> console.log(myName); // NURU
toLowerCase() এর ব্যাবহারঃ
=> var myName = "NURU";
=> var lowerCase = myName.toLowerCase();
=> console.log(myName); // nuru

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
Ans: JavaScript এ বিভিন্ন ধরনের অপারেটর রয়েছে। এগুলোর মধ্যে কয়েকটি Arithmetic Operator নিচে দেওয়া হলোঃ
1. Addition(+)
Exp: var Result = 5 + 6; // 11
2. Subtraction(-)
Exp: var Result = 7 - 5; // 2
2. Multiplication(*)
Exp: var Result = 6 * 7; // 42
2. Exponentiation(**)
Exp: var Result = 8 ** 2; // 64
2. Division(/) Exp:
var Result = 10 / 3; // 3.333333...
2. Modulus/Remainder(%)
Exp: var Result = 10 % 3; // 1
2. Increment(++)
Exp: var num = 5;
num++; // 6
2. Decrement(--)
Exp: var num = 5;
num--; // 4

// ৮. Math.abs() এর ব্যাবহার লিখুন । 
Ans: var absExp = Math.abs(-20); // 20

// ৯. Math.ceil()  এর ব্যাবহার লিখুন । 
Ans: var ceilExp = Math.ceil(2.22); // 3

// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
Ans: var floorExp = Math.floor(4.930); // 4

// ১১. Math.round() এর ব্যাবহার লিখুন ।
Ans: var roundExp = Math.round(2.43); // 2

// ১২. Math.random() এর ব্যাবহার লিখুন ।
Ans: var randomExp = Math.ceil(Math.random() * 10); // 1 to 10

// asignment.js - GitHub Link