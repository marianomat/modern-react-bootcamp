#### 1. Mounting

Esta estapa se refiere a la primera vez que el componente es renderizado en el DOM.

Dentro de esta estapa, lo primero que hace es ejecutar el constructor() del componente, para setear valores en el estado, hacer bind.  
Luego lo que se ejecuta es render(), donde indica que debe ser mostrado.
React actualiza el DOM segun lo que estaba en render.

Despues de todo eso, React ejecuta el metodo componentDidMount.

# ComponentDidMount

Es un lifecycle method que podemos definir y React lo ejecuta solo una vez cuando el componente es montado.
Si llamas a setState dentro de este metodo, hay que tener en cuenta que render() ya fue ejecutado 1 vez, por lo tanto al hacer el setState en el componentDidMount, se ejecutaria una segunda vez (no esta mal).

Esta etapa es utilizada para cargar informacion via AJAX o poner temporizadores.

# Demostracion del orden de ejecucion

Si ponemos un console.log() en el constructor, render y ComponentDidMount, vamos a ver que en consola, el orden en que van a aparecer es:

    1. "en constructor"
    2. "en render"
    3. "en componenDidMount"

Y a si actualizamos el estado, en consola obtenemos:

    1. "en render"

Es decir que constructor y componenDidMount se ejecutan 1 sola vez, en distitos momentos.

Ejemplo: poner un temporizador que empieze cuando el componente es renderizado en el DOM. En este caso, si iniciamos el mismo en el constructor, arrancaria antes de que se muestre en el DOM. Por eso podemos usar componentDidMount que se ejecuta luego de que fue renderizado.

<script>
    class Reloj extends Component {
        constructor(props) {
            super(props);
            this.state = {
                tiempo: new Date()
            }
        }
        ComponentDidMount() {
            this.tiempoID = setInterval(() => {
                this.setState({ tiempo: new Date() });
            }, 1000);
        }
        ...
    }
</script>

# ComponentDidMount AJAX ejemplo

Usando Axios.
Si no iniciariamos quote: "" en el constructor, tira error porque al no haber constructor, ejecuta el render directamente y cuando llega a this.state.quote esta sin definir y se rompe, nunca llegando a ejecutar el COmponentDidMount.
En este codigo el render se ejecuta 2 veces, primero al iniciar y despues al actualizar el estado en componentDidMount.

<script>
    class ZenQuote extends Component {
        constructor(props){
            super(props);
            this.state = {
                quote: ""
            }
        }
        ComponentDidMount() {
            // cargar informacion
            axios.get("https://api.github.com/zen").then(response => {
                this.setState({
                    quote: response.data
                })
            })
            //actualizar el estado
        }
        render() {
            return(
                <div>
                    <h1>Siempre acordate de:</h1>
                    <p>{this.state.quote}</p>
                </div>
            )
        }
    }
</script>

¿Por qué no hacer el request directamente en el constructor?
Funciona perfectamente, pero es una de esas cosas que por convencion no se hacen, incluso en la documentacion de React indican que no hay que hacer un setState dentro del constructor. Siempre recomiendan que si estamos haciendo un fetch, lo hagamos en ComponentDidMount.

Ejemplo:

<script>
    constructor(props) {
        super(props);
        this.state = { quote: ""};
        axios.get("https://api.github.com/zen").then(response => {
            this.setState({
                quote: response.data
            })
        })
    }
</script>

# Ok perfecto, los fetch en el COmponentDidMount, pero... no habria un gap entre la primera renderizacion y la segunda (donde recibe la respuesta de la API).

Si, se renderiza el DOM una vez sin la informacion del request, y despues cuando llega la respuesta en el ComponentDidMount se renderiza una segunda vez, haciendo que quede un poco raro.

Por eso agregan animaciones de cargando.
Siguiendo el ejemplo anterior, agregamos una animacion de cargando.
Para esto usamos state. Iniciamos con cargando: true, en el constructor y luego en el ComponentDidMount lo cambiamos.

<script>
    class ZenQuote extends Component {
        constructor(props){
            super(props);
            this.state = {
                quote: "",
                cargando: true
            }
        }
        ComponentDidMount() {
            // cargar informacion
            axios.get("https://api.github.com/zen").then(response => {
                this.setState({
                    quote: response.data,
                    cargando: false
                })
            })
            //actualizar el estado
        }
        render() {
            return(
                <div>
                    {this.state.cargando ? 
                        <div className="loader"></div> 
                        : 
                        <div>
                            <h1>Siempre acordate de:</h1>
                            <p>{this.state.quote}</p>
                        </div>
                    }                    
                </div>
            )
        }
    }
</script>

# Alternativa usando async

<script>
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.usuario}`;
        let response = await axios.get(url);
        let data = response.data;
        this.setState({
            imgUrl: data.avatar_url,
            nombre: data.login,
        });
    }
</script>
