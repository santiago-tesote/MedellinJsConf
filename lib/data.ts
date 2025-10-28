/**
 * Mock Data - Restaurantes de Medellín 🇨🇴
 * 
 * Disclaimer: Esto es solo para la demo. En la vida real usarías
 * una DB de verdad (PostgreSQL, MongoDB, o lo que prefieras).
 * 
 * PD: Sí, estos restaurantes son reales y sí, están buenos.
 */

export interface Restaurant {
  id: number;
  name: string;
  neighborhood: string;
  cuisine: string;
  rating: number;
  priceRange: string;
}

export const restaurantsData: Restaurant[] = [
  {
    id: 1,
    name: "Carmen",
    neighborhood: "El Poblado",
    cuisine: "Colombiana Contemporánea",
    rating: 4.9,
    priceRange: "$$$$"
  },
  {
    id: 2,
    name: "Oci.Mde",
    neighborhood: "El Poblado",
    cuisine: "Fusión Asiática",
    rating: 4.8,
    priceRange: "$$$"
  },
  {
    id: 3,
    name: "Mondongos",
    neighborhood: "Envigado",
    cuisine: "Comida Típica",
    rating: 4.7,
    priceRange: "$$"
  },
  {
    id: 4,
    name: "El Herbario",
    neighborhood: "Manila",
    cuisine: "Vegetariana",
    rating: 4.6,
    priceRange: "$$"
  },
  {
    id: 5,
    name: "Hatoviejo",
    neighborhood: "Laureles",
    cuisine: "Parrilla",
    rating: 4.5,
    priceRange: "$$$"
  }
];

/**
 * Simula una consulta a base de datos con delay
 * 
 * El delay es intencional para que veas el loading state.
 * En producción tu DB probablemente sea más rápida... o no 😅
 */
export async function getRestaurants(delay: number = 0): Promise<Restaurant[]> {
  if (delay > 0) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  return restaurantsData;
}

/**
 * Obtiene un restaurante por ID
 */
export async function getRestaurantById(id: number, delay: number = 0): Promise<Restaurant | undefined> {
  if (delay > 0) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  return restaurantsData.find(r => r.id === id);
}

// Estado en memoria para Server Actions
let inMemoryRestaurants = [...restaurantsData];

/**
 * Agrega un nuevo restaurante (usado en Server Actions)
 */
export function addRestaurant(restaurant: Omit<Restaurant, 'id'>): Restaurant {
  const newRestaurant = {
    ...restaurant,
    id: Math.max(...inMemoryRestaurants.map(r => r.id)) + 1
  };
  inMemoryRestaurants.push(newRestaurant);
  return newRestaurant;
}

/**
 * Obtiene todos los restaurantes del estado en memoria
 */
export function getInMemoryRestaurants(): Restaurant[] {
  return [...inMemoryRestaurants];
}

