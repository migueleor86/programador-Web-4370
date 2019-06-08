var genero = prompt('Ingrese Genero')
var generoMinuscaula = genero.toLowerCase()
var edad = prompt('Ingrese Edad')
var edadInt = parseInt(edad)

if (generoMinuscaula === 'male' && edad >= 18) {
  console.log('Sr. usted es mayor de edad puede ingresar')
} else if (generoMinuscaula === 'male' && edad < 18) {
  console.log('Sr. usted es menor de edad no puede ingresar')
} else if (generoMinuscaula === 'female' && edad >= 18) {
  console.log('Sra. usted es mayor de edad puede ingresar')
} else if (generoMinuscaula === 'female' && edad < 18) {
  console.log('Sra. usted es menor de edad no puede ingresar')
} else {
  console.log('Dato invalido')
}