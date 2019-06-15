var numerodia = prompt('Escribir numero del día de la semana')
var numero = parseInt(numerodia)

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]

function diaNumeroSemana(ArrayDay,numeroFuncion) {
  for (var i = 0; i <= ArrayDay.length; i++) {
     if(i === numeroFuncion) {
     return(ArrayDay[i-1])
     }
 }
   return ('Día indefinido')
}

console.log(diaNumeroSemana(daysOfTheWeek,numero))




/* ### Escribir una funcion llamada diaNumeroSemana() que reciba un número y devuelva el nombre del día que le corresponde 

```
diaNumeroSemana(1) // debe retornar el el string 'lunes'  */