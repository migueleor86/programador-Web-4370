$(document).ready(function () {
  //seleccion de los elementos a modificar por el id
  var firstName = $('#firstName')
  var email = $('#email')
  var comments = $('#comments')
  var submitButton = $('#submitButton')

  //asignandole los eventos a los elemento/ variables
  firstName.one('blur', validateEmptyField) // ('evento', funcion) one: se ejecuta una sola vez  
  comments.one('blur', validateEmptyField)
  email.one('blur', validateEmail)

  // funcion a la cual se le ingresa el evento blur
  function validateEmptyField(event) {
    var input = $(event.target) // trae todos los parametros del elemento seleccionado
    var valueToValidate = input.val(); // devuelve el valor de elemento
    var errorText = ''
    if (valueToValidate.length > 0) {
      //codigo si es valido
      input.addClass('is-valid').removeClass('is-invalid')
    } else {
      //codigo si no es valido
      errorText = 'Campo obligatorio'
      input.addClass('is-invalid').removeClass('is-valid')
      input.parent().append(`<div class='invalid-feedback'>${errorText}</div>`)
    }
    //asociar la validacion el evento input
    if (event.type === 'blur') {
      input.on('input', validateEmptyField)
    }
    allValidationsOk()
  }

  function validateEmail(event) {
    var input = $(event.target)
    input.next().remove()
    var errorText = ''
    var valueToValidate = input.val();
    var containsAt = valueToValidate.indexOf('@') > -1
    var containsDot = valueToValidate.indexOf('.') > -1
    if (valueToValidate.length < 1) {
      errorText = errorText + 'Campo requerido '
    }
    if (!containsAt) {
      errorText = errorText + 'Debe contener arroba (@) '
    }
    if (!containsDot) {
      errorText = errorText + 'Debe contener punto (.) '
    }
    if (errorText === '') {
      //codigo si es valido
      input.addClass('is-valid').removeClass('is-invalid')
    } else {
      input.addClass('is-invalid').removeClass('is-valid')
      input.parent().append(`<div class='invalid-feedback'>${errorText}</div>`)
      //codigo si no es valido
    }

    //asociar la validacion el evento input
    // si el evento es es blur, cambia y asolcia la variable inputo el evento input
    if (event.type === 'blur') {
      input.on('input', validateEmail)
    }
    allValidationsOk() // Ejecuta la funcion allValidationsOk cuando se ejecute la funcion validateEmail
  }

  function allValidationsOk() { // si tidos los valores estan OK habilita el boton
    var allOk = $('.is-valid').length === 3
    if (allOk) {
      submitButton.attr('disabled', false)
    } else {
      submitButton.attr('disabled', true)
    }
  }

});