import Link from 'next/link';
import RestaurantForm from './RestaurantForm';
import RestaurantList from './RestaurantList';

/**
 * Página Server Actions
 * 
 * Esta página demuestra el uso de Server Actions para mutations
 * (crear, actualizar, eliminar datos) sin necesidad de API routes.
 */
export default function ActionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-800 mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔥 Server Actions
          </h1>
        </div>

        {/* Explicación */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Server Actions: Adiós API routes 👋
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Básicamente es esto: escribes una función, le pones <code className="bg-gray-100 px-2 py-1 rounded">'use server'</code>, 
              y la llamas desde tu componente como si fuera una función normal. 
              Pero se ejecuta en el servidor. Mind = blown 🤯
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">✅</span>
                <div>
                  <strong>No necesitas API routes</strong>
                  <p className="text-sm text-gray-600">
                    Las Server Actions reemplazan los tradicionales POST endpoints.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🔒</span>
                <div>
                  <strong>Seguridad incorporada</strong>
                  <p className="text-sm text-gray-600">
                    El código nunca se expone al cliente. Puedes usar secrets y lógica sensible.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🎯</span>
                <div>
                  <strong>Progresive Enhancement</strong>
                  <p className="text-sm text-gray-600">
                    Funcionan incluso sin JavaScript (con formularios HTML nativos).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">🔄</span>
                <div>
                  <strong>Revalidación automática</strong>
                  <p className="text-sm text-gray-600">
                    Puedes invalidar cache y actualizar la UI automáticamente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-orange-50 border-l-4 border-orange-400 rounded">
            <p className="text-sm text-gray-800">
              <strong>💡 Regla simple:</strong> Server Actions = para cambiar cosas (crear, editar, borrar). 
              Server Components = para mostrar cosas. Easy peasy 🍋
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Crear Nuevo Restaurante
          </h2>
          
          <div className="mb-4 p-3 bg-blue-50 rounded text-sm text-gray-700">
            💡 Dale, prueba el formulario. Cuando lo envíes, todo pasa en el servidor 
            sin que tengas que crear ni un solo endpoint de API. Magia negra ✨
          </div>

          <RestaurantForm />
        </div>

        {/* Lista de Restaurantes */}
        <RestaurantList />

        {/* Code Example */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6 text-white">
          <h3 className="text-lg font-bold mb-3">📝 Código de ejemplo:</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// actions.ts
'use server';

export async function createRestaurant(formData: FormData) {
  // ✅ Este código SOLO se ejecuta en el servidor
  const name = formData.get('name');
  
  // Puedes usar secrets de forma segura:
  const apiKey = process.env.SECRET_KEY;
  
  // Conectar a DB, APIs externas, etc:
  await db.insert({ name });
  
  // Revalidar cache:
  revalidatePath('/actions');
  
  return { success: true };
}

// RestaurantForm.tsx (Client Component)
'use client';

function RestaurantForm() {
  return (
    <form action={createRestaurant}>
      <input name="name" />
      <button type="submit">Crear</button>
    </form>
  );
}`}</code>
          </pre>
        </div>

        {/* Comparison */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            📊 Server Actions vs API Routes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Característica</th>
                  <th className="p-2">API Routes</th>
                  <th className="p-2 bg-orange-50">Server Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Código necesario</td>
                  <td className="p-2">📝 Más (route + handler)</td>
                  <td className="p-2 bg-orange-50">📝 Menos (solo función)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Type safety</td>
                  <td className="p-2">⚠️ Manual</td>
                  <td className="p-2 bg-orange-50">✅ Automático</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Progressive Enhancement</td>
                  <td className="p-2">❌ No</td>
                  <td className="p-2 bg-orange-50">✅ Sí</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Revalidación</td>
                  <td className="p-2">⚠️ Manual</td>
                  <td className="p-2 bg-orange-50">✅ Integrada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

