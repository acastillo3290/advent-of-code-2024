/*
This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words. 
It's a little unusual, though, as you don't merely need to find one instance of XMAS - you need to find all of them. 
Here are a few ways XMAS might appear, where irrelevant characters have been replaced with .:

In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:


return amount of times xmas appears in string
*/

const words =
  "MMMSXXMASMMSAMXMSMSAAMXSXMAAMMMSAMASMSMXXMASAMXAMMXXAMMXXAMASMSMSASXSSSAXAMASAAAMAMMMXMMMMMXMXAXMASX";

const findXmas = (str) => {
  let match = "XMAS";
  let count = 0;
  for (let i = 0; i < str.length - 3; i++) {
    let curr = str[i] + str[i + 1] + str[i + 2] + str[i + 3];
    if (curr === match) count++;
  }
  return count;
};

console.log(findXmas(words)); // res 18
