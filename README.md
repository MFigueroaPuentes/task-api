# Día 2 — CRUD completo (memoria)

**Objetivo**: Completar `GET/POST/GET:id/PATCH/DELETE` en memoria.

```bash
npm install
npm run dev
```
**Prueba 1 POST**: 
```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title":"Primera tarea"}'
```
**Prueba 2 POST**: 
```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title":"Segunda tarea"}'
```

**Prueba de error POST**: 
```bash
curl -X POST http://localhost:3000/tasks   -H "Content-Type: application/json"   -d '{"title":""}'
```


**Prueba 1 PATCH**: 
```bash
curl -X PATCH http://localhost:3000/tasks/{id}   -H "Content-Type: application/json"   -d '{"title":"Primera tarea actualizada"}'
```

**Prueba error PATCH**: 
```bash
curl -X PATCH http://localhost:3000/tasks/{id}   -H "Content-Type: application/json"   -d '{"title":""}'
```

**Prueba 1 DELETE**: 
```bash
curl -X DELETE http://localhost:3000/tasks/{id}   -H "Content-Type: application/json" 
```
**Prueba error DELETE**: 
```bash
curl -X DELETE http://localhost:3000/tasks/   -H "Content-Type: application/json" 
```