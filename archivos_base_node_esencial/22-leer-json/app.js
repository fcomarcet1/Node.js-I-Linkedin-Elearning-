// Imposrtar fichero externo
var libro = require('./archivos/libros.json');
console.log(libro.autor);

// Lectura fichero JSON
var fs = require('fs');

fs.readFile('./archivos/libros.json' , (error, datos)=>{
    console.log(JSON.parse(datos).autor );
} )