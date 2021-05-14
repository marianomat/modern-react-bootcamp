#### Estilos en React

Se añade el css con un link como siempre.
Generalmente se crea una clase con el mismo nombre del componente al cual va a agregarle estilos. Y dentro del componente en el elemento que lo agrupa (div o lo que sea) se le agrega la clase.
Hay que tener en cuenta que no se usa "class", sino que es "className". Porque class es una palabra reservada.
(Otra palabra reservada es el "for" del elemento label, donde se usa "htmlFor")

    class Hello extends React.Component {
        render() {
            return (
                <div className="Hello">
                    <h1>
                        Hola a {this.props.para}, soy {this.props.de}!
                    </h1>
                </div>
            );
        }
    }

#### Inline CSS styles

Se pueden pasar inline, pero style es un objeto de JS.
Las propiedades son en camelcase y no kebabcase.

    class Hello extends React.Component {
        render() {
            let estilos = {
                color: this.props.color,
                backgroundColor: this.props.bgColor
            }
            return (

                <div style={estilos}>
                    <h1>
                        Hola a {this.props.para}, soy {this.props.de}!
                    </h1>

                    <p style={{color: "red"}}>Como estan?</p>
                </div>
            );
        }
    }

#### Estilos condicionales

Una manera de hacerlo es con el operador ternario.
Aplicamos una clase distinta segun si es ganador o no.

    return (
        <p className={ winner ? "win" : "lose" } > Resultado </p>
    )

#### Assets en CRA

Se crea un archivo CSS para cada componente, con el mismo nombre. House.js y House.css.
Tambien se agrega en el div principal que devuelve un componente, la clase con su nombre y en los elementos hijos, se usa el nombre de componente como prefijo y despues que elemento es.

        ...
        return(
            <div className="House">
                <h1 className="House-h1"> Titulo </h1>
                <p className="House-p"> Lorem </p>
            </div>
        )
        ...

Para incluir imagenes o CSS, podemos importarlos en el archivo del componente. CRA automaticamente carga el CSS.

        import React, {Component} from "react";
        import logo from "./logo.svg";
        import "./App.css";

        ...
            render() {
                return (
                    <img src={logo} className="App-logo" />
                )
            }
        ...

Hay que tener en cuenta que el css de cada componente afecta a todos lo demas, por lo tanto es importante usar clases y no directamente selectores con nombres de elementos como div, porque va a seleccionar todos los divs de todos los componentes.

#### withStyles

Hay maneras de escribir css dentro de JS, una de ellas es con material-ui

instalamos

Te permite escribir css como sass dentro de JS.
Una cosa a tener en cuenta que estos estilo solo aplican aca a estos componentes, no pasa lo mismo de que cuando usamos css normal donde cambiamos un h1 de color y cambia todos lo h1 de color y no solo el del componente.

<script> 
import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
	main: {
		backgroundColor: "purple",
		border: "3px solid teal",
		"& h1": {
			color: "white",
		},
	},
	secondary: {
		backgroundColor: "pink",
	},
};

function MiniPalette(props) {
	const { classes } = props;
	return (
		<div className={classes.main}>
			<h1 className={classes.secondary}>Minipallete</h1>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
</script>
