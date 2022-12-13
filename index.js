function operaciones(operacion) {
    if (operacion === "sumar") {
        return (a, b) => a + b;
    }
    else if (operacion === "restar") {
        return (a, b) => a - b;
    }
    else if (operacion === "multiplicar") {
        return (a, b) => a * b;
    }
    else {
        return (a, b) => a / b;
    }
}
function tallesDisponibles() {
    let talle = prompt(`que talle esta buscando?`).toLowerCase();
    switch (talle) {
        case "34": {
            let mensaje = "Tenemos stock, es el talle más chico que tenemos"; {
                alert(mensaje);
                break;
            }
        }
        case "35": {

            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "36": {
            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "37": {
            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "38": {
            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "39": {
            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "40": {
            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "41": {
            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "42": {
            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "43": {
            let mensaje = "Tenemos stock"; {
                alert(mensaje);
                break;
            }
        }
        case "44": {
            let mensaje = "Tenemos stock, este es nuestro talle mas grande"; {
                alert(mensaje);
                break;
            }
        }
        default:
            alert("talle no disponible");
            break;
    }
}
function colorZapatilla() {
    let color = prompt(`En ese modelo nos quedan color Negro, Blanco y Verde,escribe el color que deseas`).toLowerCase();
    switch (color) {
        case "negro": {
            let mensaje = `Perfecto, el valor a abonar es de $23000 + $800 de envio`; {
                alert(mensaje);
                break;
            }
        }
        case "blanco": {
            let mensaje = `Perfecto, el valor a abonar es de $23000 + $800 de envio`; {
                alert(mensaje);
                break;
            }
        }
        case "verde": {
            let mensaje = `Perfecto, el valor a abonar es de $23000 + $800 de envio`; {
                alert(mensaje);
                break;
            }
        }
        default:
            alert("Disculpe pero no tenemos ese color");

            break;
    }
}
function iniciarCompra() {
    const usuario = [nombre = prompt("ingrese su nombre"),
                    apellido = prompt("ingrese su apellido"),
                    pais = prompt("ingrese su pais"),
                    edad = prompt("ingrese su edad"),
                    mail = prompt("ingrese su mail")];

    if (edad >= 18) {

        alert("Bienvenido a la pagina de compra online de zapatilla");

        let mensaje = `Me llamo Botlulu y sere su asistente virtual en la pagina de compra de zapatillas,es un placer tener el agrado de saludarle ${nombre} ${apellido} de ${edad} años de edad, del genial pais ${pais}.Luego de la compra te enviare un mail a ${mail} para que descargues la factura electronica`;

        alert(mensaje);
        let zapatilla = prompt(`En este momento solo contamos con dos modelos de zapatillas Nike... "Vapormax" y "Air Force",por favor, escribi el modelo que te interesa`).toLowerCase();

        if (zapatilla === "vapormax") {
            alert("Que lindo modelo elegiste");
            tallesDisponibles()
            colorZapatilla()

        } else if (zapatilla === "air force") {
            alert("buenisimo ese modelo");
            tallesDisponibles()
            colorZapatilla()

        } else {
            alert("Disculpe pero no tenemos ese modelo en este momento, que tenga buen dia")
        }

    } else if (edad < 18) {
        alert("Lo sentimos, pero no tienes la edad suficiente para hacer compras por internet D:");
        clearInterval(saludar)
    }
}
iniciarCompra()

let suma = operaciones ("sumar");
let resta = operaciones("restar");
let multiplicacion = operaciones("multiplicar");
let divicion = operaciones("dividir");

let cuota1 = 0;
let cuota3 = 0.10;
let cuota6 = 0.22;
let cuota9 = 0.50;
let cuota12 = 0.65;
let cuota18 = 0.80;


let precio = 23000
let cantidad = parseInt(prompt("Ingrese cantidad de pares"));
let envio = 800;
let cuotas = prompt(`En cuantos pagos vas a realizarlo?
1 = 0% interes,
3 = 10% interes,
6 = 22% interes,
9 = 50% interes,
12 = 65% interes,
18 = 80% interes`);

switch (cuotas) {
    case "1": {
        let precioFinal = divicion(suma(multiplicacion(precio, cantidad), envio), cuotas);
        let precioFinalFinal = suma(multiplicacion(precioFinal, cuota1), precioFinal)
        let total = multiplicacion(precioFinalFinal, cuotas)
        let mensaje = `El monto a abonar es ${cuotas} pago de $${precioFinalFinal}, precio final $${total}`; {
            alert(mensaje);
            alert("Muchas gracias por su compra! Que la disfrute :D")
            break;
        }
    }
    case "3": {
        let precioFinal = divicion(suma(multiplicacion(precio, cantidad), envio), cuotas);
        let precioFinalFinal = suma(multiplicacion(precioFinal, cuota3), precioFinal)
        let total = multiplicacion(precioFinalFinal, cuotas)
        let mensaje = `El monto a abonar es ${cuotas} pago de $${precioFinalFinal}, precio final $${total}`; {
            alert(mensaje);
            alert("Muchas gracias por su compra! Que la disfrute :D")
            break;
        }
    }
    case "6": {
        let precioFinal = divicion(suma(multiplicacion(precio, cantidad), envio), cuotas);
        let precioFinalFinal = suma(multiplicacion(precioFinal, cuota6), precioFinal)
        let total = multiplicacion(precioFinalFinal, cuotas)
        let mensaje = `El monto a abonar es ${cuotas} pago de $${precioFinalFinal}, precio final $${total}`; {
            alert(mensaje);
            alert("Muchas gracias por su compra! Que la disfrute :D")
            break;
        }
    }
    case "9": {
        let precioFinal = divicion(suma(multiplicacion(precio, cantidad), envio), cuotas);
        let precioFinalFinal = suma(multiplicacion(precioFinal, cuota9), precioFinal)
        let total = multiplicacion(precioFinalFinal, cuotas)
        let mensaje = `El monto a abonar es ${cuotas} pago de $${precioFinalFinal}, precio final $${total}`; {
            alert(mensaje);
            alert("Muchas gracias por su compra! Que la disfrute :D")
            break;
        }
    }
    case "12": {
        let precioFinal = divicion(suma(multiplicacion(precio, cantidad), envio), cuotas);
        let precioFinalFinal = suma(multiplicacion(precioFinal, cuota12), precioFinal)
        let total = multiplicacion(precioFinalFinal, cuotas)
        let mensaje = `El monto a abonar es ${cuotas} pago de $${precioFinalFinal}, precio final $${total}`; {
            alert(mensaje);
            alert("Muchas gracias por su compra! Que la disfrute :D")
            break;
        }
    }
    case "18": {
        let precioFinal = divicion(suma(multiplicacion(precio, cantidad), envio), cuotas);
        let precioFinalFinal = suma(multiplicacion(precioFinal, cuota18), precioFinal)
        let total = multiplicacion(precioFinalFinal, cuotas)
        let mensaje = `El monto a abonar es ${cuotas} pago de $${precioFinalFinal}, precio final $${total}`; {
            alert(mensaje);
            alert("Muchas gracias por su compra! Que la disfrute :D")
            break;
        }
    }
    default:
        alert("cantidad de cuotas invalida");

        break;
}
