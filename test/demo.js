export function matchString(string1, string2) {
  let result = '';
  if (string1 === string2) {
    result = 'Match!';
  } else {
    result = 'No match!';
  }
  return result;
}
