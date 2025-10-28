'use server';

import { addRestaurant, getInMemoryRestaurants } from '@/lib/data';
import { revalidatePath } from 'next/cache';

/**
 * Server Action - Crear Restaurante
 * 
 * IMPORTANTE: Este archivo usa 'use server' en la parte superior
 * 
 * Características:
 * - Las funciones se ejecutan SOLO en el servidor
 * - Se pueden llamar desde Client Components como si fueran funciones normales
 * - No necesitas crear API routes
 * - Perfecto para mutations (crear, actualizar, eliminar)
 */

export interface CreateRestaurantResult {
  success: boolean;
  message: string;
  data?: any;
}

export async function createRestaurant(formData: FormData): Promise<CreateRestaurantResult> {
  try {
    // Extraer datos del formulario
    const name = formData.get('name') as string;
    const neighborhood = formData.get('neighborhood') as string;
    const cuisine = formData.get('cuisine') as string;
    const rating = parseFloat(formData.get('rating') as string);
    const priceRange = formData.get('priceRange') as string;

    // Validaciones
    if (!name || !neighborhood || !cuisine || !rating || !priceRange) {
      return {
        success: false,
        message: 'Todos los campos son requeridos'
      };
    }

    if (rating < 0 || rating > 5) {
      return {
        success: false,
        message: 'El rating debe estar entre 0 y 5'
      };
    }

    // Simular delay de procesamiento (1 segundo)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Agregar el restaurante
    const newRestaurant = addRestaurant({
      name,
      neighborhood,
      cuisine,
      rating,
      priceRange
    });

    // Revalidar la página para mostrar los datos actualizados
    revalidatePath('/actions');

    return {
      success: true,
      message: `¡Restaurante "${name}" creado exitosamente!`,
      data: newRestaurant
    };
  } catch (error) {
    console.error('Error en createRestaurant:', error);
    return {
      success: false,
      message: 'Error al crear el restaurante'
    };
  }
}

/**
 * Server Action - Obtener todos los restaurantes
 * 
 * Esta función demuestra que también puedes hacer GET operations
 * con Server Actions (aunque normalmente usarías RSC para esto)
 */
export async function getAllRestaurants() {
  // Simular un pequeño delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return getInMemoryRestaurants();
}

