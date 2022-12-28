//=========================
// tipos basicos
//=========================
let mensaje: string = "Hola TypeScript";

mensaje = "Hola Mundo"

mensaje = "Chau Mundo"

console.log(mensaje)

/**
 * tipos JS
 * ========
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * ========
 * tipos TS
 * ========
 * any // no usar
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * tipos inferidos
 * 
 */

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "Velociraptor";
let exitntos: boolean = true;

function myFunction(config: any) {
    return config
}

let animales: string[] = ['perro', 'gato', 'lobo', 'golondrina', 'piton']
let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let checks: boolean[] = []
let nums2: Array<number> = [1, 2, 3, 4, 5, 6]

// tuplas = set de datos ordenados

let tupla: [number, string] = [1, 'algun strings']

tupla.push(12) // no arroja error pero no se puede <-- hacer el push

// enums
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' } // 0,1,2,3, Chica = 's'

const miEnum = Talla.Grande

console.log(miEnum)

const enum LoadingState { Idle, Loading, Success, Error } //es buena practica agregar la palabra const antes de enum, genera codigo mas optimizado

const estado = LoadingState.Success

//objetos y definicion de tipos

type Direccion = {
    numero: number,
    calle: string,
    pais: string,
}

type Persona = {
    readonly id: number, // readonly es solo de lectura y no sea reescribible
    nombre?: string, // ? <-- el signo de pregunta le da la caracteristica de opcional
    talla: Talla,
    direccion: Direccion
}

// const objeto: {
//     readonly id:number, // readonly es solo de lectura y no sea reescribible
//     nombre?:string, // ? <-- el signo de pregunta le da la caracteristica de opcional
//     talla: Talla
// } = {
//     id:1,
//     nombre: 'Santi',
//     talla: Talla.Grande
// }

const objeto: Persona = {
    id: 1,
    nombre: 'Santi',
    talla: Talla.Grande,
    direccion: {
        numero: 123,
        calle: 'Siempre viva',
        pais: 'Argentina'
    }
}

// ejemplo de arreglo de objetos compuesto
const arr: Persona[] = []

// funciones

const fn: (a: number) => string = (edad: number) => {
    if (edad > 17)
        return "Bienvenido"

    return "No puedes pasar"
}

function validaEdad(edad: number, msg: string): string {
    if (edad > 17)
        return `Puedes entrar ${msg}`
    return "No puedes pasar"
}

validaEdad(18, 'Bienvenido')

// tipo de retorno "never"

function ErrorUsuario(): never {
    throw new Error('Error de usuario')
}

