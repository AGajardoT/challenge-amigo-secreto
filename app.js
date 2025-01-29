// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let listaAmigos = [];

//Esta funcion debe agregar un amigo a la lista de amigos
function agregarAmigo() {
    if (document.getElementById("amigo").value == "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    else {
    listaAmigos.push(document.getElementById("amigo").value);
    document.getElementById("amigo").value = "";
}
    mostrarAmigos();
}

//Esta función debe recorrer el array y mostrar los amigos en pantalla
function mostrarAmigos() {
    let lista = document.getElementById("listaDeAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = listaAmigos[i];
        lista.appendChild(nuevoAmigo);
    }
    if (listaAmigos.length > 0) {
        lista.classList.remove("hidden");
    }
}

//Sortear amigo
function sortearAmigo() {
    if (listaAmigos.length != 0) {
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.classList.remove("hidden");
        resultadoElement.textContent = amigoSorteado;
        return;
    }
    else {
        alert("No hay amigos en la lista");
        return;
    }
}

//Enter presionado en el input
let inputUsuario = document.getElementById(`amigo`);
inputUsuario.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          agregarAmigo();
        }
});