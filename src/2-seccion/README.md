Tipos avanzados
# Union Type (Tipo de Unión):
En TypeScript, puedes combinar varios tipos en uno usando el operador |. Por ejemplo, number | string significa que una variable puede ser de tipo número o cadena.

# Intersection Type (Tipo de Intersección):
También puedes crear tipos que representen la intersección de varios tipos usando el operador &. Por ejemplo, type A = { x: number } & { y: string } define un tipo que tiene propiedades de ambos tipos.

# Literal Type (Tipo Literal):
TypeScript permite definir tipos literales, que son tipos específicos con un valor concreto. Por ejemplo, type Color = "rojo" | "verde" | "azul" define un tipo que solo puede tomar uno de estos tres valores.

# Nullable y Non-nullable Types (Tipos Nullable y No Nullable):
Puedes indicar si una variable puede contener null o undefined agregando un ? después del tipo, como en string | null | undefined. También puedes usar el operador ! para indicar que una variable nunca será null ni undefined.

# Optional Chain Operator (Operador de Encadenamiento Opcional):
El operador ?. permite acceder a propiedades de objetos de manera segura, evitando errores si la propiedad o el objeto son null o undefined.

# Nullish Coalescing Operator (Operador de Fusión Nullish):
El operador ?? se utiliza para proporcionar un valor de respaldo cuando una expresión es null o undefined. Esto es útil cuando deseas un valor predeterminado solo si la variable no está definida o es null.

# Type Assertion (Aserción de Tipo):
Con la aserción de tipo (as), puedes decirle al compilador de TypeScript que estás seguro de que una variable es de un tipo específico. Por ejemplo, let valor: any = "esto es una cadena"; let longitud = (valor as string).length;.

# Type Narrowing (Estrechamiento de Tipo):
TypeScript es capaz de inferir y estrechar tipos en función de las comprobaciones que realices. Por ejemplo, cuando verificas si una variable es de cierto tipo, TypeScript ajustará automáticamente el tipo de esa variable dentro de ese bloque de código.

# Type Unknown (Tipo Desconocido):
El tipo unknown es un tipo de seguridad de tipo más estricto que any. Cuando tienes una variable de tipo unknown, debes realizar una comprobación de tipo antes de utilizarla de manera segura.