"use strict";
let puntaje = 98;
puntaje = '98';
let animal = {
    id: 1,
    estado: '',
    name: ''
};
function sumaDos(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    return parseInt(n) + 2;
}
const product = {
    created_at: '',
    modified_at: '',
    name: ''
};
const nDeFibo = 3;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(undefined);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'Santi',
        created_at: new Date()
    };
}
const user = getUser(1);
console.log('usuario', user === null || user === void 0 ? void 0 : user.created_at);
const arr1 = null;
arr1 === null || arr1 === void 0 ? void 0 : arr1[0];
const fn5 = null;
fn5 === null || fn5 === void 0 ? void 0 : fn5();
const difficulty = 0;
const user2 = {
    username: 'santi',
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1
};
console.log(user2);
const elem = null;
const elem2 = elem;
const input = document.getElementById('username');
function myFn(x) {
    if (typeof x === 'string') {
    }
    if (typeof x === 'number') {
    }
}
//# sourceMappingURL=index.js.map