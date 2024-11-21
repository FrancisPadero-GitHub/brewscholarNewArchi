import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Replace these with your Supabase URL and anon key
const SUPABASE_URL = "https://jcdthscucdbbwmrwcaxt.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZHRoc2N1Y2RiYndtcndjYXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5OTU0NTUsImV4cCI6MjA0NzU3MTQ1NX0.ByiaQtR8R2eTGIQg02dQ8jllStm6AU-i6G1T_rTJo6o";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage, // Use AsyncStorage for session persistence
    autoRefreshToken: true, // Automatically refresh token when expired
    persistSession: true, // Save the session for future use
    detectSessionInUrl: false, // No URL detection in React Native
  },
});
