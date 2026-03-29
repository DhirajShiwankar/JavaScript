function secLarge(n) {
  let largest = -1;
  let second = -1;

  while (n > 0) {
    let digit = n % 10;
    if (digit > largest) {
      second = largest;
      largest = digit;
    } else if (second !== largest && digit > second) {
      second = digit;
    }
    n = Math.floor(n / 10);
  }
  console.log(second);
}
secLarge(12345678);
