'use strict';
function valid(ans) {
    
    if (ans.toLowerCase() != 'yes' && ans.toLowerCase() != 'no') {
        ans = "invalid";
    } 
    return ans;
}

function print(arr) {
    for (var i = 0; i < arr; i++) {
        console.log(arr[i]);
    return arr;
    }
}
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

var userFirstQ = prompt("Do you like js?");
var userSecondQ = prompt("Do you wish to enter the website?");
var userThirdQ = prompt("will you keep using this website?");

var firstAns = valid(userFirstQ);
var secondAns = valid(userSecondQ);
var thirdAns = valid(userThirdQ);

var answers = [];
answers.push(firstAns);
answers.push(secondAns);
answers.push(thirdAns);

for(let i = 0; i < answers; i++) {
    console.log(answers[i]);
  }

print(answers);

console.log(answers);


};

