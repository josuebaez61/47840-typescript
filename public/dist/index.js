"use strict";
var cantidadAlumnos = 0;
var frutas = ['Manzana', 'Naranja', 2];
var productos = ['Zapato', 'PS5'];
var usuario = {
    nombre: 'Josue',
    apellido: 'Baez',
    edad: 28,
};
function saludarHumano(usuario) {
    console.log("Hola " + usuario.nombre);
}
function listarSuperpoderes(heroe) {
    console.log(heroe.poderes.join(', '));
}
saludarHumano(usuario);
