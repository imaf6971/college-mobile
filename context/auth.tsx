import { useRouter, useSegments } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextValue = {
  signIn: () => void;
  signOut: () => void;
  user: {};
}

const AuthContext = createContext<AuthContextValue>(null);

export function useAuth() {
  return useContext(AuthContext)
}

function useProtectedRoute(user: any) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      router.replace("/");
    }
  }, [user, segments])
}

export function Provider({ children }) {
  const [user, setAuth] = useState({});

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setAuth({}),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
