function palindrome(n) {
  let reverse = 0;
  let num = Math.abs(n);   // cleaner than sign logic

  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10); // better than parseInt
  }

  let num2 =  n < 0 ? -reverse : reverse;

  if (n === num2) return `${n} is palindrome.`;
  else return `${n} is not palindrome.`;
}

console.log(palindrome(121));  // 121 is palindrome.
