function UpperCase(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    const originalMethod = propertyDescriptor.get;

    propertyDescriptor.get = function () {
        const valueToReturn = originalMethod?.call(this);
        if (typeof valueToReturn === 'string') return valueToReturn.toUpperCase();

        return valueToReturn;
    }

}

class User {
    constructor(public name: string, public lastname: string) { }

    @UpperCase
    get fullName() {
        return `${this.name} ${this.lastname}`
    }
}

const user = new User('Santi', 'Spinetto Jung')

console.log(user.fullName);
