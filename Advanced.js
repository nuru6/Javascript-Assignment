// Function();
function con(x) {
    console.log(x);
};

function fun(x, y) {
    var total = x + y;
    return total;
};
var total = fun(100, 46);

con(total);

// Object;
var myInfo = { name: "Nuru", age: 17, gender: "Male" };
var name = myInfo["name"];
console.log(name);

// Constructor;
function Obj(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    // Ternery; Short form of if else statement;
    var status = this.age < 18 ? "Child" : "Adult";
    // More smart use of constructor;
    this.con = function () {
        console.log("Name:", this.name);
        console.log("Gender:", this.gender);
        console.log("Age:", this.age);
        console.log("Status:", status);
    };
};
var Nuru = new Obj("Nuru", 17, "Male");
var Maya = new Obj("Maya", 17, "Female");
Maya.con();

// Continue & Break;
for(var i = 0; i < 10; i++){
    if(i == 5){
        console.log("Continued!");
        continue;
    }else if(i == 8){
        console.log("Breaked!");
        break;
    };
    console.log(i);
};

// Var, Let & Const;
var one = 1;
var one = "One"; // Var can be reassigned;
one = "First"; // Var can be redeclared;

let two = 2;
// let two = "Two"; Let can't be reassigned;
two = "Second" // Let can be redeclared;

const three = 3;
// const three = 3; Const can't be reassigned;
// three = 3; Const can't be redeclared;

// Scope;
var a = 20; // Global Scope;
function fun(){
    var b = 30; // Function Scope or Local Scope;
};
{
    let c = 40; // Block Scope;
}

// Hoisting;
/*
Hoisting happens with var, let & const.
But let and const can't define a value to it. So it gives an error.
*/

// Function Expression; A function as a variable;
var fun = function(){console.log("Hello");};

// Inner Function;
function world(){
    var a = "From World";
    console.log(a);
    function bangladesh(){ // Inner Function can't be called outside of Outer Function;
        var b = "From Bangladesh"; // Inner Function can't be called outside of Outer Function;
        console.log(b); // Inner Function can't be called outside of Outer Function;
    }; // Inner Function can't be called outside of Outer Function;
    bangladesh(); // Inner Function can't be called outside of Outer Function;
};
world();