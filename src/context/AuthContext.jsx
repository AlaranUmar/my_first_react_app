import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";

export const AuthContext = createContext();
function AuthProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const session = supabase.auth.getSession().then(({data}) =>);
  });
  return <div>AuthProvider</div>;
}

export default AuthProvider;
