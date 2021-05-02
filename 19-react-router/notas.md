#### Client-side routing with React Router

# Server-side Routing

Antes el routing solo existia del lado del servidor, no del cliente, este es el server-side routing, donde clickeando un <a> hace que el browser haga un request y reciba un nuevo DOM.
El servidor es quien decide que HTML mandar basado en la URL, y la pagina entera es refrescada.

# Fake Client-side Routing

Una manera de hacerlo es teniendo un nav en el render donde tiene elementos <a>, estos anchors no tienen el atributo href, pero si un metodo onClick, este metodo lo que hace es cambiar el State. El State es el que indica que componente renderizar, entonces si el estado tiene { pagina: "info" }, con condicionales el render va a solamente cargar el componente Info.
Esta manera no es recomendada ya que se pierde funcionalidades, no hay un historial de que paginas visitaste, no podes volver, no podes agregar a favoritos ninguna pagina (siempre es el mismo URL) y no ponerle href al <a> no es bueno.
Es decir que no tenemos URLs diferentes cuando nos "movemos" entre las paginas, es siempre la misma.

# Client-side Routing con React Router

Esto es "real" routing, en el sentido de que si existen distintas URLs que muestran distintos contenidos al usuario, pero esto es hecho via browser y no del lado del servidor.
Podemos clickear un link y el la barra de navegacion va a ir cambiando pero no se va a ir refrescando la pagina ni tampoco hay requests hechos al servidor, es todo JS.
Hay codigo que hace que la URL se vaya actualizando y tambien el historial para poder tener funcionalidades como volver atras, agregar a favoritos, etc.

# React Router

No es una herramienta oficial de React, es mas, hay muchas harramientas para client-side routing como aviator, backbone, etc. para client-side routing. Pero si es el mas popular.

-   Instalacion: npm i react-router-dom
-   Incluirlo: se importa en el index.js y envuelve al componente App. Esto hace que este disponible el routing pero no hace nada por si solo.

<script>
    import { BrowserRouter } from "react-router-dom";

    ReactDOM.render(
        <BrowserRouter>
            <App/>
        <BrowserRouter/>,
        document.getElementById("root")
    );
</script>

-   Generar un mapeo de rutas y componentes: es decir, generar relaciones entre las URL y los componentes a mostrar, por ejemplo, comoponente Dog se muestra en la url /dog.
    En este caso en el componente App, importamos Route, al que usamos dentro del render para generar el mapeo.

<script>
    import { Route } from "react-router-dom";

    class App extends Component {
        render() {
            return (
                <div>
                    <Route component={Home} path="/" />
                    <Route component={Dog} path="/dog" />
                    <Route component={Dog} path="/dog/id" />
                </div>
            )
        }
    }
</script>

Por defecto, react-router trata de matchear todas las rutas posibles con la URL que tenga, en este caso, si vamos a localhost:3000/ va a mostrar el componente Home, pero si vamos a http://localhost:3000/dog muestra el componente Dog Y TAMBIEN el componente Home porque la ruta "/" esta incluida en "/dog".
Cuando ponemos path="/", todas las rutas con un / al principio van a coincidir. No es que matchea solo la ruta que es exactamente igual a "/".

Lo mismo sucede si voy a /dog/123/hola, en este caso Home va a estar incluido por tener "/" al inicio, y dog tambien va a estar incluido por aparecer en la URL.

# Switch

Viene incluido con react-router-dom, y se utiliza para envolver las rutas.
Lo que hace es asegurarse que solo una de las rutas matchea, es como un switch de JS, donde compara 1 cosa entre muchas y solo 1 es true. Por lo tanto solo un componente se va a mostrar, el primero que haga match por lo tanto el orden de los componentes es importante.

Usando el mismo ejemplo anterior, si mantiene ese orden, la unica ruta que va a acceder sin importar la URL es Home, porque siempre va a hacer match con cualquier URL.

Esto arregla el problema de mostrar muchos componentes.

<script>
    import { Route, Switch } from "react-router-dom";

    class App extends Component {
        render() {
            return (
                <div>
                    <Switch>
                        <Route component={Home} path="/" />
                        <Route component={Dog} path="/dog" />
                        <Route component={Dog} path="/dog/id" />
                    </Switch>
                </div>
            )
        }
    }
