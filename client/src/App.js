import { useState, useEffect } from 'react';
import { supabase } from './supabase';

function App() {
  const [routes, setRoutes] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchRoutes();
  }, []);

  async function fetchRoutes() {
    const { data } = await supabase.from('routes').select();
    setRoutes(data);
  }

  async function addRoute() {
    await supabase.from('routes').insert({ name, date: new Date() });
    setName("");
    fetchRoutes();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Wasserij Routes</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Naam route" />
      <button onClick={addRoute}>Toevoegen</button>

      <ul>
        {routes.map(r => (
          <li key={r.id}>{r.name} – {r.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
