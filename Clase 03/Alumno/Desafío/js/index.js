var operacion = prompt('Ingrese operacion')
var op1
var op2

switch (operacion) {
  case 'suma':
    op1 = parseInt(prompt('ingrese operacion 1'))
    op2 = parseInt(prompt('ingrese operacion 2'))
    console.log(op1 + op2)
    break
  case 'division':
    op1 = parseInt(prompt('ingrese operacion 1'))
    op2 = parseInt(prompt('ingrese operacion 2'))
    while (op2 === 0) {
      op2 = parseInt(prompt('ingrese operacion 2, diferente de 0'))
    }

}