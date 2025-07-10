import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

function App() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Check environment variables
    console.log('Environment variables check:');
    console.log('SUPABASE_URL:', process.env.REACT_APP_SUPABASE_URL);
    console.log('SUPABASE_KEY:', process.env.REACT_APP_SUPABASE_KEY);

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

    const fetchRoutes = async () => {
      const { data, error } = await supabase.from('"Routes"').select('*');
      if (error) {
        console.error('Supabase error:', error);
      } else {
        setRoutes(data); // <-- sla de data op in state
      }
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
        <ul>
          {routes.map(route => (
            <li key={route.id}>
              {route["Route ID"] || route.id}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