</script>

Una opcion para no ir siempre a Home, es cambiar el orden:

        <Switch>
            <Route component={Dog} path="/dog/id" />
            <Route component={Dog} path="/dog" />
            <Route component={Home} path="/" />
        </Switch>

# Exact

Es una propiedad que le podemos pasar a los Route, lo que hace es que el match solo sea true si es exactamente igual, por ejemplo en "/", solo va a mostrar ese componente si la URL es "/", sin importar el orden o que sea parte de otra ruta como "/dog". En este caso Home no se mostraria si la URL es /dog.
Hace que no tengamos que estar pendiente del orden.

        <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Dog} path="/dog" />
            <Route exact component={Dog} path="/dog/id" />
        </Switch>

En general siempre y por defecto las rutas tienen esta propiedad exact, salvo que haya un motivo por el cual no ponerlo.

Incluso en este ejemplo el switch es necesario porque con el exact siempre se va a mostrar como maximo 1 componente.

#### Link Component

Como agregar botones de navegacion entre las distintas rutas.

        <div className="App">
    		<nav>
    			<a href="/dog">Dog</a>
    			<a href="/">Home</a>
    		</nav>
    		<Switch>
    			<Route component={Dog} path="/dog" />
    			<Route component={Home} path="/" />
    		</Switch>
    	</div>

Si usamos anchors <a> si bien funciona y vemos correctamente el componente de la ruta, lo que hace es recargar la pagina y esto es asi porque esta haciendo un request al servidor. Lo cual le saca todo el sentido al client-side routing. Lo que queremos es mantener al usuario en la pagina y no tener que mandar get requests y solo cambiar lo que el usuario ve de manera super rapida.
El usuario piensa que es una pagina nueva cada vez que vamso a otra URL, pero en realidad es solo contenido que se va mostrando y escondiendo.

# Link Component

Es el reemplazo del <a>, que viene incluido con react-router.

En vez de un atributo href, utiliza uno llamado "to".

Cuando clickeamos uno de estos links no realiza un GET request ni refresca la pagina, solo lo simula. El codigo de JS hace todo.

<script>
    import { Route, Switch, Link } from "react-router-dom";

    class App extends Component {
        render() {
            return (
                <div>
                    <nav>
    			        <Link to="/dog">Dog</Link>
    			        <Link to="/">Home</Link>
    		        </nav>
                    <Switch>
                        <Route component={Home} path="/" />
                        <Route component={Dog} path="/dog" />
                        <Route component={Dog} path="/dog/id" />
                    </Switch>
                </div>
            )
        }
    }
</script>

# NavLink Component

Es lo mismo que Link component nada mas que agrega la opcion de poder agregar estilos los links selectivamente segun cual esta activo o no.
Es decir que si voy a Dog, cuando estoy en Dog que ese link se vea distinto para saber que estas en esa pagina.

Permite pasarle la propiedad "activeClassName" o sino en linea "activeStyle" al NavLink.

                    <nav>
    			        <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
    			        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
    		        </nav>

Esto tambien tiene los mismos problemas de rutas que Route, donde no matchea 1 solo sino que todos los que incluyan la ruta. Por eso se agrega exact al igual que Route.

#### Render prop vs Component prop in Routes

Como pasamos props dentro de un Route? si tenemos esto:

<Route component={Dog} path="/dog" />

-   opcion 1: render
    <Route render={() => <Dog nombre="tobi" />} path="/dog" />

-   opcion 2: component
    <Route component={() => <Dog nombre="tobi" />} path="/dog" />

En que se diferencian? en el ciclo de vida de cada uno.
En el component se monta y desmonta cada vez que recargas, si clickeas el linknav a esa ruta muchas veces, generas muchas instancias del componente, es un componente nuevo por cada click.

El render, no genera uno nuevo, sino que solo ejecuta el render. Siendo mas.

En definitiva que uso?? En la mayoria de los casos:

-   Si no tenes props, usa component.
-   Si tenes props, es mejor render.

Igualmente hay que ver el tema del ciclo de vida para tener una respuesta correcta.
