####Components
Hay 2 tipos. Usando clases o funciones.

-- Clases
Es la manera tradicional, escribe la logica en una clase de JS.  Tiene que incluir un metodo render.

    Class Welcome extends React.Component {
        render() {
            return <h1>Hello, {props.name}</h1>
        }
    }

-- funciones
Es una manera mas simple, se usaban para componentes "dumb", donde no tienen mucha logica ni cambian mucho. Generalmente son estaticos. No hay render method.

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>
    }

Ambos approach son similares, salvo que las clases tienen mas funcionalidades.

En ambos, al momento del return, solo pueden devolver una sola cosa, por eso es comun que se agrupen en un <div> todos los elementos que quiera devolver, agrupado en "( )".

    function Welcome(props) {
        return (
            <div>
                <h1>Hello, {props.name}</h1>
                <h1>Hello, {props.name}</h1>
            </div>
        );
    }

### Cual es la diferencia entre ambos?
a- Ambos aceptan props y renderizan contenido.
b- Historicamente, los componentes funciones, no podian usar caracteristicas como State o Lifecycle Methods.
c- Con la introduccion de Hooks, hoy si se puedne escribir componentes funciones con todas las caracteristicas.

