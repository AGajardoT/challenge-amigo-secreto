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
    console.log(listaAmigos);
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
}

//Esta función debe sortear un amigo y mostrarlo en pantalla
function sortearAmigo() {
    if (listaAmigos.length != 0) {
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        document.getElementById("resultado").textContent = amigoSorteado;
        return;
    }
    else {
        alert("No hay amigos en la lista");
        return;
    }
}