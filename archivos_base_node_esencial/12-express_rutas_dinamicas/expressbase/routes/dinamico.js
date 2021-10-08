var express = require('express');
var router = express.Router();


router.get("/" , function(req, res){
    res.send("informacion dinamica");
})

router.get("/:datoURL" , function(req, res){
    res.send("informacion dinamica: " + req.params.datoURL  );
})

module.exports = router;
