/**
 * PRILABSA Framework - CN Utility Tests
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import { describe, it, expect } from '@jest/globals';
import { cn } from './cn';

describe('cn utility', () => {
  describe('Basic functionality', () => {
    it('combines classes correctly', () => {
      const result = cn('class1', 'class2');
      expect(result).toBe('class1 class2');
    });

    it('handles single class', () => {
      const result = cn('single-class');
      expect(result).toBe('single-class');
    });

    it('handles empty input', () => {
      const result = cn();
      expect(result).toBe('');
    });

    it('handles null and undefined', () => {
      const result = cn(null, undefined, 'valid-class');
      expect(result).toBe('valid-class');
    });
  });

  describe('Conditional classes', () => {
    it('handles conditional classes with objects', () => {
      const result = cn({
        'active': true,
        'disabled': false,
        'loading': true
      });
      expect(result).toBe('active loading');
    });

    it('handles mixed conditional and string classes', () => {
      const result = cn('base-class', {
        'active': true,
        'disabled': false
      }, 'another-class');
      expect(result).toBe('base-class active another-class');
    });
  });

  describe('Tailwind merge functionality', () => {
    it('merges conflicting Tailwind classes', () => {
      const result = cn('bg-red-500', 'bg-blue-500');
      expect(result).toBe('bg-blue-500');
    });

    it('merges padding classes correctly', () => {
      const result = cn('p-4', 'px-8');
      expect(result).toBe('p-4 px-8');
    });

    it('keeps non-conflicting classes', () => {
      const result = cn('bg-red-500', 'text-white', 'hover:bg-red-600');
      expect(result).toBe('bg-red-500 text-white hover:bg-red-600');
    });
  });

  describe('Array inputs', () => {
    it('handles array of classes', () => {
      const result = cn(['class1', 'class2', 'class3']);
      expect(result).toBe('class1 class2 class3');
    });

    it('handles nested arrays', () => {
      const result = cn(['class1', ['class2', 'class3']], 'class4');
      expect(result).toBe('class1 class2 class3 class4');
    });
  });

  describe('Complex scenarios', () => {
    it('handles complex combination of inputs', () => {
      const isActive = true;
      const isDisabled = false;
      const variant = 'primary';
      
      const result = cn(
        'base-class',
        {
          'active': isActive,
          'disabled': isDisabled,
          [`variant-${variant}`]: true
        },
        ['additional', 'classes'],
        'final-class'
      );
      
      expect(result).toContain('base-class');
      expect(result).toContain('active');
      expect(result).toContain('variant-primary');
      expect(result).toContain('additional');
      expect(result).toContain('classes');
      expect(result).toContain('final-class');
      expect(result).not.toContain('disabled');
    });

    it('handles empty strings and falsy values', () => {
      const result = cn('', false, 0, null, undefined, 'valid');
      expect(result).toBe('valid');
    });
  });
}); 