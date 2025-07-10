import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { supabase } from './supabase';

function App() {
  useEffect(() => {
    const testSupabaseConnection = async () => {
      try {
        console.log('Testing Supabase connection...');
        console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL ? 'Set' : 'Not set');
        console.log('Supabase Key:', process.env.REACT_APP_SUPABASE_KEY ? 'Set' : 'Not set');
        
        // Test a simple query
        const { data, error } = await supabase.from('routes').select('*').limit(1);
        
        if (error) {
          console.error('Supabase query error:', error);
        } else {
          console.log('Supabase connection successful!');
          console.log('Data:', data);
        }
      } catch (err) {
        console.error('Supabase connection failed:', err);
      }
    };

    testSupabaseConnection();
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
