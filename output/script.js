"use strict";
// const greet = (n: string): void => {
//   console.log(`Hello, ${n}!`);
// };
// greet("Israk");
//------------TYPES BASIC------------//
let nname = "Israk";
let age = 20;
let isStudent = true;
let something = "Hello";
let u = undefined;
let n = null;
let nums = [2, 4, 5, 6];
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nname, isStudent, something, u, n, nums, ids, age);
// Functions with Types
function greet(name) {
    return `Hello, ${name}!`;
}
const message = greet("israk");
console.log(message);
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
