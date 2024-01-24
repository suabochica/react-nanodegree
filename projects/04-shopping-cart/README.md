# 🛒 Shopping cart

1. Ecommerce

- [x] Muestra una lista de los production que vienen en el `data/products.json`.
- [x] Añade un filtro por categoría.
- [x] Añade un filtro por precio a partir de determinado valor.
- [x] Haz uso de `useContext` para evitar pasar props innecesarias.

2. Shopping cart

- [x] Haz que se puedan añadir los productos al carrito.
- [x] Haz que se puedan eliminar los productos al carrito.
- [x] Haz que se puedan modificar la cantidad los productos al carrito.
- [x] Sincroniza los cambios del carrito con la lista de productos.
- [x] Guarda en un `localStorage` el carrito para recuperarlo luego de cargar la página.

## `useContext`

1. Crear el contexto
2. Crear el proveedor para el contexto
3. Consumir el contexto

Habilita la inyección de dependencias. Un caso de uso es el tema de la página, ya que se pueden manejar valores estáticos.

## `useReducer`

Manejo del estado de una manera escalable, a través de una interacción entre el estado actual y una acción que se ejecuta para generar un nuevo estado.

Es más facil te probar, porque la lógica de estado queda aislada a la renderización del componente.

Si tienes muchos `useState` en tú código, significa que el estado esta fragmentado. Este es un sintoma para reemplazar los `useState` por un reducer.

## Copias profundas

En este proyecto se uso el `structureClone` para crear una copia profunda del estado del carrito al momento de agregar un item al mismo, tal y como se muestra a continuación:

```ts
const { id } = action.payload
const productCartIndex = state.findIndex(item => item.id === id)
const newState = structuredClone(state);

newState[productCartIndex].quantity += 1;
```

Esta forma es quizás la mas legible, pero tiene problema de rendimiento si el objeto del estado es muy grando, ya que recorre todo el arreglo. Una alternativa es usar un `.map()`:

```ts
const { id } = action.payload

const newState = state.map(item => {
  if (item.id === id) {
    return {
      ...item,
      quantity: item.quantity + 1
    }
  }

  return item
})
```

`.map()` puede ser la primero opción para hacer las copias, pero sacrifica legibilidad. Por último tenemos la combinación entre el spread operation (`...`) y el método `.slice()` de los arreglos en javascript:

```ts
const { id } = action.payload
const productCartIndex = state.findIndex(item => item.id === id)

const newState = [
  ...state.slice(0, productCartIndex),
  {
    ...state[productCartIndex],
    quantity: state[productCartIndext].quantity + 1
  },
  ...state.slice(productCartIndex + 1)
]
```

Esta es la opción de mejor rendimiento pero en definitiva en las más compleja de leer.
