#### Etapa 2: updating

La mayoria del tiempo, la informacion de los componentes va cambiando, algunas cosas que pueden producir cambios que generean nuevas renderizaciones son:

-   SetState()
-   Cuando las props cambian, si bien son inmutables, no las cambiamos dentro del componente, sino que cambia la informacion de las props cuando el componente padre envia distinta informacion.
-   forceUpdate(): es util cuando hay informacion que no es parte del estado ni de las props, y va cambiando.

# Updating

Cuando se actualiza el componente tambien hay una serie de etapas.

1. Se genera un cambio en la informacion por setState, cambio de props, forceUpdate, etc.
2. Este cambio hace que se vuelva a ejecutar el render()
3. Se actualiza el DOM segun el contenido del render()
4. Una vez renderizado el cambio, se ejecuta al final el metodo ComponentDidUpdate

# ComponentDidUpdate

Es similar a componenDidMount, en el sentido de que se ejecutan luego del render. La diferencia esta que el componentDidMount se ejecuta solo 1 vez luego del primer render y componentDidUpdate no se ejecuta en el primer render, pero si se ejecuta en todos los siguientes render que surjan.

# Para que es util?

Para efectos secundarios que producen las operaciones. Usos:

-   Sincronizar los cambios con la base de datos, localstorage.
-   Auto-guardado
-   actualizar el DOM para componentes sin control (uncontrolled components)

# Estado y props anteriores

Con este metodo podes acceder a las props y state anteriores al update para poder hacer comparaciones.
Esta informacion se obtiene agregando 2 argumentos al metodo.

    componentDidUpdate(prevProps, prevState) {}
