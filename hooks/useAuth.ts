// hooks/useAuth.ts
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAuth() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null); // null = loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // You can later replace this with Firebase or Supabase logic
        const token = await AsyncStorage.getItem("userToken");
        setIsAuth(!!token);
      } catch (err) {
        console.error("Auth check failed", err);
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuth, loading };
}
