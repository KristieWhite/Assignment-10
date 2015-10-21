Skip to content
This repository  
Search
Pull requests
Issues
Gist
 @KristieWhite
 Watch 2
  Star 0
 Fork 1 tiy-lv-frontend-2015-10/Notes
 Branch: master  Notes/Week-03/challenges.js
a598e01  26 minutes ago
 Michael Sweeney added wednesday
0 contributors
RawBlameHistory     41 lines (30 sloc)  896 Bytes
// write a function randomInRange(a,b)
// that returns a random number between a and b
//
// note: Math.random() returns a float between 0 and 1

function randomInRange(a,b) {
    return Math.random(x, y) * 3 + 5;
};

var x = randomInRange(5,100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25,30)
console.assert(y >= -25 && y <= 30)





// write a method names() 
// which takes a string of
// comma-separated names 
// (first and last) and then 
// returns an object where each
// firstname is a key, and each 
// lastname is a value
// 
// i.e. names("George Washington, John Adams, Kanye West")
//   .. --> {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }
var names {"George: Washington", "John: Adams", "Kayne: West" }
function names(str) {
	names = names.filter(str(function)
});
return names;

var results = names("George Washington, John Adams, Kanye West")
console.assert(results.George === "Washington")
console.assert(results['John'] === "Adams")
console.assert(results['Kanye'] === "West")
Status API Training Shop Blog About Pricing
© 2015 GitHub, Inc. Terms Privacy Security Contact Help