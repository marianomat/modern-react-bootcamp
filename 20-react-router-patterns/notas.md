#### Organizando las rutas

Por defecto, Routes matchea los paths de manera inclusiva.
Si muchos Route components matchean, cada uno va a ser renderizado.
Usando exact ayuda, pero igual hay uqe tener cuidad o usar Switch.

Ejemplo:

        class Routes extends Component {
        render() {
            return (
            <div>
                <Route path="/about"
                    render={() => <About />} />
                <Route path="/contact"
                    render={routeProps => <Contact {...routeProps} />} />
                <Route path="/blog/:slug"
                    render={routeProps => <BlogPost {...routeProps} />} />
                <Route path="/blog"
                    render={() => <BlogHome />} />
                <Route path="/"
                    render={() => <Home />} />
            </div>
            );
        }
        }

En este caso la url "/about", renderiza /about y /.
La url "/blog/" renderiza /blog y /.
La url "/blog/arboles" renderiza /blog, /blog/:arboles y /.

Es por esto que se usa el Switch component ya que es mas facil comprender las rutas si cambiamos el modo en que actuan por defecto (inclusiva) a una manera restrictiva.

#### URL parametros

Se pueden utilizar parametros dentro las URL, como variables. Para esto usamos ":" dentro del path. path="/food/:name". (como express)

# Como se accede a los parametros?

Segun la documentacion de React Router, lo 3 tipos de render (render, component y uno mas), le pasan automaticamente 3 props. En el ejemplo se llama routeProps, pero puede ser culaquier nombre es lo mismo.

1. history: proximamente
2. location: proximamente
3. match: contiene informacion sobre el path, y la ruta que fue matcheada. Ejemplo va a tener path: "/food/:name" y url: "/food/empanadas". Tambien tiene una propiedad llamada params, donde tiene un objeto {name: "empanadas"}, es decir que tomo el :name y le asigno el valor segun la URL.

Una manera diferente de hacerlo del ejemplo es:
<Route exact path="/food/:name" render={routeProps => <Food comida={routeProps.match.params.name} />} />

En el ejemplo directamente pasamos el routeProps entero. {...routeProps}, asi queda como 3 props diferentes en el componente Food.

<script>
    import React, { Component } from "react";
    import Nav from "./Nav";
    import {Route} from "react-router-dom";
    import Food from "./Food";

    class App extends Component {
        render() {
            return (
            <div className="App">
                <Nav />
                <Route exact path="/food/:name"
                    render={routeProps => <Food {...routeProps} />} />
            </div>
            );
        }
    }

    export default App;

</script>

En el caso de path="/food/:name", si no ponemos exact, lo que sucede es que va a matchear con rutas como path="/food/:name/textotexto", si queremos que sea estricto a path="/food/:name" y que no matchee cuando hay mas informacion luego de name, agregamos el exact.

Si en vez de usar render, usamos component, vamos automaticamente a tener acceso a las 3 props.
<Route exact path="/food/:name" component={Food} />

Usamos render si tenemos que pasar mas props (aparte de las 3 de router) o component si no hay que pasar mas props aparte de las 3 de router.

#### Multiple Route Params

Que pasa si tengo varios parametros en una URL.

Ejemplo tengo un componente Cena, donde va a tener una comida y una bebida que son parametros en una ruta.
"/cena/:comida/bebida/:bebida".

Aca si es importante el exact, porque si no pongo exact y tengo otra ruta a "/cena/:otraCosa", va a hacer matcha esa tambien (Salvo que use switch que va a matchear la primera que vea).

<script>
    import React, { Component } from "react";
    import Nav from "./Nav";
    import {Route} from "react-router-dom";
    import Food from "./Food";

    class App extends Component {
        render() {
            return (
            <div className="App">
                <Nav />
                <Route exact path="/cena/:comida/bebida/:bebida"   
                    render={routeProps => <Cena {...routeProps} />} />
            </div>
            );
        }
    }

    export default App;

    class Cena extends Component {
        render() {
            return(
                <div>
                    {this.props.match.params.comida}
                    {this.props.match.params.bebida}
                </div>
            )
        }
    }
</script>

#### Añadiendo un 404 not found route

Una manera facil de hacerlo es agregar un 404 es poner un Route sin ningun path al final, donde haga un render o un component de un componente Error o devolver directamente un <h1> 404 - Not found </h1> por ejemplo.
Al no tener un path, siempre va a hacer match. Es por esto que si no agregamos el Switch siempre va a aparecer.
Como es un switch el orden es importante, porqeu va a parar de seguir buscando cuando encuentre el primer match, en este caso si no encuentra ninguno siempre cae en el Error que siempre es match al no tener path, pero si encuentra un match antes se termina ahi y el error no aparece.

