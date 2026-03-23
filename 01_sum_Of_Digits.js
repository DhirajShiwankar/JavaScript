function sum(n) {
  let num = 0;
  while (n > 0) {
    let digit = n % 10;
    num += digit;
    n = Math.floor(n / 10);
  }
  console.log(num);
}
sum(1234);
