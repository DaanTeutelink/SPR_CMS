import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase environment variables are not set. Please create a .env file with REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY');
}

export const supabase = createClient(supabaseUrl || '', supabaseKey || '');
