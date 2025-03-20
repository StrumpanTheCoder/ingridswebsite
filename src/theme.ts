import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b4332', // Dark moss green as the main background color
      light: '#2d6a4f', // Lighter moss green for accents
      dark: '#081c15', // Even darker moss green for hover effects
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#264653', // Dark turquoise for smaller elements
      light: '#2a9d8f', // Lighter turquoise for accents
      dark: '#1e6f63', // Darker turquoise for hover effects
      contrastText: '#ffffff', // White text for contrast
    },
    success: {
      main: '#4caf50', // Moss green for success or small accents
      light: '#81c784', // Lighter moss green for hover effects
      dark: '#388e3c', // Darker moss green for stronger accents
      contrastText: '#ffffff', // White text for contrast
    },
    background: {
      default: '#081c15', // Very dark moss green as the main background
      paper: '#1b4332', // Dark moss green for cards and surfaces
    },
    text: {
      primary: '#ffffff', // White text for readability on dark backgrounds
      secondary: '#2a9d8f', // Lighter turquoise for secondary text
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif', // Default Material-UI font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ffffff', // White for headings
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      fontStyle: 'italic',
      color: '#ffffff', // White for subheadings
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#2a9d8f', // Lighter turquoise for smaller headings
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#ffffff', // White for body text
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      color: '#81c784', // Lighter moss green for secondary body text
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
          backgroundColor: '#2d6a4f', // Lighter moss green for primary buttons
          color: '#ffffff', // White text
          '&:hover': {
            backgroundColor: '#1b4332', // Dark moss green on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#264653', // Dark turquoise for secondary buttons
          color: '#ffffff', // White text
          '&:hover': {
            backgroundColor: '#1e6f63', // Darker turquoise on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#081c15', // Very dark moss green for the AppBar
          color: '#ffffff', // White text
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Slightly stronger shadow
          backgroundColor: '#1b4332', // Dark moss green for card backgrounds
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
