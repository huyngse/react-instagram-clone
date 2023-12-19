import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
// import { mode } from '@chakra-ui/theme-tools';

// CUSTOM THEME
// const styles = {
//   global: (props) => ({
//     body: {
//       bg: mode("gray.100", "#1A202C")(props),
//       color: mode("gray.800", "whiteAlpha.900")(props),
//     }
//   })
// }
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// const theme = extendTheme({ config, styles });
const theme = extendTheme({ config });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
