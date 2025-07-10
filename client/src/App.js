import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { supabase } from './supabase';

function App() {
  useEffect(() => {
    // Check environment variables
    console.log('Environment variables check:');
    console.log('REACT_APP_SUPABASE_URL:', process.env.REACT_APP_SUPABASE_URL ? 'Set' : 'Not set');
    console.log('REACT_APP_SUPABASE_KEY:', process.env.REACT_APP_SUPABASE_KEY ? 'Set' : 'Not set');

    // Test Supabase connection
    const testSupabase = async () => {
      try {
        const { data, error } = await supabase.from('routes').select('*').limit(1);
        if (error) {
          console.error('Supabase error:', error);
        } else {
          console.log('Supabase verbinding gelukt! Data:', data);
        }
      } catch (err) {
        console.error('Supabase exception:', err);
      }
    };
    testSupabase();
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
