var nota = prompt('Ingresar Nota')
var notaInt = parseInt(nota)

if (notaInt >= 7 && notaInt <= 10){
    console.log ('El alumno está promocionado')
    } else if (notaInt >= 4 && notaInt < 7) {
    console.log ('El alumno está aprobado"')
    } else if (notaInt < 4){
        console.log ('El alumno está reprobado', '\nDebe esforzarse más')
    } else if (notaInt > 10){
        console.log ('Albert Einstein')
    } else {
        console.log ('Dato invalido')
    }