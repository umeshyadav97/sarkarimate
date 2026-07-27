'use client';

import { Bookmark, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';
// import { useBookmark } from '@/hooks/useBookmark';
import { useShare } from '@/hooks/useShare';

interface HeaderActionsProps {
  title: string;
  description: string;
  canonicalPath: string;
  bookmarkKey: string;
}

export function HeaderActions({
  title,
  description,
  canonicalPath,
  bookmarkKey,
}: HeaderActionsProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { copied, share } = useShare();
  // const { isBookmarked, toggleBookmark } = useBookmark(bookmarkKey);
  const displayCopied = hasMounted && copied;
  // const displayBookmarked = hasMounted && isBookmarked;
  const url = `https://sarkarimate.com${canonicalPath}`;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <button
        className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-bold text-slate-700 outline-none hover:bg-blue-50 hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
        type="button"
        suppressHydrationWarning
        onClick={() => void share({ title, text: description, url })}
        aria-label={displayCopied ? 'Link copied' : 'Share this page'}
      >
        <Share2 className="h-4 w-4" aria-hidden="true" />
        {displayCopied ? 'Copied' : 'Share'}
      </button>
      {/* <button
        className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-bold text-slate-700 outline-none hover:bg-blue-50 hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
        type="button"
        onClick={toggleBookmark}
        aria-pressed={displayBookmarked}
      >
        <Bookmark
          className={displayBookmarked ? 'h-4 w-4 fill-[#1D4ED8]' : 'h-4 w-4'}
          aria-hidden="true"
        />
        {displayBookmarked ? 'Saved' : 'Save'}
      </button> */}
    </div>
  );
}
