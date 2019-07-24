var nombre = prompt('Ingrese nombre: ');
var apellido = prompt('Ingrese apellido: ');

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

function buscarAlumnoPorNombreYApellido(nombre, apellido, studentsList) {
  var nombreLower = nombre.toLowerCase();
  var apellidoLower = apellido.toLowerCase();
  for (var i = 0; i < studentsList.length; i++) {
    if (studentsList[i].firstName.toLowerCase() === nombreLower &&
      studentsList[i].lastName.toLowerCase() === apellidoLower) {
      return i
    }
  } return -1
}

var posicion = buscarAlumnoPorNombreYApellido(nombre, apellido, studentsList);
console.log(posicion);