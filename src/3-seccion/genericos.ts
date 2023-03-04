// function log<T, V>(a:T,b:V):V {
//   console.log('a: ',a, 'b: ', b);
//   return b
// }

// log<string,number>('dato', 36)
// log<string,string>('string','some other string')

// log('dato', 36)
// log('string','some other string')


async function fetchData<T>(recurso: string): Promise<T> {
    const response = await fetch(`${recurso}`)
    return response.json()
}

type User = {
    id: string,
    name: string,
}

async function main() {
    const user = await fetchData<User>('/usuarios-api')
    // user.
}