// **************** Right Angle Triangle *****************
function reverseLeft1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += " ";
    }
    for (let s = 1; s <= i; s++) {
      row += "*";
    }
    console.log(row);
  }
}
reverseLeft1(5);

//      *
//     **
//    ***
//   ****
//  *****

// **************** Pyramid Triangle *****************

function reverseLeft1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let s = 1; s <= 2 * i - 1; s++) {
      row += "*";
    }
    console.log(row);
  }
}
reverseLeft1(5);

//     *
//    ***
//   *****
//  *******
// *********

// **************** Square pattern  *****************
for (let i = 1; i <= 5; i++){
    let row = "";
    for (let j = 1; j <= 5; j++){
        row += "* ";
    }
    console.log(row)
}

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// **************** Alphabate Square Pattern *****************
for (let i = 1; i <= 5; i++){
    let row = "";
    for (let j = 0; j < 5; j++){
        row  += String.fromCharCode(65 + j);
    }
    console.log(row)
}
// ABCDE
// ABCDE
// ABCDE
// ABCDE
// ABCDE

// **************** Floyd’s Triangle Triangle *****************
let num = 1;
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


// **************** Reverce Right angle Triangle *****************
for (let i = 5; i >= 1; i--) {
    let row = ""
    for (let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row)
}

// *****
// ****
// ***
// **
// *

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
pattern4(5)

// * * * * *
// * * * *
// * * *
// * *
// *


// **************** pascale Triangle *****************
for (let i = 1; i <= 5; i++){
    let num = 1;
    let row = "";
    for (let j = 1; j <= i; j++){
        row += num
        num = num * (i - j) / j;
    }
    console.log(row)
}

// 1
// 11
// 121
// 1331
// 14641


// **************** Fibonacci Triangle *****************
let a = 0;
let b = 1;
for (let i = 0; i < 6; i++){
    let row = "";
    for (let j = 0; j < i; j++){
        row += a + " ";
        let sum = a + b;
        a = b;
        b = sum;
    }
    console.log(row)
}

// 0
// 1 1
// 2 3 5
// 8 13 21 34
// 55 89 144 233 377


// **************** number Triangle *****************
function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i;
        }
        console.log(row)
    }
}
pattern(5)

// 1
// 22
// 333
// 4444
// 55555

// **************** Binary Triangle *****************
for (let i = 1; i <=5 ; i++){
    // let num = 1;
    let row = "";
    for (let j = 1; j <= i; j++){
        if ( (i + j) % 2 === 0) row += "1 ";
        else row += "0 ";
    }
    console.log(row)
}

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


// **************** Alphabate Triangle *****************
function pattern (n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0 ; j <= i; j++) {
            row += String.fromCharCode(65 + i)
        }
        console.log(row);
    }
}
pattern(5)

// A
// BB
// CCC
// DDDD
// EEEEE

// **************** Palindrome Alphabate Triangle *****************
function pattern (n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0 ; j <= i; j++) {
            row += String.fromCharCode(65 + j);
        }
        for (let j = i - 1 ; j >= 0; j--) {
            row += String.fromCharCode(65 + j);
        }
        console.log(row);
    }
}
pattern(5)

// A
// ABA
// ABCBA
// ABCDCBA
// ABCDEDCBA


// **************** Butterfly Pattern *****************
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  for (let j = 1; j <= 2 * (5 - i); j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "*";
  }
  console.log(row);
}
for (let i = 2; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i + 1; j++) {
    row += "*";
  }
  for (let j = 1; j <= 2 * (i - 1); j++) {
    row += " ";
  }
  for (let k = 1; k <= 5 - i + 1; k++) {
    row += "*";
  }
  console.log(row);
}

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *


// **************** Right side triangle *****************
function pattern5(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
pattern5(5)

//         *
//       * *
//     * * *
//   * * * *
// * * * * *


// **************** Hollow Pyramid Pattern*****************
function pattern6(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1 || i === n) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
pattern6(5)

//     *
//    * *
//   *   *
//  *     *
// *********


// **************** Reverce Pyramid  Pattern *****************
function pattern7(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i - 1; j++) {
      // space  i - 1
      row += "  ";
    }
    for (let k = 1; k <= 2 * (n - i) + 1; k++) {
      // stars 2 * (n - i) + 1
      row += "* ";
    }
    console.log(row);
  }
}
pattern7(5);

// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *


// **************** Hollow Square Pattern *****************
function pattern8(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (j === 1 || j === n || i === n || i === 1) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}
pattern8(5);

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// **************** Diamond Pattern *****************
function diamond(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let num = 1;
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "* "
    }
    console.log(row);
  }
  for (let i = 2; i <= n; i++) {
    let row = "";
    let num = 1;
    let rowsize = n - i + 1;
    for (let j = 1; j <= i - 1; j++) {
      row += "  ";
    }
    for (let k = 1; k <= 2 * rowsize - 1; k++) {
      row += "* "
    }
    console.log(row);
  }
}
diamond(5);

// //         *
// //       * * *
// //     * * * * *
// //   * * * * * * *
// // * * * * * * * * *
// //   * * * * * * *
// //     * * * * *
// //       * * *
// //         *


// **************** Hollow Diamond Pattern *****************
function diamond1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) row += "* ";
      else row += "  ";
    }
    console.log(row);
  }
  for (let i = 2; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i - 1; j++) {
      row += "  ";
    }
    for (let k = 1; k <= 2 * (n - i) + 1; k++) {
      if (k === 1 || k === 2 * (n - i) + 1) row += "* ";
      else row += "  ";
    }
    console.log(row);
  }
}
diamond1(5);

//         *
//       *   *
//     *       *
//   *           *
// *               *
//   *           *
//     *       *
//       *   *
//         *


// **************** Hollow Number  Pattern *****************
function reverse(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let num = 1;
    for (let star = 1; star <= i; star++) {
      if (star === 1 || star === i || i === n) row += num;
      else row += " ";
      num++;
    }
    console.log(row);
  }
}
reverse(5);

// 1
// 12
// 1 3
// 1  4
// 12345

// **************** alphabate triangle Pattern *****************
function alpabate(n) {
  let ch = "A".charCodeAt(0);
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(ch);
      ch++;
    }
    console.log(row);
  }
}
alpabate(5)

// A
// BC
// DEF
// GHIJ
// KLMNO


// **************** palindrome triangle Pattern *****************
for(let i = 1; i <= 5; i++){
  let row = "";
  for (let s = 1; s <= 5 - i; s++) row += " ";
  for (let star = 1; star <= i; star++) row += star;
  for (let star = i - 1 ; star >= 1; star--) row += star;
  console.log(row);
}

//     1
//    121
//   12321
//  1234321
// 123454321


// **************** Cross Pattern *****************
for(let i = 1; i<= 5; i++){
  let row = "";
  for (let j = 1; j <= 5; j++){
    if ( j === i || j === 5 - i + 1) row += "* "
    else row += "  ";
  }
  console.log(row);
}

// *       *
//   *   *
//     *     
//   *   *
// *       *
