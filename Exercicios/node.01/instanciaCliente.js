const contadorA = require('./instanciaUnica.js');
const contadorB = require('./instanciaUnica.js');

const contadorC = require('./instanciaNova.js')();
const contadorD = require('./instanciaNova.js')();

contadorA.inc()
contadorA.inc()
console.log(contadorB);

contadorC.inc()
contadorC.inc()
console.log(contadorD);