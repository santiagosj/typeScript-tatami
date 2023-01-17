"use strict";
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
        this.team = 0;
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
    get hp() {
        return this._hp;
    }
}
const subZero = new Personaje(1, 'Sub Zero', 100, 200);
subZero.congelar();
//# sourceMappingURL=index.js.map