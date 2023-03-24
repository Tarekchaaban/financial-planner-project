'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
let greet;
const add = (a, b, c = 10) => {
  console.log(a + b);
  console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
  return a + b;
};
const result = minus(10, 7);
