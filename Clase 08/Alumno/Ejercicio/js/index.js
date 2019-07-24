window.onload = function () { // es como una funcion madre, que corregir el problema de ejecion en el navegador
  var list = document.getElementById('mainList');

  var texts = ['Ed', 'Edd', 'Eddy'];

  for (i = 0; i < texts.length; i++) {
    var item = document.createElement('li');
    item.className = 'list-group-item';
    item.innerHTML = texts[i];
    list.appendChild(item);
  }
}
/* Crear y agregar nodos en una lista 

- Usar los métodos y propiedades vistos en clase para crear tres nodos `<li>` con distintos nombres adentro, agregarles a cada uno la clase `list-group-item` y agregarlos a la lista provista uno por uno.
 */