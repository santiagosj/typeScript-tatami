//=========================
// tipos avanzados
//=========================

// 1- union type
//-----------------------------
let puntaje: number | string = 98

puntaje = '98';

type Animal = {
    id: number,
    estado: string
}

type Usuario = {
    id: number,
    name: string,
}

let animal: Usuario | Animal = {
    id: 1,
    estado: '',
    name: ''
}

function sumaDos(n: number | string): number {

    if (typeof n === "number") {
        return n + 2
    }

    return parseInt(n) + 2
}

// sumaDos(2) | sumaDos('2')

// 2- intersection type
//------------------------

type Audit = {
    created_at: string,
    modified_at: string,
}

type Product = {
    name: string
}

const product: Audit & Product = {
    created_at: '',
    modified_at: '',
    name: ''
}

// 3- literal types
//-------------------------------

type Fibo = 0 | 1 | 2 | 3 | 5

const nDeFibo: Fibo = 3

//4- Nullable types
//-------------------------------

function toNumber(s: string | null | undefined) {
    if (!s) {
        return 0
    }
    return parseInt(s)
}

const n = toNumber(undefined)

//5- optional chain operator

function getUser(id: number) {
    if (id < 0) {
        return null
    }
    return {
        id: 1,
        name: 'Santi',
        created_at: new Date()
    }
}

const user = getUser(1)

console.log('usuario', user?.created_at)

const arr1 = null

arr1?.[0]

const fn5: any = null

fn5?.()

