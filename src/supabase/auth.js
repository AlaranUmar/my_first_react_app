import { supabase } from "./client";
export async function signUpWithEmail(email, password, userfullname) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userfullname,
        role: "user",
      },
    },
  });
  if (error) throw error;
  return data;
}
export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "http://localhost:5173/dashboard" },
  });
  if (error) throw error;
  return data;
}
export async function getUserProfile() {
  const user = await supabase.auth.getUser();
  return user;
}
export async function logOut() {
  await supabase.auth.signOut();
}
