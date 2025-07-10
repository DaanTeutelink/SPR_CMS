import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { supabase } from './supabase';

function App() {
  useEffect(() => {
    const fetchRoutes = async () => {
      const { data, error } = await supabase.from('routes').select();
      console.log('Data:', data);
      console.log('Error:', error);
    };

    fetchRoutes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Biatches
        </a>
      </header>
    </div>
  );
}

export default App;
