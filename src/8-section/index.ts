
function Route(route: string) {
    return function (constructor: Function) {
        console.log('Ejecutando decorador de ruta');
        constructor.prototype.route = route
    }

}

function Method(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log(methodName, descriptor);
    const original = descriptor.value
    descriptor.value = function (...args: any) {
        console.log('antes del metodo');
        original.call(this, ...args)
        console.log('despues del metodo');
    }
}

@Route('/productos')
class Productos {
    @Method
    find(val: string) {
        console.log(`soy el metodo find ${val}`);

    }
}

const p = new Productos()

p.find('instancia p')