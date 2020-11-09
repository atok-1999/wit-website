import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {        
        main: '#333948',
        contrastText: '#fff',
      },
      secondary: {
        main: '#fff',
        contrastText: '#000',
      }
    },
  });

export default theme