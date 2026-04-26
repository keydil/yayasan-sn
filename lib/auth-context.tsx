'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabase';

interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Fallback demo password jika Supabase belum tersetup
const DEMO_PASSWORD = 'admin123';
const DEMO_EMAIL = 'yayasan.sn@gmail.com';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useLocalAuth, setUseLocalAuth] = useState(true);

  // Check session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        // Try Supabase auth first
        const { data, error: authError } = await supabase.auth.getSession();
        
        if (!authError && data.session?.user) {
          setIsAuthenticated(true);
          setUserEmail(data.session.user.email || null);
          setUseLocalAuth(false);
        } else {
          // Fallback to localStorage if Supabase not ready
          if (typeof window !== 'undefined') {
            const storedAuth = localStorage.getItem('yayasan_auth');
            const storedEmail = localStorage.getItem('yayasan_email');
            setIsAuthenticated(storedAuth === 'true');
            setUserEmail(storedEmail);
          }
        }
      } catch (err) {
        // If Supabase fails, use local storage
        if (typeof window !== 'undefined') {
          const storedAuth = localStorage.getItem('yayasan_auth');
          const storedEmail = localStorage.getItem('yayasan_email');
          setIsAuthenticated(storedAuth === 'true');
          setUserEmail(storedEmail);
        }
      }
      setIsLoading(false);
    };

    checkSession();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setError(null);

      // Try Supabase auth first
      if (useLocalAuth) {
        const { data, error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (!authError && data.session?.user) {
          setIsAuthenticated(true);
          setUserEmail(data.session.user.email || null);
          setUseLocalAuth(false);
          return true;
        }
      }

      // Fallback to demo credentials
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        setIsAuthenticated(true);
        setUserEmail(email);
        localStorage.setItem('yayasan_auth', 'true');
        localStorage.setItem('yayasan_email', email);
        return true;
      }

      setError('Email atau password salah');
      return false;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login gagal';
      setError(message);
      return false;
    }
  };

  const logout = async () => {
    try {
      if (!useLocalAuth) {
        await supabase.auth.signOut();
      }
      setIsAuthenticated(false);
      setUserEmail(null);
      localStorage.removeItem('yayasan_auth');
      localStorage.removeItem('yayasan_email');
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Logout gagal';
      setError(message);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
