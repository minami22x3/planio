import { forwardRef, type ComponentProps } from 'react';

import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(({ className, type, ...props }, ref) => {
  return <input className={cn('input', className)} type={type} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input };
