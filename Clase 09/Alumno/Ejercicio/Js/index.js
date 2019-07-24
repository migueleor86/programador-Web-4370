window.onload = function () {
  var firstName = document.getElementById('firstName')
  firstName.onblur = function (event) {
    var inputNode = event.target
    var value = inputNode.value
    if (value.length > 0) {
      inputNode.classList.add('is-valid')
      inputNode.classList.remove('is-invalid')
    } else {
      inputNode.classList.add('is-invalid')
      inputNode.classList.remove('is-valid')
    }
  }
}