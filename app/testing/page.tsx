import Link from 'next/link';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurantsData } from '@/lib/data';

/**
 * Página de Testing
 * 
 * Esta página explica el testing en Next.js y muestra ejemplos
 */
export default function TestingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-pink-600 hover:text-pink-800 mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🧪 Testing en Next.js
          </h1>
        </div>

        {/* Explicación */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Cómo testear componentes en Next.js 14+?
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Con la introducción de Server Components y Server Actions, 
              el testing en Next.js ha evolucionado. Aquí te mostramos las mejores prácticas.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-3">1️⃣</span>
                <div>
                  <strong>Unit Tests</strong>
                  <p className="text-sm text-gray-600">
                    Testa funciones puras y lógica de negocio de forma aislada.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">2️⃣</span>
                <div>
                  <strong>Component Tests</strong>
                  <p className="text-sm text-gray-600">
                    Testa componentes individuales con React Testing Library.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">3️⃣</span>
                <div>
                  <strong>Integration Tests</strong>
                  <p className="text-sm text-gray-600">
                    Testa flujos completos, incluyendo Server Actions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-3">4️⃣</span>
                <div>
                  <strong>E2E Tests (opcional)</strong>
                  <p className="text-sm text-gray-600">
                    Usa Playwright o Cypress para tests end-to-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuración */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🛠️ Configuración de Jest
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-4 text-white text-sm overflow-x-auto mb-4">
            <pre><code>{`# Instalar dependencias
npm install -D jest jest-environment-jsdom 
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event

# Ejecutar tests
npm test

# Con coverage
npm test -- --coverage`}</code></pre>
          </div>

          <p className="text-sm text-gray-700">
            Esta aplicación ya tiene Jest configurado. Revisa los archivos:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
            <li><code className="bg-gray-100 px-2 py-1 rounded">jest.config.js</code></li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">jest.setup.js</code></li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">__tests__/</code> - carpeta con tests</li>
          </ul>
        </div>

        {/* Ejemplos de Tests */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📝 Ejemplos de Tests
          </h2>

          <div className="space-y-6">
            {/* Unit Test */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Unit Test - Funciones de datos
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 text-white text-xs overflow-x-auto">
                <pre><code>{`import { getRestaurants, addRestaurant } from '@/lib/data';

describe('Data Functions', () => {
  it('debe retornar todos los restaurantes', async () => {
    const restaurants = await getRestaurants(0);
    expect(restaurants.length).toBeGreaterThan(0);
  });

  it('debe agregar un restaurante correctamente', () => {
    const newRestaurant = {
      name: 'Test Restaurant',
      neighborhood: 'Test',
      cuisine: 'Test',
      rating: 4.0,
      priceRange: '$$'
    };
    
    const result = addRestaurant(newRestaurant);
    expect(result).toHaveProperty('id');
    expect(result.name).toBe('Test Restaurant');
  });
});`}</code></pre>
              </div>
            </div>

            {/* Component Test */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Component Test - RestaurantCard
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 text-white text-xs overflow-x-auto">
                <pre><code>{`import { render, screen } from '@testing-library/react';
import RestaurantCard from '@/components/RestaurantCard';

describe('RestaurantCard', () => {
  const mockRestaurant = {
    id: 1,
    name: 'Carmen',
    neighborhood: 'El Poblado',
    cuisine: 'Colombiana',
    rating: 4.9,
    priceRange: '$$$$'
  };

  it('debe renderizar el nombre del restaurante', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText('Carmen')).toBeInTheDocument();
  });

  it('debe renderizar el rating', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText('4.9')).toBeInTheDocument();
  });
});`}</code></pre>
              </div>
            </div>
          </div>
        </div>

        {/* Ejecutar Tests */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ▶️ Ejecutar los Tests
          </h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Para ejecutar los tests de esta aplicación:
              </p>
              <div className="bg-gray-900 rounded p-3 text-white text-sm font-mono">
                npm test
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Para ver el coverage:
              </p>
              <div className="bg-gray-900 rounded p-3 text-white text-sm font-mono">
                npm test -- --coverage
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <p className="text-sm font-semibold text-gray-800 mb-2">
                Para ejecutar tests en modo watch:
              </p>
              <div className="bg-gray-900 rounded p-3 text-white text-sm font-mono">
                npm test -- --watch
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo de Componente Testeado */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎨 Componente Testeado: RestaurantCard
          </h2>
          
          <p className="text-sm text-gray-700 mb-4">
            Este componente tiene tests en <code className="bg-gray-100 px-2 py-1 rounded text-xs">__tests__/components/RestaurantCard.test.tsx</code>
          </p>

          <div className="space-y-4">
            {restaurantsData.slice(0, 2).map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ✅ Mejores Prácticas
          </h2>
          
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>Testa la funcionalidad, no la implementación</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>Usa data-testid para elementos difíciles de seleccionar</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>Mock solo lo necesario (APIs externas, DB)</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>Escribe tests descriptivos con nombres claros</span>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✓</span>
              <span>Mantén los tests simples y enfocados</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <span>No testes detalles de implementación de React</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 font-bold mr-2">✗</span>
              <span>No testes estilos CSS (usa visual regression tests si necesitas)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

