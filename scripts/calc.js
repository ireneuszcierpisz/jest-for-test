let addition = (a, b) => a + b;


/*
We need to export the addition() function so that the require statement in calc.test.js file works
So we need to add the following line at the end of our script. 
*/
module.exports = addition;