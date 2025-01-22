'use server';

import { redirect } from 'next/navigation';

import { getBaseUrl } from '@/lib';
import { createClient } from '@/lib/supabase/server';

export const googleLogin = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${getBaseUrl()}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if (data.url) redirect(data.url);
};

export const logout = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut({ scope: 'local' });
  if (!error) redirect('/login');
};
