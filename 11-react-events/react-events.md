#### React events

Ya vimos que se pueden añadir eventos en los elementos de JSX con ciertos atributos (onClick) y a estos le pasamos una funcion.
Ejemplos:

1. Mouse: onClick, onMouseOver
2. Form: onSubmit
3. Teclado: onKeyDown, onKeyUp, onKeyPress
4. Clipboard: onCopy

Dentro del metodo que le pasamos como atributo, vamos a tener el argumento event, donde nos da info justamente del evento. Si es onKeyDown nos va a decir el keyCode y otras cosas.

#### Method binding

Cuando los metodos hacen referencia o utilizan "this" dentro de su bloque, si no haces el bind(), perdemos el contexto sobre el cual se llama a "this" cuando pasamos el metodo a un atributo de evento, y por eso "this" = undefined si no esta bindeado.

#### Como hacer el bind

1. Inline: dentro de JSX, hacemos el bind. Es explicito, pero si lo tenemos que pasar a varios componentes, lo vamos a tener hacer el bind en cada uno y a parte crea una nueva funcion en cada render afectando minimamente el rendimiento.

 <div className="Componente" onClick={this.handleClick.bind(this)}>
     { ... }
 </div>

2. Arrow functions: no menciona a bind, es simple. Pero la intencion no es clara, tambien crea nuevas funciones.

 <div className="Componente" onClick={() => this.handleClick()}>
     { ... }
 </div>

3.  Dentro del constructor: mejor performance porque solo hacemos el bind una vez, la contra es que no se ve lindo en el constructor.

        class Componente extends Component {
            constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this)
            }

        ...
        <div className="Componente" onClick={this.handleClick}>
            { ... }
        </div>

        }

4.  Class field syntax: no esta implementado en JS por los navegadores todavia, por lo tanto no es JS valido. Pero gracias a Babel, se puede utilizar ya que lo convierte en JS valido.

        class Componente extends Component {

        handleClick = () => {
            //codigo
        }
        ...
        <div className="Componente" onClick={this.handleClick}>
            { ... }
        </div>

        }

#### Method binding CON argumentos

Por ahora los metodos no aceptaban ningun argumento, pero si necesitamos datos para los event handlers.
Ejemplo tengo muchos botones de distintos colores, cuando apreto uno, el color del boton se usa como background de todo el body. En este caso tenemos que pasar un color como argumento cuando son clickeados.
No podemos pasar onClick={this.metodo(argumento)} porque esto invoca a la funcion al hacer el render y no al hacer el click.
Solucion 1: onClick={this.metodo.bind(this, argumento)}, haciendo ese bind y pasando el argumento como segundo argumento, podemos darle informacion al metodo.
Ejemplo:

<script>

    class ContenedorBotones extends Component {
        static defaultProps = {
            colores: ["red", "blue", "yellow"]
        }
        constructor(props) {
            super(props);
            this.state = {
                color: "cyan",
            };
        }
        cambiarColor(nuevoColor) {
            this.setState({color: nuevoColor})

        }
        render() {
            return(
                <div className="ContenedorBotones" style={{backgroundColor: this.state.color}}>
                    {this.props.colores.map(color => {
                        const colorObj = {backgroundColor: color};
                        return <button style={colorObj} onClick={this.cambiarColor.bind(this, color)}> Clickeme ! </button>;
                    })}
                </div>
            )
        }
    }

</script>

Solucion 2: similar a la anterior pero usando arrow functions. onClick={() => this.cambiarColor(color)}. Si bien no usa bind explicitamente es lo mismo. Sigue creando nuevas funciones cuando renderizas.

#### Pasar metodos a componentes hijos

Es un patron muy usado en React, la idea es que los hijos no sean inteligentes (que no tengan estado), pero necesitan decirle de alguna manera a los padres que tienen que cambiar su estado.

Entonces como enviamos informacion de vuelta desde un hijo a un padre?

<b>Flujo de la informacion:<b>

1. Un componente padre tiene un metodo. "cambiarColor".
2. Pasa ese metodo al componente hijo como prop.
3. El componente hijo invoca el metodo dentro de las props. this.props.cambiarColor()
4. El metodo dentro del padre es llamado, generando o actualizado el nuevo estado.
5. Como el padre es renderizado nuevamente por el setState, tambien lo hacen sus hijos, quienes reciben el nuevo estado como props.

Ejemplo usando arrow functions, en este caso no es bueno para el rendimiento.

<script>

        class NumberList extends Component {
            constructor(props) {
                super(props);
                this.state = { nums: [1, 2, 3, 4, 5] };
            }

            remove(num) {
                this.setState(st => ({
                nums: st.nums.filter(n => n !== num)}))
            }

            render() {
                let nums = this.state.nums.map(n => (
                <NumberItem value={n}
                    remove={() => this.remove(n)} />
                ));
                return <ul>{nums}</ul>;
            }
        }


        class NumberItem extends Component {
            render(){
                return(
                <li>
                    {this.props.value}
                    <button 
                    onClick={this.props.remove}>
                    X
                    </button>
                </li>
                )
            }
        }

</script>

Ejemplo usando bind una sola vez, siendo este un mejor diseño

<script>

    class BetterNumList extends Component {
        constructor(props) {
            super(props);
            this.state = { nums: [1, 2, 3, 4, 5] };
            this.remove = this.remove.bind(this); //BIND
        }

        remove(num) {
            this.setState(st => ({
            nums: st.nums.filter(n => n !== num)}))
        }

        render() {
            let nums = this.state.nums.map(n => (
            <BetterNumItem value={n}
                remove={this.remove} /> // no usamos bind aca
            ));
            return <ul>{nums}</ul>;
        }
    }


    class NumberItem extends Component {
        constructor(props) {
            super(props);
            this.handleRemove =
            this.handleRemove.bind(this);
        }

        handleRemove() {
            this.props.remove(this.props.value);
        }

        render(){
            return(
            <li>
                {this.props.value}
                <button 
                onClick={this.handleRemove}>
                X
                </button>
            </li>   
            )
        }
    }

</script>

#### Convenciones sobre nombres de metodos

Cuando pasamos un metodo a un componente hijo, si bien podes nombrarlas como quieras, esta bueno seguir un patron.
Uno es:

-   Padre metodo es "accion" y en el hijo es "handleAccion".
