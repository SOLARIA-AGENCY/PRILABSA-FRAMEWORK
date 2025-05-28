import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/cn';
import type { BaseComponentProps } from '../../../types';

// Button variants using CVA for consistent styling
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-medium text-sm leading-4',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-95',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-brand-primary hover:bg-blue-700',
          'text-white',
          'focus:ring-brand-primary',
          'shadow-sm hover:shadow-md',
        ],
        secondary: [
          'bg-gray-100 hover:bg-gray-200',
          'text-gray-900',
          'focus:ring-gray-500',
          'border border-gray-300',
        ],
        outline: [
          'bg-transparent hover:bg-gray-50',
          'text-gray-700 hover:text-gray-900',
          'border border-gray-300 hover:border-gray-400',
          'focus:ring-gray-500',
        ],
        ghost: [
          'bg-transparent hover:bg-gray-100',
          'text-gray-700 hover:text-gray-900',
          'focus:ring-gray-500',
        ],
        danger: [
          'bg-red-600 hover:bg-red-700',
          'text-white',
          'focus:ring-red-500',
          'shadow-sm hover:shadow-md',
        ],
        success: [
          'bg-green-600 hover:bg-green-700',
          'text-white',
          'focus:ring-green-500',
          'shadow-sm hover:shadow-md',
        ],
      },
      size: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        xl: 'px-8 py-4 text-lg',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BaseComponentProps,
    VariantProps<typeof buttonVariants> {
  /** Loading state */
  loading?: boolean;
  /** Icon to display before text */
  leftIcon?: React.ReactNode;
  /** Icon to display after text */
  rightIcon?: React.ReactNode;
  /** Button as link */
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      testId,
      ariaLabel,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          buttonVariants({ variant, size, rounded, fullWidth }),
          loading && 'cursor-wait',
          className
        )}
        data-testid={testId}
        aria-label={ariaLabel}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!loading && leftIcon && (
          <span className="mr-2 flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        
        <span className={loading ? 'opacity-70' : ''}>
          {children}
        </span>
        
        {!loading && rightIcon && (
          <span className="ml-2 flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button'; 