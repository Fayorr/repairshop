'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ButtonHTMLAttributes } from 'react';

type BackButtonProps = {
  title: string;
  className?: string;
  variant?:
    | 'default'
    | 'outline'
    | 'ghost'
    | 'link'
    | 'destructive'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;
//ButtonHTMLAttributes<HTMLButtonElement> allows your custom button component to inherit all the default props and behavior of a native <button> element — like onClick, disabled, type, aria-* attributes, and more.
// ...props allows you to pass in additional props to the button component

export function BackButton({
  title,
  className,
  variant,
  ...props
}: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className={className}
      variant={variant}
      title={title}
      {...props}
    >
      {title}
    </Button>
  );
}
