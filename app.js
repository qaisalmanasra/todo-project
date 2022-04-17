'use strict';
var userName = prompt("What is your name?");
var usernameCap = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(usernameCap);

var userGender = prompt("What is your gender?");
console.log(userGender);

var userAge = prompt("How old are you?");

(userAge <= 0) ? alert("It Looks like You Didn't Born Yet!"): console.log(userAge);

var userAnswer = confirm("Do you want to skip the welcome message?");
console.log(userAnswer);

   
if (userAnswer == false) {
(userGender.toLowerCase() === 'male')  ? alert(` Welcome Mr ${usernameCap}`) :
(userGender.toLowerCase() === 'female') ? alert(`Welcome Ms ${usernameCap}`) :
alert(`welcome ${usernameCap}`);

};

