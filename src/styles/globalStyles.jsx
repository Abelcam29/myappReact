import { GlobalStyles } from '@mui/material';

const globalStyles = (
  <GlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        transition: 'all 0.2s ease-in-out',
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
      // Scroll personalizado
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: 'rgba(255, 255, 255, 0.1)',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'rgba(99, 102, 241, 0.5)',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(99, 102, 241, 0.8)',
      },
    }}
  />
);

export default globalStyles;