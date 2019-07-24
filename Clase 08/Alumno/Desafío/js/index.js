var student = {
  firstName: 'Miguel',
  lastName: 'Ortiz',
  dni: 9999999,
  email: 'migueleor86@gmail.com'
}

function createStudentNode(student) {
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.id = student.dni
  var h1 = document.createElement('h1')
  h1.innerHTML = student.firstName + ' ' + student.lastName
  var h3 = document.createElement('h3')
  h3.innerHTML = "DNI: " + student.dni;
  var p = document.createElement('p')
  p.innerHTML = 'Correo electrónico:' + ' ' + student.email
  li.append(h1)
  li.append(h3)
  li.append(p)
  return li;
}

var ul = document.getElementById('lista')

ul.appendChild(createStudentNode(student))