/**
 * Tests para lib/data.ts
 * 
 * Estos son unit tests que verifican las funciones de datos
 */

import { 
  restaurantsData, 
  getRestaurants, 
  getRestaurantById, 
  addRestaurant,
  getInMemoryRestaurants 
} from '@/lib/data';

describe('Data Functions', () => {
  describe('restaurantsData', () => {
    it('debe contener datos de restaurantes', () => {
      expect(restaurantsData).toBeDefined();
      expect(restaurantsData.length).toBeGreaterThan(0);
    });

    it('cada restaurante debe tener la estructura correcta', () => {
      restaurantsData.forEach(restaurant => {
        expect(restaurant).toHaveProperty('id');
        expect(restaurant).toHaveProperty('name');
        expect(restaurant).toHaveProperty('neighborhood');
        expect(restaurant).toHaveProperty('cuisine');
        expect(restaurant).toHaveProperty('rating');
        expect(restaurant).toHaveProperty('priceRange');
      });
    });
  });

  describe('getRestaurants', () => {
    it('debe retornar todos los restaurantes sin delay', async () => {
      const restaurants = await getRestaurants(0);
      expect(restaurants).toEqual(restaurantsData);
    });

    it('debe simular delay cuando se especifica', async () => {
      const startTime = Date.now();
      await getRestaurants(100);
      const endTime = Date.now();
      
      expect(endTime - startTime).toBeGreaterThanOrEqual(100);
    });
  });

  describe('getRestaurantById', () => {
    it('debe retornar un restaurante existente', async () => {
      const restaurant = await getRestaurantById(1);
      expect(restaurant).toBeDefined();
      expect(restaurant?.id).toBe(1);
    });

    it('debe retornar undefined para ID inexistente', async () => {
      const restaurant = await getRestaurantById(9999);
      expect(restaurant).toBeUndefined();
    });
  });

  describe('addRestaurant', () => {
    it('debe agregar un nuevo restaurante', () => {
      const newRestaurant = {
        name: 'Test Restaurant',
        neighborhood: 'Test Neighborhood',
        cuisine: 'Test Cuisine',
        rating: 4.0,
        priceRange: '$$'
      };

      const result = addRestaurant(newRestaurant);
      
      expect(result).toHaveProperty('id');
      expect(result.name).toBe(newRestaurant.name);
      expect(result.neighborhood).toBe(newRestaurant.neighborhood);
    });

    it('debe asignar un ID único', () => {
      const restaurant1 = addRestaurant({
        name: 'Restaurant 1',
        neighborhood: 'Test',
        cuisine: 'Test',
        rating: 4.0,
        priceRange: '$$'
      });

      const restaurant2 = addRestaurant({
        name: 'Restaurant 2',
        neighborhood: 'Test',
        cuisine: 'Test',
        rating: 4.0,
        priceRange: '$$'
      });

      expect(restaurant2.id).toBeGreaterThan(restaurant1.id);
    });
  });

  describe('getInMemoryRestaurants', () => {
    it('debe incluir los restaurantes agregados', () => {
      const initialCount = getInMemoryRestaurants().length;
      
      addRestaurant({
        name: 'New Restaurant',
        neighborhood: 'Test',
        cuisine: 'Test',
        rating: 4.5,
        priceRange: '$$$'
      });

      const updatedCount = getInMemoryRestaurants().length;
      expect(updatedCount).toBe(initialCount + 1);
    });
  });
});

