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
    private static clanMembers: number = 0 // propiedad estatica: pertenece a la clase no a la instancia.
    private static clanes: string[] = [] // deberia ser una propiedad de la calse juego
    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number,
        public clan: string
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

    static agregarMiembro(clan: string): void {
        Personaje.clanes.push(clan)
        let filteredClan = Personaje.clanes.filter(c => c !== clan)
        this.clanMembers = filteredClan.length
        console.log(this.clanMembers)
        // Personaje.clanMembers++
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

    static getClanMembers(): number {
        return Personaje.clanMembers
    }
}

const subZero = new Personaje(1, 'Sub Zero', 100, 200, 'Lin-Kuei')

const frozen = new Personaje(2, 'Frozen', 100, 200, 'Lin-Kuei')

const scorpion = new Personaje(3, 'Scorpion', 100, 200, 'Shirai-Ryu')

// Personaje.agregarMiembro(subZero.clan)

// Personaje.agregarMiembro(frozen.clan)

Personaje.agregarMiembro(scorpion.clan)