import validator from './validator.js';
// console.log(validator);

const botonValidar = document.getElementById("validar_enviar");
botonValidar.addEventListener("click", validarTarjeta);

const inputNumeroTarjeta = document.getElementById("numberTC");

inputNumeroTarjeta.addEventListener("keyup", validarEnteroEnCampo);

        function validarTarjeta() {
            validarDatosEntrada(inputNumeroTarjeta);
        }

        function validarDatosEntrada(inputNumeroTarjeta) {  //creando para obtener valores que ingresan los usuarios en los 3 parametros
            let valorMes = document.getElementById("mes").value;
            let valorYear = document.getElementById("year").value;
            let valorTarjeta = inputNumeroTarjeta.value; // obtener lo que ingresa usuario en  id="numberTC"

            //verificando que usuario ingrese los datos

            if (valorTarjeta.length == 0 || valorYear == "" || valorMes == "") {
                alert("Los valores numero de tarjeta, año y mes son obligatorio")
                return
            }
            ValidaTarjeta(inputNumeroTarjeta)
        }
        function validarEnteroEnCampo() {
            let txtNumeroTarjeta = document.getElementById("numberTC"); // aqui se llama nuevamente a los datos que se ingresan como numero de TC
            let valueInterno = parseInt(txtNumeroTarjeta.value); // Valor interno que sea numero y no un string
            if (!Number.isInteger(valueInterno)) {          //condicion para que no entren letras, solo numeros
                alert("Los valores de la tarjeta de credito deben ser numeros")
                document.getElementById("numberTC").value = ""
            } else {
                txtNumeroTarjeta.value = valueInterno;
                return true;
            }
        }

        function ValidaTarjeta(inputNumeroTarjeta) {     //aquí se valida TC

            let numerosArray = inputNumeroTarjeta.value.split("");  // hacer un array con los numeros ingresados
            numerosArray = numerosArray.reverse();                  // invertir array
            console.log(numerosArray);


            let sumaTotal = 0                                       //método de numeros pares
            for (var i = 0; i < numerosArray.length; i++) {

                if (i % 2 === 1) {                                  //método de numeros pares
                    numerosArray[i] = numerosArray[i] * 2;
                    console.log(numerosArray[i])                    //numeros pares son multiplicados por 2

                    if ((numerosArray[i]) >= 10) {                  //si el resultado de numeros es mayor o igual 10, se suman sus numeros
                        numerosArray[i] = suma(numerosArray[i])
                        console.log(numerosArray[i])
                    }
                    sumaTotal += parseInt(numerosArray[i])
                }
                else {
                    sumaTotal += parseInt(numerosArray[i])
                }
            }

            //ValidaSumaTotal()
            if (sumaTotal % 10 != 0) {
                alert("Tarjeta invalida")

            }
            else {
                alert("Tarjeta valida")
            }
        }

        function suma(numero) {                                 // funcion que la suma sea un numero entero
            return (Math.floor(numero / 10)) + (numero % 10)
        }


// const enmascarar = maskify(inputNumeroTarjeta);
//     document.getElementById("numberTC").value = enmascarar;

//     maskify(inputNumeroTarjeta){
//         return inputNumeroTarjeta.slice(0,-4).replace(/./g,"#")+inputNumeroTarjeta.slice(-4)

            
                    // let numero = inputNumeroTarjeta;
                    // let lastDigit = numero.value.slice(-4);
                    // let mask_symbol = "#";
                    // let masked_str = mask_symbol.repeat(5) + lastDigit;
                    // console.log(masked_str)

                    // document.querySelector(".texto").innerHTML = "TARJETA" + masked_str;
                  
                    
                
