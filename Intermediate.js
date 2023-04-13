// if else if statement;
var myAge = 17;
if(myAge < 0){
    console.log("Error 404!");
}else if(myAge < 18){
    console.log("You are a Child!");
}else if(myAge < 51){
    console.log("You are an Adult!");
}else{
    console.log("You are a Old Man!");
}

// switch break statement;
var myName = "Nuru";
switch (myName) {
    case "Md":
        console.log("It's your first name.");
        break;
    case "Nuru":
        console.log("It's your nickname.");
        break;
    case "Nuruzzaman":
        console.log("It's your full name.");
    default:
        console.log("It's not your name!");
        break;
}

// Date();
var myDate = new Date();
console.log(myDate.toTimeString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getDate());
console.log(myDate.getMilliseconds());

// Array;
var fdlist = ["Nuru","Sabbir","Akram","Dishan"];
fdlist[2] = "Mamun"; // To Change a value;
console.log(fdlist);

// Push() & Pop();
fdlist.pop();
console.log(fdlist);
fdlist.push("Shahin");
console.log(fdlist);

// Shift() & Unshift();
fdlist.shift();
fdlist.unshift("Dishan","Akram");
console.log(fdlist);

// Slice() & Splice();
console.log(fdlist.slice(3,5));
fdlist.splice(3, 4, "Nuru");
console.log(fdlist);

// For Loop;
var fdAry = ["Nuru", "Sabbir", "Dishan", "Akram", "Shahin", "Mamun"];
for(var i = 0; i < fdAry.length; i++){
    console.log(fdAry[i]);
}

// While Loop;
var i = 0;
while(i <= 10){
    console.log(i);
    i++;
}