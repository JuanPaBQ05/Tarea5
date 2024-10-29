function verificarCalificacion() {
    const inputNota = document.getElementById("inputNota").value;
    const resultado = document.getElementById("resultado");
    
    try {
        //Ejemplo de operador
        if (inputNota === "") {
            throw new Error("Por favor, ingresa una calificación.");
        }
        

        const nota = parseFloat(inputNota);
        

        if (isNaN(nota)) {
            throw new Error("La nota debe ser un número.");
        }

        if (nota >= 70) {
            resultado.className = "alert alert-success";
            resultado.textContent = "Aprobado Tu nota es " + nota;
        } else {
            resultado.className = "alert alert-danger";
            resultado.textContent = "Reprobado. Tu nota es " + nota;
        }
        //Ejemplo de manejo de control de errores
    } catch (error) {
        resultado.className = "alert alert-warning";
        resultado.textContent = `Error: ${error.message}`;
    }

    resultado.style.display = "block";
}

//Ejemplos de los 3 ciclos o bucles

function mostrarCiclos() {
    const numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero) || numero < 0 || numero > 10) {
        alert("Por favor, ingresa un número entre 1 y 10.");
        return;
    }


    cicloFor(numero);
    cicloWhile(numero);
    cicloDoWhile(numero);
}


function cicloFor(numero) {
    let resultadoFor = "";
    for (let i = 0; i < numero; i++) {
        resultadoFor += "for ";
    }
    document.getElementById("bucle-for").innerText = resultadoFor;
}


function cicloWhile(numero) {
    let resultadoWhile = "";
    let contador = 0;
    while (contador < numero) {
        resultadoWhile += "while ";
        contador++;
    }
    document.getElementById("bucle-while").innerText = resultadoWhile;
}


function cicloDoWhile(numero) {
    let resultadoDoWhile = "";
    let contador = 0;
    do {
        resultadoDoWhile += "do...while ";
        contador++;
    } while (contador < numero);
    document.getElementById("bucle-DoWhile").innerText = resultadoDoWhile;
}

function mostrarNumero() {
    const numero = "123.45";
    const numeroConvertido = Number(numero);
    document.getElementById("numberExample").innerText = `Número convertido de cadena: ${numeroConvertido}`;
}

function mostrarNumeroAleatorio() {
    const randomNum = Math.floor(Math.random() * 100); 
    document.getElementById("mathExample").innerText = `Número aleatorio generado: ${randomNum}`;
}

function mostrarFechaActual() {
    const fechaActual = new Date();
    document.getElementById("dateExample").innerText = `Fecha actual: ${fechaActual.toLocaleDateString()} ${fechaActual.toLocaleTimeString()}`;
}

window.onload = function() {
    mostrarNumero();
    mostrarNumeroAleatorio();
    mostrarFechaActual();
    mostrarArreglo();
    mostrarArregloTipado();
    encontrarPorID();
    encontrarPorEtiqueta();
    encontrarPorClase();
    encontrarPorSelectorCSS();
    encontrarPorColeccion();
};

function mostrarArreglo() {
    const frutas = ["Manzana", "Banana", "Naranja", "Pera"];
    frutas.push("Mango");  
    document.getElementById("arrayExample").innerText = `Arreglo de frutas: ${frutas.join(", ")}`;
}

function mostrarArregloTipado() {
    const edades = new Uint8Array([25, 30, 35, 40]);  
    edades[1] = 32;  
    document.getElementById("typedArrayExample").innerText = `Arreglo tipado de edades: ${edades.join(", ")}`;
}


function encontrarPorID() {
    const elemento = document.getElementById("tituloID");
    elemento.style.color = "blue";  
    console.log("Elemento encontrado por ID:", elemento);
}

function encontrarPorEtiqueta() {
    const elementos = document.getElementsByTagName("div");
    Array.from(elementos).forEach((elemento, index) => {
        elemento.style.backgroundColor = index % 2 === 0 ? "lightgray" : "lightyellow"; // Alterna colores
    });
    console.log("Elementos encontrados por etiqueta:", elementos);
}

function encontrarPorClase() {
    const elementos = document.getElementsByClassName("tituloClase");
    Array.from(elementos).forEach(elemento => {
        elemento.style.fontWeight = "bold"; 
    });
    console.log("Elementos encontrados por clase:", elementos);
}

function encontrarPorSelectorCSS() {
    const elemento = document.querySelector("span");
    elemento.style.fontStyle = "italic"; 
    console.log("Elemento encontrado por selector CSS:", elemento);
}

function encontrarPorColeccion() {
    const coleccion = document.querySelectorAll("h4, div");  // Selecciona todos los elementos <h4> y <div>
    coleccion.forEach((elemento, index) => {
        elemento.style.border = "1px solid black"; // Añade un borde negro a cada elemento
    });
    console.log("Elementos encontrados por colecciones:", coleccion);
}







