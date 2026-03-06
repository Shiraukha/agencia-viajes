# Travio — Travel Booking App

A portfolio-grade travel agency web app inspired by Kayak. Users can search and book hotels, flights, and vehicles.

**Stack:** React + Vite + TypeScript + Tailwind CSS v4 (frontend) · Django REST Framework (backend, Phase 2)

---

## Project Structure

```
agencia-viajes/
├── frontend/          # React + Vite + TypeScript
│   ├── src/
│   │   ├── assets/        # Images (hotel.jpg, flight.jpg, vehiculo.jpg)
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.tsx
│   │   │   └── HeroSearch.tsx
│   │   ├── data/          # Mock data
│   │   │   ├── hoteles.ts
│   │   │   ├── flights.ts
│   │   │   └── vehicles.ts
│   │   └── pages/
│   │       ├── Home.tsx
│   │       ├── Hotels.tsx
│   │       ├── HotelDetail.tsx
│   │       ├── Flights.tsx
│   │       ├── FlightDetail.tsx
│   │       ├── Vehicles.tsx
│   │       ├── VehicleDetail.tsx
│   │       └── BookingForm.tsx
├── backend/           # Django (Phase 2 — pending)
└── README.md
```

---

## Features built

### Navbar
- Logo (Travio + globe icon) linking to home
- "Iniciar sesión" button
- Dropdown icon with links to Hotels, Flights, and Vehicles

### HeroSearch (Home hero section)
- Three tabs: Hotels, Flights, Vehicles — each with its own icon and label
- Dynamic title and subtitle per active tab
- Tab-specific search bars:
  - **Hotels:** destination text input + check-in date + check-out date
  - **Flights:** origin input + swap button + destination input + departure date + return date
  - **Vehicles:** model/brand input + pick-up date + drop-off date
- One image per tab (hotel.jpg / flight.jpg / vehiculo.jpg) positioned absolutely inside the section
  - All 3 images preloaded on mount, toggled with `hidden` for instant switching
- Fixed-width tab buttons (`w-16`) so all labels align equally regardless of text length

### Pages
| Route | Description |
|-------|-------------|
| `/` | Home with HeroSearch |
| `/hotels` | Hotel listing (10 mock hotels) |
| `/hotels/:id` | Hotel detail + Book button |
| `/hotels/:id/book` | Booking form |
| `/flights` | Flight listing (10 mock flights) |
| `/flights/:id` | Flight detail + Book button |
| `/flights/:id/book` | Booking form |
| `/vehicles` | Vehicle listing (4 mock vehicles) |
| `/vehicles/:id` | Vehicle detail + Book button |
| `/vehicles/:id/book` | Booking form |

### Mock data
- **Hotels:** 10 entries with name, location, price per night, stars, description
- **Flights:** 10 entries with origin, destination, airline, price, duration
- **Vehicles:** 4 entries with brand, model, type, location, price per day, description

---

## Routing

Uses React Router v6 with `BrowserRouter` in `main.tsx` and `Routes`/`Route` in `App.tsx`.

---

## Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin. No config file needed — imported directly in `index.css` with `@import "tailwindcss"`.

---

## Getting started

```bash
cd frontend
npm install
npm run dev
```

---

## Roadmap

### Phase 1 — Frontend (in progress)
- [x] Project setup (Vite + React + TypeScript + Tailwind CSS v4)
- [x] Routing (React Router v6)
- [x] Navbar with dropdown
- [x] HeroSearch with tabs (Hotels / Flights / Vehicles)
- [x] Hotel, Flight, Vehicle listing pages
- [x] Detail pages
- [x] Booking form
- [x] Mock data
- [ ] Login / Register pages
- [ ] 404 page
- [ ] Real images on listing cards

### Phase 2 — Backend (Django)
- [ ] Django project setup
- [ ] Models: Hotel, Flight, Vehicle, Booking, User
- [ ] REST API with Django REST Framework
- [ ] User authentication
- [ ] Connect React to the API

### Phase 3 — Integration
- [ ] Replace mock data with real API calls
- [ ] CORS configuration
- [ ] Deploy

---

## Images

Place images in `frontend/src/assets/`. Recommended format: `.webp` or `.jpg`.
- Recommended size for hero images: **1200x800px** minimum
- Recommended size for card images: **800x600px** minimum
- Free sources: [unsplash.com](https://unsplash.com), [pexels.com](https://pexels.com)
