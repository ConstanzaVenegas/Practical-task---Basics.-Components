# Respuestas — Profile Card

## 1. ¿Cuál es el valor por defecto de `flexDirection` en React Native? ¿En qué se diferencia de CSS en la web?

En React Native el valor por defecto es `column`, o sea que los elementos se ponen uno debajo del otro. En CSS en la web el valor por defecto es `row`, así que ahí los elementos quedan uno al lado del otro. Por eso en mi tarjeta tuve que poner `flexDirection: 'row'` para que el avatar y el nombre quedaran lado a lado.

## 2. ¿Cuál es la diferencia entre `justifyContent` y `alignItems`?

`justifyContent` ordena los elementos a lo largo del eje principal, y `alignItems` los ordena en el eje transversal (el que cruza al principal). Como por defecto la dirección es `column`, `justifyContent` actúa de forma vertical y `alignItems` de forma horizontal. Si cambio a `row`, los ejes se invierten. Yo usé `justifyContent: 'center'` en `screen` para centrar la tarjeta en la pantalla.

## 3. ¿Qué hace `flex: 1` dentro de una fila? ¿Y en el `View` más externo de una pantalla?

Dentro de una fila, `flex: 1` hace que el elemento ocupe el espacio disponible, y si varios elementos tienen `flex: 1` se reparten ese espacio en partes iguales. Lo usé en las tres estadísticas y en los dos botones para que tuvieran el mismo ancho. En el `View` más externo hace que ocupe todo el alto de la pantalla.

## 4. ¿Cuál es la diferencia entre `resizeMode="cover"` y `resizeMode="contain"`?

Con `cover` la imagen se agranda hasta llenar todo el espacio sin deformarse, y lo que sobra se recorta. Con `contain` la imagen se ve completa dentro del espacio, pero pueden quedar espacios vacíos a los lados o arriba y abajo. En el banner usé `cover` para que llenara todo el ancho de la tarjeta.

## 5. ¿Por qué usamos `StyleSheet.create` en vez de objetos normales dentro del JSX?

Porque así los estilos se definen una sola vez, fuera del componente, y no se vuelven a crear cada vez que la pantalla se actualiza. Además el código queda más ordenado, porque puedo reutilizar los estilos por su nombre, y en desarrollo avisa si escribo mal alguna propiedad.

## 6. ¿Por qué una sombra escrita con `shadowColor` no aparece en Android?

Porque las propiedades `shadowColor`, `shadowOffset`, `shadowOpacity` y `shadowRadius` solo funcionan en iOS. En Android las sombras se hacen con `elevation`. Por eso usé `Platform.select` en la tarjeta, para poner las propiedades de iOS en iPhone y `elevation` en Android.