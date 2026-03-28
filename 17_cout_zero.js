function zeros(n) {
  let fact = 1;
  let count = 0;
  for (let i = 1; i <= n; i++) fact *= i;
  while (fact > 0) {
    let digit = fact % 10;
    if (digit === 0) count++;
    fact = Math.floor(fact / 10);
  }
  return count;
}
console.log(zeros(5))
