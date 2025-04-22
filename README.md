# BR_Personal_Blog

Un proyecto de blog personal construido en Node.js donde se manejan funcionalidades de autenticación, registro de usuarios y gestión de contenido.

https://roadmap.sh/projects/personal-blog

## 🚀 Características principales

- Registro de usuarios con encriptación de contraseñas (bcryptjs).
- Inicio de sesión seguro usando tokens JWT y cookies.
- Manejo de variables de entorno con dotenv.
- Estructura modular para el manejo de rutas y controladores.
- Código listo para conectar con bases de datos reales.

## 📂 Estructura del proyecto

```
/controllers
    - authController.js
/models
    - userModel.js
/routes
    - authRoutes.js
.env
app.js
README.md
```

## 🛠️ Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)

## ⚙️ Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/Goroslay/BR_Personal_Blog.git
```

2. Ingresa al directorio del proyecto:

```bash
cd BR_Personal_Blog
```

3. Instala las dependencias:

```bash
npm install
```

4. Crea un archivo `.env` basado en las siguientes variables:

```
JWT_SECRET=tu_secreto
JWT_EXPIRATION=1d
JWT_COOKIE_EXPIRES=7
```

5. Ejecuta el servidor:

```bash
npm start
```

## ✨ Funcionalidades futuras (ideas)

- Conexión a base de datos real (MongoDB, PostgreSQL).
- Sistema de publicación de posts.
- Gestión de perfiles de usuario.
- Validación más robusta de formularios.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.  
Puedes hacer lo que quieras, ¡pero da crédito si te basas en él! 😄

---

> Desarrollado con ❤️ por [Goroslay](https://github.com/Goroslay)
