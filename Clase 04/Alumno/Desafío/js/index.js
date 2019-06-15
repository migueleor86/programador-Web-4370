var nombre = prompt('Ingrese nombre: ').toLowerCase()

function buscarAlumnoPorNombreYApellido(nombre, apellido, listaAlumnos) {
  var nombreLower = nombre.toLowerCase();
  var apellidoLower = apellido.toLowerCase();
  for (var i = 0; i < listaAlumnos; i++) {
    if (listaAlumnos[i].firstName.toLowerCase() === nombreLower &&
      listaAlumnos[i].lastName.toLowerCase() === apellidoLower)
      return i;
  }
  return -1;
}

console.log(buscarAlumnoPorNombreYApellido(nombre,studentsList))

var studentsList = [{
  firstName: 'Juan',
  lastName: 'Pérez',
  dni: 45678987
},
{
  firstName: 'Ana',
  lastName: 'Fernandez',
  dni: 45678989
},
{
  firstName: 'Pedro',
  lastName: 'Mármol',
  dni: 45678956
},
{
  firstName: 'Pablo',
  lastName: 'Picapiedras',
  dni: 45678983
}
]




/*function buscarAlumnoPorNombre(nombre, listaAlumnos) {
  for (var i = 0; i < listaAlumnos; i++) {
    console.log(listaAlumnos[i].dni
    }*/