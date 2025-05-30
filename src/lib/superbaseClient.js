import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://imcsotitcoqjopyeteiq.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltY3NvdGl0Y29xam9weWV0ZWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjQ3MjcsImV4cCI6MjA2NDE0MDcyN30.tkpdtNoCHKZ6qGn7qUlBipR6xsuT6i6HFooE66-qXLo'
);
