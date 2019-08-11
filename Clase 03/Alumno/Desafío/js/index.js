var operacionEnt = prompt('Ingrese operacion: suma o division')
var operacion = operacionEnt.toLowerCase()
var op1 = parseInt(prompt('ingrese opción 1'))
var op2

do {
  var op2 = parseInt(prompt('ingrese opción 2'))
} while (operacion === 'division' && op2 === 0);

switch (operacion) {
  case 'suma':
     console.log(`Resultado de la suma: ${op1 + op2}`)
    break;
  case 'division':
     console.log(`Resultado de la división:' ${op1 / op2}`)
      }