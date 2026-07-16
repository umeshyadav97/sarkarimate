import Image from 'next/image';
import { cn } from '@/lib/classnames';

interface BrandShieldIconProps {
  className?: string;
  variant?: 'light' | 'dark';
  'aria-hidden'?: boolean | 'true' | 'false';
}

export function BrandShieldIcon({ className, variant = 'light', ...props }: BrandShieldIconProps) {
  return (
    <Image
      src={
        variant === 'dark' ? '/assets/images/brand-logo-dark.png' : '/assets/images/brand-logo.png'
      }
      alt=""
      width={64}
      height={64}
      className={cn('object-contain', className)}
      aria-hidden={props['aria-hidden']}
    />
  );
}
