const yargs = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    description: "base para operacion",
    demandOption: true,
  })
  .option('l',{
    default : false,
    type:'boolean',
    alias: 'Listar',
    describe: 'Listar valores en consola'
  })
  .boolean(['l','listar'])
  .option('h',{
    type:'number',
    description:'maximo numero a multiplicar',
    default:10,
    demandOption: false,
  })
  .check((yargs, option) => {
    if (isNaN(yargs.b) ) {
      throw "La base no es un numero";
    }

    if (isNaN(yargs.h) ) {
        throw "El limite no es un numero";
      }
    return true;
  })
  .argv;

  module.exports = yargs;