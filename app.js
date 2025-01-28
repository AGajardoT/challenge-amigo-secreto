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
}

//Esta función debe recorrer el array y mostrar los amigos en pantalla
function mostrarAmigos() {
    document.getElementById
}