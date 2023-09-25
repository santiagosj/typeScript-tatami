"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield fetchData('/users');
}))();
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador('Hola Mundo');
programador.computador.encender();
programador1.computador.toUpperCase();
function fetchProduct() {
    return {
        key: 'id',
        value: {
            id: 'id de producto'
        },
    };
}
function fetchStock() {
    return {
        key: "stock", value: 20
    };
}
class UsuarioGenericos {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    return t;
}
print({ id: 'user_id', name: 'Santi' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data = [...this.data, ...[t]];
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(index) {
        this.data = this.data.filter(x => x.id !== index);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContrasenas() {
    }
}
const estadoUsuarios = new EstadoUsuarios();
const calendar = { id: 1, font: 'google', owner: 'yo' };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, 'id');
getProp(calendar, 'font');
getProp(calendar, 'owner');
const keyVal = {
    'uno': 20,
    'dos': 35
};
const punto1 = {
    x: 1,
};
const punto2 = {
    x: 1,
    y: 2
};
const punto3 = {
    x: 1,
    y: 2,
    desc: 'descripcion'
};
//# sourceMappingURL=index.js.map