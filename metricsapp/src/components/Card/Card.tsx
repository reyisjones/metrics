import React from 'react';

interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Card elevation/shadow
   */
  elevation?: 'low' | 'medium' | 'high';
  /**
   * Card padding
   */
  padding?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Is the card hoverable?
   */
  hoverable?: boolean;
}

/**
 * Card component for displaying content in a structured way
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  elevation = 'low',
  padding = 'medium',
  hoverable = false,
  onClick,
  ...props
}) => {
  const baseStyles = {
    background: 'white',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.2s ease-in-out',
  };

  const elevationStyles = {
    low: { boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' },
    medium: { boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)' },
    high: { boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)' },
  };

  const paddingStyles = {
    small: { padding: '12px' },
    medium: { padding: '20px' },
    large: { padding: '32px' },
  };

  const cardStyles = {
    ...baseStyles,
    ...elevationStyles[elevation],
    ...paddingStyles[padding],
  };

  const titleStyles = {
    margin: '0 0 16px 0',
    fontSize: '18px',
    fontWeight: 600,
    color: '#333',
  };

  const contentStyles = {
    color: '#666',
    lineHeight: 1.5,
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverable) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverable) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = elevationStyles[elevation].boxShadow;
    }
  };

  return (
    <div
      style={cardStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {title && <h3 style={titleStyles}>{title}</h3>}
      <div style={contentStyles}>{children}</div>
    </div>
  );
};
