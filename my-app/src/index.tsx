import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#9cb4e9",
    },
    secondary: {
      main: "#5e5e5e",
    },
    warning:{
      main: "#FFD11D",
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);