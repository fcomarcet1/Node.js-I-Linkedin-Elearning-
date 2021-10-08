var fs = require("fs");

fs.readdir('./archivos', (error, items) => {
    console.log(items)
});

fs.readdir('./archivos', {withFileTypes:true } , (error, items) => {
    console.log(items)
});