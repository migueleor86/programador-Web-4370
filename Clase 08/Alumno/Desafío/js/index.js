var student = {
  firstName: 'Miguel',
  lastName: 'Ortiz',
  dni: 9999999,
  email: 'migueleor86@gmail.com'
}

function createStudentNode(student) {
  var nuevaElemetoDeLista = document.createElement('li');
  nuevaElemetoDeLista.className = 'list-group-item';
  nuevaElemetoDeLista.id = student.dni
  var h1 = document.createElement('h1')
  h1.innerHTML = student.firstName + ' ' + student.lastName
  var h3 = document.createElement('h3')
  h3.innerHTML = "DNI: " + student.dni;
  var p = document.createElement('p')
  p.innerHTML = 'Correo electrónico:' + ' ' + student.email
  nuevaElemetoDeLista.append(h1)
  nuevaElemetoDeLista.append(h3)
  nuevaElemetoDeLista.append(p)
  return nuevaElemetoDeLista;
}

var ul = document.getElementById('lista')

ul.appendChild(createStudentNode(student))