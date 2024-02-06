👨‍🏭 Operaciones en conjuntos de datos
====================================

Create an application to interact with large datasets. You must use the API provided by https://randomuser.me

✅ To Dos
---------

- [x] Fetch 100 rows of data using the API.
- [x] Display the data in a table format.
- [x] Provide the option to color rows.
- [x] Allow the data to be sorted by country.
- [x] Enable the ability to delete a row.
- [x] Allow the user to restore the initial state.
- [x] Handle potential errors.
- [] Allow the user to filter by country.
- [] Sort by clicking on the column header.
- [] Explain your solution.

🥡 Takeaways
------------

- El método `toSorted` para ordenar un arreglo sin cambiar el arregla original.
- Tener un estado y hacer cálculos sobre ese estado.
- Intenta no usar el índice de un arreglo como criterio para borrar un usuario, ya que dichos indices se actualizan a medida que se edita el arreglo.
- El `useRef` se usa para guardar un valor para compartir entre renderizados, pero al cambiar, no vuelve a renderizar el componente.