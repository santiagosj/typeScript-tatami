function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    const originalMethod = propertyDescriptor.get;

    propertyDescriptor.get = function () {
        const valueToReturn = originalMethod?.call(this);
        if (typeof valueToReturn === 'string') return valueToReturn.toUpperCase();

        return valueToReturn;
    }

}

function Min(min: number) {
    return (target: any, propertyName: string) => {
        let val: string
        const descriptor: PropertyDescriptor = {
            get() {
                return val
            },
            set(v: string) {
                if (v.length < min) {
                    throw new Error(`La propiedad ${propertyName} debe tener un largo minimo de ${min}`)
                }

                val = v
            },
        }
        Object.defineProperty(target, propertyName, descriptor) // no se recomienda usar esto ya que es una forma antigua
    }
}

class User {
    @Min(6)
    public password: string;

    constructor(public name: string, public lastname: string, password: string) {
        this.password = password // private field
    }

    @UpperCase
    get fullName() {
        return `${this.name} ${this.lastname}`
    }
}

const user = new User('Santi', 'Spinetto Jung', '123567')

console.log(user.password);

export { }