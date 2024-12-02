/*
The engineers are trying to figure out which reports are safe. 
The Red-Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing. 
So, a report only counts as safe if both of the following are true:

The levels are either all increasing or all decreasing.
Any two adjacent levels differ by at least one and at most three.
In the example above, the reports can be found safe or unsafe by checking those rules:

7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
So, in this example, 2 reports are safe.

Analyze the unusual data from the engineers. How many reports are safe?

To play, please identify yourself via one of these services:

My understanding:
all the digits are either incresing or decresing 
if the following digit inc/dec by more than 1 or 2
    the code is not safe
return how many of the codes are safe
*/

const code = [
  7, 6, 4, 2, 1, 1, 2, 7, 8, 9, 9, 7, 6, 2, 1, 1, 3, 2, 4, 5, 8, 6, 4, 4, 1, 1,
  3, 6, 7, 9,
];

const countSafe = (code) => {
  //   if (code.length % 5 !== 0) return "code length invalid";
  //   let safe = 0;
  //   // sliding window
  //   for (let i = 0; i < code.length; i += 5) {
  //     let unsafe = 0;
  //     for (let j = i; j < i + 4; j++) {
  //       const curr = code[j];
  //       const next = code[j + 1];
  //       if (curr + 1 === next || curr + 2 === next) {
  //         continue;
  //       } else if (curr - 1 === next || curr - 2 === next) {
  //         continue;
  //       } else {
  //         unsafe++;
  //       }
  //     }
  //     if (unsafe === 5) safe++;
  //     console.log(unsafe);
  //   }
  //   return safe;
  /*
    sliding window
    if code[i+1] > code[i]
        every num in window must be asc order
    else 
        every num in window in des order
    if condition of +1 or +2 are true for whole window 
        safeCount++
    return safeCount
    */
};

console.log(countSafe(code));
