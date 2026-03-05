# Agencia de Viajes — Gestor de Reservas

Sistema web para reservar recursos (pistas deportivas, salas, etc.) con calendario de disponibilidad y gestión de reservas.

**Stack:** React (frontend) + Django REST Framework (backend)

---

## Estructura del proyecto

```
Agencia-Viajes/
├── frontend/          <- React + Vite
├── backend/           <- Django (pendiente)
├── venv/              <- Entorno virtual Python (no se sube a git)
├── requirements.txt   <- Dependencias Python
└── README.md
```

---

## Modelos de datos (Django)

| Modelo | Descripcion |
|--------|-------------|
| `User` | Usuario del sistema |
| `Resource` | Recurso reservable (pista, sala...) |
| `Availability` | Franjas horarias disponibles |
| `Booking` | Reserva realizada por un usuario |

---

## Funcionalidades

### Obligatorias
- [ ] Calendario de disponibilidad
- [ ] Evitar solapamiento de reservas
- [ ] Reservas recurrentes

### Opcionales (extras)
- [ ] Notificaciones de reserva/cancelacion
- [ ] Panel de administracion

---

## Roadmap

### Fase 1 — Frontend (React)
- [ ] Estructura de paginas y rutas
- [ ] Pagina Home
- [ ] Listado de recursos disponibles
- [ ] Detalle de recurso con calendario
- [ ] Formulario de reserva
- [ ] Datos mockeados (sin API real)

### Fase 2 — Backend (Django)
- [ ] Configuracion del proyecto Django
- [ ] Modelos: Resource, Booking, Availability, User
- [ ] API REST con Django REST Framework
- [ ] Autenticacion de usuarios
- [ ] Logica anti-solapamiento de reservas
- [ ] Reservas recurrentes

### Fase 3 — Integracion
- [ ] Conectar React con la API de Django
- [ ] Reemplazar datos mockeados por llamadas reales
- [ ] CORS configurado
- [ ] Deploy

---

## Instalacion

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
source venv/bin/activate
pip install -r requirements.txt
cd backend
python manage.py migrate
python manage.py runserver
```

---

## Commits recomendados

Haz un commit despues de cada bloque funcional:

```
feat: initial React frontend setup
feat: add routing and page structure
feat: add resource listing with mock data
feat: add booking form and calendar component
feat: initial Django project setup
feat: add data models
feat: add REST API endpoints
feat: connect React with Django API
```
