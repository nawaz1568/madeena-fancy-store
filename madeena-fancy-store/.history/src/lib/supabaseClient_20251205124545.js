import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

console.log('🔧 Supabase Config:')
console.log('URL:', supabaseUrl)
console.log('Key:', supabaseAnonKey ? 'Present' : 'Missing')
console.log('Using real Supabase client')

// Create a mock client if no real credentials
const createMockClient = () => ({
  auth: {
    getSession: () => {
      console.log('🔄 Mock: getSession called')
      return Promise.resolve({ data: { session: null } })
    },
    onAuthStateChange: (callback) => {
      console.log('🔄 Mock: onAuthStateChange called')
      callback('SIGNED_OUT', null)
      return { data: { subscription: { unsubscribe: () => {} } } }
    },
    signUp: (credentials) => {
      console.log('🔄 Mock: signUp called with:', credentials.email)
      // Mock successful signup
      const mockUser = {
        id: 'mock-user-id',
        email: credentials.email,
        created_at: new Date().toISOString(),
        user_metadata: {
          full_name: credentials.options?.data?.full_name || 'User'
        }
      }
      return Promise.resolve({ 
        data: { user: mockUser }, 
        error: null 
      })
    },
    signInWithPassword: (credentials) => {
      console.log('🔄 Mock: signInWithPassword called with:', credentials.email)
      // Mock successful login
      const mockUser = {
        id: 'mock-user-id',
        email: credentials.email,
        created_at: new Date().toISOString(),
        user_metadata: {
          full_name: 'Returning User'
        }
      }
      return Promise.resolve({ 
        data: { user: mockUser, session: { user: mockUser } }, 
        error: null 
      })
    },
    signOut: () => {
      console.log('🔄 Mock: signOut called')
      return Promise.resolve({ error: null })
    }
  }
})

// Use real Supabase with your credentials
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    flowType: 'implicit'
  }
})