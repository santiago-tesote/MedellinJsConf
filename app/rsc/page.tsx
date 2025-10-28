import Link from 'next/link';
import { Suspense } from 'react';
import { getRestaurants } from '@/lib/data';

/**
 * Componente de Loading para Suspense
 */
function RestaurantsLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mb-4"></div>
      <p className="text-gray-600">
        Cargando datos en el servidor...
      </p>
      <p className="text-sm text-gray-500 mt-2">
        (Este componente se renderiza mientras el async component carga)
      </p>
    </div>
  );
}

/**
 * React Server Component que obtiene datos
 * 
 * IMPORTANTE: Este es un componente ASYNC
 * Solo puede existir en el servidor
 */
async function RestaurantsList() {
  // Esta función se ejecuta SOLO en el servidor
  // Simulamos 3 segundos de delay para demostrar Suspense
  const restaurants = await getRestaurants(3000);

  return (
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
              <div className="text-2xl font-bold text-purple-600">
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
  );
}

/**
 * Página RSC - React Server Components
 * 
 * IMPORTANTE: Este es un TRUE Server Component
 * No tiene 'use client' y usa componentes async
 * 
 * Características:
 * - El componente NUNCA se envía al cliente
 * - No hay JavaScript del componente en el bundle
 * - Perfecto para datos, secrets, y lógica del servidor
 * - Usa Suspense para streaming rendering
 */
export default function RSCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-800 mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎨 React Server Components (RSC)
          </h1>
        </div>

        {/* Explicación */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            RSC: La nueva onda (y es genial)
          </h2>
          <p className="text-sm text-gray-600 mb-4 italic">
            (Esto es lo que React quiere que uses en 2025... y tiene sentido)
          </p>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <div>
                <strong>El componente se renderiza en el servidor</strong>
                <p className="text-sm text-gray-600">
                  React ejecuta el componente async en el servidor.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <div>
                <strong>Se obtienen los datos directamente</strong>
                <p className="text-sm text-gray-600">
                  Puedes hacer await de promesas, consultar DB, etc.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <div>
                <strong>Solo se envía el RESULTADO al cliente</strong>
                <p className="text-sm text-gray-600">
                  El código del componente NUNCA llega al navegador.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <div>
                <strong>El navegador recibe HTML serializado</strong>
                <p className="text-sm text-gray-600">
                  Sin código JS del componente = bundle más pequeño.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400 rounded">
            <p className="text-sm text-gray-800">
              <strong>🔥 Aquí está la magia:</strong> Pon tu API key, conecta a la DB, 
              lee archivos... lo que sea. Nada de eso llega al navegador. Cero. Nada. 
              Solo mandas el resultado. Es seguridad + performance 💪
            </p>
          </div>

          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="text-sm text-gray-800">
              <strong>💡 Bonus: Suspense</strong> te deja mostrar la página por partes. 
              Algo carga rápido? Lo mandas ya. Algo tarda? Se muestra después. 
              Es como Netflix: streaming pero de HTML 📺
            </p>
          </div>
        </div>

        {/* Lista de Restaurantes con Suspense */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Restaurantes de Medellín
          </h2>

          <div className="mb-4 p-3 bg-purple-50 rounded text-sm text-gray-700">
            💡 Este componente es <strong>async</strong> (sí, puedes hacer await directo). 
            El spinner que ves? Eso es Suspense trabajando. Todo pasa server-side ⚡
          </div>

          <Suspense fallback={<RestaurantsLoading />}>
            <RestaurantsList />
          </Suspense>
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-lg font-bold mb-3">📝 Código de ejemplo:</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// Este componente es ASYNC - solo puede existir en el servidor
async function RestaurantsList() {
  // ✅ Esto SOLO se ejecuta en el servidor
  // El cliente NUNCA ve este código
  const restaurants = await getRestaurants();
  
  // Podrías hacer:
  // - const data = await db.query('SELECT * FROM restaurants');
  // - const apiKey = process.env.SECRET_KEY; ✅ Seguro!
  // - const file = await fs.readFile('data.json');

  return <div>{/* render */}</div>;
}

function RSCPage() {
  return (
    <Suspense fallback={<Loading />}>
      <RestaurantsList />
    </Suspense>
  );
}`}</code>
          </pre>
        </div>

        {/* Comparison */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            📊 RSC vs SSR vs CSR
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Característica</th>
                  <th className="p-2">CSR</th>
                  <th className="p-2">SSR</th>
                  <th className="p-2 bg-purple-50">RSC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">SEO</td>
                  <td className="p-2">❌ Malo</td>
                  <td className="p-2">✅ Bueno</td>
                  <td className="p-2 bg-purple-50">✅ Excelente</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">JavaScript al cliente</td>
                  <td className="p-2">📦 Grande</td>
                  <td className="p-2">📦 Grande</td>
                  <td className="p-2 bg-purple-50">📦 Pequeño</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Acceso a servidor</td>
                  <td className="p-2">❌ No</td>
                  <td className="p-2">⚠️ Limitado</td>
                  <td className="p-2 bg-purple-50">✅ Total</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Secrets seguros</td>
                  <td className="p-2">❌ No</td>
                  <td className="p-2">⚠️ Cuidado</td>
                  <td className="p-2 bg-purple-50">✅ Sí</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Streaming</td>
                  <td className="p-2">❌ No</td>
                  <td className="p-2">⚠️ Limitado</td>
                  <td className="p-2 bg-purple-50">✅ Sí (Suspense)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            ⚠️ Limitaciones de RSC
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>No puedes usar hooks (useState, useEffect, etc.)</li>
            <li>No puedes usar event handlers (onClick, onChange, etc.)</li>
            <li>No puedes usar browser APIs (window, document, etc.)</li>
            <li>Para interactividad, necesitas Client Components ('use client')</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

