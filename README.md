# Informe Taller de Desarrollo de Aplicación ReactJS con Gestión de Libros, Autores y Autenticación

**Integrantes:**

* Juan Jose Diaz Parra - A00381098
* Mateo Silva Lasso - A00382277
* Luis Eduardo Charria - A00381789

## Introducción

En este informe, se presentará una descripción detallada de las actividades llevadas a cabo durante el taller de desarrollo de una aplicación ReactJS que consume la API REST previamente desarrollada en el taller anterior. El objetivo principal del taller fue gestionar libros y autores, así como implementar un sistema de autenticación utilizando JSON Web Tokens (JWT). Se abordarán las tareas realizadas, lo que faltó por completar, las dificultades encontradas y las reflexiones y conclusiones derivadas de nuestra experiencia en el desarrollo de la aplicación.

## Especificaciones para correr la aplicación 

- La aplicacion de React en su carpeta fuente tiene dos carpetas, para correr el proyecto debes entrar en la carpeta llamada Reaclibrary

- Para la aplicacion utilizamos broostrap, asi que debes instalar esta tambien en el proyecto, asi como las otras, axios, react-router-dom, etc; claro esta.

## Desarrollo de la Aplicación

### Tareas Realizadas

#### 1. Desarrollo de Componentes (30%)

- Creamos componentes para representar autores y libros en la interfaz de usuario.
- Implementamos formularios para añadir y editar autores y libros.
- Desarrollamos una tabla y una lista para visualizar los autores y libros existentes.
- Implementamos una lista que muestra los libros de un autor.

#### 2. Consumo del Servicio Backend (20%)

- Configuramos Axios para apuntar al servicio backend.
- Implementamos funciones en React que consumen los endpoints de autores y libros proporcionados por el backend.
- Aseguramos el manejo adecuado de las respuestas y errores de las solicitudes HTTP.

#### 3. Autenticación (20%)

- Implementamos un formulario de inicio de sesión que permite a los usuarios autenticarse.
- Configuramos Axios para incluir el token JWT en las solicitudes una vez que el usuario esté autenticado.
- Garantizamos que los endpoints que requieren autenticación sean accesibles solo cuando el usuario esté autenticado.

#### 4. Estilización y Mejoras (20%)

- Aplicamos estilos a la aplicación utilizando la librería Reactstrap para componentes de interfaz de usuario.
- Implementamos mejoras adicionales para mejorar la usabilidad y apariencia de la aplicación.

### Tareas Pendientes

- A pesar de haber implementado una funcionalidad de autenticación, aún queda por completar la gestión de roles y permisos para restringir el acceso a ciertas secciones de la aplicación según el nivel de usuario.
- Se requiere una mayor validación de formularios y manejo de errores en la interfaz de usuario para proporcionar una experiencia más amigable al usuario.

## Dificultades en el Desarrollo

Durante el desarrollo del taller, enfrentamos desafíos que requerían una investigación y resolución minuciosa:

- La implementación de autenticación con JWT planteó dificultades en la configuración adecuada del token en Axios y en la gestión de sesiones de usuario. La documentación y tutoriales nos ayudaron a superar estos obstáculos.

- La validación de formularios y el manejo de errores en las solicitudes HTTP requerían una atención especial. Tuvimos que investigar y aplicar prácticas recomendadas para garantizar un comportamiento correcto.

- La conexion con el back mediante el api, a veces daba ciertos errores los cuales no sabiamos como manejar, ademas cuando las solicitudes se hacian correctamente, no sabiamos que hacer muy bien cuando estas eran enviadas a los componenetes.

## Conclusiones Generales

A partir del desarrollo del taller, hemos alcanzado las siguientes conclusiones:

1. **Desarrollo de Aplicaciones ReactJS**: El taller nos permitió adquirir experiencia en el desarrollo de aplicaciones web utilizando ReactJS. Pudimos crear componentes, formularios y consumir servicios REST de manera eficiente.

2. **Implementación de Autenticación JWT**: Logramos implementar un sistema de autenticación utilizando JSON Web Tokens (JWT), lo que demuestra una comprensión sólida de los conceptos de autenticación y autorización.

3. **Estilización y Mejoras con Reactstrap**: Aplicamos estilos a la aplicación utilizando la librería Reactstrap para componentes de interfaz de usuario. Esto nos brindó una amplia variedad de componentes predefinidos y contribuyó a la apariencia mejorada de la aplicación.

4. **Dificultades Superadas**: A pesar de los desafíos encontrados, demostramos la capacidad de investigar y resolver problemas de desarrollo de software de manera efectiva.