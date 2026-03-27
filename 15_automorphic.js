function automorphic(n) {
  if (n < 0) return `${n} is automorphic number.`;

  let digit = 0;
  let temp = n;

  while (temp > 0) {
    digit++;
    temp = Math.floor(temp / 10);
  }

  let num = n * n;
  let result = num % 10 ** digit;
  if (n === result) return `${n} is automorphic number.`;
  else return `${n} is not automorphic number.`;
}

console.log(automorphic(25)); //25 is automorphic number.
