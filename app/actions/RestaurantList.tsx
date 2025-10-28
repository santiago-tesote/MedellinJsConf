import { getInMemoryRestaurants } from '@/lib/data';

/**
 * Server Component - Lista de Restaurantes
 * 
 * Este componente NO tiene 'use client', por lo que es un Server Component.
 * Se renderiza en el servidor y muestra los datos actualizados.
 */
export default function RestaurantList() {
  // Esta función se ejecuta en el servidor
  const restaurants = getInMemoryRestaurants();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Restaurantes Actuales ({restaurants.length})
      </h2>

      <div className="mb-4 p-3 bg-green-50 rounded text-sm text-gray-700">
        ✅ Esta lista es un <strong>Server Component</strong>. Cuando agregas algo, 
        se revalida automáticamente y ves los cambios. Sin APIs, sin webhooks, 
        sin complicaciones. Así de simple 🎯
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
                <div className="text-2xl font-bold text-orange-600">
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
  );
}

