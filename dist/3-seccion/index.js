"use strict";
class Personaje {
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    congelar() {
        return "gssshhhhh";
    }
    subirNivel() {
        this.nivel = this.nivel + 10;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this.hp = this.hp + cantidad;
        return this.hp;
    }
}
const subZero = new Personaje(1, 'Sub Zero', 100, 200);
subZero.congelar();
//# sourceMappingURL=index.js.map