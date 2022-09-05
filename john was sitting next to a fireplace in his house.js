// john was sitting next to a fireplace in his house, trying to get some warm from the fire javascript codility

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
  // write your code in JavaScript (Node.js 8.9.4)
  let leftMax = T[0]; //  Max temperature during winter
  let maximum = T[0]; //  Max temperature during the year
  let position = 1; //  Possible solution

  let n = T.length;

  for (var i = 1; i < n; i++) {
    if (T[i] < leftMax) {
      position = i + 1; // got a new lower value
      leftMax = maximum;
    } else if (T[i] > maximum) {
      maximum = T[i];
    }
  }
  return position;
}
