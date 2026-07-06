import * as React from 'react';

export function Table({ children }: React.PropsWithChildren) {
  return <table className="w-full border-collapse text-left">{children}</table>;
}
