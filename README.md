# Día 1 — Hola Express (CRUD mínimo, memoria)

**Objetivo**: Levantar una API en Express con `GET /tasks` y `POST /tasks`.

```bash
npm install
npm run dev
```

**Prueba 1**: 
```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title":"Primera tarea"}'
```
**Prueba 2**: 
```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title":"Segunda tarea"}'
```

**Prueba de error**: 
```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title":""}'
```