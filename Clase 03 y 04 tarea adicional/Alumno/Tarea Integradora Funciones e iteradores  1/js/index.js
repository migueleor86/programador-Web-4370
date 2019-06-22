/* var diaMayMin = prompt('Escribir día de la semana')
var dia = diaMayMin.toLowerCase()

function diaSemanaNumero(dia) {
  switch (dia) {
    case 'lunes':
      return 1
      break;
    case 'martes':
      return 2
      break;
    case 'miercoles':
      return 3
      break;
    case 'jueves':
      return 4
      break;
    case 'viernes':
      return 5
      break;
    case 'sabado':
      return 6
      break;
    case 'domingo':
      return 7
      break;
    default:
      return 0
      break;
  }
}
console.log(diaSemanaNumero(dia))  */

var diaSemanaNumero = function (dia) {
var diaLower = dia.toLowerCase();

  console.log(diaLower);

  var diaSemanaNum = {
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6,
    domingo: 7
  }

  if(diaSemanaNum[diaLower]){
    return diaSemanaNum[diaLower];
  }
  {
    return 0
  }
}
console.log(diaSemanaNumero('JuEvES'))

/* 
### Escribir una función llamada diaSemanaNumero() que reciba un día de la semana e indique un número según corresponda:

Ejemplo:
```
diaSemanaNumero('lunes') // debe retornar el número 1.
diaSemanaNumero('martes') // debe retornar el número 2.
...
...
diaSemanaNumero('Domingo') // debe retornar el número 7.

diaSemanaNumero('Osvaldo') // debe retornar el número 0.
```
Si no es un día de semana válido // debe retornar 0.
Debe aceptar tanto mayúsculas como minúsculas. */
