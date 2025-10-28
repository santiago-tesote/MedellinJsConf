'use client';

import { useState, useTransition } from 'react';
import { createRestaurant } from './actions';

/**
 * Client Component - Formulario de Restaurante
 * 
 * Este componente usa 'use client' porque necesita:
 * - useState para el estado de mensajes
 * - useTransition para mostrar loading states
 * - Form submission handling
 */
export default function RestaurantForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setMessage(null);
    
    startTransition(async () => {
      // Llamar a la Server Action
      const result = await createRestaurant(formData);
      
      if (result.success) {
        setMessage({ type: 'success', text: result.message });
        // Limpiar el formulario
        (document.getElementById('restaurant-form') as HTMLFormElement)?.reset();
      } else {
        setMessage({ type: 'error', text: result.message });
      }
    });
  }

  return (
    <div>
      <form 
        id="restaurant-form"
        action={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre del Restaurante *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100"
            placeholder="Ej: El Cielo"
          />
        </div>

        <div>
          <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">
            Barrio *
          </label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100"
            placeholder="Ej: El Poblado"
          />
        </div>

        <div>
          <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Cocina *
          </label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100"
            placeholder="Ej: Italiana"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
            Rating (0-5) *
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100"
            placeholder="4.5"
          />
        </div>

        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
            Rango de Precio *
          </label>
          <select
            id="priceRange"
            name="priceRange"
            required
            disabled={isPending}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100"
          >
            <option value="">Seleccionar...</option>
            <option value="$">$ (Económico)</option>
            <option value="$$">$$ (Moderado)</option>
            <option value="$$$">$$$ (Caro)</option>
            <option value="$$$$">$$$$ (Muy Caro)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isPending ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creando...
            </>
          ) : (
            '➕ Crear Restaurante'
          )}
        </button>
      </form>

      {/* Mensaje de resultado */}
      {message && (
        <div className={`mt-4 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message.type === 'success' ? '✅' : '❌'} {message.text}
        </div>
      )}
    </div>
  );
}

