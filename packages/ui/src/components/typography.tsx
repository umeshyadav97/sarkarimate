import * as React from 'react';

export function Typography({
  className = '',
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <p className={className}>{children}</p>;
}
