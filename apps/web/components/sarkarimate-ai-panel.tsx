'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SarkariMateAIAvatar } from '@/components/sarkarimate-ai-avatar';
import {
  aiAssistantActions,
  SarkariMateAIDrawer,
  type AIAssistantAction,
} from '@/components/sarkarimate-ai-drawer';
import { cn } from '@/lib/classnames';

interface SarkariMateAIPanelProps {
  className?: string;
}

const speechBubbleLines = ['Ask.', 'Search.', 'Understand.', 'Decide Better.'];

export function SarkariMateAIPanel({ className }: SarkariMateAIPanelProps) {
  const [activeAction, setActiveAction] = useState<AIAssistantAction | null>(null);
  const [typedLines, setTypedLines] = useState<string[]>(['', '', '', '']);
  const [activeTypingLine, setActiveTypingLine] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedLines(speechBubbleLines);
      return undefined;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextCharacter = () => {
      const currentLine = speechBubbleLines[lineIndex];

      setActiveTypingLine(lineIndex);
      setTypedLines((previousLines) =>
        previousLines.map((line, index) =>
          index === lineIndex ? currentLine.slice(0, charIndex + 1) : line,
        ),
      );

      charIndex += 1;

      if (charIndex < currentLine.length) {
        timeoutId = setTimeout(typeNextCharacter, 64);
        return;
      }

      lineIndex += 1;
      charIndex = 0;

      if (lineIndex < speechBubbleLines.length) {
        timeoutId = setTimeout(typeNextCharacter, 260);
        return;
      }

      timeoutId = setTimeout(() => {
        lineIndex = 0;
        charIndex = 0;
        setTypedLines(['', '', '', '']);
        setActiveTypingLine(0);
        timeoutId = setTimeout(typeNextCharacter, 240);
      }, 2200);
    };

    timeoutId = setTimeout(typeNextCharacter, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <section
        className={cn(
          'rounded-xl border border-[#BFDBFE] bg-white px-5 py-3 shadow-[0_6px_22px_rgba(15,23,42,0.06)]',
          'bg-[linear-gradient(105deg,#FCEEFF_0%,#FFFFFF_46%,#EAF4FF_100%)]',
          'md:flex md:min-h-20 md:items-center md:justify-between md:gap-5',
          className,
        )}
        aria-labelledby="sarkarimate-ai-panel-title"
      >
        <div className="flex min-w-0 items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/80 text-[#1D4ED8] shadow-sm ring-1 ring-blue-100">
            <Sparkles className="h-7 w-7" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2
                id="sarkarimate-ai-panel-title"
                className="text-lg font-bold leading-tight text-[#1D4ED8] sm:text-xl"
              >
                SarkariMate AI
              </h2>
              <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-700 ring-1 ring-green-200">
                New
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
              Get instant answers, job suggestions, eligibility checks, PDF summaries and more.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 md:mt-0 md:flex-row md:items-center md:gap-4">
          <div className="hidden items-center lg:flex">
            <SarkariMateAIAvatar size="lg" className="z-10 mr-4" />
            <div className="relative h-[92px] w-[150px] shrink-0 rounded-[1.35rem] border border-blue-100 bg-white px-4 py-2.5 text-xs font-bold leading-4 text-[#1D4ED8] shadow-[0_7px_18px_rgba(29,78,216,0.12)]">
              <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 border-b border-l border-blue-100 bg-white" />
              <div className="flex h-full flex-col justify-center">
                {speechBubbleLines.map((line, index) => (
                  <span key={line} className="block min-h-4 whitespace-nowrap">
                    {typedLines[index]}
                    {activeTypingLine === index && typedLines[index].length < line.length ? (
                      <span className="sarkarimate-ai-cursor" aria-hidden="true" />
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-1.5 sm:flex-col md:flex-row">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full cursor-pointer bg-[linear-gradient(180deg,#2563EB_0%,#1D4ED8_100%)] px-7 text-sm font-bold text-white shadow-[0_10px_24px_rgba(29,78,216,0.24)] transition hover:bg-[#1E40AF] focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
              onClick={() => setActiveAction(aiAssistantActions[0])}
            >
              Ask SarkariMate
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex min-h-7 items-center justify-center gap-2 rounded-full cursor-pointer px-4 text-xs font-bold text-[#1D4ED8] hover:bg-white/70"
              onClick={() => setActiveAction(aiAssistantActions[1])}
            >
              See what AI can do
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {activeAction ? (
        <SarkariMateAIDrawer
          activeAction={activeAction}
          onActionChange={setActiveAction}
          onClose={() => setActiveAction(null)}
        />
      ) : null}
    </>
  );
}
