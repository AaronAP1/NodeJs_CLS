
# NodeJsMr

Desarrollo Backend con NodeJS y Sequelize, usando buenas practicas de desarrollo.


## Documentación

Este proyecto fue desarrollado con las siguientes dependencias
```depencias
"dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.4.7",
        "express": "^4.21.2",
        "joi": "^17.13.3",
        "mysql2": "^3.12.0",
        "sequelize": "^6.37.5"
      },
      "devDependencies": {
        "nodemon": "^3.1.9"
      }
```
### Instrucciones para instalar las dependencias

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```sh
npm install
```

### Configuración de las variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido, ajustando los valores según tu configuración de MySQL:

```env
PORT=3000
DB_USER=''
DB_PASSWORD=''
DB_HOST=''
DB_NAME=''
DB_PORT=''
DB_DIALECT='mysql'
```

### Cómo ejecutar el backend

Para ejecutar el backend, sigue estos pasos:

1. Asegúrate de tener las dependencias instaladas y las variables de entorno configuradas.
2. Ejecuta el siguiente comando para iniciar el servidor en modo desarrollo:

```sh
npm run dev
```

Esto iniciará el servidor en el puerto especificado en el archivo `.env` (por defecto, el puerto 3000).

Para iniciar el servidor en modo producción, ejecuta:

```sh
npm start
```

El servidor estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

### Endpoints disponibles

- `GET /api/v1/usuarios/lista`: Obtiene la lista de usuarios.
- `GET /api/v1/usuarios/:id`: Obtiene un usuario por su ID.
- `POST /api/v1/usuarios`: Crea un nuevo usuario.
- `PUT /api/v1/usuarios/:id`: Actualiza un usuario existente.
- `DELETE /api/v1/usuarios/:id`: Elimina un usuario por su ID.
