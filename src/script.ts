const greet = (n: string): void => {
  console.log(`Hello, ${n}!`);
};

greet("Israk");

//------------TYPES BASIC------------//

let nname: string = "Israk";
let age: number = 20;
let isStudent: boolean = true;
let something: any = "Hello";
let u: undefined = undefined;
let n: null = null;
let nums: number[] = [2, 4, 5, 6];
let ids: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nname, isStudent, something, u, n, nums, ids, age);
