$(document).ready(function () { // es igual a window.onload = function () pero en jquery
  // traer el texto del input
  // en el omblur reemplazar todos los textos de los li con el texto del input
  var input = $('#firstName')
  input.blur(replaceAllElements)
});

function replaceAllElements(e) {
  e.target.value
  $('.list-group-item').html(e.target.value)
}