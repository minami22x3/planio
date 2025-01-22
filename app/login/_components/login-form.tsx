import { googleLogin } from '@/app/login/actions';
import { Apple, Google } from '@/components/icons';
import { Button, Input, InputContainer, InputStartAddOn } from '@/components/ui';

export const LoginForm = () => {
  return (
    <div>
      <h1 className="mb-2 font-bold">Login</h1>
      <p className="text-caption">Sign in if you already have an account.</p>
      <div className="my-4 flex gap-3">
        <Button className="flex-1" variant="outline" onClick={googleLogin}>
          <Google />
          Log in with Google
        </Button>
        <Button className="flex-1" variant="outline">
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
  );
};
