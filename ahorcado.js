//Definimos Variables
var palabra=[];
var condicion=true;
var intentos=0;
var aciertos=0;
var boton=document.getElementById("boton");
var palabrasAdivinar = ["raton","teclado","pantalla","ram","procesador"];
random = Math.floor(Math.random()*(palabrasAdivinar.length));
adivinar = palabrasAdivinar[random];

//Para saber que palabra ha salido
console.log(adivinar);

// Estructuras de repeticion
for (var i = 0; i < adivinar.length; i++) {
    palabra[i]='_';
}

// Funcion de Comprobacion de letra introducida
function ComprobarCaracter() {
    var acertado=false;
    var letra="";
    letra = letraUsuario.value;
      if (isNaN(letra)) {
        for (var i = 0; i < adivinar.length; i++) {
          if (adivinar.charAt(i)==letra) {
            palabra[i]=adivinar.charAt(i);
            acertado=true;
            aciertos++;
        }
        caja2.value=palabra;
        if (aciertos>=adivinar.length) {
              caja2.value="Tu palabra era: "+adivinar
              boton=document.getElementById("boton");
        } else if (intentos>=5) {
              caja2.value="Has fallado";
              boton=document.getElementById("boton");
        }
            letraUsuario.value="";
        }
        if (acertado==true) {
              caja1.value="Has adivinado la letra";
        } else {
              caja1.value="Has fallado";
              intentos++;
              caja3.value=caja3.value+letra+"-";
        }
         console.log(palabra);
         console.log(intentos);
      }  else {
            caja1.value="Una letra por favor";

      }
  }
