'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Restaurant } from '@/lib/data';

/**
 * Página CSR - Client-Side Rendering
 * 
 * IMPORTANTE: Este componente usa 'use client' 
 * 
 * Características:
 * - Datos cargados con useEffect + fetch en el navegador
 * - Muestra spinner mientras carga
 * - El HTML inicial NO contiene los datos (malo para SEO)
 * - Todo el código JavaScript se envía al cliente
 */
export default function CSRPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Esta función se ejecuta en el NAVEGADOR después del primer render
    async function fetchRestaurants() {
      try {
        setLoading(true);
        const response = await fetch('/api/restaurants');
        
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        
        const data = await response.json();
        setRestaurants(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🌐 Client-Side Rendering (CSR)
          </h1>
        </div>

        {/* Explicación */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona esto del CSR?
          </h2>
          <p className="text-sm text-gray-600 mb-4 italic">
            (Spoiler: no es la forma más eficiente, pero es la que todos hemos usado)
          </p>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <div>
                <strong>El navegador descarga HTML vacío</strong>
                <p className="text-sm text-gray-600">
                  El servidor envía un HTML mínimo, sin datos de restaurantes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <div>
                <strong>Se descarga y ejecuta JavaScript</strong>
                <p className="text-sm text-gray-600">
                  React se carga en el navegador y monta los componentes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <div>
                <strong>useEffect hace fetch al API</strong>
                <p className="text-sm text-gray-600">
                  El componente llama a /api/restaurants desde el cliente.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <div>
                <strong>Se actualiza el estado y se renderiza</strong>
                <p className="text-sm text-gray-600">
                  Los datos llegan y React actualiza el DOM.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded">
            <p className="text-sm text-gray-800">
              <strong>⚠️ El drama del SEO:</strong> Dale <kbd className="px-2 py-1 bg-white rounded text-xs">Ctrl+U</kbd> 
              {' '}y mira el código fuente. ¿Ves los restaurantes? Nop, no están 😅 
              Google viene, mira tu HTML vacío y se va confundido. RIP posicionamiento.
            </p>
          </div>
        </div>

        {/* Lista de Restaurantes */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Restaurantes de Medellín
          </h2>

          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
              <p className="text-gray-600">
                Cargando desde el navegador...
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (Sí, este loading de 3 segundos es a propósito... imagina con conexión lenta 🐌)
              </p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              ❌ Error: {error}
            </div>
          )}

          {!loading && !error && restaurants.length > 0 && (
            <div className="space-y-4">
              {restaurants.map((restaurant) => (
                <div 
                  key={restaurant.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {restaurant.name}
                      </h3>
                      <p className="text-gray-600">
                        📍 {restaurant.neighborhood}
                      </p>
                      <p className="text-gray-600">
                        🍽️ {restaurant.cuisine}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        ⭐ {restaurant.rating}
                      </div>
                      <div className="text-gray-600">
                        {restaurant.priceRange}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-lg font-bold mb-3">📝 Código de ejemplo:</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`'use client';

function CSRPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⚠️ Esto se ejecuta en el NAVEGADOR
    fetch('/api/restaurants')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{/* render data */}</div>;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

