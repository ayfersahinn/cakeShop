import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jmbfbcvuuldcvksiftzv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptYmZiY3Z1dWxkY3Zrc2lmdHp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5NDU1NzQsImV4cCI6MjA5MTUyMTU3NH0.CGRUFdGK77ATL6IKYn79oZoPZgcZpVbiNtQLvsFRg-0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
