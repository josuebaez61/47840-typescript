let cantidadAlumnos: number = 0;
let frutas: (string | number)[] = ['Manzana', 'Naranja', 2];
let productos: Array<string> = ['Zapato', 'PS5'];

let usuario: Humano = {
    nombre: 'Josue',
    apellido: 'Baez',
    edad: 28,
}

interface Humano {
    nombre: string;
    apellido: string;
    edad: number;
}

interface SuperHeroe extends Humano {
    poderes: string[];
}

function saludarHumano(usuario: Humano): void {
    console.log(`Hola ${usuario.nombre}`);
}
function listarSuperpoderes(heroe: SuperHeroe): void {
    console.log(heroe.poderes.join(', '));
}

saludarHumano(usuario);