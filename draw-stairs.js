// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I

function drawStairs(n) {
  let stairs = "";

  for (i = 0; i < n; i++) {
    stairs += " ".repeat(i) + "I";
    if (i < n - 1) stairs += "\n";
  }
  return stairs;
}
