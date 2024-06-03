import './App.css';
import Layout from './components/layout/Layout';
import store from './store/index';
import { Provider } from 'react-redux';
import darkTheme from './theme';
import { ThemeProvider } from '@mui/material/styles';

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
