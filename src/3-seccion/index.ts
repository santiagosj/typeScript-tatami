//==============================
//POO
//==============================

class Personaje {

    // readonly id: number //propiedad de solo lectura
    // name: string
    // nivel: number
    // private _hp: number //propiedad privada solo accesible desde la clase
    // clan?: string //propiedad opcional

    // constructor(id: number, name: string, nivel: number, hp: number) {
    //     this.id = id
    //     this.name = name
    //     this.nivel = nivel
    //     this._hp = hp
    // }

    //=============================
    //  propiedades por parametro
    //=============================

    clan?: string
    team: number = 0
    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number,
    ) { }

    congelar(): string {
        return "gssshhhhh"
    }

    subirNivel(): number {
        this.nivel = this.nivel + 10
        return this.nivel
    }

    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad
        //
        return this._hp
    }

    //=======================
    // getters y Setters
    //=======================
    get hp(): number {
        return this._hp
    }

    // set hp(cantidad:number){
    //     this._hp = this._hp + cantidad
    // }
}

const subZero = new Personaje(1, 'Sub Zero', 100, 200)

subZero.congelar()

