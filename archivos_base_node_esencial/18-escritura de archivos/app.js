var fs = require("fs");

/*
    // Async si no encuentra el fichero lo crea
    fs.writeFile( './archivos/texto-nuevo.txt' , 'datos enviados desde node' , (error)=>{
        if(error){
            console.log(" error al escribir archivo");
        }else{
            console.log("archivo modificado exitosamente");
        }
    })
*/

// Añadir nuevos datos a un fichero existente Async
fs.appendFile( './archivos/texto-nuevo.txt' , 'NUEVOS DATOS' , (error)=>{
    if(error){
        console.log(" error al escribir archivo");
    }else{
        console.log("archivo modificado exitosamente");
    }
})