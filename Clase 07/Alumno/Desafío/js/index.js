function setLocalList(key, array) {
  // validar si key es un string
  var keyIsString = typeof key === 'string'
  // validad si array es un array
  var arrayIsString = Array.isArray(array);
  if (!keyIsString || !arrayIsString) {
    return false;
  }
  const newLocal = JSON.stringify(array);
  // stringifiar el array
  var arrayString = newLocal;
  // guardar en el local Storage
  localStorage.setItem(key, arrayString)
  return true;
  // si la operacion es exitosa retornar true

}


function getLocalList(key) {
  // validar si key es string, si no lo es return false
  var keyIsString = typeof key === 'string'
  if (!keyIsString) {
    return false;
  }
  // traer item del localStorage para esa key.
  var item = localStorage.getItem(key)
  if (!item) {
    return []
  }

  var itemParsed = JSON.parse(item);
  var itemIsArray = Array.isArray(itemParsed);
  // si es un array valido lo retorno
  if (itemIsArray) {
    return itemParsed;
  }
  // si el item no existe (que me retorno null)
  // devuelve array vacio: return []
  return [];

}

var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS'];

setLocalList('studentsList', testList)

var studentsList = getLocalList('studentsList')

console.log('resultado: ', studentsList)