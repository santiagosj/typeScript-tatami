function Decorador1(constructor: Function) {
    console.log('Decorador1');

}
function Decorador2(constructor: Function) {
    console.log('Decorador2');

}

// se ejecutan de abajo hacia arriba
@Decorador1
@Decorador2
class User { }

export { }