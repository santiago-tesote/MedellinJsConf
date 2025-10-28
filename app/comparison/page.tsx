import Link from 'next/link';

/**
 * Página de Comparación
 * 
 * Muestra una tabla comparativa detallada entre CSR, SSR y RSC
 */
export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📊 Comparación Completa
          </h1>
          <p className="text-lg text-gray-700">
            CSR vs SSR vs RSC - ¿Cuándo usar cada uno?
          </p>
        </div>

        {/* Tabla Comparativa */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Característica
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50">
                    Client-Side Rendering
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-green-50">
                    Server-Side Rendering
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-purple-50">
                    React Server Components
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Renderizado */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    🎨 Dónde se renderiza
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    Navegador (Cliente)
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    Servidor (por request)
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    Servidor (solo una vez)
                  </td>
                </tr>

                {/* SEO */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    🔍 SEO
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    ❌ Malo (sin HTML inicial)
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    ✅ Bueno (HTML completo)
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    ✅ Excelente (HTML completo)
                  </td>
                </tr>

                {/* JavaScript */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    📦 Bundle JavaScript
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    📦 Grande (todo el código)
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    📦 Grande (código + hidratación)
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    📦 Pequeño (sin código del componente)
                  </td>
                </tr>

                {/* Time to First Byte */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ⚡ Time to First Byte
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    🚀 Rápido
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    🐢 Lento (procesa en servidor)
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    🚀 Rápido (puede cachear)
                  </td>
                </tr>

                {/* Time to Interactive */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    🎯 Time to Interactive
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    🐢 Lento (descarga + ejecución)
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    ⚡ Medio (hidratación)
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    🚀 Rápido (menos JS)
                  </td>
                </tr>

                {/* Acceso al Servidor */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    🗄️ Acceso a DB/APIs
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    ❌ No (solo vía API routes)
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    ⚠️ Limitado (en getServerSideProps)
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    ✅ Total (directamente en componente)
                  </td>
                </tr>

                {/* Secrets */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    🔐 Secrets Seguros
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    ❌ No (código en cliente)
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    ⚠️ Solo en fetch inicial
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    ✅ Sí (código en servidor)
                  </td>
                </tr>

                {/* Interactividad */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    🎮 Interactividad
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    ✅ Total (hooks, events)
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    ✅ Total (hooks, events)
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    ❌ No (necesita Client Components)
                  </td>
                </tr>

                {/* Streaming */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    🌊 Streaming Rendering
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    ❌ No
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    ⚠️ Limitado
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    ✅ Sí (con Suspense)
                  </td>
                </tr>

                {/* Carga del Servidor */}
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    🖥️ Carga del Servidor
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    ✅ Baja
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    ⚠️ Alta (cada request)
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    ✅ Media (cacheable)
                  </td>
                </tr>

                {/* Mejor para */}
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-4 text-gray-900">
                    💡 Mejor para...
                  </td>
                  <td className="px-6 py-4 bg-blue-50">
                    Apps interactivas, dashboards privados
                  </td>
                  <td className="px-6 py-4 bg-green-50">
                    Páginas dinámicas con SEO
                  </td>
                  <td className="px-6 py-4 bg-purple-50">
                    Contenido estático/dinámico con SEO
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cuando usar cada uno */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* CSR */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Usa CSR cuando...
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>No necesitas SEO (apps privadas, dashboards)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Tienes alta interactividad (juegos, editores)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Los datos cambian frecuentemente</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Quieres reducir carga del servidor</span>
              </li>
            </ul>
          </div>

          {/* SSR */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-green-600 mb-3">
              Usa SSR cuando...
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Necesitas SEO en páginas dinámicas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Los datos cambian por usuario</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Necesitas datos en tiempo real</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Tienes lógica de autenticación</span>
              </li>
            </ul>
          </div>

          {/* RSC */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              Usa RSC cuando...
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Necesitas SEO con mínimo JavaScript</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Accedes a bases de datos directamente</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Usas secrets o lógica sensible</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Quieres performance óptima</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Recomendación Final */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Recomendación para 2025
          </h2>
          <p className="text-lg mb-4">
            <strong>Usa RSC por defecto</strong> y Client Components solo cuando necesites interactividad.
          </p>
          <div className="bg-white/10 rounded-lg p-4 text-sm">
            <p className="mb-2">
              <strong>Patrón recomendado:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>RSC para layouts, páginas estáticas, fetch de datos</li>
              <li>Client Components para formularios, modales, interacciones</li>
              <li>Server Actions para mutations (crear, actualizar, eliminar)</li>
              <li>CSR solo para apps privadas sin SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

