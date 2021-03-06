const opciones = document.querySelectorAll(".opcion")

for (let i = 0; i < opciones.length; i++) {
    const opcion = opciones[i];
    opcion.onclick = manejarClick
}

function manejarClick (evento) {
    document.querySelectorAll(".opcion")[0].style.backgroundColor = "#EFEFEF"
    document.querySelectorAll(".opcion")[1].style.backgroundColor = "#EFEFEF"
    document.querySelectorAll(".opcion")[2].style.backgroundColor = "#EFEFEF"
    const jugadaMaquina = obtenerJugadaMaquina()
    document.querySelector("#jugada-maquina").textContent = jugadaMaquina;
    const resultado = comparar(evento.target.id, jugadaMaquina)
    document.querySelector("#resultado").textContent = resultado.toUpperCase();
    cambiarColor(resultado)
    evento.target.style.backgroundColor = "blue"
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
            return "ganaste!";
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
            return "ganaste!";
        }
    }
    if (valA === "tijera") {
        if (valB === "papel") {
            return "ganaste!";
        }
        if (valB === "piedra") {
            return "perdiste";
        }
    }
}

function cambiarColor(res){
    if (res === "ganaste!") {
        document.querySelector("#resultado").style.color = "green";
    } else if (res === "empataste") {
        document.querySelector("#resultado").style.color = "darkgoldenrod";
    } else {
        document.querySelector("#resultado").style.color = "red";
    }
}

