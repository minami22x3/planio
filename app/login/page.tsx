import { type Metadata, type NextPage } from 'next';

import { loginWithGoogle } from '@/app/login/actions';
import { Apple, Google } from '@/components/icons';
import { Button, Input, InputContainer, InputStartAddOn } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Login | Plan.io',
};

const Login: NextPage = () => {
  return (
    <>
      {/* container */}
      <div className="relative mx-4 flex h-[100dvh] max-w-[624px] flex-col justify-center md:mx-auto md:justify-start">
        <div className="absolute top-8 flex w-full items-center justify-between">
          <h1 className="font-bold">Plan.io</h1>
          <Button className="!px-0" variant="link">
            Create an account
          </Button>
        </div>

        {/* login form */}
        <div className="md:mt-[188px]">
          <h1 className="mb-2 font-bold">Login</h1>
          <p className="text-caption">Sign in if you already have an account.</p>

          {/* button login google and apple */}
          <div className="my-4 flex gap-3">
            <Button variant="outline" className="flex-1" onClick={loginWithGoogle}>
              <Google />
              Log in with Google
            </Button>
            <Button variant="outline" className="flex-1">
              <Apple />
              Log in with Apple
            </Button>
          </div>

          <div className="my-4 flex items-center gap-3">
            <div className="h-[1px] flex-1 bg-line"></div>
            <p>or</p>
            <div className="h-[1px] flex-1 bg-line"></div>
          </div>
          <form className="flex flex-col gap-4">
            <InputContainer>
              <InputStartAddOn>
                <span className="w-[10ch]">Email</span>
              </InputStartAddOn>
              <Input />
            </InputContainer>
            <InputContainer>
              <InputStartAddOn>
                <span className="w-[10ch]">Password</span>
              </InputStartAddOn>
              <Input />
            </InputContainer>

            <Button size="lg">Continue</Button>
            <Button className="self-start !px-0" variant="link">
              Forgot your password?
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
