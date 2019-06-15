var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

function promedio(cambioPorVariableExterna){
var contador = 0;
for(var i = 0; i < cambioPorVariableExterna.length; i++){
 var contador = contador + cambioPorVariableExterna[i];
}
  return contador / cambioPorVariableExterna.length;
}

console.log(promedio(examResults))