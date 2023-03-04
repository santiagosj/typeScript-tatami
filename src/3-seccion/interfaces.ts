interface Animales {
    name: string
    caminar(): void
    sonido(): string
}

class Perro implements Animales {
    name: string = 'Willy'
    caminar() {
        console.log('perro caminando')
    }
    sonido(): string {
        return 'Guau!'
    }
}

class Gato implements Animales {
    name: string = 'Pistolero'
    caminar() {
        console.log('gato caminando')
    }
    sonido(): string {
        return 'Miau!'
    }
}

class Serpiente implements Animales {
    name: string = 'Henry'
    caminar() {
        console.log('serpiente serpenteando')
    }
    sonido(): string {
        return 'sssssssss...'
    }
}

class DiccionarioUsuarios {
    [id: string]: string
}

let usuariosId = new DiccionarioUsuarios();

usuariosId['1a'] = 'Usuario 1'
usuariosId['a1'] = 'Usuario 2'