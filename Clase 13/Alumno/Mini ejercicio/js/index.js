$(document).ready(function () {
  //asociar el evento al tacho de basura
  //cuando alguien hace click en el tacho de basura borar el li que lo contiene
  $('ul > li > i') // seleccionamos solo los elementos i de los li del ul
    .click(function (even) {
      $(even.target) //pasamos el targuet al jquery
        .parent()
        .remove()
    })
});