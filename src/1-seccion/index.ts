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
