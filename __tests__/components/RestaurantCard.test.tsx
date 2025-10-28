/**
 * Tests para componentes de Restaurante
 * 
 * Estos son component tests que verifican el renderizado
 */

import { render, screen } from '@testing-library/react';
import RestaurantCard from '@/components/RestaurantCard';

describe('RestaurantCard', () => {
  const mockRestaurant = {
    id: 1,
    name: 'Carmen',
    neighborhood: 'El Poblado',
    cuisine: 'Colombiana Contemporánea',
    rating: 4.9,
    priceRange: '$$$$'
  };

  it('debe renderizar el nombre del restaurante', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText('Carmen')).toBeInTheDocument();
  });

  it('debe renderizar el barrio', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText(/El Poblado/)).toBeInTheDocument();
  });

  it('debe renderizar el tipo de cocina', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText(/Colombiana Contemporánea/)).toBeInTheDocument();
  });

  it('debe renderizar el rating', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText(/4\.9/)).toBeInTheDocument();
  });

  it('debe renderizar el rango de precio', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);
    expect(screen.getByText('$$$$')).toBeInTheDocument();
  });

  it('debe aplicar clases CSS correctamente', () => {
    const { container } = render(<RestaurantCard restaurant={mockRestaurant} />);
    const card = container.firstChild;
    expect(card).toHaveClass('border', 'rounded-lg');
  });
});

