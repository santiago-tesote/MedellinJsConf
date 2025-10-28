import { NextResponse } from 'next/server';
import { getRestaurants } from '@/lib/data';

/**
 * API Route - GET /api/restaurants
 * 
 * El clásico endpoint de API. Esto es lo que usarías con CSR.
 * 
 * Spoiler: Con RSC ya ni necesitas esto... pero bueno,
 * aquí está para la comparación.
 */
export async function GET() {
  try {
    // Simular delay de red (3 segundos)
    const restaurants = await getRestaurants(3000);
    
    return NextResponse.json({
      success: true,
      data: restaurants,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error al obtener restaurantes' },
      { status: 500 }
    );
  }
}

