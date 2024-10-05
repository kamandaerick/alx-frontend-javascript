/* eslint-disable no-unused-vars */
export default function returnHowManyArguments(...args) {
  let totalArgs = 0;
  for (const arg of args) {
    totalArgs += 1;
  }
  return totalArgs;
}
