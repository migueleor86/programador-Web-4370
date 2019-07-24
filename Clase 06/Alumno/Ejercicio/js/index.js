/* # Crear una función que elimine un elemento de un Array

- La función deberá recibir como parámetro un indice y como segundo parámetro un Array y devolver una copia del mismo pero con el elemento que esta en el indice eliminado. 

 */


var numbers = [1, 2, 3, 4, 5]
/* var array1 = numbers.slice(0, 2)
var array2 = numbers.slice(3, 7)
console.log(array1.concat(array2))
 */

function deletePos(pos, arr) {
  var array1 = arr.slice(0, pos)
  var array2 = arr.slice(pos + 1, 10)
  return array1.concat(array2)

}
console.log(deletePos(2, numbers))

