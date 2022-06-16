// function primeOrNot(a){
// for(let i=2;i<a;i++){
//   if(a%i===0){
//     console.log(a+' is divisible by '+ i )
//   }
//   else{
//     console.log(a+' is not divisible by '+ i)
//   }
// }
// }
// let userInput=6
// primeOrNot(userInput)

// function primeOrNot(a){
//   let p=0
//   let q=0
//   for(let i=2;i<a;i++){
//    if(a%i===0){
//       p=p+i
//     }
//     else{
//       q=q+i
//     }
//   }
//   let NumAdd=p+q
//   console.log(NumAdd)
//   if(NumAdd%3===0){
//     console.log(' prime')
//   }
//   else{
//     console.log('not a prime')
//   }

//   }
//   let userInput=9
//   primeOrNot(userInput)

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
