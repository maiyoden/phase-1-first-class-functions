// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback(); // Call the callback function
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }
  
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function!");
    };
  }
  
  receivesAFunction(() => console.log("Callback function called!")); // Call with an inline function
  
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Call the named function
  
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc();
  
  // Exporting functions if needed
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };