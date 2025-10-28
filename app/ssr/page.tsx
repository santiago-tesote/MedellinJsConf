import Link from 'next/link';
import { getRestaurants } from '@/lib/data';

/**
 * Página SSR - Server-Side Rendering
 * 
 * IMPORTANTE: Este NO es un Client Component (no tiene 'use client')
 * pero Next.js lo trata como SSR debido al dynamic rendering.
 * 
 * Características:
 * - Los datos se obtienen en el servidor
 * - El HTML completo se genera por cada request
 * - Los datos SÍ están en el código fuente (bueno para SEO)
 * - Pero TODO el código React se envía al cliente
 * 
 * En Next.js 14+ App Router, podemos usar fetch o funciones async
 * directamente en el componente, pero aquí usamos una función helper.
 */
export default async function SSRPage() {
  // Esta función se ejecuta en el SERVIDOR por cada request
  // Simulamos un delay de 2 segundos para mostrar la diferencia
  const restaurants = await getRestaurants(2000);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-green-600 hover:text-green-800 mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ⚡ Server-Side Rendering (SSR)
          </h1>
        </div>

        {/* Explicación */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            SSR: El servidor trabaja por ti
          </h2>
          <p className="text-sm text-gray-600 mb-4 italic">
            (Esta es la forma "clásica" de hacer las cosas bien... o casi)
          </p>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <div>
                <strong>El servidor recibe el request</strong>
                <p className="text-sm text-gray-600">
                  El usuario solicita la página /ssr
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <div>
                <strong>Se obtienen los datos en el servidor</strong>
                <p className="text-sm text-gray-600">
                  await getRestaurants() se ejecuta en el servidor.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <div>
                <strong>Se genera el HTML completo</strong>
                <p className="text-sm text-gray-600">
                  React renderiza el componente con los datos en el servidor.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <div>
                <strong>El HTML se envía al navegador</strong>
                <p className="text-sm text-gray-600">
                  El usuario ve el contenido inmediatamente (pero con delay de carga).
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded">
            <p className="text-sm text-gray-800">
              <strong>✅ Google te ama:</strong> <kbd className="px-2 py-1 bg-white rounded text-xs">Ctrl+U</kbd> 
              {' '}y boom! Los restaurantes están en el HTML 🎉 
              Google puede leer todo sin ejecutar JavaScript. Eso sí es un win.
            </p>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-gray-800">
              <strong>⚠️ El pequeño detalle:</strong> Sí, el HTML viene listo, pero igual 
              descargaste TODO React para la "hidratación". Tu bundle sigue pesado 📦
            </p>
          </div>
        </div>

        {/* Lista de Restaurantes */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Restaurantes de Medellín
          </h2>

          <div className="mb-4 p-3 bg-blue-50 rounded text-sm text-gray-700">
            💡 <strong>Recarga la página</strong> y verás que tarda 2 segundos cada vez. 
            ¿Por qué? Porque el servidor está procesando tu request desde cero. 
            Eso puede saturar si tienes mucho tráfico 🔥
          </div>

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
                    <div className="text-2xl font-bold text-green-600">
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
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-lg font-bold mb-3">📝 Código de ejemplo:</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// No tiene 'use client' - es un Server Component por defecto
// pero con dynamic rendering (SSR)

async function SSRPage() {
  // ✅ Esto se ejecuta en el SERVIDOR por cada request
  const restaurants = await getRestaurants();

  return (
    <div>
      {restaurants.map(r => (
        <div key={r.id}>{r.name}</div>
      ))}
    </div>
  );
}

export default SSRPage;`}</code>
          </pre>
        </div>

        {/* Comparison */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            📊 SSR vs CSR
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Característica</th>
                  <th className="p-2">CSR</th>
                  <th className="p-2 bg-green-50">SSR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">SEO</td>
                  <td className="p-2">❌ Malo</td>
                  <td className="p-2 bg-green-50">✅ Bueno</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Tiempo al primer contenido</td>
                  <td className="p-2">🐢 Lento</td>
                  <td className="p-2 bg-green-50">🚀 Rápido</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">JavaScript al cliente</td>
                  <td className="p-2">📦 Grande</td>
                  <td className="p-2 bg-green-50">📦 Grande</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Carga del servidor</td>
                  <td className="p-2">✅ Baja</td>
                  <td className="p-2 bg-green-50">⚠️ Alta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

