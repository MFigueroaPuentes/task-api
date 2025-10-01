# Día 2: CRUD completo (memoria) + errores

## Objetivo del día

Completar `GET /tasks/:id`, `PATCH /tasks/:id`, `DELETE /tasks/:id` y añadir **middleware de errores**.

## Qué debes leer hoy (rápido)

- Diferencias entre **400** (solicitud inválida) y **404** (no existe).
- Cuándo usar **PATCH** vs **PUT**.
- Estructura de un middleware de manejo de errores en Express.

## Tareas (paso a paso)

1. Implementa endpoints que faltan: GET:id, PATCH, DELETE.
2. `PATCH` debe permitir cambiar `title` y/o `completed` y actualizar `updatedAt`.
3. Responde:
   - **404** si el recurso no existe.
   - **204** en DELETE exitoso (sin body).
   - **400** si `title` enviado en PATCH es inválido.
4. Agrega **middleware** de errores que devuelva `{ error: { code, message } }`.
5. Actualiza README y abre PR.
