"use strict";
class Personaje {
    constructor(id, name, nivel, _hp, clan) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
        this.clan = clan;
    }
    congelar() {
        return "gssshhhhh";
    }
    subirNivel() {
        this.nivel = this.nivel + 10;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    static agregarMiembro(clan) {
        Personaje.clanes.push(clan);
        let filteredClan = Personaje.clanes.filter(c => c !== clan);
        this.clanMembers = filteredClan.length;
        console.log(this.clanMembers);
    }
    get hp() {
        return this._hp;
    }
    static getClanMembers() {
        return Personaje.clanMembers;
    }
}
Personaje.clanMembers = 0;
Personaje.clanes = [];
const subZero = new Personaje(1, 'Sub Zero', 100, 200, 'Lin-Kuei');
const frozen = new Personaje(2, 'Frozen', 100, 200, 'Lin-Kuei');
const scorpion = new Personaje(3, 'Scorpion', 100, 200, 'Shirai-Ryu');
Personaje.agregarMiembro(scorpion.clan);
//# sourceMappingURL=index.js.map