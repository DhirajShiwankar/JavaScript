function armstrog(n) {
  let original = n;
  let sum = 0;
  let digits = n.toString().length;
  while (n > 0) {
    let last = n % 10;
    sum += last ** digits;
    n = Math.floor(n / 10);
  }
  if (original === sum) return `${sum} is Armstrong.`;
  else return `${original} is not Armstrong number.`;
}
console.log(armstrog(153)); // 153 is Armstrong.
