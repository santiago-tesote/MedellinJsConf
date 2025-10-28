import type { Restaurant } from '@/lib/data';

/**
 * Componente RestaurantCard
 * 
 * Este es un componente reutilizable que muestra la información de un restaurante.
 * Es un Server Component por defecto (no tiene 'use client').
 */
interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div 
      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
      data-testid="restaurant-card"
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
  );
}

