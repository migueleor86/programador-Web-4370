var operacionEnt = prompt('Ingrese operacion')
var operacion = operacionEnt.toLowerCase()
var op1
var op2

switch (operacion) {
  case 'suma':
    op1 = parseInt(prompt('ingrese opción 1'))
    op2 = parseInt(prompt('ingrese opción 2'))
    console.log(op1 + op2)
    break;
  case 'division':
    op1 = parseInt(prompt('ingrese opción 1'))
    op2 = parseInt(prompt('ingrese opción 2'))
    if (op2 !== 0) {
      console.log(op1 / op2)
    } else
      while (op2 === 0) {
        op2 = parseInt(prompt('ingrese opción 2, diferente de 0'));
        console.log(op1 / op2);
      }
}