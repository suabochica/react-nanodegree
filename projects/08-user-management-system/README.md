User Management System
=====================

🧰 Tech stack
-------------

- React v16 + TypeScript.
- Redux Toolkit
- [Tremor](https://www.tremor.so/) as component library
- [Tailwind](https://tailwindcss.com/) as dependency for tremor.

🍕 Slices
---------

El patrón slices de redux toolkit consiste en agrupar la lógica de los reductores y las acciones para una funcionalidad única (e.g., manejo de usuarios.).

- ⛔️ Las llamadas a los APIs no deben estar en los reducers

Reducer vs Context
------------------

- Reducer para manejo de estados globales
- Context para acceso al estado/información desde cualquier rama del árbol de elementos.

🪄 Actualización optimista del UI
---------------------------------

Es una técnica para hacer creer al usuario a través de la UI que sus interacciones se estan comportando de manera esperada. Posteriormente, dicho comportamiendo se registra en la base de datos en caso de que todo el flujo haya sido exitoso. De lo contrario se devuelve la interacción a su estado anterior.

En resumen, se le va a dar la impresión al usuario de que todo funciona, y en caso de que no funcoine, visualmente se retorna al estado anterior. (e.g., el clic de un like en twitter).
