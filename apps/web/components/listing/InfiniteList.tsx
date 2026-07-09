import type { RefObject } from 'react';

interface InfiniteListProps {
  hasMore: boolean;
  isLoadingMore: boolean;
  sentinelRef: RefObject<HTMLDivElement | null>;
}

export function InfiniteList({ hasMore, isLoadingMore, sentinelRef }: InfiniteListProps) {
  return (
    <div className="border-t border-slate-200 px-4 py-5 text-center" ref={sentinelRef}>
      {isLoadingMore ? (
        <div className="space-y-3" aria-label="Loading more listings">
          {[1, 2, 3].map((row) => (
            <div key={row} className="h-11 animate-pulse rounded-lg bg-slate-100" />
          ))}
        </div>
      ) : null}
      {!hasMore && !isLoadingMore ? (
        <p className="text-sm font-semibold text-slate-600">You&apos;ve reached the end</p>
      ) : null}
    </div>
  );
}
