import { useNavigate } from 'react-router-dom'
import { resources } from '../data/resources'

export default function Resources() {
  const navigate = useNavigate()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-gray-800">Recursos disponibles</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mt-8">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
            <span className="text-xs text-gray-400 uppercase tracking-wide">{resource.type}</span>
            <h2 className="text-lg font-semibold text-gray-800">{resource.name}</h2>
            <p className="text-gray-500 text-sm grow">{resource.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
              onClick={() => navigate(`/resources/${resource.id}`)}
            >
              Ver detalle
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
