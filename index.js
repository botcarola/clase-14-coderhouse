// js es un lenguaje implícitamente sincrónico
// va a esperar a que se ejecute una tarea para saltar a la ejecución de otra

// console.log("1")
// console.log("2")
// console.log("3")

// js también puede soportar asincronismo

console.log("hola,  estoy primera")

// setTimeout es un recurso asincrónico que me va a permitir ejecutar un callback luego de un tiempo determinado en milisegundos

setTimeout( () => {

    console.log("hola, estoy segunda")
}, 1000)

console.log("hola, estoy tercera")


// callstack ---> PILA DE EJECUCIÓN
// ES DE UNA SOLA LÍNEA
// LIFO (LAST IN, FIRST OUT) // ÚLTIMO EN ENTRAR, PRIMERO EN SALIR
// ESTE EJEMPLO NO ES ASINCRÓNICO, PERO PRECISA DE UN ANÁLISIS A LA HORA DE PROCESARSE

const multiplicarLoSumado = (valor1, valor2) => {

    return suma(valor1, valor2) * 2

}

const suma = (a , b) => a + b

console.log(multiplicarLoSumado(5, 5))

//mensaje subliminal asincrónico

const box = document.querySelector(".box")
const body = document.querySelector("body")

body.onclick = () => {
    box.classList.add("box-visible")

    setTimeout(() => {
        box.classList.remove("box-visible")
    }, 2000)
}

// setTimeout tiene una forma de ser prevenido
// clearTimeout()
//precisa de que le pasemos como argumento un identificador ligado a un setTimeout

const tiempoLimite = setTimeout(() => {
    console.log("BOOM")

}, 2000)

clearTimeout(tiempoLimite) // paso el identificador del setTimeout

// setInterval
// ejecuta un callback cada determinada cantidad de tiempo
// esta cantidadde tiempo se expresa en milisegundos

setInterval(() => {
    console.log("SOY UN LOOP WIII")
}, 4000)

// cleatInterval()
// recibe como argumento un identificador ligado a un setInterval

const repetirMensaje = setInterval(() => {
    console.log("repito")
}, 1000)

clearInterval(repetirMensaje)

// PROMESAS

// REPRESENTA A UN EVENTO FUTURO SOBRE EL CUAL AÚN NO TENEMOS UNA RESPUESTA
// TIENE DOS PARÁMETROS OBLIGATORIOS (RESOLVE, REJECT)
// TIENE 3 ESTADOS
// PENDING ---> ESTADO PRINCIPAL DE LAS PROMESAS

// el estado pending expresa que aún no se ha generado una resolución o un rechazo

const promesaDeQueVengoElLunes = new Promise( (resolve, reject) => {

})

console.log(promesaDeQueVengoElLunes)

const estadoPromesa = (respuesta) => {
    return new Promise ( (resolve, reject) => {
        if (respuesta === true){
            resolve("La promesa está resuelta")
        } else {
            reject("La promesa ha sido rechazada")
        }
    })
}

console.log(estadoPromesa(true))
console.log(estadoPromesa(false))

const estadoPromesaConSugarSyntax = (respuesta) => {
    return new Promise ( (resolve, reject) => {
         respuesta === true ? resolve(console.log("resuelta")) : reject(console.log("rechazada"))
    })
}

estadoPromesaConSugarSyntax(true)

// .then, .catch, .finally

//.then capturar el valor de la resolución de la promesa siempre para resolve
// al obtener el resolve, se va a  ejecutar el código que se encuentra dentro de este elemento

//.catch se ocupa de dar una respuesta siempre que la promesa sea rejected
// .finally se ejecuta siempre, independientemente de la respuesta que te pueda dar una promesa

const resolucionFinal = (valor) => {

    estadoPromesaConSugarSyntax(valor)
    .then(() => {
        console.log(" .then")
    })
    .catch( () => {
        console.log(" .catch")
    })
    .finally( () => {
        console.log("te acompaño en el sentimiento")
    })
}

resolucionFinal(true)
resolucionFinal(false)