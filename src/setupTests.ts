/**
 * PRILABSA Framework - Jest Setup
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import '@testing-library/jest-dom';

// Ensure jest-dom matchers are available
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
} 