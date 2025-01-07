import { forwardRef, type ComponentProps, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(({ className, type, ...props }, ref) => (
  <input className={cn('input', className)} type={type} ref={ref} {...props} />
));
Input.displayName = 'Input';

const InputContainer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('input-container', className)} {...props} />
);
InputContainer.displayName = 'InputContainer';

const InputStartAddOn = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('input-start-add-on', className)} {...props} />
);
InputStartAddOn.displayName = 'InputStartAddOn';

const InputEndAddOn = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('input-end-add-on', className)} {...props} />
);
InputEndAddOn.displayName = 'InputEndAddOn';

export { Input, InputContainer, InputEndAddOn, InputStartAddOn };
