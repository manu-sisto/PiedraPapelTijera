const opciones = document.querySelectorAll(".opcion")

for (let i = 0; i < opciones.length; i++) {
    const opcion = opciones[i];
    opcion.onclick = manejarClick
}

function manejarClick (evento) {
    //da un jugada de la maquina. 
    const jugadaMaquina = obtenerJugadaMaquina()
    //va a comparar piedra con esa jugada
    const resultado = comparar(evento.target.id, jugadaMaquina)
    //muestra resultado en el div.
    document.querySelector("#resultado").textContent = resultado;
    document.querySelector("#jugada-maquina").textContent = jugadaMaquina;
}

function obtenerJugadaMaquina() {
    return posiblesJugadas[Math.floor(Math.random() * posiblesJugadas.length)]
}

var posiblesJugadas = ["piedra", "papel", "tijera"];

function comparar(valA, valB) {
    if (valA === valB) {
        return "empataste";
    }
    if (valA === "piedra") {
        if (valB === "tijera") {
            return "ganaste";
        }
        if (valB === "papel") {
            return "perdiste";
        }
    }
    if (valA === "papel") {
        if (valB === "tijera") {
            return "perdiste";
        }
        if (valB === "piedra") {
            return "ganaste";
        }
    }
    if (valA === "tijera") {
        if (valB === "papel") {
            return "ganaste";
        }
        if (valB === "piedra") {
            return "perdiste";
        }
    }
}
