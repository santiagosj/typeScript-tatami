"use strict";
class Perro {
    constructor() {
        this.name = 'Willy';
    }
    caminar() {
        console.log('perro caminando');
    }
    sonido() {
        return 'Guau!';
    }
}
class Gato {
    constructor() {
        this.name = 'Pistolero';
    }
    caminar() {
        console.log('gato caminando');
    }
    sonido() {
        return 'Miau!';
    }
}
class Serpiente {
    constructor() {
        this.name = 'Henry';
    }
    caminar() {
        console.log('serpiente serpenteando');
    }
    sonido() {
        return 'sssssssss...';
    }
}
class DiccionarioUsuarios {
}
let usuariosId = new DiccionarioUsuarios();
usuariosId['1a'] = 'Usuario 1';
usuariosId['a1'] = 'Usuario 2';
//# sourceMappingURL=interfaces.js.map