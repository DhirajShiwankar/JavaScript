function largest(n) {
  let gretest = 0;
  while (n > 0) {
    let val = n % 10;
    if (val > gretest) {
      gretest = val;
    }
    n = Math.floor(n / 10);
  }
  console.log(gretest);
}
largest(15892) // 9
