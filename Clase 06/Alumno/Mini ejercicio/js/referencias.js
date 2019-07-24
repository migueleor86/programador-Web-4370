var myString = 'hola camada 4370 como estan'

console.log(myString.toLowerCase())
console.log(myString.toUpperCase())
console.log(myString.length)
console.log(myString.indexOf('hola')) // si no existe arroja -1, si aparece, cuenta a partir de 0
console.log(myString.split('a'))
console.log(myString.includes())
console.log(myString.startsWith('hola')) // arroja true, porque comienza con 'hola'

var splited = myString.split(',')
var array = new array(1, 2, 3);
console.log(array.length)
console.log(splited)
console.log(splited.join(';'))
//splied es un array

splited.push('final')

console.log(splited)

var copia = splited.slice(2, 4) // inicial contando de 0, y final pero no lo incluye
console.log(splited)
console.log(copia)

var copia2 = splited.slice(2, 2, 'pepito'); //  incluye pepito en la pocision
    console.log(splited);
    console.log(copia2);

    var arNum = [10, 100, 1, 4, 44]
    console.log(arNum.sort()) // ordena alfabeticsmnete
    console.log(arNum.sort()) // ordenar numericamente investigar