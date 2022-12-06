function isPalindrome(word) {
  return word === word.split("").reverse().join("");
  // Write your algorithm here
  //declare a variable
  //call the declared variables
  //check if the variables satisfies the requirements
  //loo through until the requirements are satisfied
  //return the results if its truthy
}

/* 
  Add your pseudocode here
  write a function with a name isPalindrome
  take one Parameter eg the word
  declare variable eg
  let x= entered word
  loo through
  if(x===isPalindrome)
  console.log(x)
*/

/*
  Add written explanation of your solution here
  the function is first declared with on string 
  we declare another variable to hold the inPut
  its take an inPut and looP through to check if its satisfy the requirements
  if its satisfy it returns
  if not its end
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}


module.exports = isPalindrome;
