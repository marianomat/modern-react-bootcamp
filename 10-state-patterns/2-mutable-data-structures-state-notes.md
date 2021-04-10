#### Mutable data structures in State

Hasta ahora vimos que los estados tienen numeros, strings. Pero es normal que tengan objetos, arrays y arrays de objetos, etc.

    this.state = {
        paraHacer: [
            {tarea: "correr", realizado: false, id: 1},
            {tarea: "nadar", realizado: true, id: 2},
        ]
    }

#### Como actualizar el estado en estos casos

MAL DISEÑO O IMPLEMENTACION:

    realizarTarea(id) {
        const tarea = this.state.paraHacer.find(t => t.id === id); //find devuelve el objeto.
        tarea.realizado = true;

        this.setState({
            paraHacer: this.state.paraHacer
        })
    }

La razon por la cual estoy esta mal es una historia larga, generalmente funciona de todos modos pero no es la manera "React" de hacerlo. No se tienen que mutar las estructuras.
Puede causar problemas con la magia de React.

BUEN DISEÑO: crear una copia de la estructura de datos, usando una funcion PURA (map, filter, reduce, spread operator, etc).

        realizarTarea(id) {
            //map va generando un nuevo array con cada elemento
            //paraHacerCopia es una copia del state.paraHacer con la tarea actualizada
            const paraHacerCopia = this.state.paraHacer.map(tarea => {
                //si es la tarea a actualizar, cambiamos realizada y los otros datos es igual
                if (tarea.id === id) {
                    return { ...tarea, realizado: true}; //spread operator
                }
                // si no es la tarea a realizar, la mandamos como esta
                return tarea;
            };
            this.setState({
                paraHacer: paraHacerCopia //seteamos el estado con el nuevo array
            })
        }

# El patron entonces es:

1. Tomamos el estado existente.
2. Copiamos el array, objeto o estructura de datos que sea.
3. Hacemos los cambios en la copia.
4. Con la copia hacemos el setState()

Existe un costo de eficiencia por usar estas copias, pero vale la pena para no hacer extremadamente complicado detectar erroes o bugs por efectos secundarios.
