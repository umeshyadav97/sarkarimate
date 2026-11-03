'use client';

import { cn } from '@/lib/classnames';

interface SarkariMateAIAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function SarkariMateAIAvatar({
  className,
  size = 'md',
  animated = true,
}: SarkariMateAIAvatarProps) {
  const scale = size === 'sm' ? 'scale-[0.66]' : size === 'lg' ? 'scale-[0.95]' : 'scale-[0.82]';

  return (
    <span
      className={cn(
        'relative block h-[90px] w-[90px] shrink-0',
        scale,
        animated && 'animate-ai-float',
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute bottom-[4px] left-1/2 h-[18px] w-[62px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-md" />

      <span className="absolute left-1/2 top-[1px] z-20 -translate-x-1/2">
        <span className="block h-[7px] w-[3px] rounded-full bg-blue-700" />
        <span className="absolute -left-[2px] -top-[3px] h-[7px] w-[7px] rounded-full bg-blue-600 shadow-[0_0_5px_rgba(37,99,235,0.5)]" />
      </span>

      <span className="absolute left-[4px] top-[23px] z-10 h-[25px] w-[14px] rounded-l-[10px] rounded-r-md border border-blue-100 bg-gradient-to-b from-blue-100 to-blue-300 shadow-sm">
        <span className="absolute right-[2px] top-1/2 h-[13px] w-[4px] -translate-y-1/2 rounded-full bg-blue-500" />
      </span>

      <span className="absolute right-[4px] top-[23px] z-10 h-[25px] w-[14px] rounded-l-md rounded-r-[10px] border border-blue-100 bg-gradient-to-b from-blue-100 to-blue-300 shadow-sm">
        <span className="absolute left-[2px] top-1/2 h-[13px] w-[4px] -translate-y-1/2 rounded-full bg-blue-500" />
      </span>

      <span className="absolute left-1/2 top-[10px] z-20 h-[48px] w-[67px] -translate-x-1/2 rounded-[24px] border-[2px] border-blue-100 bg-gradient-to-b from-white via-white to-blue-50 shadow-[0_6px_12px_rgba(30,64,175,0.16)]">
        <span className="absolute left-1/2 top-[9px] h-[29px] w-[51px] -translate-x-1/2 overflow-hidden rounded-[16px] bg-gradient-to-b from-[#09234c] to-[#06152f] shadow-inner">
          <span className="absolute left-[7px] top-[3px] h-[4px] w-[27px] rotate-[-5deg] rounded-full bg-white/10 blur-[1px]" />

          <span className="ai-eye absolute left-[11px] top-[10px] h-[8px] w-[8px] rounded-full bg-[#59e8ff] shadow-[0_0_8px_rgba(89,232,255,0.95)]" />
          <span className="ai-eye absolute right-[11px] top-[10px] h-[8px] w-[8px] rounded-full bg-[#59e8ff] shadow-[0_0_8px_rgba(89,232,255,0.95)]" />

          <span className="absolute bottom-[5px] left-1/2 h-[4px] w-[11px] -translate-x-1/2 rounded-b-full border-b-[2px] border-cyan-300/90" />
        </span>
      </span>

      <span
        className={cn(
          'absolute left-[5px] top-[52px] z-10 h-[14px] w-[27px] origin-right rotate-[25deg] rounded-full border border-blue-100 bg-gradient-to-r from-blue-100 to-white shadow-sm',
          animated && 'animate-ai-left-arm',
        )}
      >
        <span className="absolute -left-[4px] top-1/2 h-[13px] w-[13px] -translate-y-1/2 rounded-full border border-blue-100 bg-white shadow-sm" />
      </span>

      <span
        className={cn(
          'absolute right-[8px] top-[30px] z-30 h-[34px] w-[14px] origin-bottom rotate-[28deg] rounded-full border border-blue-100 bg-gradient-to-b from-white to-blue-100 shadow-sm',
          animated && 'animate-ai-present',
        )}
      >
        <span className="absolute -top-[8px] left-1/2 h-[18px] w-[18px] -translate-x-1/2 rounded-full border border-blue-100 bg-white shadow-sm" />
      </span>

      <span className="absolute bottom-[8px] left-1/2 z-20 h-[35px] w-[45px] -translate-x-1/2 rounded-[18px_18px_14px_14px] border-[2px] border-blue-100 bg-gradient-to-b from-white via-white to-blue-100 shadow-[0_6px_10px_rgba(30,64,175,0.14)]">
        <span className="absolute left-1/2 top-[8px] h-[12px] w-[18px] -translate-x-1/2 rounded-[50%] border border-blue-200 bg-blue-50">
          <span
            className={cn(
              'absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500',
              animated && 'animate-pulse shadow-[0_0_7px_rgba(59,130,246,0.8)]',
            )}
          />
        </span>

        <span className="absolute bottom-[7px] left-1/2 h-[2px] w-[20px] -translate-x-1/2 rounded-full bg-blue-100" />
      </span>

      <span className="absolute bottom-[2px] left-[25px] z-10 h-[11px] w-[18px] rotate-[6deg] rounded-[50%] border border-blue-100 bg-white shadow-sm" />
      <span className="absolute bottom-[2px] right-[25px] z-10 h-[11px] w-[18px] -rotate-[6deg] rounded-[50%] border border-blue-100 bg-white shadow-sm" />
    </span>
  );
}
