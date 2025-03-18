import { createTheme } from '@mui/material/styles';
import { red, blueGrey, amber } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A popular blue for primary
      light: '#63a4ff', // Lighter shade of primary
      dark: '#004ba0', // Darker shade of primary
      contrastText: '#ffffff', // Text color on primary buttons
    },
    secondary: {
      main: '#dc004e', // A vibrant red for secondary
      light: '#ff5c8d', // Lighter shade of secondary
      dark: '#9a0036', // Darker shade of secondary
      contrastText: '#ffffff', // Text color on secondary buttons
    },
    error: {
      main: red.A400, // Predefined Material-UI red for errors
    },
    warning: {
      main: amber[500], // Amber for warnings
    },
    info: {
      main: blueGrey[500], // Blue-grey for informational messages
    },
    success: {
      main: '#4caf50', // Green for success
    },
    background: {
      default: '#f5f5f5', // Light grey background
      paper: '#ffffff', // White background for cards and surfaces
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default Material-UI font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      textTransform: 'none', // Prevent uppercase transformation for buttons
    },
  },
  spacing: 8, // Default spacing unit (8px)
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 960, // Medium devices (desktops)
      lg: 1280, // Large devices (larger desktops)
      xl: 1920, // Extra large devices
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          padding: '8px 16px', // Default padding
        },
        containedPrimary: {
          backgroundColor: '#1976d2',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#004ba0', // Darker shade on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976d2', // Primary color for AppBar
          color: '#ffffff', // White text
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '1rem', // Add more spacing for typography with gutterBottom
        },
      },
    },
  },
});

export default theme;
