function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const result = [...set].filter((value) => value.startsWith(startString))
  .map((value) => value.slice(startString.length)).join('-');
  return result;
}
