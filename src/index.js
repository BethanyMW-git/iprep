import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#FFFFFF"
    },
    myCustomBlue: {
      main: "#D9ECF2"
    },
    // Typography: {
    //   variant: {
    //     h1: 30
    //   }
    // }
  }
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
