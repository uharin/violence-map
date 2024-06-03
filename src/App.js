import './App.css';
import Layout from './components/layout/Layout';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
