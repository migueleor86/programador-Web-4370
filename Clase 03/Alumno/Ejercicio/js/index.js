var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]
for(var i = 0; i < daysOfTheWeek.length; i++){
   if(i >= 0 && i <= 6){
    console.log('El'+ ' ' + daysOfTheWeek[i] + ' ' + 'es día de semana')
  } else if (i >= 6 && i <=8){
    console.log('El'+ ' ' + daysOfTheWeek[i] + ' ' + 'es fin de semana')
  } else {
    console.log(daysOfTheWeek[i]+ ' ' + 'es un valor invalido')
}
}


