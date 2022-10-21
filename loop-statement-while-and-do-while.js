
//Complete function padIt, which accepts 2 parameters:
//str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
//n: a number indicating how many times to pad the string.


//Mysolution
function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*';
  }
  console.log(str)
}
