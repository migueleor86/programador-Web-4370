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

  getData('https://swapi.co/api/people/1', handleRequest)

  function handleRequest(error, data) {
    if (!error) {
      console.log('Request ok')
      console.log(data)
    } else {
      console.error('Falló el request: ', error)
    }
  }

  function getPersonById(id, cd) {
    getData(`https://swapi.co/api/people/${id}`, cd)
    // equivalente  a: 'https://swapi.co/api/people' + id
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