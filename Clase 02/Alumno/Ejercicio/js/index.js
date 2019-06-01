var dia = prompt('Ingrese dia')
var diaMinuscaula = dia.toLowerCase()
switch (diaMinuscaula) {
  case 'lunes':
  case 'martes':
  case 'miércoles':
  case 'jueves':
  case 'viernes':
    console.log('dia habil')
    break;
  case 'sabado':
  case 'domingo':
    console.log('fin de semana')
    break;
  default:
    console.log('dato no valido')
    break;
}