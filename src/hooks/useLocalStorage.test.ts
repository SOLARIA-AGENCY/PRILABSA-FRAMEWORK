/**
 * PRILABSA Framework - useLocalStorage Hook Tests
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { useLocalStorage } from './useLocalStorage';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  describe('Initial value handling', () => {
    it('returns initial value when localStorage is empty', () => {
      const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
      expect(result.current[0]).toBe('initial');
    });

    it('returns stored value when localStorage has data', () => {
      localStorageMock.setItem('test-key', JSON.stringify('stored'));
      const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
      expect(result.current[0]).toBe('stored');
    });

    it('handles complex objects', () => {
      const complexObject = { name: 'test', nested: { value: 42 } };
      localStorageMock.setItem('test-key', JSON.stringify(complexObject));
      const { result } = renderHook(() => useLocalStorage('test-key', {}));
      expect(result.current[0]).toEqual(complexObject);
    });

    it('handles arrays', () => {
      const testArray = [1, 2, 3, 'test'];
      localStorageMock.setItem('test-key', JSON.stringify(testArray));
      const { result } = renderHook(() => useLocalStorage('test-key', []));
      expect(result.current[0]).toEqual(testArray);
    });
  });

  describe('Setting values', () => {
    it('updates state when setting new value', () => {
      const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
      
      act(() => {
        result.current[1]('updated');
      });

      expect(result.current[0]).toBe('updated');
    });

    it('persists value to localStorage when setting', () => {
      const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
      
      act(() => {
        result.current[1]('persisted');
      });

      expect(localStorageMock.setItem).toHaveBeenCalledWith('test-key', JSON.stringify('persisted'));
    });

    it('handles complex object updates', () => {
      const initialObj = { count: 0 };
      const updatedObj = { count: 1, name: 'test' };
      
      const { result } = renderHook(() => useLocalStorage('test-key', initialObj));
      
      act(() => {
        result.current[1](updatedObj);
      });

      expect(result.current[0]).toEqual(updatedObj);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('test-key', JSON.stringify(updatedObj));
    });
  });

  describe('Error handling', () => {
    it('returns initial value when localStorage getItem throws', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      localStorageMock.getItem.mockImplementation(() => {
        throw new Error('localStorage error');
      });

      const { result } = renderHook(() => useLocalStorage('test-key', 'fallback'));
      expect(result.current[0]).toBe('fallback');
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error reading localStorage key "test-key":',
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });

    it('handles invalid JSON gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      localStorageMock.getItem.mockReturnValue('invalid json {');

      const { result } = renderHook(() => useLocalStorage('test-key', 'fallback'));
      expect(result.current[0]).toBe('fallback');
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it('handles localStorage setItem errors', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      localStorageMock.setItem.mockImplementation(() => {
        throw new Error('localStorage full');
      });

      const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));
      
      act(() => {
        result.current[1]('new value');
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        'Error setting localStorage key "test-key":',
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });
  });

  describe('Type safety', () => {
    it('maintains type safety with strings', () => {
      const { result } = renderHook(() => useLocalStorage<string>('test-key', 'initial'));
      
      act(() => {
        result.current[1]('new string');
      });

      expect(typeof result.current[0]).toBe('string');
    });

    it('maintains type safety with numbers', () => {
      const { result } = renderHook(() => useLocalStorage<number>('test-key', 42));
      
      act(() => {
        result.current[1](100);
      });

      expect(typeof result.current[0]).toBe('number');
    });

    it('maintains type safety with booleans', () => {
      const { result } = renderHook(() => useLocalStorage<boolean>('test-key', false));
      
      act(() => {
        result.current[1](true);
      });

      expect(typeof result.current[0]).toBe('boolean');
    });
  });
}); 