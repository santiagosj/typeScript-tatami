export default class Grupo {
    constructor(public readonly id: number, public name: string) { }
}

export const defaultGroup = {
    users: 'users',
    admin: 'admin'
}

const funcionRandom = () => {
    return Math.floor((Math.random() * 10)); // retorna un numero entre el rango [0-9]
}