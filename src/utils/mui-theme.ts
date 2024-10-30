import { createTheme } from '@mui/material/styles';
import { useTheme } from 'next-themes';

export const useMuiTheme = () => {
  const { theme } = useTheme();
  
  return createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light',
      primary: {
        main: '#B925ED',
      },
      secondary: {
        main: '#393E74',
      },
    },
  });
};
