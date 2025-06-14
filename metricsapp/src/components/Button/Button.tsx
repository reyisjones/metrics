import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  onClick,
  ...props
}) => {
  const baseStyles = {
    fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    border: 0,
    borderRadius: '3em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    opacity: disabled ? 0.6 : 1,
  };

  const primaryStyles = {
    color: 'white',
    backgroundColor: '#1ea7fd',
  };

  const secondaryStyles = {
    color: '#333',
    backgroundColor: 'transparent',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
  };

  const sizeStyles = {
    small: { fontSize: '12px', padding: '10px 16px' },
    medium: { fontSize: '14px', padding: '11px 20px' },
    large: { fontSize: '16px', padding: '12px 24px' },
  };

  const buttonStyles = {
    ...baseStyles,
    ...(primary ? primaryStyles : secondaryStyles),
    ...sizeStyles[size],
    ...(backgroundColor && { backgroundColor }),
  };

  return (
    <button
      type="button"
      style={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
