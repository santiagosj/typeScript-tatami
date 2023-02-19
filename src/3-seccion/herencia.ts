/**
 * Producto
 * -----------------
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 * 
 * * Categorias
 * -----------------
 * name
 * desc
 * created_at
 * created_by
 */

// clase base
class DatosBasicos {
    constructor(
        public name: string,
        public desc: string,
        public created_at: Date,
        public created_by: number
    ) { }

    get fullYear() {
        return this.created_at.getFullYear()
    }

    get fullDesc() {
        return this.name + ' - ' + this.desc
    }

}

class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) {
        super(name, desc, created_at, created_by)
    }

    override get fullDesc(): string {
        return 'Producto: ' + super.fullDesc
    }
}

class Categorias extends DatosBasicos {
    public productos: Producto[] = []
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) {
        super(name, desc, created_at, created_by)
    }

    agregarProducto(producto: Producto) {
        this.productos.push(producto)
    }

    override get fullDesc(): string {
        return 'Categoria: ' + super.fullDesc
    }
}

let producto1 = new Producto(100, 1, "iPhone", "smartphone", new Date, 1)

let categoria1 = new Categorias('Celulares', '', new Date, 1)

categoria1.agregarProducto(producto1)

console.log('====================================');
console.log(producto1.fullDesc);
console.log(categoria1.fullDesc)
console.log('====================================');