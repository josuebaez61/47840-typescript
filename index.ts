let cantidadAlumnos: number = 0;
let frutas: (string | number)[] = ["Manzana", "Naranja", 2];
let productos: Array<string> = ["Zapato", "PS5"];

let usuario: Humano = {
  nombre: "Josue",
  apellido: "Baez",
  edad: 28,
};

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
  console.log(heroe.poderes.join(", "));
}

saludarHumano(usuario);

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Tipos genericos

interface ApiUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Producto {
  nombre: string;
  precio: number;
}

interface RespuestaListado<Argumento> {
  data: Argumento[];
}

const respuestaProductos: RespuestaListado<string> = {
  data: ["Hola", "Mundo"],
};

const respuestaApiUsers: RespuestaListado<ApiUser> = {
  data: [
    {
      id: 1,
      avatar: "",
      email: "",
      first_name: "",
      last_name: "",
    },
  ],
};

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Clases

interface IVehiculo {
  marca: string;
  cantidadRuedas: number;
  color: string;
  esMotorizado: boolean;
  detenerse: () => void;
}

class Vehiculo implements IVehiculo {
  marca: string;
  cantidadRuedas: number;
  color: string;
  esMotorizado: boolean;
  constructor(
    marca: string,
    cantidadRuedas: number,
    color: string,
    esMotorizado?: boolean
  ) {
    this.marca = marca;
    this.cantidadRuedas = cantidadRuedas;
    this.color = color;
    this.esMotorizado = esMotorizado || true;
  }

  acelerar(): void {}

  detenerse() {
    
  };
}

class VehiculoFormaCorta {
  constructor(
    public marca: string,
    public cantidadRuedas: number,
    private color: string,
    public esMotorizado?: boolean
  ) {}

  establecerColor(color: string): void {
    this.color = color;
  }
}

const limusina = new Vehiculo("Mercedes Benz", 6, "Negro");
const tractor = new VehiculoFormaCorta("Mercedes Benz", 4, "Verde", true);

console.log(limusina);

tractor.establecerColor("Celeste");
console.log(tractor);

class Taza {
  constructor(color: string, materialContruccion = "vidrio") {}
}

class Motocicleta extends Vehiculo {
  constructor(
    marca: string,
    color: string,
  ) {
    super(marca, 2, color, true);
  }
}

const motocicletaYamaha = new Motocicleta('Yamaha', 'roja');

motocicletaYamaha.acelerar()
console.log('motocicletaYamaha', motocicletaYamaha)