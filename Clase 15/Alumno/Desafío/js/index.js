//esperar document ready
$(document).ready(function () {

  function getData(url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  getData('https://swapi.co/api/people/', handlePagination)


  function handlePagination(error, data) {
    if (!error) {
      console.log(data)
      var results = data.results
      for (var index = 0; index < results.length; index++) {
        var character = results[index];
        console.log(character.name)
      }
      if (data.next) {
        getData(data.next, handlePagination)

      }
    }
  }



});


/* var request = $.ajax({
  url: "https://swapi.co/api/people/1",
  method: "GET"
})

request.done(function( data ) {
  console.log( 'Respuesta: ',data )
});

request.fail(function( error ) {
  console.log( 'Error: ' , error )
}) */