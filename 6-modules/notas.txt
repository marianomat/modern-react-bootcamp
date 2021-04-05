#### ES2015 MODULES

Es una version mas nueva del require() que usa Node.
Podes exportar o importar clases, datos, funciones entre archivos JS.

#### exportar

Para exportar, hay varias opciones:

    1) Al final del archivo, "export default nombreElementoAExportar". (Si es una funcion, es sin llamarla "()" )
        a) La palabra "default", hace que cuando se importe este archivo en otro, el elemento default que se exporta es nombreElemento.
    
    2) Al final, "export {funcion1, datos32, arrayColores};". En este caso estoy exportando varias cosas, usando el { }

    3) Combinar ambas, usando un default y a su vez, otros elementos con las llaves.
        "export default hola;"
        "export {array, sumar, restar};"  



#### importar

Para importar:

    1) Al comienzo del archivo donde importa, segun como las diferentes situaciones:
        ## Nombre de los elementos:
            a) El nombre del elemento, puede ser llamado de cualquier manera, siempre que haya un export default en el otro archivo.
            "import nombreElemento from "./nombreArchivoJs".

            b) En el caso de que no quieras el export default o no exista, debemos usar las llaves { } y dentro colocar el nombre del elemento a importar tal como esta en el export.
            "import { funcion1, datos32, arrayColores } from "./helpers";"

            c) Si existe un export default y un export con llaves {} y queres importar todos:
            "import hola, {array, sumar, restar} from "./helpers";"
            En este caso "hola" es el default (lo podemos nombrar como queramos) pero lo que esta dentro de la llave si o si tiene que coincidir el nombre con lo que se exporto ya que no son default.
            
    
        ## Nombre del archivo:
            a) El nombre del archivo, si es un modulo (busca en node_modules) va sin "/", es decir sin la ubicacion, pero si es un archivo JS creado por nosotros, en ese caso tenemos que indicar la ubicacion del mismo "./nombreArchivo"
                - import React from "react"; (modulo)
                - import App from "./App"; (archivo js)

        
## Cuando usar export default?
Cuando hay un elemento que es probable que se importe siempre o casi siempre.
Como por ejemplo React. O cualquier componente que creamos, lo queremos importar en otro que lo llame, en ese caso hacemos un export defautl nombreComponente.
No es necesario igual, solo indica que es lo mas importante en el archivo.