# Día 1: Hola Express (CRUD mínimo en memoria)

## Objetivo del día

Levantar un servidor Express y exponer `GET /tasks` y `POST /tasks` usando un **array en memoria**.

## Qué debes leer hoy (rápido)

- Conceptos básicos de HTTP (métodos, códigos 2xx/4xx).
- ¿Qué hace `express.json()`?
- Idea de middleware (morgan para logs).

## Tareas (paso a paso)

1. Instalar dependencias y correr el server:
   ```bash
   npm install
   npm run dev
   ```
2. Implementar:
   - `GET /tasks` → devuelve un array.
   - `POST /tasks` → crea `{ id, title, completed, createdAt, updatedAt }` y responde **201**.
   - Validar: `title` obligatorio (string no vacío) → **400**.
3. Añadir logs de peticiones con **morgan**.
4. Actualiza el README con ejemplos `curl`.
5. Sube cambios en una rama y abre **PR**.

## Cómo probar

```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title":"Primera tarea"}'

curl http://localhost:3000/tasks
```