<script>
    class Routes extends Component {
    render() {
        return (
        <Switch>
            <Route exact path="/about"
                render={() => <About />} />
            <Route exact path="/contact"
                render={routeProps => <Contact {...routeProps} />} />
            <Route exact path="/blog/:slug"
                render={routeProps => <BlogPost {...routeProps} />} />
            <Route exact path="/blog"
                render={() => <BlogHome />} />
            <Route exact path="/"
                render={() => <Home />} />
            <Route render={() => <NotFound />} /> // 404 RUTA 
        </Switch>
        );
        }
    } 
</script>

#### Forms

La app tiene un form con un input donde buscas una imagen segun la palabra que le pongas. Ahora bien como hacemos esto?

Manera 1: usando un Link en vez de un boton para hacer el submit del input

        import React, { Component } from "react";

        class Form extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    input: "",
                };
                this.handleChange = this.handleChange.bind(this);
            }
            handleChange(e) {
                this.setState({
                    input: e.target.value,
                });
            }
            render() {
                return (
                    <div>
                        <h1>Busca una imagen!</h1>
                        <input
                            name="search"
                            value={this.state.input}
                            onChange={this.handleChange}
                        />
                        <Link to={`/imgs/${this.state.input}`}>Buscar</Link>
                    </div>
                );
            }
        }

        export default Form;

#### Redirects en React

Client-side redirects, con React Router podemos simular el comportamiento de server-side redirects.
Son utiles para:

1. Despues de que el usuario realice ciertas acciones. (Submit un form)
2. Cuando algo sale mal y tenes un 404 que agarra todos los errores.

Hay 2 maneras:

# Redirect Component

Usando el <Redirect to=""> dentro del render, es util para situaciones donde el usuario no deberia estar y lo mandas a otro lado.

# Pushing onto the history prop

Llamas al metodo .push en history route prop.
Todos los navegadores llevan un registro del historial de paginas que visitaste (con esto funcionan las flechas volver atras o ir adelante) y React Router tiene su propia historia (objeto history) y podemos llamar .push y cuando lo hacemos redireccionamos al usuario.

# Diferencias entre las 2 opciones

Hay una diferencia clave en como va a funcionar el boton volver del navegador.

En el Redirect component, no vemos el paso intermedio, es decir que si estoy en "/" y paso a "/asdads" y esa ruta es una ruta que no quiero que vean, hago un redirect a "/otrolado". En ese caso cuando estoy en "/otrolado" y vuelvo atras no vuelvo a "/asdasd" sino que vuelvo a "/", es decir, no guarda el registro de que fui a esa pagina.

En cambio, con el push en el history, si guardamos ese paso intermedio, por lo tanto en el ejemplo anterior volveriamos a "/asdasd" y por lo tanto a "/otrolado" y asi cada vez que vuelvo atras. Es como si no funcionara el boton volver.

Es por esto que usamos redirect cuando es una pagina donde no queremos que el usuario vea o sepa que existe, entonces no dejamos rastros para volver con el boton.
En cambio si es algo normal de la pagina donde es correcto el actuar del usuario, y queremos que pueda volver normalmente usamos el push.

#### withRouter higher order component

Un error que suele ocurrir es cuando tenemos un componente Navbar donde logueamos, y apretamos el boton donde nos redirecciona a otro lado mediante un push al history. Al ser un Navbar se renderiza siempre en el App.js es decir esta fuera del Switch.
El problema es que el navbar esta fuera del Switch y las Route. Por lo tanto no tenemos acceso a las RouterProps y por lo tanto a history.
Como vimos antes para solucionar esto si era component no habia problema y si era render lo pasabamos como argumento.
Pero aca esta afuera de todo el Router.

Solucion: podemos importar en el componente Navbar withRouter de React Router y en el export ponemos: export default withRouter(Navbar)
Es como que lo envuelve al componente cuando se exporta y establece que ese componente debe saber sobre React Router, history y esas cosas.

Es una manera de conectar componentes que no tienen nada que ver con React Router.

#### History

Como vimos el objeto history tiene un metodo llamado push para redireccionar, pero no es el unico, tiene mas, algunos tienen que ver con moverse para atras o adelante segun el historial.

Boton volver:

        this.props.history.goBack();
