import Link from 'next/link';

/**
 * Página Principal - Introducción a la Conferencia
 * 
 * Esta es la landing page que explica los conceptos principales
 * y enlaza a los diferentes ejemplos de renderizado.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🚀 React Server Components
          </h1>
          <p className="text-2xl text-gray-700 mb-2">
            La nueva era del renderizado en React
          </p>
          <p className="text-lg text-gray-600">
            MedellinJS Conference 2025
          </p>
          <p className="text-sm text-gray-500 mt-2">
            (Sí, esto se hizo en una noche... el café fue esencial ☕)
          </p>
        </div>

        {/* Conceptos Principales */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Lo Básico de React Server Components
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* CSR */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Client-Side Rendering (CSR)
              </h3>
              <p className="text-gray-700 text-sm">
                Todo pasa en el <strong>navegador</strong> del usuario. 
                Descargas el JS, ejecutas, llamas al API... esperas... ⏳
                Google no ve nada. Pero hey, super interactivo!
              </p>
            </div>

            {/* SSR */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-bold text-green-600 mb-2">
                Server-Side Rendering (SSR)
              </h3>
              <p className="text-gray-700 text-sm">
                Tu servidor hace la pega pesada en <strong>cada request</strong>.
                Google feliz 😊. Pero igual mandas todo el React al cliente.
                Es como... casi ahí, pero no del todo.
              </p>
            </div>

            {/* RSC */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                React Server Components (RSC)
              </h3>
              <p className="text-gray-700 text-sm">
                Magia pura ✨. Se renderiza <strong>solo en el servidor</strong>.
                Cero JavaScript enviado. Puedes poner tus API keys sin miedo.
                Es como el backend y frontend tuvieron un bebé hermoso.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-gray-800">
              <strong>💡 Plot twist: React Server Components (RSC) no son lo mismo que Server-Side Rendering (SSR).
                Aunque suenen parecidos, funcionan de forma muy distinta.
                Con SSR, el servidor envía HTML junto con todo el código de React al cliente.
                En cambio, con RSC, el servidor solo envía el resultado final ya procesado, no el código que lo genera. 
              </strong>
            </p>
          </div>
        </div>

        {/* Ejemplos Interactivos */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ejemplos de Client-Side Rendering (CSR), Server-Side Rendering (SSR) y React Server Components (RSC)
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CSR Example */}
            <Link href="/csr" 
              className="group block p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-white">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-xl font-bold mb-2">
                  Client-Side Rendering
                </h3>
                <p className="text-blue-100 text-sm mb-3">
                  Datos cargados con useEffect y fetch en el navegador
                </p>
                <div className="text-blue-200 text-xs font-mono">
                  useEffect + fetch
                </div>
              </div>
            </Link>

            {/* SSR Example */}
            <Link href="/ssr" 
              className="group block p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-white">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold mb-2">
                  Server-Side Rendering
                </h3>
                <p className="text-green-100 text-sm mb-3">
                  HTML generado en el servidor por cada request
                </p>
                <div className="text-green-200 text-xs font-mono">
                  fetch en servidor
                </div>
              </div>
            </Link>

            {/* RSC Example */}
            <Link href="/rsc" 
              className="group block p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-white">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-xl font-bold mb-2">
                  Server Components
                </h3>
                <p className="text-purple-100 text-sm mb-3">
                  Componentes async que viven solo en el servidor
                </p>
                <div className="text-purple-200 text-xs font-mono">
                  async/await + Suspense
                </div>
              </div>
            </Link>

            {/* Server Actions */}
            <Link href="/actions" 
              className="group block p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-white">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="text-xl font-bold mb-2">
                  Server Actions
                </h3>
                <p className="text-orange-100 text-sm mb-3">
                  Funciones del servidor llamadas desde el cliente
                </p>
                <div className="text-orange-200 text-xs font-mono">
                  "use server"
                </div>
              </div>
            </Link>

            {/* Testing */}
            <Link href="/testing" 
              className="group block p-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-white">
                <div className="text-4xl mb-3">🧪</div>
                <h3 className="text-xl font-bold mb-2">
                  Testing
                </h3>
                <p className="text-pink-100 text-sm mb-3">
                  Unit tests y component tests con Jest + RTL
                </p>
                <div className="text-pink-200 text-xs font-mono">
                  Jest + React Testing Library
                </div>
              </div>
            </Link>

            {/* Comparison */}
            <Link href="/comparison" 
              className="group block p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-white">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-xl font-bold mb-2">
                  Comparación
                </h3>
                <p className="text-indigo-100 text-sm mb-3">
                  Tabla comparativa de todos los métodos
                </p>
                <div className="text-indigo-200 text-xs font-mono">
                  CSR vs SSR vs RSC
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            Hecho por Santiago Garcia para MedellinJS 2025
          </p>
          <p className="text-sm">
            Pro tip: Presiona <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Ctrl+U</kbd> en cada página 
            para ver el código fuente y entender mejor el funcionamiento de cada ejemplo.
          </p>
        </div>
      </div>
    </main>
  );
}
