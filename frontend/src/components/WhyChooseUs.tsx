// WhyChooseUs — sección de propuesta de valor en la home
// Muestra 4 puntos clave que diferencian a Travio de la competencia
// Diseño en grid de 4 columnas con icono, título y descripción por punto
// Las tarjetas aparecen escalonadas al hacer scroll gracias a IntersectionObserver

import { useEffect, useRef, useState } from 'react'

// Cada ítem tiene: icono SVG, título y descripción corta
const features = [
  {
    id: 1,
    title: 'Mejor precio garantizado',
    description: 'Encontramos las tarifas más bajas del mercado. Si encuentras algo más barato, te lo igualamos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v2m0 8v2M9 9.5A2.5 2.5 0 0 1 12 7a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 3-2.5"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Atención 24h',
    description: 'Nuestro equipo está disponible cualquier día del año para ayudarte antes, durante y después de tu viaje.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.06 6.06l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Sin cargos ocultos',
    description: 'El precio que ves es el que pagas. Transparencia total en tasas, impuestos y suplementos desde el primer clic.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Reserva 100% segura',
    description: 'Pagos cifrados con SSL y protección del comprador incluida. Tus datos y tu dinero siempre están protegidos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  // visible[i] indica si la tarjeta i ya ha entrado en el viewport
  const [visible, setVisible] = useState<boolean[]>(features.map(() => false))

  useEffect(() => {
    // Observa la sección — cuando entra en el viewport activa las tarjetas escalonadas
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        // Activa cada tarjeta con 200ms de retraso entre ellas + 150ms de espera inicial
        features.forEach((_, i) => {
          setTimeout(() => {
            setVisible((prev) => {
              const next = [...prev]
              next[i] = true
              return next
            })
          }, 150 + i * 200)
        })
        observer.disconnect() // Solo anima una vez
      },
      { threshold: 0.2 } // Se activa cuando el 20% de la sección es visible
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-gray-50 py-14 px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">

        {/* Cabecera centrada */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">¿Por qué elegir Travio?</h2>
          <p className="text-gray-500 mt-2 text-sm">Todo lo que necesitas para viajar sin preocupaciones.</p>
        </div>

        {/* Grid de 4 columnas en desktop, 2 en tablet, 1 en móvil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-2 px-1">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-500 cursor-pointer ${
                visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Icono con fondo indigo suave */}
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-gray-900 text-base">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
