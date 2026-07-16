import type { SVGProps } from 'react';

export function SscEmblemIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="18" fill="#FFF7ED" />
      <path
        d="M24 11c5.2 4.1 8 8.2 8 13.3 0 6.1-4 10.8-8 12.7-4-1.9-8-6.6-8-12.7C16 19.2 18.8 15.1 24 11Z"
        fill="#F59E0B"
      />
      <path
        d="M24 14.8c3.5 3.1 5.4 6 5.4 9.5 0 4.2-2.5 7.5-5.4 9.1-2.9-1.6-5.4-4.9-5.4-9.1 0-3.5 1.9-6.4 5.4-9.5Z"
        fill="#DC2626"
      />
      <path
        d="M24 18.5c1.9 1.9 3 3.6 3 5.8 0 2.7-1.4 4.8-3 6-1.6-1.2-3-3.3-3-6 0-2.2 1.1-3.9 3-5.8Z"
        fill="#FBBF24"
      />
      <path
        d="M13 35.5c3.2 2.8 6.9 4.2 11 4.2s7.8-1.4 11-4.2"
        stroke="#F59E0B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PoliceBadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24 6 9 11v11.4C9 32.6 15.4 40.2 24 43c8.6-2.8 15-10.4 15-20.6V11L24 6Z"
        fill="#EAF2FF"
        stroke="#1D4ED8"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 13.5 26.4 20l6.8.2-5.4 4.2 1.9 6.6-5.7-3.8-5.7 3.8 1.9-6.6-5.4-4.2 6.8-.2L24 13.5Z"
        fill="#1D4ED8"
      />
    </svg>
  );
}

export function DefenceBadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24 5 11 10v9.2c0 10 5.4 18.1 13 22.8 7.6-4.7 13-12.8 13-22.8V10L24 5Z"
        fill="#EFF6FF"
        stroke="#1D4ED8"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M24 12v23" stroke="#1D4ED8" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M17 17h14l-2 5H19l-2-5Z" fill="#1D4ED8" stroke="#1D4ED8" strokeLinejoin="round" />
      <path d="M18 28h12" stroke="#1D4ED8" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
