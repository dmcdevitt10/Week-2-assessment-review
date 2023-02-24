// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be able to define functions with a 
//  variety of syntaxes.

// 1.1a
//  Define a function that logs the string
//  "My function was invoked!".
//  This function has no parameters and returns nothing.
//  Do this with a function declaration.
function a(){
    console.log('My function was invoke!')
}


// 1.2
//  Do problem 1.1 but with a function expression instead.
//  The defined function expression should be the traditional syntax
//  of a function expresssion.
const b = function(){
    console.log('My function was invoke!')
}


// 1.3
//  Do problem 1.1 but with a function expression instead.
//  The defined function expression should be an arrow function.
const c = () => {
    console.log('My function was invoke!')
}


// *** Problem 2 ***
//  Students should understand how to write functions that return
//  values.

// 2.1
//  Create a function that takes two parameters and returns the
//  product (multiplication) of the parameters. Assume that the
//  two parameters will always be number data types.
//  Your function must use the return keyword. Also, your function
//  should not log anything.
function d(x, y){
    return x * y
}


// 2.2
//  Create the function from 2.1, only this time, use an arrow
//  function with an implicit return.
const e = (x, y) => x * y


// 2.3
//  Define a function that takes two parameters and returns the
//  quotient (division) of the parameters.  The first parameter
//  is the dividend, and the second is the divisor. Assume that
//  the two parameters are always numbers.
//  In the case that the divisor is 0 and the dividend is not,
//  your function must return null and log the string
//  "cannot divide by 0".
//  Note: as an additional constraint to this problem, your
//  function must contain an "if" statement without any "else"
//  or "else if"s chained onto it.
function f(x, y){
    if(x !== 0 && y === 0){
        console.log('Cannot divide by 0')
        return null
    }
    return x / y
}

console.log(f(2, 4))

// *** Problem 3 ***
//  Students should be able to invoke (call) functions.

// 3.1
//  Define a function that logs "Coding is fun!", and invoke the
//  the function. The function should not return anything.
//  Do not save the result of the function.
function g(){
    console.log('Coding is fun!')
}
g()

// 3.2
//  Define a function that takes one parameter, a number, and
//  returns the parameter plus 50. Invoke your function three
//  times with three different numbers, and save those values
//  to three different variables.
function h(num){
    return num + 50
}
let x = h(0)
let y = h(9)
let z = h(50)
console.log(x, y, z)
// 3.3
//  Create an array with three values. These three values will be
//  the results of invoking the function from problem 2.3 three times,
//  with each invokation having different arguments.
//  After your array is created, log it to the console.
let arr = [
    x,
    h(9),
    h(50)
]

console.log(arr)
// *** Problem 4 ***
//  Students should understand what callback functions and higher
//  order functions are. Students should be able to write callbacks
//  that will be invoked by pre-defined higher order functions.

// 4.1a
//  Note the higher order function, "higher", which takes a callback
//  function as its second parameter. Define a callback function
//  named "callback" that has one number parameter. Your callback
//  function should return the sum of this number and 36.

function higher(num, cb) {
    return cb(num)
}

function callback(n){
    return n + 36
}

// 4.1b
//  Finally, invoke "higher" with the first parameter being a
//  number of your choice, and the second parameter being the
//  callback written in 4.1a. Save the result of this invocation
//  to a variable.

let myVar = higher(2, callback)
console.log(myVar)