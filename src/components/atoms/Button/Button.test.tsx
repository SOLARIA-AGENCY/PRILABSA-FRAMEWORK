/**
 * PRILABSA Framework - Button Component Tests
 * Developed by Solaria Agency - 2025
 * Website: https://solaria.agency
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, jest } from '@jest/globals';
import { Button } from './Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      const { getByRole } = render(<Button>Click me</Button>);
      const button = getByRole('button', { name: 'Click me' });
      expect(button).toBeTruthy();
      expect(button.className).toContain('inline-flex');
    });

    it('renders with custom text', () => {
      const { getByText } = render(<Button>Custom Text</Button>);
      expect(getByText('Custom Text')).toBeTruthy();
    });

    it('renders with testId', () => {
      const { getByTestId } = render(<Button testId="test-button">Test</Button>);
      expect(getByTestId('test-button')).toBeTruthy();
    });

    it('renders with aria-label', () => {
      const { getByLabelText } = render(<Button ariaLabel="Custom Label">Test</Button>);
      expect(getByLabelText('Custom Label')).toBeTruthy();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { getByRole } = render(<Button>Primary</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('bg-brand-primary');
      expect(button.className).toContain('text-white');
    });

    it('renders secondary variant', () => {
      const { getByRole } = render(<Button variant="secondary">Secondary</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('bg-gray-100');
      expect(button.className).toContain('text-gray-900');
    });

    it('renders outline variant', () => {
      const { getByRole } = render(<Button variant="outline">Outline</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('bg-transparent');
      expect(button.className).toContain('border');
    });

    it('renders ghost variant', () => {
      const { getByRole } = render(<Button variant="ghost">Ghost</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('bg-transparent');
    });

    it('renders danger variant', () => {
      const { getByRole } = render(<Button variant="danger">Danger</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('bg-red-600');
      expect(button.className).toContain('text-white');
    });

    it('renders success variant', () => {
      const { getByRole } = render(<Button variant="success">Success</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('bg-green-600');
      expect(button.className).toContain('text-white');
    });
  });

  describe('Sizes', () => {
    it('renders medium size by default', () => {
      const { getByRole } = render(<Button>Medium</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('px-4');
      expect(button.className).toContain('py-2');
      expect(button.className).toContain('text-sm');
    });

    it('renders small size', () => {
      const { getByRole } = render(<Button size="sm">Small</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('px-3');
      expect(button.className).toContain('py-1.5');
      expect(button.className).toContain('text-xs');
    });

    it('renders large size', () => {
      const { getByRole } = render(<Button size="lg">Large</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('px-6');
      expect(button.className).toContain('py-3');
      expect(button.className).toContain('text-base');
    });

    it('renders extra large size', () => {
      const { getByRole } = render(<Button size="xl">Extra Large</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('px-8');
      expect(button.className).toContain('py-4');
      expect(button.className).toContain('text-lg');
    });
  });

  describe('Rounded', () => {
    it('renders medium rounded by default', () => {
      const { getByRole } = render(<Button>Default</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('rounded-md');
    });

    it('renders no rounded', () => {
      const { getByRole } = render(<Button rounded="none">No Rounded</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('rounded-none');
    });

    it('renders full rounded', () => {
      const { getByRole } = render(<Button rounded="full">Full Rounded</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('rounded-full');
    });
  });

  describe('Full Width', () => {
    it('renders auto width by default', () => {
      const { getByRole } = render(<Button>Auto Width</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('w-auto');
    });

    it('renders full width', () => {
      const { getByRole } = render(<Button fullWidth>Full Width</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('w-full');
    });
  });

  describe('Loading State', () => {
    it('shows loading spinner when loading', () => {
      const { getByRole, container } = render(<Button loading>Loading</Button>);
      const button = getByRole('button') as HTMLButtonElement;
      expect(button.disabled).toBe(true);
      expect(button.className).toContain('cursor-wait');
      const svg = container.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('hides icons when loading', () => {
      const { queryByTestId } = render(
        <Button 
          loading 
          leftIcon={<span data-testid="left-icon">L</span>}
          rightIcon={<span data-testid="right-icon">R</span>}
        >
          Loading
        </Button>
      );
      expect(queryByTestId('left-icon')).toBeNull();
      expect(queryByTestId('right-icon')).toBeNull();
    });
  });

  describe('Icons', () => {
    it('renders left icon', () => {
      const { getByTestId } = render(
        <Button leftIcon={<span data-testid="left-icon">L</span>}>
          With Left Icon
        </Button>
      );
      expect(getByTestId('left-icon')).toBeTruthy();
    });

    it('renders right icon', () => {
      const { getByTestId } = render(
        <Button rightIcon={<span data-testid="right-icon">R</span>}>
          With Right Icon
        </Button>
      );
      expect(getByTestId('right-icon')).toBeTruthy();
    });

    it('renders both icons', () => {
      const { getByTestId } = render(
        <Button 
          leftIcon={<span data-testid="left-icon">L</span>}
          rightIcon={<span data-testid="right-icon">R</span>}
        >
          With Both Icons
        </Button>
      );
      expect(getByTestId('left-icon')).toBeTruthy();
      expect(getByTestId('right-icon')).toBeTruthy();
    });
  });

  describe('Disabled State', () => {
    it('renders disabled button', () => {
      const { getByRole } = render(<Button disabled>Disabled</Button>);
      const button = getByRole('button') as HTMLButtonElement;
      expect(button.disabled).toBe(true);
      expect(button.className).toContain('opacity-50');
      expect(button.className).toContain('cursor-not-allowed');
    });

    it('is disabled when loading', () => {
      const { getByRole } = render(<Button loading>Loading</Button>);
      const button = getByRole('button') as HTMLButtonElement;
      expect(button.disabled).toBe(true);
    });
  });

  describe('Button Type', () => {
    it('has button type by default', () => {
      const { getByRole } = render(<Button>Default Type</Button>);
      const button = getByRole('button');
      expect(button.getAttribute('type')).toBe('button');
    });

    it('accepts custom type', () => {
      const { getByRole } = render(<Button type="submit">Submit</Button>);
      const button = getByRole('button');
      expect(button.getAttribute('type')).toBe('submit');
    });
  });

  describe('Event Handlers', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);
      
      await user.click(getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const { getByRole } = render(<Button onClick={handleClick} disabled>Disabled</Button>);
      
      await user.click(getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const { getByRole } = render(<Button onClick={handleClick} loading>Loading</Button>);
      
      await user.click(getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Custom Props', () => {
    it('passes through additional props', () => {
      const { getByRole } = render(<Button data-custom="test">Custom Props</Button>);
      const button = getByRole('button');
      expect(button.getAttribute('data-custom')).toBe('test');
    });

    it('applies custom className', () => {
      const { getByRole } = render(<Button className="custom-class">Custom Class</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('custom-class');
    });
  });

  describe('Accessibility', () => {
    it('has proper focus management', () => {
      const { getByRole } = render(<Button>Focus Test</Button>);
      const button = getByRole('button');
      button.focus();
      expect(document.activeElement).toBe(button);
    });

    it('has focus ring classes', () => {
      const { getByRole } = render(<Button>Focus Ring</Button>);
      const button = getByRole('button');
      expect(button.className).toContain('focus:outline-none');
      expect(button.className).toContain('focus:ring-2');
    });
  });
}); 