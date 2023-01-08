//==============================
//POO
//==============================

class Personaje {

    id: number
    name: string
    nivel: number
    hp: number

    constructor(id: number, name: string, nivel: number, hp: number) {
        this.id = id
        this.name = name
        this.nivel = nivel
        this.hp = hp
    }

    congelar(): string {
        return "gssshhhhh"
    }

    subirNivel(): number {
        this.nivel = this.nivel + 10
        return this.nivel
    }

    cambiarHP(cantidad: number): number {
        this.hp = this.hp + cantidad
        return this.hp
    }
}

const subZero = new Personaje(1, 'Sub Zero', 100, 200)

subZero.congelar()