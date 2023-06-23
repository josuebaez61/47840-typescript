"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cantidadAlumnos = 0;
var frutas = ["Manzana", "Naranja", 2];
var productos = ["Zapato", "PS5"];
var usuario = {
    nombre: "Josue",
    apellido: "Baez",
    edad: 28,
};
function saludarHumano(usuario) {
    console.log("Hola " + usuario.nombre);
}
function listarSuperpoderes(heroe) {
    console.log(heroe.poderes.join(", "));
}
saludarHumano(usuario);
var respuestaProductos = {
    data: ["Hola", "Mundo"],
};
var respuestaApiUsers = {
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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, cantidadRuedas, color, esMotorizado) {
        this.marca = marca;
        this.cantidadRuedas = cantidadRuedas;
        this.color = color;
        this.esMotorizado = esMotorizado || true;
    }
    Vehiculo.prototype.acelerar = function () { };
    Vehiculo.prototype.detenerse = function () {
    };
    ;
    return Vehiculo;
}());
var VehiculoFormaCorta = /** @class */ (function () {
    function VehiculoFormaCorta(marca, cantidadRuedas, color, esMotorizado) {
        this.marca = marca;
        this.cantidadRuedas = cantidadRuedas;
        this.color = color;
        this.esMotorizado = esMotorizado;
    }
    VehiculoFormaCorta.prototype.establecerColor = function (color) {
        this.color = color;
    };
    return VehiculoFormaCorta;
}());
var limusina = new Vehiculo("Mercedes Benz", 6, "Negro");
var tractor = new VehiculoFormaCorta("Mercedes Benz", 4, "Verde", true);
console.log(limusina);
tractor.establecerColor("Celeste");
console.log(tractor);
var Taza = /** @class */ (function () {
    function Taza(color, materialContruccion) {
        if (materialContruccion === void 0) { materialContruccion = "vidrio"; }
    }
    return Taza;
}());
var Motocicleta = /** @class */ (function (_super) {
    __extends(Motocicleta, _super);
    function Motocicleta(marca, color) {
        return _super.call(this, marca, 2, color, true) || this;
    }
    return Motocicleta;
}(Vehiculo));
var motocicletaYamaha = new Motocicleta('Yamaha', 'roja');
motocicletaYamaha.acelerar();
console.log('motocicletaYamaha', motocicletaYamaha);
