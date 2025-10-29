import Link from 'next/link';

/**
 * Página Principal - Introducción a la Conferencia
 * 
 * Esta es la landing page que explica los conceptos principales
 * y enlaza a los diferentes ejemplos de renderizado.
 */
export default function Home() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-7xl">🚀</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none">
            <span className="gradient-text block">React Server</span>
            <span className="text-gray-900 block">Components</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
            La nueva era del renderizado en React
          </p>
          <p className="text-lg text-gray-500 font-medium">
            MedellinJS Conference 2025
          </p>
  
        </div>


        {/* Conceptos Principales */}
        <div className="card-elegant rounded-3xl p-12 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Lo Básico
          </h2>
          <p className="text-gray-500 mb-10">(sin rollos técnicos)</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* CSR */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-100">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Client-Side Rendering
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Todo pasa en el <strong>navegador</strong> del usuario. 
                Descargas el JS, ejecutas, llamas al API... esperas... ⏳
                Google no ve nada. Pero hey, super interactivo!
              </p>
            </div>

            {/* SSR */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Server-Side Rendering
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Tu servidor hace la pega pesada en <strong>cada request</strong>.
                Google feliz 😊. Pero igual mandas todo el React al cliente.
                Es como... casi ahí, pero no del todo.
              </p>
            </div>

            {/* RSC */}
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-100">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-purple-700 mb-3">
                React Server Components
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Magia pura ✨. Se renderiza <strong>solo en el servidor</strong>.
                Cero JavaScript enviado. Puedes poner tus API keys sin miedo.
                Es como el backend y frontend tuvieron un bebé hermoso.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-200 p-6 rounded-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full opacity-10 -mr-16 -mt-16"></div>
            <p className="text-sm text-gray-800 leading-relaxed relative z-10">
              <strong className="text-amber-900 text-base">💡 Plot twist:</strong><br/>
              RSC ≠ SSR (sí, son diferentes). 
              Con SSR mandas HTML + todo el React. Con RSC solo mandas el resultado.
              Es la diferencia entre enviar la receta vs enviar el plato hecho 🍝
            </p>
          </div>
        </div>

        {/* Ejemplos Interactivos */}
        <div className="card-elegant rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            🎯 Ejemplos Interactivos
          </h2>
          <p className="text-gray-500 mb-12">Explora cada método de renderizado en acción</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CSR Example */}
            <Link href="/csr" 
              className="group relative overflow-hidden block p-8 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-white relative z-10">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-3">
                  Client-Side Rendering
                </h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Datos cargados con useEffect y fetch en el navegador
                </p>
                <div className="text-blue-200 text-xs font-mono bg-white/10 inline-block px-3 py-1 rounded-full">
                  useEffect + fetch
                </div>
              </div>
            </Link>

            {/* SSR Example */}
            <Link href="/ssr" 
              className="group relative overflow-hidden block p-8 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-white relative z-10">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-3">
                  Server-Side Rendering
                </h3>
                <p className="text-green-100 text-sm mb-4 leading-relaxed">
                  HTML generado en el servidor por cada request
                </p>
                <div className="text-green-200 text-xs font-mono bg-white/10 inline-block px-3 py-1 rounded-full">
                  fetch en servidor
                </div>
              </div>
            </Link>

            {/* RSC Example */}
            <Link href="/rsc" 
              className="group relative overflow-hidden block p-8 bg-gradient-to-br from-purple-500 via-purple-600 to-violet-600 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-white relative z-10">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3">
                  Server Components
                </h3>
                <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                  Componentes async que viven solo en el servidor
                </p>
                <div className="text-purple-200 text-xs font-mono bg-white/10 inline-block px-3 py-1 rounded-full">
                  async/await + Suspense
                </div>
              </div>
            </Link>

            {/* Server Actions */}
            <Link href="/actions" 
              className="group relative overflow-hidden block p-8 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-white relative z-10">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold mb-3">
                  Server Actions
                </h3>
                <p className="text-orange-100 text-sm mb-4 leading-relaxed">
                  Funciones del servidor llamadas desde el cliente
                </p>
                <div className="text-orange-200 text-xs font-mono bg-white/10 inline-block px-3 py-1 rounded-full">
                  "use server"
                </div>
              </div>
            </Link>

            {/* Testing */}
            <Link href="/testing" 
              className="group relative overflow-hidden block p-8 bg-gradient-to-br from-pink-500 via-pink-600 to-rose-600 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-white relative z-10">
                <div className="text-5xl mb-4">🧪</div>
                <h3 className="text-2xl font-bold mb-3">
                  Testing
                </h3>
                <p className="text-pink-100 text-sm mb-4 leading-relaxed">
                  Unit tests y component tests con Jest + RTL
                </p>
                <div className="text-pink-200 text-xs font-mono bg-white/10 inline-block px-3 py-1 rounded-full">
                  Jest + RTL
                </div>
              </div>
            </Link>

            {/* Comparison */}
            <Link href="/comparison" 
              className="group relative overflow-hidden block p-8 bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-600 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-white relative z-10">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-3">
                  Comparación
                </h3>
                <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                  Tabla comparativa de todos los métodos
                </p>
                <div className="text-indigo-200 text-xs font-mono bg-white/10 inline-block px-3 py-1 rounded-full">
                  CSR vs SSR vs RSC
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <div className="inline-block card-elegant p-8 rounded-2xl">
            <p className="text-gray-700 mb-4 text-lg font-medium">
              💻 Hecho por Santiago Garcia para MedellinJS 2025
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>
            <p className="text-sm text-gray-500">
              <strong className="text-gray-700">Pro tip:</strong> Presiona{' '}
              <kbd className="px-3 py-1.5 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg text-xs font-mono border border-gray-300 shadow-sm">
                Ctrl+U
              </kbd>{' '}
              en cada página para ver la magia en el HTML
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
