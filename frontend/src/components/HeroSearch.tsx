import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const images = [
  'https://picsum.photos/seed/travel1/400/300',
  'https://picsum.photos/seed/travel2/400/300',
  'https://picsum.photos/seed/travel3/400/300',
  'https://picsum.photos/seed/travel4/400/300',
]

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights'>('hotels')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (activeTab === 'hotels') navigate('/hotels')
    else navigate('/flights')
  }

  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="max-w-6xl mx-auto flex items-center gap-12">

        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              {activeTab === 'hotels'
                ? <>Encuentra tu próximo <span className="text-indigo-600">hotel.</span></>
                : <>Encuentra tu próximo <span className="text-indigo-600">vuelo.</span></>
              }
            </h1>
            <p className="mt-4 text-gray-500 text-lg">
              {activeTab === 'hotels'
                ? 'Compara hoteles al mejor precio.'
                : 'Compara vuelos al mejor precio.'
              }
            </p>

          <div className="flex gap-3 mt-8">
            <button
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium transition-colors cursor-pointer ${
                activeTab === 'hotels'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-400'
              }`}
              onClick={() => setActiveTab('hotels')}
            >
              🏨 Hoteles
            </button>
            <button
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium transition-colors cursor-pointer ${
                activeTab === 'flights'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-400'
              }`}
              onClick={() => setActiveTab('flights')}
            >
              ✈️ Vuelos
            </button>
          </div>

          <div className="flex mt-6 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder={activeTab === 'hotels' ? 'Destino, ciudad o hotel...' : 'Origen o destino...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-5 py-4 text-gray-700 outline-none"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="px-6 py-4 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
            >
              Buscar
            </button>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-3 flex-shrink-0">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Destino ${i + 1}`}
              className="w-44 h-32 object-cover rounded-2xl shadow-md"
            />
          ))}
        </div>

      </div>
    </section>
  )
}
