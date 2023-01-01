"use strict";
let mensaje = "Hola TypeScript";
mensaje = "Hola Mundo";
mensaje = "Chau Mundo";
console.log(mensaje);
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "Velociraptor";
let exitntos = true;
function myFunction(config) {
    return config;
}
let animales = ['perro', 'gato', 'lobo', 'golondrina', 'piton'];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let checks = [];
let nums2 = [1, 2, 3, 4, 5, 6];
let tupla = [1, 'algun strings'];
tupla.push(12);
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const miEnum = Talla.Grande;
console.log(miEnum);
const estado = 2;
const objeto = {
    id: 1,
    nombre: 'Santi',
    talla: Talla.Grande,
    direccion: {
        numero: 123,
        calle: 'Siempre viva',
        pais: 'Argentina'
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return "Bienvenido";
    return "No puedes pasar";
};
function validaEdad(edad, msg) {
    if (edad > 17)
        return `Puedes entrar ${msg}`;
    return "No puedes pasar";
}
validaEdad(18, 'Bienvenido');
function ErrorUsuario() {
    throw new Error('Error de usuario');
}
//# sourceMappingURL=index.js.map