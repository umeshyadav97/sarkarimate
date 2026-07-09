import Image from 'next/image';
import { cn } from '@/lib/classnames';

interface BrandShieldIconProps {
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export function BrandShieldIcon({ className, ...props }: BrandShieldIconProps) {
  return (
    <Image
      src="/assets/images/shield-check.png"
      alt=""
      width={64}
      height={64}
      className={cn('object-contain', className)}
      aria-hidden={props['aria-hidden']}
    />
  );
}
