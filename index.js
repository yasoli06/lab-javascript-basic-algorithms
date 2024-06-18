// Iteration 1: Names and Input
let hacker1 = 'Raul';
console.log(`The driver's name is ${hacker1}`)
let hacker2 ='Yasmin';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals 
if(hacker1.length > hacker2.length){
   console.log(`The driver has the longest name, it has ${hacker1.length} characters. `);
}
else if(hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1
const str = hacker1.toUpperCase();
let newStr = "";
for (let i = 0; i < hacker1.length; i++) {
  newStr += str[i] + " ";
}
console.log(newStr);
//3.2
let newArray = "";
for (let i = hacker2.length - 1; i >= 0 ; i--){
    newArray += hacker2[i] ; 
}
console.log(newArray);
//3.3
if (hacker1 > hacker2) {
    console.log("The driver's name goes first."); 
} else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}

//Bonus 1: 


