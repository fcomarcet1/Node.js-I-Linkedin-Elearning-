 function saludo(){
    return "Hola";
 }

// metodo
 let calculo = {
    duplicar: function(valor1){
        return valor1 * 2;
    }  ,
    dividir: function(valor1){
        return valor1 / 2;
    }
 }


 console.log(saludo() ,calculo.duplicar(10) , calculo.dividir(10)  ) ; 