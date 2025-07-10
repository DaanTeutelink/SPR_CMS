import './App.css';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

function App() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      const { data, error } = await supabase.from('"Routes"').select('*');
      if (error) {
        console.error('Supabase error:', error);
      } else {
        setRoutes(data);
      }
    };
    fetchRoutes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {routes.length === 0 ? (
            <li>Geen routes gevonden.</li>
          ) : (
            routes.map(route => (
              <li key={route.id}>
                {route["Route ID"] || route.id}
              </li>
            ))
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
