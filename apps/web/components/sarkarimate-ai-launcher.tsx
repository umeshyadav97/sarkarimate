'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { SarkariMateAIAvatar } from '@/components/sarkarimate-ai-avatar';
import {
  aiAssistantActions,
  SarkariMateAIDrawer,
  type AIAssistantAction,
} from '@/components/sarkarimate-ai-drawer';

export function SarkariMateAILauncher() {
  const [activeAction, setActiveAction] = useState<AIAssistantAction | null>(null);

  return (
    <>
      <button
        type="button"
        className="sarkarimate-ai-launcher fixed bottom-5 right-5 z-40 grid h-20 w-20 place-items-center rounded-full border border-blue-200 bg-white text-[#1D4ED8] shadow-[0_16px_38px_rgba(29,78,216,0.22)] transition hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
        aria-label="Open SarkariMate AI assistant"
        onClick={() => setActiveAction(aiAssistantActions[0])}
      >
        <span className="absolute inset-0 rounded-full bg-blue-400/15" aria-hidden="true" />
        <span
          className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-[#1D4ED8] text-white shadow-sm"
          aria-hidden="true"
        >
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <SarkariMateAIAvatar size="sm" className="relative" />
      </button>

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
