#### Diseño: Minimizando el estado

Diseñar el estado es una habilidad y es desafiante.
Pero hay una serie de mejores practicas para seguir.

La primera es minimizar el estado: lo que se intenta es poner la menor cantidad de informacion posible en el estado.

1. Siempre hay que preguntarse, ¿En algun punto X cambia? Si la respuesta es NO, entonces no es parte del estado y si seria una prop.
2. X esta capturado ya en otro lado dentro del estado o props? Si la respuesta es SI, no va en el estado y lo derivas desde el otro valor.

MAL DISEÑO DE PERSONA EJEMPLO

    this.state = {
        nombre: "mariano",
        apellido: "pereyra",
        cumpleaños: "21/01/1995",
        edad: 26,
        estadoDeAnimo: "contento"
    }

-   El nombre o apellido cambian?? No, (generalmente) no hace falta que este en el estado.
-   El cumpleaños? Tampoco, no deberia estar ahi.
-   Edad? podria cambiar, pero sigueindo con la regla 2), se puede derivar de otro dato, en este caso se puede derivar de la fecha de nacimiento.
-   EstadoDeAnimo? es el unico que esta bien que este en el estado, porque es algo que va cambiando con el tiempo.

#### Diseño: Corriente de informacion hacia abajo

Donde deberia estar el estado? Siempre en el componente padre. Queremos un flujo de datos hacia abajo, donde los padres pasan informacion a los hijos. Es por eso que lo padres por lo general tienen estado o mas estados que los hijos que aveces ni tienen.
Esto permite debugear de una manera mas facil.

Ejemplo creando una lista de tareas:
Tenmos 2 componentes "ListaDeTareas" y "Tarea".
En este caso, ListaDeTareas va a tener estado y va a manejar cada tarea. En cambio Tarea solo va a tener props.
