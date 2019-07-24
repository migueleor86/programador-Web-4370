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
  return true;
  // si la operacion es exitosa retornar true

}

var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS'];

setLocalList('studentsList', testList)