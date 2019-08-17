function contactController() {
  $('#root').load('./partials/contact.html')
  console.log('Se cargo contact')

  // armar la validacion con jquery desafio 12
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
}

export {contactController, validateEmail}