window.onload = function () {
  var field = document.getElementById('age')
  var button = document.getElementById('button')
  button.onclick = function (e) {
    var value = parseInt(field.value)
    if (isNaN(value)) { // si  value es NaN = true
      field.value = ' ';
      alert('No es una edad valida')
      return // aqui muere la funcion si se el if es true
    }
    var isOlderthan = value > 18
    if (isOlderthan) {
      console.log('es mayor')
    } else {
      console.log('es menor')
    }
  }
}