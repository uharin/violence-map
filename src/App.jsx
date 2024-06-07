import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './components/layout/Layout';
import store from './store/index';
import darkTheme from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
