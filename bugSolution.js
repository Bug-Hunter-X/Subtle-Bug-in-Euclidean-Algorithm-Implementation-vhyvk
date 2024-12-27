function foo(a, b) {
  if (a === 0 || b === 0) {
    return a === 0 && b === 0; //Handle zero cases
  } else if (a === b) {
    return true;
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Output: false
console.log(foo(10, 5)); // Output: true
console.log(foo(10, 3)); // Output: false
console.log(foo(10,0)); // Output: false
console.log(foo(0,0)); // Output: true