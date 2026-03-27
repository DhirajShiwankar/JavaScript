function coprime(a, b) {
  let max = a > b ? a : b;
  let min = a > b ? b : a;
  while (max > 0) {
    let temp = max;
    max = min % max;
    min = temp;
  }
  if (min === 1) {
    return `${a} ${b} is coprime.`;
  } else {
    return `${a} ${b} is not coprime.`;
  }
}
console.log(coprime(8 , 9));
console.log(coprime(8 , 12));
