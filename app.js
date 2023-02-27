
const { crearArchivo } = require("./helpers/multiplicar");
const yargs = require("./config/yargs")

console.clear();

crearArchivo(yargs.b,yargs.l,yargs.h)
  .then((val) => console.log(val))
  .catch((val) => console.log(val));



  
/* 
console.log(process.argv)
 */

//const base = 5;

/* console.log(process.argv)
const [,,a='base=5'] = process.argv;
const [,base = 5] = a.split('=') 
*/