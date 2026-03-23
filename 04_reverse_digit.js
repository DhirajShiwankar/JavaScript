function reverseDigit(n) {
  let reverse = 0;
  let sign = n > 0? 1 : -1;
  n = n * sign;
  
  while (n > 0){
    reverse = reverse * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  return reverse * sign;
}
console.log(reverseDigit(1234));


// some improvement in the above program
function reverseDigit(n) {
  let reverse = 0;
  let num = Math.abs(n);   // to conver into positive number

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10); // get lowest value
  }

  return n < 0 ? -reverse : reverse;
}

console.log(reverseDigit(-1234));  // 4321
