# Proyecto 7: Aplicación Fullstack de Comercio Electrónico

## Descripción

Este proyecto consiste en el desarrollo de una aplicación Fullstack para un negocio de comercio electrónico, que incluye un catálogo de productos, un carrito de compras, y una pasarela de pago segura. También se implementan funciones de autenticación y autorización de usuarios mediante JSON Web Tokens (JWT).
Backend desplegado en Render: https://app-backend-mongodb-nodejs.onrender.com
Frontend desplegado en Netlify: https://tiendatiktak.netlify.app/


**Desarrollador:** Raúl Rosales R.  
**Cohorte:** 13  
**Bootcamp:** Desarrollo Web Full Stack 4.0 UDD

## Objetivos del Proyecto

El objetivo de este proyecto es crear una aplicación completa que permita gestionar todas las funciones necesarias para un negocio en línea. Entre las funcionalidades clave se incluyen:

- **Catálogo de productos**: Los usuarios pueden explorar productos disponibles.
- **Carrito de compras**: Los usuarios seleccionan y gestionan sus productos antes de realizar la compra.
- **Pasarela de pago**: Implementación de una integración segura con PayPal para gestionar las transacciones.
- **Autenticación y autorización**: Los usuarios pueden registrarse, iniciar sesión y gestionar su perfil, incluyendo áreas privadas protegidas mediante JWT.

## Tecnologías Utilizadas

### Frontend

- **React** (con Vite)
- **React Router Dom** (v5 o v6) para la gestión de rutas.
- **Material UI** para el diseño visual y la interfaz de usuario.
- **Axios** para la comunicación con el backend.
- **Context API** y **useReducer** para el manejo de estados.

### Backend

- **Node.js** con **Express.js** como framework backend.
- **JWT** para la autenticación de usuarios.
- **bcryptjs** para el cifrado de contraseñas.
- **MongoDB** como base de datos, utilizando **Mongoose** para la gestión de datos.
- **Cors** para habilitar solicitudes entre distintos dominios.
- **Nodemon** para la actualización automática del servidor durante el desarrollo.
- **dotenv** para la gestión de variables de entorno.
- **OpenAPI Backend** para la documentación y especificación de la API.

### Base de Datos

- **MongoDB** con **MongoDB Atlas** para el despliegue en la nube.

## Objetivos de Aprendizaje

Este proyecto te permitirá desarrollar y profundizar conocimientos en las siguientes áreas:

- Gestión de rutas en el **frontend** y **backend**.
- Manejo de **estados** locales y globales en React.
- Gestión de datos en **MongoDB**.
- Implementación de **seguridad**, incluyendo autenticación y autorización de usuarios.

## Requisitos y Entregables

### General
- El proyecto es individual.

### Frontend
- Prototipo de la estructura de la aplicación.
- Uso de **ReactJS** como librería principal.
- Implementación de **Context API** para manejar el estado de la aplicación.
- Rutas: Home, Sign Up, Login, Mi perfil, Producto individual, Listado de productos, Checkout (Pasarela de pago).

### Backend
- Desarrollo del backend con **ExpressJS**.
- Gestión de rutas y conexión con la base de datos **MongoDB**.

### Despliegue
- Utilización de **MongoDB Atlas** para el almacenamiento de datos.
- Despliegue del proyecto y generación de una URL para compartir
Backend desplegado en Render: https://app-backend-mongodb-nodejs.onrender.com
Frontend desplegado en Netlify: https://tiendatiktak.netlify.app/

## Repositorios

- [Repositorio Backend](https://github.com/Artenlaclase/Proyecto-6-Aplicaci-nBakendMongoDBNodeJs)
- Repositorio Frontend (https://github.com/Artenlaclase/Proyecto-7-Aplicaci-nFullStackCE)

## Instrucciones para Ejecutar el Proyecto

### Clonar el Repositorio
```bash
git clone <URL_del_repositorio>
```
## Instalación de Dependencias

En la carpeta del backend:
```bash
npm install
```
En la carpeta del frontend:
```bash
npm install
```
Ejecución del Backend
```bash
npm run dev
```
Ejecución del Frontend
```bash
npm run dev
```

Variables de Entorno
Crear un archivo .env en la raíz del proyecto backend con las siguientes variables:

plaintext

MONGO_URI=<URL_de_Conexion_MongoDB>
JWT_SECRET=<clave_secreta_para_JWT>



Autor
Raúl Rosales R.
Desarrollador Web Freelance
GitHub

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
