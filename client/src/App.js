import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// import { supabase } from './supabase';

function App() {
  useEffect(() => {
    // Simple test to check if environment variables are loaded
    console.log('Environment variables check:');
    console.log('REACT_APP_SUPABASE_URL:', process.env.REACT_APP_SUPABASE_URL ? 'Set' : 'Not set');
    console.log('REACT_APP_SUPABASE_KEY:', process.env.REACT_APP_SUPABASE_KEY ? 'Set' : 'Not set');
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
