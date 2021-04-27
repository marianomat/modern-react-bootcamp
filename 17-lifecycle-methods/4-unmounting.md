#### Etapa 3: Unmounting

# ComponentWillUnmount

Esta etapa solo tiene un metodo llamado componentWillUnmount(), se utiliza para justo antes de que un componente sea destriuido o removido del DOM. Lo que hace es hacer una limpieza de temporizadores, cancela requests, remueve events handlers del DOM, limpia subscripciones.

Usar setState dentro de este metodo es inutil porque no hay un render luego de que se ejecuta.

Este metodo se ejecuta justo antes de eliminar el componente.

2
