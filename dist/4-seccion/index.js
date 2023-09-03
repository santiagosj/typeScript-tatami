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
//# sourceMappingURL=index.js.map