👨‍🏭 Operaciones en conjuntos de datos
====================================

Create an application to interact with large datasets. You must use the API provided by https://randomuser.me

🧰 Tech Stack
--------------

- React v18
- TanStack Query para manejar estados asíncronos. Limita el uso de herramientas como Redux.

✅ To Dos
---------

- [x] Fetch 100 rows of data using the API.
- [x] Display the data in a table format.
- [x] Provide the option to color rows.
- [x] Allow the data to be sorted by country.
- [x] Enable the ability to delete a row.
- [x] Allow the user to restore the initial state.
- [x] Handle potential errors.
- [x] Allow the user to filter by country.
- [x] Avoid sorting users when the user is changing filter by country.
- [x] Sort by clicking on the column header.
- [x] Add a loader while the page is loading.
- [x] Implement pagination.
- [x] Implement an infinity scroll.

🥡 Takeaways
------------

- El método `toSorted` para ordenar un arreglo sin cambiar el arregla original.
- Tener un estado y hacer cálculos sobre ese estado.
- Intenta no usar el índice de un arreglo como criterio para borrar un usuario, ya que dichos indices se actualizan a medida que se edita el arreglo.
- El `useRef` se usa para guardar un valor para compartir entre renderizados, pero al cambiar, no vuelve a renderizar el componente.
- Las promesas tienen tres métodos que se pueden concatenar:
  1. `.then` para resolver la promesa.
  2. `.catch` para capturar los errores.
  3. `.finally` que se ejecuta siempre, independientemente del resultado de la promesa.
- El concepto de _semilla_ se utiliza en programación para hacer operaciones aleatorias sobre una misma base.
- Al momento de refactorizar una función que hace un búsqueda de datos, es recomendable no involucrar las funciones de react como el `useState`. El propósito de esa función debe ser solor recuperar los datos. El manejo de los estado si debe ser responsabilidad del componente.

⚠️ Issues
---------

Al integrar la tecnología de `TanStack` las funcionalidades de borrar fila y reiniciar usuarios se pierden. En caso de querer usar estados internos en el componente `App.tsx` se exponen comportamiento inesperados por tener dos fuentes de verdad para el estado de los usuarios; El global de TanStack y el local del componente.