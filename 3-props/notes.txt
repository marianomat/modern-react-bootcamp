#### Proerties

Permiten hacer los componentes customizables y configurables.
Permiten pasar informacion o datos de un componente a otro.



#### Como pasar informacion de un componente a otro con props

En el componente padre (el que llama a otro componente), podes agregar en la linea de JSX donde se invoca informacion similar a los atributos de HTML.

    <Hello para="Todos" de="Mariano" />

En este caso estamos pasando datos como props, donde el componente Hello va a tener para = "Todos" y  de = "Mariano" accesible dentro de el mismo.



#### Como acceder a las props dentro del componente

Estan dentro de un objeto llamado props. Generalmente se accede "this.props".

    <h1>
		Hola a {this.props.para}, soy {this.props.de}!
	</h1>



#### Las propiedades con INMUTABLES

No se pueden cambiar, no se puede cambiar el objeto props manualmente. Es un objeto de solo lectura.



####  Que tipos de datos soporta props

Soporta cualquier tipo, lo que varia es como se declaran en el componente padre. Para strings se puede poner "", pero para otros tipos es necesario poner llaves { }.
Para los boleanos generalmente solo se escribe el nombre de la prop sin ningun valor, ya que si esta presente es true y si no esta presente es false

    <Hello 
        para="Todos" 
        cantidad={ 1000 } 
        array={ ["hola",3,false] }  
        esTrue 
    />



#### Default props

Si hay algun componente al que no se le añadieron props, podes tener defaults props en caso de que no esten.
En el componente definis un objeto static llamado defaultProps, donde tiene key-values pair.

En este caso si pasan las props, van a mostrar esas y si no pasan ninguna se muestran las default.


    class Hello extends React.Component {
        static defaultProps = {
            de: "mariano",
            para: "todos"
        }
        render() {
            return (
                <h1> Hola soy {this.props.de}, para {this.props.para} </h1>
            )
        }
    }

