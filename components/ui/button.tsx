import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

const buttonVariants = cva('button', {
  variants: {
    variant: {
      default: '-variant-default',
      secondary: '-variant-secondary',
      destructive: '-variant-destructive',
      outline: '-variant-outline',
      ghost: '-variant-ghost',
      link: '-variant-link',
    },
    size: {
      default: '-size-default',
      sm: '-size-sm',
      lg: '-size-lg',
      icon: '-size-icon',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
