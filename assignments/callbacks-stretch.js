// Move on to tomorrow's content and start studying callbacks, write a few of your own to get the hang of it.
console.log('CALLBACKS');
/*
  Problem 1: Greet
  Create a function called `greet` that takes in a 'name' parameter
  simply use that function to alert the name provided;
  Next, create a function called `greetCaller` that takes a callback parameter
  our greetCaller function should declare a name variable and pass it to the callback.
  Invoke greetCaller with greet passed into it.
*/

function greet(name) {
  console.log(name);
}

function greetCaller(callback) {
  const name = 'Jonathan';
  callback(name);
}

greetCaller(greet);

/*
  Problem 2: forEach
  use .forEach to loop over the simpsons list and alert each name passed back to your anonymous callback to the console.
*/

const simpsons = ['Marge', 'Lisa', 'Homer', 'Bart', 'Maggie'];

function alertName(name) {
  console.log(name);
}

simpsons.forEach(name => alertName(name));

/*
  Problem 3: every
  create a function called `every` that takes in an array and a callback as it's parameters
  loop over every single item (using a native for loop) and pass each item to the callback
  When you're done, make sure that you finish the code inside of `every` and ensure it works the way it's supposed to
*/

function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

every(simpsons, alertName);
