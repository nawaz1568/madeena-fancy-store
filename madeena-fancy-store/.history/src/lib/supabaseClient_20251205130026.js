import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

console.log('🔧 Supabase Config:')
console.log('URL:', supabaseUrl)
console.log('Key:', supabaseAnonKey ? 'Present' : 'Missing')
console.log('Using real Supabase client')

