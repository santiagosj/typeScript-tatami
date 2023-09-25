"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultGroup = void 0;
class Grupo {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
exports.default = Grupo;
exports.defaultGroup = {
    users: 'users',
    admin: 'admin'
};
const funcionRandom = () => {
    return Math.floor((Math.random() * 10));
};
//# sourceMappingURL=Grupo.js.map