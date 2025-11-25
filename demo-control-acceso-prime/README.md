# Demo Control de Acceso (simulado)

Estructura de la demo:

```
demo-control-acceso-prime/
├─ backend/
├─ db/
└─ frontend/
```

Requisitos:
- Node.js (v16+) y npm si vas a ejecutar sin Docker. Si vas a usar Docker, instala Docker Desktop.

Opciones para ejecutar la demo:

Opción A — Ejecutar con Docker (si deseas usar Docker):

1) Desde la carpeta `demo-control-acceso-prime` ejecutar:

```powershell
docker compose up --build
```

2) Acceder a:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3000

Opción B — Ejecutar sin Docker (recomendado para demo rápida usando Prisma + SQLite):

Requisitos: `node` (v16+), `npm`. Si usas MariaDB, asegúrate de tener el servidor en ejecución y la base de datos `demo` creada o accesible por el usuario/credenciales que indiques.

1) Abrir PowerShell en `demo-control-acceso-prime/backend`:

```powershell
cd 'C:/Users/DavidSax/Documents/APLICACIONES/demo/demo-control-acceso-prime/backend'
npm install
```

2) Configurar la conexión a MariaDB:

- Edita (o crea) el archivo `backend/.env` con la cadena de conexión a tu MariaDB, por ejemplo:

```text
# backend/.env
DATABASE_URL="mysql://root:1720@localhost:3306/demo"
```

3) Sincronizar el esquema con la base de datos y poblarla (Prisma):

```powershell
npm run prisma:generate
npm run db:push
npm run seed
```

4) Iniciar el backend:

```powershell
npm start
```

4) Servir el frontend estático (desde la carpeta raíz `demo-control-acceso-prime`):

```powershell
# opción rápida con http-server (instala si no la tienes)
npx http-server ./frontend -p 8080

# o, si prefieres, usar live-server
npx live-server ./frontend --port=8080
```

5) Abrir el navegador en: `http://localhost:8080` (el frontend llamará al backend en `http://localhost:3000`).

Notas:
- Si usas la Opción B (sin Docker) la demo usa SQLite como base de datos (`backend/prisma/dev.db`) a través de Prisma. No necesitas MariaDB ni contenedores.
- La demo está completamente simulada: para simular biometría/tarjeta usa los botones en el frontend.
