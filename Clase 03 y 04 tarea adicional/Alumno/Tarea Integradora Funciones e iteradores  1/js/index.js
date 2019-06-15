function diaSemanaNumero(dia) {
  var diaLower = dia.tolowerCase()

  var diaSemanaNum = {
    Lunes: 1,
    artes: 2,
    Miercoles: 3,
    Jueves: 4,
    Viernes: 5,
    Sabado: 6,
    Domingo: 7
  }
  var numeroDeDia = diaSemanaNum[diaLower]
  console.log(diaSemanaNum.diaLower)
}
console.log(diaSemanaNum.lunes)
if (numeroDeDia) {
  return numeroDeDia
} {
  return 0
}





/* var diaMayMin = prompt('Escribir día de la semana')
var dia = diaMayMin.toLowerCase()

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
  'Osvaldo'
]

function diaSemanaNumero(ArrayDay,DiaDeSemanaFuncion) {
  for (var i = 0; i < ArrayDay.length; i++) {
     if(ArrayDay[i] == DiaDeSemanaFuncion) {
      console.log(i)
     } //else {
      //console.log(0)
    // }
 }
}
diaSemanaNumero(daysOfTheWeek,dia) */