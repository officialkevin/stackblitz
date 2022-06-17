
function primeOrNot(a) {
  let b;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      b = 0;
      // console.log(b);
    }
  }
  if (b === 0) {
    console.log('not aprime');
  } else {
    console.log('prime');
  }
}
let userInput = 83;
primeOrNot(userInput);