import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jwcaojhpbituvbblmomb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3Y2FvamhwYml0dXZiYmxtb21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNDIxMDQsImV4cCI6MjA2NzcxODEwNH0.e1N9xQnH9fqu0a1e6_JkM5ncls4IMXRbG7rhAs3nMRM';
export const supabase = createClient(supabaseUrl, supabaseKey);
