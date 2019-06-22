/* Buscar una palabra dentro de un texto

  -
  Pedirle mediante `prompt`
al usuario que ingrese una palabra y mostrar en consola si existe o no dentro del texto. */



var text = 'El amor juega a inventarse, huye de sí mismo para volver en su espiral sobrecogedora, los senos cantan de otro modo, la boca besa más profundamente o como de lejos, y en un momento donde antes había como cólera y angustia es ahora el juego puro, el retozo increíble, o al revés, a la hora en que antes se caía en el sueño, el balbuceo de dulces cosas tontas, ahora hay una tensión, algo incomunicado pero presente que exige incorporarse, algo como una rabia insaciable. Sólo el placer en su aletazo último es el mismo; antes y después el mundo se ha hecho pedazos y hay que nombrarlo de nuevo, dedo por dedo, labio por labio, sombra por sombra'

var palabraMay = prompt('Ingrese palabra')
var palabra = palabraMay.toLocaleLowerCase()

function palabraDentroDeTexto(text1, palabra) {
  if (text1.indexOf(palabra) > -1) {
    console.log(text1.indexOf(palabra));
    return true;
  }
  return false;
}

console.log(palabraDentroDeTexto(text, palabra))

