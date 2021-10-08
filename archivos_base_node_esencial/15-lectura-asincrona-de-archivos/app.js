var fs = require('fs');

// Lectura sincrona
// var contenido = fs.readFileSync('./archivos/archivo.avi', 'utf8');

// lectura asincrona
var contenido = fs.readFile('./archivos/texto.txt' , 'utf8' , function(error, datos){
    console.log("codigo finalizada la lectura " +datos);
} )

console.log("codigo antes de finalizar la lectura " + contenido);