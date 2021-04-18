#### Forms

Los form funcionan de manera diferente a otros elementos del DOM, estos naturalmente tienen un estado interno. Los elementos input, textarea, select mantienen su propio estado y se actualiza dependiendo de los ingresos de informacion que haga el usuario. La aplicacion no sabe de los datos del form hasta que el mismo lo envie (apretando el boton submit por ejemplo). Es por esto que lo forms tradicionales se denominan sin control o uncontrolled.

En React, toda la informacion que va mutando, esta dentro del estado de un componente, pero si tenemos un input donde ingresa el nombre de usuario y a su vez tenemos el nombre de usuario como estado, queremos que ambos esten 100% en sintonia, en vez de esperar que el usuario aprete el boton para tener los datos. Queremos que React sepa instantaneamente cual es el valor del form cuando el usuario ingresa informacion.
Entonces ¿como hace React para controlar los datos que van entrando al form?

Por esto, React se convierte en la unica fuente de la verdad, ya no hay informacion escondida dentro del form, sino que react sabe de todo. React controla:

-   Que esta siendo mostrado en el input
-   Que pasa cuando el usuario escribe
    Por esto se dicen componentes controlados, los elementos inputs estan siendo controlados.

#### ¿Como funciona?

En el ejemplo, dentro del input tenemos un event listener "onChange", donde ejecuta un metodo cada vez que apreta una tecla.

1. Como el valor del input es seteado en el render y proviene del estado (this.state.fullName) cada vez que se recarga, el valor del input va a ser siempre el valor del estado del componente. react es quien tiene la verdad.
2. Como handleChange se ejecuta cuando se presiona cada tecla y lo que hace es actualizar el estado del componente, haciendo que se haga un render nuevamente con el nuevo valor. El valor se va actualizando cada vez que el usuario ingrese una tecla.

Con un componente controlado, cada tipo de cambio en el estado va a tener su metodo handler.

<script>
    class NameForm extends Component {
        constructor(props) {
            super(props);
            // default fullName is an empty string
            this.state = { fullName: '' };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit(evt) {
            evt.preventDefault()
            alert("usuariO: " + this.state.fullName)
            this.setState( { fullName: "" })
        }
        handleChange(evt) {
                    // runs on every keystroke
            this.setState({
            fullName: evt.target.value
            });
        }

        render() {
            return (
            <form onSubmit={this.handleSubmit}>
                <label for="fullname">Full Name:</label>
                <input name="fullname" value={this.state.fullName}
                onChange={this.handleChange}
                />
                <button>Add!</button>
            </form>
            );
        }
    }
</script>

#### Como trabajar con muchos inputs

Una opcion es tener un metodo onChange para cada input que tengas en el form, pero si tenes muchos se torna muy repetitivo, tener que declarar un metodo, hacer el bind y todo eso. Pero con CPN podemos hacerlo mas rapido.
Computed property name: ES2015 dio a los objetos algunas mejoras, entre ellas nos da la habilidad de poder crear objetos con keys dinamicas basadas en expresiones de JS.

Ejemplo version anterior ES5:

<script> 
var catData = {};
var microchip = 1432345421
catData[microchip] = "Blue Steele";
</script>

Ejemplo ES2015:

<script> 
let microchip = 1432345421;
let catData = {
    // propery computed inside the object literal
    [microchip]: "Blue Steele"
};
</script>

Esto permite hacer un solo metodo onChange para cada input.
Ejemplo:

<script> 
    class YourComponent extends Component {
    // ...
        handleChange(evt) {
            this.setState({
            [evt.target.name]: evt.target.value
            });
        }
        // ...
    }
</script>

Cada input del form tiene que tener un atributo name, que debe ser el mismo que usamos en el estado.

#### Labels en React

Tradicionalmente se usa el atributo for para unirlo con algun input mediante el id. Pero como for es una palabra reservada en JS, se usa htmlFor.
