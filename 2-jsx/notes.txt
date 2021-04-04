###### Estructura de React

Es 1 componente por archivo js.
Hay un componente App, es el encargado de renderizar a todos los demas componentes. 
Hay que prestar atencion en el orden de los elementos script en el html, siempre poner app ultimo.


###### JSX

Es una extension de la sintaxis de javascript, donde te permite escribir codigo parecido a HTML.
Permite combinar la UI directamente con la logica de JS. 
Tiene que ser transpilado a javascript.


####### Babel

Convierte (traspila) JSX a JS valido


####### JSX reglas

1- Debe tener un tag de cierre. <b> ... </b>
2- De lo contrario, explicitamente cerrado en si mismo. <input ... /> 

## Incorporando JS dentro de JSX

Dentro de los elementos de JSX, podemos incorporar JS dentro de llaves { }.

return (
    <div>
        <h1>Hello, my age is: { 13 * 2 } </h1>
    </div>
)


####### Condicionales en JSX

** Una manera es usando el operador ternario

    class EligeNumero extends React.Component {
        render() {
            let num = numeroRandom();
            return (
                <div>
                    <h1>El numero es {num}</h1>
                    <p>{num === 7 ? "BIEN" : "MAL"}</p>
                </div>
            );
        }
    }

** Una manera corta, si solo queres mostrar algo si es true, y si es falso no mostrar nada, podes usar el operador "&&".
Primero pones la condicion a cumplir seguido del operador && y luego lo que queres mostrar.

    class EligeNumero extends React.Component {
        render() {
            let num = numeroRandom();
            return (
                <div>
                    <h1>El numero es {num}</h1>
                    {num === 7 &&
                        <img src="url" />
                    }
                </div>
            );
        }
    }

** Tambien creando una variable dentro del scope de render(), donde es basicamente un if else. El valor de la variable creada va a cambiar si es true o false, y luego es pasada en el return.

    class EligeNumero extends React.Component {
        render() {
            let num = numeroRandom();
            let img;
            if(num === 7) {
                img = <img src="url1" />
            } else {
                img = <img src="url2" />
            }
            return (
                <div>
                    <h1>El numero es {num}</h1>
                    {img}
                </div>
            );
        }
    }


#### Loops en JSX

Generalmente se usa array.map()


render() {
    const mensajes = [
        {id: 1, mensaje: "hola"},
        {id: 2, mensaje: "chau}
    ]
    return(
        <div>
            <ul>
                { mensajes.map(mensaje => <li> {mensaje.mensaje} </li> )}
                ### TENER en cuenta que cuando escribo el li, estoy añadiendo markup, por lo tanto, hay que 
                poner llaves de nuevo en mensaje.mensaje, sino es como si fuera HTML plano.
            </ul>
        </div>
    )
}

