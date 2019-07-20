//esperar document ready
$(document).ready(function () {
  $('.btn-danger').click(removeElementWithAnimation)

  function removeElementWithAnimation(event) {
    var button = $(event.target)
    var tr = button.parent().parent()
    tr.fadeOut(3000, function () {
      tr.remove()
    })
  }
});




//asociar a todos los botones de borrar la funcion de handle del evento que va 
//borrar el elemento

//en la funcionn que hace el handle del evento, obtener el id del tr 
//y llamar a la funcion removeElementWithAnimation(id)

//