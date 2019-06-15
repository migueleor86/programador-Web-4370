var diaMayMin = prompt('Escribir día de la semana')
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
diaSemanaNumero(daysOfTheWeek,dia)



