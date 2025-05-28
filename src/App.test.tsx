/**
 * PRILABSA Framework - App Component Tests
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import App from './App';

describe('App Component', () => {
  it('renders PRILABSA Framework title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PRILABSA Framework/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders Solaria Agency branding', () => {
    render(<App />);
    const agencyElement = screen.getByText(/Solaria Agency/i);
    expect(agencyElement).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<App />);
    const homeLink = screen.getByText(/Home/i);
    const blogLink = screen.getByText(/Blog/i);
    const catalogLink = screen.getByText(/Catalog/i);
    
    expect(homeLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
  });

  it('renders framework logo', () => {
    render(<App />);
    const logoElements = screen.getAllByAltText(/Solaria Agency/i);
    expect(logoElements.length).toBeGreaterThan(0);
  });
}); 