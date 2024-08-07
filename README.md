# Nómada Chic
Producto mínimo viable de una página web de venta de bolsos, mochilas y carteras. Fue diseñado de forma responsiva para que se adapte a cualquier dispositivo tecnológico. El proyecto fue desarrollado junto a @vivillop y @clemente30.

## Instrucciones
1. Clonar el repositorio y abrir la carpeta con VS Code
2. (Opcional) Para abrir la página web en varios dispositivos, modificar la variable ip del server.js y los archivos nombrados ahí. Se debe poner la ip del dispositivo en que se levantará el servidor (ver con el comando ipconfig en la terminal)
2. Levantar el servidor local en la terminal con el comando *npm run dev*
3. Abrir la dirección mostrada en la terminal en un navegador (por defecto *http://localhost:3000*)

## Funciones
### Página principal
- Acceso a página principal a través del logo (Recarga la página en este caso).
- Acceso a pantalla de búsqueda a través del ícono de lupa (Barra de búsqueda no funcional).
- Acceso a pantallas de registro e inicio de sesión a través de los botones.
- Acceso a pantalla de carrito de compras a tráves de su ícono (el usuario debe estar autenticado).
- Acceso a pantallas de detalle de producto haciendo clic en cada producto.
- Posibilidad de añadir productos al carrito a través de los botones de cada producto (el usuario debe estar autenticado).

### Página de Búsqueda
- Barra de navegación con las funciones nombradas anteriormente.
- Barra de Búsqueda avanzada (no funcional).
- Productos con las funciones nombradas anteriormente.

### Página de Registro e Inicio de sesión
- Formulario (no funcional).
- Contacta al servidor para autenticarte a través de los botones y te redirige a la página principal.
- Posibilidad de intercambiar página al presionar el enlace inferior.

### Página de Detalle de producto
- Barra de navegación con las funciones nombradas anteriormente.
- Posibilidad de añadir el producto al carrito a través del botón (el usuario debe estar autenticado).

### Página de Carrito de compras
- Autenticación requerida (se redirigirá a la pantalla de inicio de sesión si no está autenticado)
- Barra de navegación con las funciones nombradas anteriormente.
- Posibilidad de gestionar los productos agregados anteriormente (eliminarlos).
- Resumen de compra.
- Acceso a pantalla de procesamiento de pago a través del botón (requiere agregar productos al carrito).

### Página de Procesamiento de pago
- Pasarela de pago Stripe en modo de prueba.
- Posibilidad de realizar transacciones con tarjetas de prueba de Stripe (número de tarjeta 4242424242424242 y completar con datos inventados).
- Acceso a pantalla de confirmación o rechazo de compra a través del botón.

### Página de Confirmación y Rechazo de compra
- Acceso a la página principal a través del botón.
