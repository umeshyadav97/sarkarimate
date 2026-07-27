'use client';

import { Copy, Share2 } from 'lucide-react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useShare } from '@/hooks/useShare';

interface ShareCardProps {
  heading: string;
  title: string;
  description: string;
  canonicalPath: string;
}

export function ShareCard({ heading, title, description, canonicalPath }: ShareCardProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { copied, share } = useShare();
  const displayCopied = hasMounted && copied;
  const url = `https://sarkarimate.com${canonicalPath}`;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#111827]">
        <Share2 className="h-5 w-5 text-[#1D4ED8]" strokeWidth={2.4} aria-hidden="true" />
        {heading}
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
          className="grid h-11 w-11 place-items-center rounded-full bg-[#009A44] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          className="grid h-11 w-11 place-items-center rounded-full bg-[#1D4ED8] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          aria-label="Share on Facebook"
        >
          <FaFacebookF className="h-5 w-5" aria-hidden="true" />
        </a>
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => void share({ title, text: description, url })}
          className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-700 outline-none hover:bg-blue-50 hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          aria-label={displayCopied ? 'Link copied' : 'Copy or share link'}
        >
          <Copy className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
