/*
It seems like the goal of the program is just to multiply some numbers. 
It does that with instructions like mul(X,Y), where X and Y are each 1-3 digit numbers. 
For instance, mul(44,46) multiplies 44 by 46 to get a result of 2024. Similarly, mul(123,4) would multiply 123 by 4.

However, because the program's memory has been corrupted, there are also many invalid characters that should be ignored, 
even if they look like part of a mul instruction. Sequences like mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.

For example, consider the following section of corrupted memory:

xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
Only the four highlighted sections are real mul instructions. Adding up the result of each instruction produces 161 (2*4 + 5*5 + 11*8 + 8*5).

Scan the corrupted memory for uncorrupted mul instructions. What do you get if you add up all of the results of the multiplications?

*My idea*
scan the string 
look for mul(num,num)
    no special characters in or around mul
add up all the mults in the str
return the sum

look for mul
then from ( to )
    add everything to an array
    loop through array 
    if i == num 
        store that number 
    if i == , 
        whatever num is stored is the first val
    repeat for second val
    if another char appears 
    break from loop
*/

const memory =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const findMul = (memory) => {
  const splitMem = memory.split("mul");
  let totalSum = 0;

  for (let arg of splitMem) {
    if (arg[0] !== "(") continue;
    if (arg.indexOf(")") == -1) continue;
    let tempSum = 1;
    let temp = "";

    for (let char of arg) {
      if (!isNaN(Number(char))) {
        temp += char;
      } else if (char === "," && temp) {
        tempSum *= Number(temp);
        temp = "";
      } else if (char === ")" && temp) {
        tempSum *= Number(temp);
        break;
      }
    }
    totalSum += tempSum;
  }
  return totalSum;
};
// O(n) time & space complexity
console.log(findMul(memory)); // res -> 161
