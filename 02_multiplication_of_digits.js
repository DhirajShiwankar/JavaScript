function product(n) {
  let num = 1;
  while (n !== 0) {
    let digit = n % 10;
    num *= digit;
    n = Math.floor(n / 10);
  }
  console.log(num);
}
product(1234); // 24
