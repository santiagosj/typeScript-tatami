// function log<T, V>(a: T, b: V): V {
//     console.log('====================================');
//     console.log(a, b);
//     console.log('====================================');

//     return b
// }

// log<string, number>("Santi", 36);
// log<string, string>("Hola", "Como va?");

// // tipos inferidos

// log(1, 2);
// log("Hola", "Mundo");

async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(`${recurso}`);
    return respuesta.json()
}

type UserGenericos = {
    id: string,
    name: string,
}

(async () => {
    //const user: UserGenericos[] = await fetchData('/users') as any;
    const user = await fetchData<UserGenericos>('/users');

})();

// Genericos en clases

type Computador = {
    encender: () => void,
    apagar: () => void,
}

class Programador<T> {
    computador: T;
    constructor(t: T) {
        this.computador = t
    }
}

const programador = new Programador<Computador>({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador<string>('Hola Mundo');

programador.computador.encender();
programador1.computador.toUpperCase();

// genericos en interfaces

interface KeyValue<T, V> {
    key?: T | undefined,
    value?: V | null
}

interface ProductGenericos {
    id: string,
}

function fetchProduct(): KeyValue<string, ProductGenericos> {
    return {
        key: 'id',
        value: {
            id: 'id de producto'
        },
    };
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: "stock", value: 20
    };
}

//restricciones de genericos - constraints

// interface UsuarioGenericos {
//     id: string,
//     name: string
// }

class UsuarioGenericos {
    constructor(public id: string) { }
}

function print<T extends UsuarioGenericos>(t: T): T {

    return t
}

print({ id: 'user_id', name: 'Santi' });

class Estado<T>{
    protected data: T[] = [];

    agregar(t: T): void {
        this.data = [... this.data, ...[t]];    //spread operator
    }

    getEstado(): T[] {
        return this.data;
    }
}

type ObjectId = {
    id?: string | undefined;
}

//pasar generico con restricciones
class EstadoEliminar<T extends ObjectId> extends Estado<T>{
    eliminar(index: string) {
        this.data = this.data.filter(x => x.id !== index)   //_.slice() es lo mismo que el
    }
}
// pasar generico fijo
class EstadoUsuarios extends Estado<UsuarioGenericos> {
    reiniciarContrasenas() {

    }
}

const estadoUsuarios = new EstadoUsuarios();

// operador keyof

type Calendar = {
    id: number,
    font: string,
    owner: string,
}

const calendar: Calendar = { id: 1, font: 'google', owner: 'yo' };

function getProp<T>(objeto: T, property: keyof T) {
    return objeto[property];  /*con esto podemos obtener la propiedad de un tipo genérico*/
}

getProp<Calendar>(calendar, 'id');
getProp<Calendar>(calendar, 'font');
getProp<Calendar>(calendar, 'owner');

// utility types

type Punto = {
    x: number,
    y: number,
    desc?: string
}

type PuntoOpcional = Partial<Punto>
type PuntoRequerido = Required<Punto>

const keyVal: Record<string, number> = {
    'uno': 20,
    'dos': 35
}

const punto1: Omit<Punto, 'desc' | 'y'> = {
    x: 1,
    //y: 2
}

const punto2: Pick<Punto, 'x' | 'y'> = {
    x: 1,
    y: 2
}

const punto3: Readonly<Punto> = {
    x: 1,
    y: 2,
    desc: 'descripcion'
}

// punto3.x = 2 <-- error