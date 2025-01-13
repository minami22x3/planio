'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';

import { Button, Input, InputContainer, InputStartAddOn } from '@/components/ui';
import Apple from '@/public/svgs/apple.svg';
import Google from '@/public/svgs/google.svg';

type FieldValues = {
  username: string;
  password: string;
};

const Login = () => {
  const { handleSubmit } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

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
            <Button variant="outline" className="flex-1">
              <Google />
              <span>Log in with Google</span>
            </Button>
            <Button variant="outline" className="flex-1">
              <Apple />
              <span>Log in with Apple</span>
            </Button>
          </div>

          <div className="my-4 flex items-center gap-3">
            <div className="bg-line h-[1px] flex-1"></div>
            <p>or</p>
            <div className="bg-line h-[1px] flex-1"></div>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
