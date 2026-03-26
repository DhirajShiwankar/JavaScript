function fibo(n) {
  let a = 0;
  let b = 1;

  while (b < n) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  if (n === 0 || b === n) {
    console.log(b + " It is fibonacci.");
  } else {
    console.log("it is not fibonacci.");
  }
}
fibo(21) // 21 It is fibonacci.
