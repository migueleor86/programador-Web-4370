function includesText(dato1, dato2) {
  var param1IsString = typeof dato1 === 'string';
  var param2IsString = typeof dato2 === 'string';
  if (!param1IsString || !param2IsString) {
    return false
  }
  var tae = dato1.toLowerCase();
  var tT = dato2.toLowerCase();
  var isInTextoTotal = tT.indexOf(tae);
  if (isInTextoTotal > -1) {
    return true
  }
  return false
}

console.log(includesText('PA', 'Patricia'))