 function encriptar(){
            
            var texto = document.querySelector("textarea[name=texto]").value;
            //convertir texto a minúsculas
            texto = texto.toLowerCase();
            var resultado = document.querySelector("textarea[name=resultado]");
            resultado.value = "";
            console.log(texto);
            //recorrer el texto ingresado y aplicar las reglas de encriptación
            for(var i = 0; i < texto.length; i++){
                if(texto[i] == "e"){
                    resultado.value += "enter";
                }else if(texto[i] == "i"){
                    resultado.value += "imes";
                }else if(texto[i] == "a"){
                    resultado.value += "ai";
                }else if(texto[i] == "o"){
                    resultado.value += "ober";
                }else if(texto[i] == "u"){
                    resultado.value += "ufat";
                }else{
                    
                    resultado.value += texto[i];
                }
                //poner text area vacio
                document.querySelector("textarea[name=texto]").value = "";
                
               

            }
            //ocultar imagenMuñeco, msg1 y msg2 y textito2
            document.querySelector("#imagenMuñeco").style.display = "none";
            document.querySelector(".msg1").style.display = "none";
            document.querySelector(".msg2").style.display = "none";
            document.querySelector(".textito2").style.display = "none";
            //En caso que el texto ingresado no contenga ningún caracter, mostrar imagenMuñeco y msg1, y ocultar resultado y el botón copiar.
            if(texto == ""){
                document.querySelector("#imagenMuñeco").style.display = "block";
                document.querySelector(".msg1").style.display = "block";
                document.querySelector(".msg2").style.display = "block";
                document.querySelector("textarea[name=resultado]").value = "";
                document.querySelector("button[name=copiar]").style.display = "none";
            }else{
                document.querySelector("#imagenMuñeco").style.display = "none";
                document.querySelector(".msg1").style.display = "none";
                document.querySelector(".msg2").style.display = "none";
                document.querySelector("textarea[name=resultado]").style.display = "block";
                document.querySelector("button[name=copiar]").style.display = "block";
            }
        }
      
        // Función que desencripta el texto ingresado en el textarea
        // y lo muestra en el textarea de resultado.
        
         function desencriptar(){
            var texto = document.querySelector("textarea[name=texto]").value;
            //convertir texto a minúsculas
            texto = texto.toLowerCase();
            var resultado = document.querySelector("textarea[name=resultado]");
            resultado.value = "";
            console.log(texto);
            console.log(resultado);
            //recorrer el texto ingresado y aplicar las reglas de desencriptación, teniendo en cuenta que si encuentra por ejemplo "enter" lo convierte a "e"
            for(var i = 0; i < texto.length; i++){
                if(texto[i] == "e" && texto[i+1] == "n" && texto[i+2] == "t" && texto[i+3] == "e" && texto[i+4] == "r"){
                    resultado.value += "e";
                    i += 4;
                    
                } else if(texto[i] == "i" && texto[i+1] == "m" && texto[i+2] == "e" && texto[i+3] == "s"){
                    resultado.value += "i";
                    i += 3;
                    
                } else if(texto[i] == "a" && texto[i+1] == "i"){
                    resultado.value += "a";
                    i += 1;
                    
                } else if(texto[i] == "o" && texto[i+1] == "b" && texto[i+2] == "e" && texto[i+3] == "r"){
                    resultado.value += "o";
                    i += 3;
                    
                } else if(texto[i] == "u" && texto[i+1] == "f" && texto[i+2] == "a" && texto[i+3] == "t"){
                    resultado.value += "u";
                    i += 3;
                    
                } else{
                    resultado.value += texto[i];
                }
            }


            //ocultar imagenMuñeco, msg1 y msg2
            document.querySelector("#imagenMuñeco").style.display = "none";
            document.querySelector(".msg1").style.display = "none";
            document.querySelector(".msg2").style.display = "none";
            //muestro resultado y el botón copiar
            document.querySelector("button[name=copiar]").style.display = "block";
            //ocultar textito2
            document.querySelector(".textito2").style.display = "none";

        }
            //En caso que el texto ingresado no contenga ningún caracter, mostrar imagenMuñeco y msg1, y ocultar resultado y el botón copiar.
            
        //escuchar el evento click del boton desencriptar
        document.querySelector("#desencriptar").addEventListener("click", desencriptar);
          //escuchar el evento click del boton encriptar
          document.querySelector("#encriptar").addEventListener("click", encriptar);
        // verificar cambios en el texto ingresado y si esta vacio, mostrar imagenMuñeco y msg1, y ocultar resultado y el botón copiar.
        document.querySelector("textarea[name=texto]").addEventListener("keyup", function(){
            var texto = document.querySelector("textarea[name=texto]").value;
            if(texto == ""){
                document.querySelector("#imagenMuñeco").style.display = "block";
                document.querySelector(".msg1").style.display = "block";
                document.querySelector(".msg2").style.display = "block";
                document.querySelector("textarea[name=resultado]").value = "";
                document.querySelector("button[name=copiar]").style.display = "none";
                
            }
        });
        //Escuchar el evento click del boton copiar y copiar el texto del textarea resultado al portapapeles. ademas de mostrar un mensaje flotante de que se copio. NO UN ALERT
        document.querySelector("button[name=copiar]").addEventListener("click", function(){
            var texto = document.querySelector("textarea[name=resultado]").value;
            document.querySelector("textarea[name=resultado]").select();
            document.execCommand("copy");
            document.querySelector(".textito2").style.display = "block";
            setTimeout(function(){
                document.querySelector(".textito2").style.display = "none";
            }, 2000);

        });
               
