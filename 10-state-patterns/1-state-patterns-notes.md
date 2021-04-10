#### Establecer State usando valores existentes de State

Como hacemos cuando tenemos un valor en el estado, (contador = 1) y queremos sumarle 3.
Una posiblidad NO RECOMENDADA ES usar setState como vimos, y en el objeto podemos hacer:

    setState({ contador: this.state.contador++ });
    setState({ contador: this.state.contador++ });
    setState({ contador: this.state.contador++ });

A la hora de ejecutar el codigo que cambia el estado, solamente agrega 1 y no 3.
Esta solucion no es una buena idea por la manera que setState trabaja, ya que este es asincrono, por lo tanto es riesgoso asumir que si llamas a setState 3 veces seguidas, y cada valor depende de la anterior, no hay nada que asegure que cuando la llamas por 2da vez, la primera vez se haya ejecutado.
En este ejemplo, llamo por primera vez y pasa contador a 2, cuando la llamo por segunda vez todavia no se actualizo el estado con la primer llamada, por lo tanto de nuevo estado = 2, y lo mismo con la tercera.
Es decir que en vez de sumar 3, solo sumamos 1.

Aparte de todo esto, suele React agrupa las llamadas de setState en una sola por cuestiones de rendimiento y tiene sentido.
En este ejemplo, React agrupa las llamadas en 1 sola, dejando solo la ultima para ejecutar, ya que entiende que la ultima es la version actualizada del objeto, esto funcionaria si en vez de ir sumando segun el valor del estado, lo cambie por otros valores, (contador = 20, contador = 30, contador = 50) esto es lo que ve React, y entiende que es al pedo llamar setState 3 veces, si al final el valor simempre es 50.
El problema esta cuando en cada llamada depende de la anterior (como el ejemplo en violeta).

SOLUCION: Si la llamada setState depende del estado en ese momento, usamos callbacks

#### setState Callback formato

-   this.setState(callback)

En vez de pasarle un objeto, le pasamos una funcion con el estado actual del componente. Haciendo esto, logramos que el estado sea un parametro.
Esta funcion debe devolver un objeto que va a representar el nuevo estado.

    this.setState(curState => { contador: curState.contador ++});
    this.setState(curState => { contador: curState.contador ++});
    this.setState(curState => { contador: curState.contador ++});

Ahora React, no los va a agrupar ni va a generar ningun conflicto.

#### Abstrayendo las actualizaciones de State

El hecho de que podemos pasar una callback a setState, permite crear un patron llamado functional setState.
Basicamente describis el cambio o actulizacion como nombre de la callback para mayor legibilidad.

    function incrementarContador(state) {
        return { contador: state.contador + 1};
    };
    ...
    this.setState(incrementarContador);
    this.setState(incrementarContador);
    this.setState(incrementarContador);

Tambien es mas simple para testear y es muy utilizado en Redux.
