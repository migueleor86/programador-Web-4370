var dictionary = {
  male: 'Masculino',
  female: 'Femenino',
  blue: 'azul',
  red: 'rojo',
  yellow: 'amarillo',
  brown: 'marron',
  'blue-gray': 'azul grisado',
  black: 'negro',
  orange: 'anaranjado',
  hazel: 'avellana',
  pink: 'rosado',
  unknown: 'desconocido',
  'green, yellow': 'verde amarillo',
  white: 'blanco',
  gold: 'oro',
  dark: 'oscuro',
  'red, blue': 'rojo, azul'
}

function translateToSpanish(wordInEnglish) {
  var word = wordInEnglish.toLowerCase()
  var traduccion = dictionary[word]
  if (traduccion) {
    return traduccion
  }
  return word
}

export {
  translateToSpanish
}