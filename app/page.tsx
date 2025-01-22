import { type NextPage } from 'next';

import { logout } from '@/app/login/actions';
import { Button } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';

const Home: NextPage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-2">
      <h1 className="font-bold">Plan.io</h1>
      <h3 className="font-bold">Welcome, {user?.user_metadata?.full_name}</h3>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Home;
