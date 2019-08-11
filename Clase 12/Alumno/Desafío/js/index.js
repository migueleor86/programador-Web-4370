$(document).ready(function () {

  var email = $('#email')
  email.blur(validateEmail)
});

function validateEmail(event) {
  var inputNode = $(event.target)
  var value = inputNode.val()
  var containsAtLeastOneAt = value.indexOf('@') > -1
  var containsAtLeastOnePoint = value.indexOf('.') > -1
  var isValidEmail = containsAtLeastOneAt && containsAtLeastOnePoint
  if (isValidEmail) {
    inputNode.addClass('is-valid')
    inputNode.removeClass('is-invalid')
  } else {
    inputNode.addClass('is-invalid')
    inputNode.removeClass('is-valid')
  }
}

/* window.onload = function () {
  var email = document.getElementById('email')
  email.onblur = function (event) {
    var inputNode = event.target
    var value = inputNode.value
    var containsAtLeastOneAt = value.indexOf('@') > -1
    var containsAtLeastOnePoint = value.indexOf('.') > -1
    var isValidEmail = containsAtLeastOneAt && containsAtLeastOnePoint
    if (isValidEmail) {
      inputNode.classList.add('is-valid')
      inputNode.classList.remove('is-invalid')
    } else {
      inputNode.classList.add('is-invalid')
      inputNode.classList.remove('is-valid')
    }
  }
} */