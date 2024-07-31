import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Layout from './components/layout/Layout';
import store from './store/index';
import darkTheme from './theme';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
          <ThemeProvider theme={darkTheme}>
            <div className="App">
              <Layout />
            </div>
          </ThemeProvider>
      </RouterProvider>
    </Provider>
  );
}

export default App;
