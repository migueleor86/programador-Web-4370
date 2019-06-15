var maxNumber[1, 2, 8, 3, 2, -11, 10, 1]

function maxNumber(numero) {
  var max = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < numero.lenth; i++) {
    if (max < numero[i]) {
      max = numero[i]
    }
  }
  return max
}

console.log(maxNumber(-1, -4, -83, -3, -2, -4, -10, -4))



/* ### Escribir una funcion llamada maxNumber() que reciba un array de números y devuelva el máximo
Ejemplo.
```
maxNumber([1,2,8,3,2,-11,10,1]) // debe retornar 10
maxNumber([-1,-4,-83,-3,-2,-4,-10,-4]) // debe retornar -1
maxNumber([21]) // debe retornar 21 */