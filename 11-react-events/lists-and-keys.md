#### Lists and keys

Cada vez que haces un map() y devolves un array de componentes, sale un aviso en consola donde indica que cada hijo o componente que devuelve map() debe tener una propiedad unica llamada "key".
Key es un atributo mas, donde le pasamos un indentificador unico.
Estas keys ayudan a React a identificar que items fueron cambiados, agregados o removidos.
Por ejemplo si tenes un array [0, 1, 2, 3], podes pasarle como key cada elemento y listo.

Pero que pasa si no todos los elementos son distintos?
Generalmente se usan lo IDs de las bases de datos o APIs.
Pero si no tenes IDs o nada especifico, como ultimo recurso podes usar el index del elemento en el array. Recordar que map acepta un segundo argumento donde es el index.

map((elemento, index) => {
...
})

Aunque no es recomandado usar los indexs, salvo que la informacion no cambie.

#### Librearia UUID

Crea universally unique identifiers.

        npm install uuid

        import uuid from "uuid/v4";

        id = uuid();
