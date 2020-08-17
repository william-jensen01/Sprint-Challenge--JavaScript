// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*nested function is child of myFunction. The child function can access the variables within the parent function's scope. Everything outside a function is considered global and anything can access it.*/

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(n) {
  let summ = 0;
  for (i = 0; i <= n; i++) {
    summ += i
  }
  return summ
}
console.log(sumation(4));