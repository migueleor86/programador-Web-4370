function getRandomId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function Student(firstName, lastName, dni, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dni = dni;
  this.email = email;
  var id = getRandomId()
  this.getId = function () {
    return id;
  }
}
Student.prototype.getName = function () {
  return this.firstName + ' ' + this.lastName;
}
var estudiante1 = new Student('Juan', 'Pérez', 45678987, 'juan@gmail.com');
var estudiante2 = new Student('Ana', 'Fernandez', 45678989, 'ana@gmail.com');
var estudiante3 = new Student('Pedro', 'Mármol', 45678956, 'pedro@gmail.com');

console.log(estudiante1);
console.log(estudiante1.getId());
console.log(estudiante1.getName());
console.log(estudiante2);
console.log(estudiante2.getId());
console.log(estudiante2.getName());
console.log(estudiante3);
console.log(estudiante3.getId());
console.log(estudiante3.getName());


/* var students = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

var pedro = new Alumno(student[2].firstName, students[2].lastName, students[2].dni, students[2].email) */