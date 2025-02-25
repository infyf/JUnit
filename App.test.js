import { render, screen } from '@testing-library/react';
import App from './App';


jest.mock('./components/navbard/Navbar', () => {
  return function MockNavbar() {
    return <div data-testid="navbar">Navbar</div>
  }
});

jest.mock('./pages/Home', () => {
  return function MockHome() {
    return <div data-testid="home-page">Home Page</div>
  }
});

jest.mock('./pages/Catalog', () => {
  return function MockCatalog() {
    return <div data-testid="catalog-page">Catalog Page</div>
  }
});

jest.mock('./pages/AddProducts', () => {
  return function MockAddProducts() {
    return <div data-testid="add-products-page">Add Products Page</div>
  }
});

jest.mock('./pages/ProductPage', () => {
  return function MockProductPage() {
    return <div data-testid="product-page">Product Page</div>
  }
});

describe('App Component', () => {
  test('renders navbar and home page by default', () => {
    render(<App />);
    
    // Перевіряємо чи відображається навбар
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    
    // Перевіряємо чи відображається домашня сторінка за замовчуванням
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('has correct background class', () => {
    render(<App />);
    

  });
});