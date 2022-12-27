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