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