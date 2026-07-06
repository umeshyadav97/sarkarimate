import * as React from 'react';

export function Pagination({ children }: React.PropsWithChildren) {
  return <nav className="flex gap-2">{children}</nav>;
}
