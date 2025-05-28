import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box, Avatar } from '@mui/material';
import { Home, Dashboard, Logout } from '@mui/icons-material';

export default function NavBar({ user, onLogout }) {
  const location = useLocation();

  if (!user) return null;

  const navItems = [
    { path: '/', label: 'Home', icon: <Home /> },
    { path: '/dashboard', label: 'Dashboard', icon: <Dashboard /> },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Frumen App
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              component={RouterLink}
              to={item.path}
              startIcon={item.icon}
              sx={{
                borderRadius: 2,
                px: 2,
                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              {user.username?.charAt(0).toUpperCase()}
            </Avatar>
            <Button
              color="inherit"
              onClick={onLogout}
              startIcon={<Logout />}
              sx={{
                borderRadius: 2,
                px: 2,
                '&:hover': {
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}