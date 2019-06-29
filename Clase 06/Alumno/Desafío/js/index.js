/* function includesText(dato1, dato2) {
  var aTexto1 = dato1.toString();
  var aTexto2 = dato2.toString();
  var palabrita = aTexto1.toUpperCase();
  var texto = aTexto2.toUpperCase();
  if (texto.indexOf(palabrita) > -1) {
    console.log(typeof palabrita);
    console.log(typeof texto)
    return true;
  }
  return false;
} */

console.log(includesText('PA', 'Patricia'))

function includesText(dato1, dato2) {
  var param1IsString = typeof dato1 === 'string';
  var param2IsString = typeof dato2 === 'string';
  if (!param1IsString || !param2IsString) {
    return false
  }
  var tae = dato1.toLowecase();
  var tT = dato2.toLowecase();
  var isInTextoTotal = tT.indexOf.(tae);
  if (isInTextoTotal > -1) {
    return true
  }
  return false
}