import { type Metadata, type NextPage } from 'next';

import { LoginForm } from '@/app/login/_components';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Login | Plan.io',
};

const Login: NextPage = () => {
  return (
    <div className="relative mx-4 flex h-[100dvh] max-w-[624px] flex-col justify-start gap-y-[90px] md:mx-auto">
      <div className="mt-8 flex w-full items-center justify-between md:mt-12">
        <h1 className="font-bold">Plan.io</h1>
        <Button className="!px-0" variant="link">
          Create an account
        </Button>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
