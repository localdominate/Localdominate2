import { useState, useEffect, useCallback } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AdminAuthState {
  user: User | null;
  session: Session | null;
  isAdmin: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAdminAuth() {
  const [state, setState] = useState<AdminAuthState>({
    user: null,
    session: null,
    isAdmin: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setState(prev => ({
          ...prev,
          session,
          user: session?.user ?? null,
        }));

        // Check admin role after auth state changes (deferred)
        if (session?.user) {
          setTimeout(() => {
            checkAdminRole(session.user.id);
          }, 0);
        } else {
          setState(prev => ({
            ...prev,
            isAdmin: false,
            isLoading: false,
          }));
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setState(prev => ({
        ...prev,
        session,
        user: session?.user ?? null,
      }));

      if (session?.user) {
        checkAdminRole(session.user.id);
      } else {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      if (error) {
        console.error('Error checking admin role:', error);
        setState(prev => ({
          ...prev,
          isAdmin: false,
          isLoading: false,
          error: 'Failed to verify admin status',
        }));
        return;
      }

      setState(prev => ({
        ...prev,
        isAdmin: !!data,
        isLoading: false,
        error: null,
      }));
    } catch (err) {
      console.error('Error in checkAdminRole:', err);
      setState(prev => ({
        ...prev,
        isAdmin: false,
        isLoading: false,
        error: 'Failed to verify admin status',
      }));
    }
  };

  const signIn = useCallback(async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: error.message === 'Invalid login credentials'
            ? 'Ungültige Anmeldedaten'
            : error.message,
        }));
        return { success: false, error: error.message };
      }

      // Admin role check will happen in onAuthStateChange
      return { success: true, error: null };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      return { success: false, error: errorMessage };
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      setState({
        user: null,
        session: null,
        isAdmin: false,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      console.error('Error signing out:', err);
    }
  }, []);

  return {
    ...state,
    signIn,
    signOut,
    isAuthenticated: !!state.user,
  };
}