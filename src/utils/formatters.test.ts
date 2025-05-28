/**
 * PRILABSA Framework - Formatters Tests
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import { describe, it, expect } from '@jest/globals';
import {
  formatCurrency,
  formatDate,
  formatBytes,
  truncateText,
  capitalizeWords,
  slugify,
  extractInitials,
  formatPhoneNumber,
} from './formatters';

describe('Formatters', () => {
  describe('formatCurrency', () => {
    it('formats USD currency by default', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    it('formats different currencies', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
    });

    it('handles zero amount', () => {
      expect(formatCurrency(0)).toBe('$0.00');
    });

    it('handles negative amounts', () => {
      expect(formatCurrency(-100)).toBe('-$100.00');
    });
  });

  describe('formatDate', () => {
    it('formats date with default options', () => {
      const date = new Date('2025-01-15');
      const formatted = formatDate(date);
      expect(formatted).toContain('January');
      expect(formatted).toContain('15');
      expect(formatted).toContain('2025');
    });

    it('formats string dates', () => {
      const formatted = formatDate('2025-01-15');
      expect(formatted).toContain('January');
    });

    it('accepts custom options', () => {
      const date = new Date('2025-01-15');
      const formatted = formatDate(date, { month: 'short', day: 'numeric' });
      expect(formatted).toContain('Jan');
      expect(formatted).toContain('15');
    });
  });

  describe('formatBytes', () => {
    it('formats zero bytes', () => {
      expect(formatBytes(0)).toBe('0 Bytes');
    });

    it('formats bytes', () => {
      expect(formatBytes(1024)).toBe('1 KB');
    });

    it('formats megabytes', () => {
      expect(formatBytes(1048576)).toBe('1 MB');
    });

    it('formats with custom decimals', () => {
      expect(formatBytes(1536, 1)).toBe('1.5 KB');
    });

    it('handles large numbers', () => {
      expect(formatBytes(1073741824)).toBe('1 GB');
    });

    it('handles negative decimals by setting to 0', () => {
      expect(formatBytes(1536, -1)).toBe('2 KB');
    });
  });

  describe('truncateText', () => {
    it('returns original text if shorter than max length', () => {
      expect(truncateText('short', 10)).toBe('short');
    });

    it('truncates long text with ellipsis', () => {
      expect(truncateText('this is a long text', 10)).toBe('this is...');
    });

    it('uses custom suffix', () => {
      expect(truncateText('long text', 5, '---')).toBe('lo---');
    });

    it('handles exact length', () => {
      expect(truncateText('exact', 5)).toBe('exact');
    });
  });

  describe('capitalizeWords', () => {
    it('capitalizes single word', () => {
      expect(capitalizeWords('hello')).toBe('Hello');
    });

    it('capitalizes multiple words', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    it('handles mixed case', () => {
      expect(capitalizeWords('hELLo WoRLD')).toBe('Hello World');
    });

    it('handles empty string', () => {
      expect(capitalizeWords('')).toBe('');
    });
  });

  describe('slugify', () => {
    it('converts to lowercase', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('replaces spaces with hyphens', () => {
      expect(slugify('hello world test')).toBe('hello-world-test');
    });

    it('removes special characters', () => {
      expect(slugify('hello@world!')).toBe('helloworld');
    });

    it('handles multiple spaces', () => {
      expect(slugify('hello   world')).toBe('hello-world');
    });

    it('removes leading and trailing hyphens', () => {
      expect(slugify('  hello world  ')).toBe('hello-world');
    });
  });

  describe('extractInitials', () => {
    it('extracts initials from full name', () => {
      expect(extractInitials('John Doe')).toBe('JD');
    });

    it('handles single name', () => {
      expect(extractInitials('John')).toBe('J');
    });

    it('limits to max initials', () => {
      expect(extractInitials('John Michael Doe', 2)).toBe('JM');
    });

    it('handles custom max initials', () => {
      expect(extractInitials('John Michael Doe Smith', 3)).toBe('JMD');
    });
  });

  describe('formatPhoneNumber', () => {
    it('formats 10-digit US number', () => {
      expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890');
    });

    it('handles numbers with existing formatting', () => {
      expect(formatPhoneNumber('123-456-7890')).toBe('(123) 456-7890');
    });

    it('returns original for invalid format', () => {
      expect(formatPhoneNumber('123')).toBe('123');
    });

    it('handles numbers with spaces', () => {
      expect(formatPhoneNumber('123 456 7890')).toBe('(123) 456-7890');
    });
  });
}); 