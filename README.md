# 🕹️ Carrito de compras para tienda NextUpGames
Aplicación web sencilla desarrollada con React y Vite.js responsive que simula un carrito de compras básico. Permite a los usuarios explorar una lista de productos (juegos), añadirlos a una lista de compras, y visualizar el total a pagar, con la posibilidad de eliminar productos del carro.

## 🚀 Demo
Puedes ver la aplicación en funcionamiento aquí:

🔗 [Github Pages](https://nisiara.github.io/dfe1_exp3_s1/)


## ✨ Características Principales

* **Catálogo de Juegos**: Explora una selección de títulos con información relevante como título, plataforma, descripción y precios.
* **Diseño Responsive**: La interfaz se adapta perfectamente a cualquier dispositivo (móvil, tablet, escritorio).
* **Agregar a la Bolsa de Compras**: Permite a los usuarios seleccionar un producto y agregarlo a su lista de compras con un solo click.
* **Control de Estado**: Una vez añadido, el botón cambia de 'Agregar al carro' a 'Ya estoy en el carro' para evitar que se agregue el mismo juego dos veces.
* **Renderizado Condicional**: Dependiendo del estado que maneja la bolsa de compras, muestra un mensaje o la lista de productos.
* **Cálculo de Total**: El carrito calcula y muestra el monto total a pagar sumando los precios de todos los productos.
* **Eliminar Juegos**: Permite a los usuarios remover juegos individualmente del carrito en cualquier momento.


## 🛠️ Tecnologías Utilizadas

* **React**: Biblioteca de JavaScript para construir interfaces de usuario.
* **Vite.js**: Herramienta de construcción rápida y ligera.
* **Bun**: Como gestor de paquetes y bundler para un desarrollo eficiente.
* **JSX/Sass**: Estructura y estilos.


## ⚙️ Instalación y Uso usando Bun

Sigue estos pasos para obtener una copia local del proyecto en funcionamiento.

### Prerrequisitos

Necesitas tener instalado **[Bun](https://bun.com/)** en tu sistema.

### Pasos

1.  **Clona el repositorio:**

  ```bash
  git clone [https://github.com/nisiara/dfe1_exp3_s1.git]
  cd dfe1_exp3_s1
  ```

2.  **Instala las dependencias usando Bun:**

    ```bash
    bun install
    ```

3.  **Ejecuta el proyecto en modo desarrollo:**

    ```bash
    bun run dev
    ```

    El servidor de desarrollo se iniciará y la aplicación estará disponible en `http://localhost:5173/` (o el puerto que indique Vite).


## ✍️ Autor
nisiara - Desarrollador/a principal.




