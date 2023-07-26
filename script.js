/*SG HUGS

Everyone has a different gauge for how long they like to hug. The user can enter a number of seconds they like to hug on average, and the app will calculate how many years it will take to hug everyone in Singapore. You are allowed 9 hours a day to sleep and eat.

Input: 
hugSeconds - Number of seconds they like to hug on average

Functions: 
calcHuggingTime - Number of seconds to hug everyone in Singapore
calc - Number of days to hug everyone in Singapore given 15 hours a day
secondsToYears - Convert the number of seconds to years

Output:
yearsNeeded = Total number of years needed to hug everyoen in SG

*/
//====Helper function(s)====
// Convert seconds to years
var secondsToYears = function (seconds) {
  var years = seconds / 3600 / 24 / 365;
  years = years.toFixed(2);
  return years;
};

var calcHuggingTime = function (seconds) {
  var singaporePopulation = 5000000;
  var huggingHours = 15 / 24;
  var huggingTime = seconds * singaporePopulation * huggingHours;
  return huggingTime;
};

var main = function (input) {
  var yearsNeeded = secondsToYears(calcHuggingTime(input));
  var myOutputValue = `By hugging everyone for ${input} seconds, it will take ${yearsNeeded} years to hug everyone in Singapore`;
  return myOutputValue;
};
