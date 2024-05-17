import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xwsvauywctoztelahsgl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3c3ZhdXl3Y3RvenRlbGFoc2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4NTEyOTcsImV4cCI6MjAzMTQyNzI5N30.RFV7HtaxQZxlusMIFOwUrbMNk5QOk_v-6tqxphEGeQ0'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase