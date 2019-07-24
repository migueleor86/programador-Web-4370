var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS'];

setLocalList('studentsList', testList)

function setLocalList(key, array) {
  // validar si key es un string
  var keyIsString = typeof key === 'string'
  // validad si array es un array
  var arrayIsString = Array.isArray(array);
  if (!keyIsString || !arrayIsString) {
    return false;
  }
  // stringifiar el array
  var arrayString = JSON.stringify(array);
  // guardar en el local Storage
  localStorage.setItem(key, arrayString)
  // si la operacion es exitosa retornar true
  return true;
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
    // si el item no es string devuelve array vacio []
    return []
  }
  var itemParsed = JSON.parse(item);
  //valido si es un arrar Array.isArray() == boolean
  var itemIsArray = Array.isArray(itemParsed);
  // si es un array valido lo retorno
  if (itemIsArray) {
    return itemParsed;
  }
  // si el item no existe devuelve array vacio []
  return [];
}

var studentsList = getLocalList('studentsList')
console.log('resultado: ', studentsList)