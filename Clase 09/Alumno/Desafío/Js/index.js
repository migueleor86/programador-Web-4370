window.onload = function () {
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
}