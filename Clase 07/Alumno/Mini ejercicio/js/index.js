var car = '{"price":3500,"model":"Etios","brand":"Toyota"}';
var obj = JSON.parse(car);
console.log('El precio es: ', obj.price, ' y el modelo es: ', obj.model);