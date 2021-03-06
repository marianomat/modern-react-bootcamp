#### State

El concepto de estado no es unico de React, en cualquier web app va a haber alguna forma de estado que necesita ser administrado o manejado.
Hay informacion que es dinamica, va cambiando y queremos conocer y saber esos cambios.
Ej: mostrar o no algo si el usuario esta logueado, apretar un boton para editar y se haber un modal, hay que saber el estado del modal, si esta abierto o no. Acordiones cuando apretas mostrar o esconder, leer mas, hay que saber si estan abiertos, cerrados.
No necesariamente tiene que ver con el backend (no le importa si el modal se ve o no).

Estado esta diseñado para cambiar en respuesta a ciertos eventos.

#### Que cosas State tiene en cuenta?

Hay 2 tipos de estados en el frontend que hay que seguir:
-- Logica de UI: los cambios en el estado de la interface. (Modal abierto o no).
-- Logica de negocio: los cambios de estado de la informacion. (En mi inbox si tengo mensajes leidos o no, afetando como se muestran).

En el pasado con js vanilla o jQuery, la manera de saber el estado de la app era seleccionando los elementos del DOM y ver si estan mostrandose o escondidos, o si tienen ciertos atributos o estilos.
Es decir que sacaban el estado de la aplicacion desde el propio DOM.
En React, se hace lo opuesto.

#### React State

Es informacion interna de un componente. Esta informacion va a ir cambiando (si no cambia, es posible que sea mejor establecerla como prop y no estado).
(props > inmutables ; estado > cambian con el tiempo0)

Especificamente en React, es una instancia de un atributo en un componente.
Es siempre un objeto (POJO => plain old javascript object) , porque vas a seguir el estado de varias propiedades.

#### Console.log(this.state)

Que pasa si imprimis en consola el estado?, te aparece un objeto:

    {
        nombreJugador: "Mariano",
        puntos: 2000
    }

#### Estado inicial (initial State)

El estado ee inicia en el momento de crear el componente, dentro de la funcion constructor.

    class ClickCount extends Component {
        constructor(props) {
            super(props);
            this.state = {
                numeroClicks: 0 //Empieza con cero y luego de algun evento se van agregando.
            };
        }
    }

#### React constructor function

Si el componente no tiene estado, podes obviar la funcion constructor.
De lo contrario, si tiene estado vas a necesitar la funcion constructor.

    constructor(props) {
        super(props);
        this.state = {
            /*propiedades del estado
        }
    }

-   Constructor toma un argumento, props.
-   Es necesario llamar a super(props), al principio del constructor , que registra la clase como una clase React Component.
-   Luego se puede llamar a this.state, similar a this.props.

Ejemplo: (en este caso, state no cambia pero es solo un ejemplo ya que seria mejor usar default props)

        class Game extends Component {
            constructor(props) {
                super(props);
                this.state = {
                player: 'Whiskey',
                score: 0
                };
            }

            render() {
                return (
                <div>
                    <h1>Battleship</h1>
                    <p>Current Player: {this.state.player}</p>
                    <p>Score: {this.state.score}</p>
                </div>
                );
            }
        } // end

\*\*\*\* Sintaxis alternativa para inicar State en un componente

No es parte de standard JS, es experimental. Pero es muy usado. Si o si necesita Babel.
Usa "class property propposal", no se necesita un constructor, tampoco necesita el this.
Directamente pones state = { ... }, diractamente dentro de la clase.

        class Game extends Component {

           state = {
                player: 'Whiskey',
                score: 0
            };

            render() {
                return (
                <div>
                    <h1>Battleship</h1>
                    <p>Current Player: {this.state.player}</p>
                    <p>Score: {this.state.score}</p>
                </div>
                );
            }
        } // end

Es mas facil, mas rapido, se usa mucho.
Babel toma el codigo que no es valido para JS y lo convierte en codigo valido para JS.
CRA configura babel para que funcione, si queres hacer esto sin CRA usando babel, vas a tener que configurar babel.

#### super(props) ??? ke es eso ejeeje XD

Cada vez que creamos un componente, extendemos ese componente a un React Component.

    class Component {
        constructor() {
            console.log("Dentro del constructor");
        };
    }

    class Juego extends Component {
        constructor() {
            console.log("Dentro del juego);
        };
    }

Si luego hacemos:

    let ajedrez = new Juego(); => Error: "must call super constructor before doing anything". El problema es que estamos extendiendo la clase Juego con la clase Component, pero nunca llamamos el constructor de Component. Por eso dentro del constructor de la clase Juego hay que llamar al constructor de la clase Component.

    class Juego extends Component {
        constructor() {
            super(); // =>>>>>>> esto llama al constructor de Component
            console.log("Dentro del juego);
        };
    }

Ahora si creamos un nuevo Juego:

    let ajedrez = new Juego();
    > "Dentro del constructor";
    > "Dentro del juego";

#### Pero que onda con el argumento "props" en super()

Cuando usamos props en JSX, <Juego jugador="Mariano" puntos="123"/>, basicamente es como hacer:
new Juego({
jugador: "Mariano",
puntos: "123"
});

Cuando tenemos props, babel lo que hace es darnos acceso a estos con "this.props" dentro de cualquier metodo de la clase MENOS dentro de constructor en caso de no pasar props como argumento en super(). Una vez que hacemos super(props) ahora si tenemos acceso a this.props dentro del constructor.
Es por esto que no hace falta SIEMPRE poner super(props) y podes poner solamente super() en caso de no usar las props dentro del constructor.
Generalmente siempre se usa super(props) por mas que no las uses.

#### Cambiar los valores del State

Primero hay que empezar diciendo como NO CAMBIAR EL STATE.
No podes cambiarlo directamente haciendo this.state.puntaje = 100;
Nunca se manipula directamente el estado, parece que funcionaria pero no.

Como se cambia entonces?
Con un metodo magico de React llamado setState().
setState es un metodo que viene con React para justamente ir cambiando el estado.

    this.setState({ puntos: 3000 });

Le pasamos un objeto con los valores que queremos cambiar.
Se puede usar en cualquier metodo de la clase, pero NO SE PUEDE USAR en el constructor.
TAMPOCO se usa dentro del render()

Es importante aclarar que el objeto que le pasamos tiene las propiedades que queremos cambiar y las propiedades que no especificamos y ya existian en el estado, van a seguir estando sin cambiarse. Solo cambia las propiedades que explicitamente pasamos en el objeto como arguemento a setState({}).

Podes tener 100 propiedades en state, pero si cambias el valor de 1, las demas siguen intactas.

Esto sucede asincronamente, nosotros le pedimos a React que cambie el estado, y eventualmente lo va hacer, pero no sucede instantaneamente, react controla por cuestiones de performance.

Cuando cambiamos el estado de un componente, el mismo se VUELVE A RENDERIZAR. Por mas que cambies una pequeña parte, va a volver a cargar todo el componente.


#### State vs props

Son los conceptos mas importantes en React.

            estructura          mutable             porposito
state       POJO                SI                  Almacena informacion dinamica.
props       POJO                NO                  Almacena informacion estatica, configura al componente.

#### State as props

En un patron utilizado, tenemos un Componente padre con estado ("inteligente o smart") que le pasa sus valoes del estado como props al componente hijo que NO tiene estado ("dumb o tonto"). 

    class Padre extends Component {
        constructor(props) {
            super(props);
            this.state = {
                contador: 2
            }
        }
        render() {
            return (
                <div>
                    <Hijo contador: {this.state.contador} />
                </div>
            )
        }
    }

    