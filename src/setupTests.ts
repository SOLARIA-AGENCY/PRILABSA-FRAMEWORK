/**
 * PRILABSA Framework - Jest Setup
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

// Import jest-dom matchers
import '@testing-library/jest-dom';

// Extend Jest matchers with jest-dom
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(...classNames: string[]): R;
      toBeDisabled(): R;
      toHaveFocus(): R;
      toHaveAttribute(attr: string, value?: string): R;
    }
  }
} 