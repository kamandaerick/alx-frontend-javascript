export default function returnHowManyArguments(...args) {
  let totalArgs = 0;
  for (let arg of args) {
    totalArgs += 1;
  }
  return totalArgs;
}

console.log(returnHowManyArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))