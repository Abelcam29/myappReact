import React from 'react';
import { Button } from '@mui/material';

export default function CustomButton({ 
  children, 
  onClick, 
  variant = 'contained', 
  color = 'primary',
  size = 'medium',
  disabled = false,
  startIcon,
  endIcon,
  ...props 
}) {
  return (
    <Button 
      onClick={onClick} 
      variant={variant} 
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 600,
        boxShadow: variant === 'contained' ? '0 4px 14px 0 rgba(99, 102, 241, 0.3)' : 'none',
        '&:hover': {
          transform: disabled ? 'none' : 'translateY(-1px)',
          boxShadow: variant === 'contained' && !disabled ? '0 6px 20px 0 rgba(99, 102, 241, 0.4)' : 'none',
        },
        '&:active': {
          transform: disabled ? 'none' : 'translateY(0)',
        },
        transition: 'all 0.2s ease-in-out',
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}