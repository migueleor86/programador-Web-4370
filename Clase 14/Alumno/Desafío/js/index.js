//esperar document ready
$(document).ready(function () {
  $('button').click(removeElementWithAnimation)

  function removeElementWithAnimation(event) {
    console.log(event)
    var button = $(event.currentTarget) //currentTarget: es el elemento al que está conectado el detector de eventos. por si el usuario clikea en la fuente y no e boton como tal
    var tr = button.parent().parent()
    tr.fadeOut(1000, function () {
      tr.remove()
    })
  }
});


//asociar a todos los botones de borrar la funcion de handle del evento que va 
//borrar el elemento

//en la funcionn que hace el handle del evento, obtener el id del tr 
//y llamar a la funcion removeElementWithAnimation(id)

//