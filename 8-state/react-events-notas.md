#### React events intro

Generalmente el estado es cambiado por eventos, uno de los mas comunes es por clicks.
En React todos los elementos JSX tienen incorporado atributos representando todo tipo de eventos del navegador.
Estos atributos estan en formato camel-case, por ejemplo, "onClick". Y toman una funcion callback.

    <button onClick={function(e) { alert("Clickeaste el boton"); }}>
        Clickeame!
    </button>

Normalmente las funciones son declaradas antes y no en la misma linea.

#### Eventos y Estados

Este codigo NO FUNCIONA: porque "this" es undefined cuando llamamos handleClick. Porque "this" no es lo que queremos que sea.
Quien llama handleClick? React cuando hacemos click.
Pero sobre que contexto es llamado? React no sabe.
Por lo tanto el metodo fue llamado fuera de contexto, no lo encuentra.

    class ClickRoto extends Component {
        constructor(props) {
            super(props);
            this.state = {
                clickeado: false
            }
        }
        handleClick(e) {
            this.setState({clickeado: true})
        }
        render() {
            return (
                <div>
                    <h1> {this.state.clickeado ? "Genial! fue clickeado" : "No fue clickeado :( ")} </h1>
                    <button onClick={this.handleClick}>
                        Clickeame!
                    </button>
                </div>
            )
        }
    }

Para solucionar este problema hay que usar bind().
Dentro del constructor "this" se refiere a cada componente en particular. Si tenemos muchos componentes iguales cada uno va a tener su contexto y su metodo.
Ahora JS sabe a que te referis cuando llamas a "this" en el onClick. Que se refiere al componente individual.

    class ClickRoto extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    clickeado: false
                }
                this.handleClick = this.handleClick.bind(this); // SE AGREGA ESTA LINEA PARA DAR CONTEXTO
            }
            handleClick(e) {
                this.setState({clickeado: true})
            }
            render() {
                return (
                    <div>
                        <h1> {this.state.clickeado ? "Genial! fue clickeado" : "No fue clickeado :( ")} </h1>
                        <button onClick={this.handleClick}>
                            Clickeame!
                        </button>
                    </div>
                )
            }
        }

Tener en cuenta que cuando llamos a un metodo de la clase, en el buton, hacemos "this.handleClick" y no directamente handleClick.

#### Otras maneras de hacer el bind()

1.  Usando funciones flechas cuando declaras el metodo. En ese caso no hace falta poner nada en el constructor.
2.  Directamente hacerlo en la linea de JSX:
    <button onClicl={this.handleClick.bind(this)}>...
3.  Usando funciones flecha en la misma linea:
    <button onClicl={() => this.handleClick}>...
4.  Usando la magia de babel, de la misma manera que haciamos el state =, sin necesitad de constructor, hacemos lo mismo con los metodos, realiza el bind automaticamente:

        class Click extends Component {
            state = { clickeado: false}
            handleClick = (e) => {
                this.setState({clickeado: true})
            }
        }
