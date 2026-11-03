'use client';

import { useState } from 'react';
import type { ElementType } from 'react';
import {
  Bot,
  Briefcase,
  CheckCircle,
  Languages,
  FileText,
  History,
  MessageSquare,
  Search,
  Send,
  Upload,
  X,
} from 'lucide-react';
import { SarkariMateAIAvatar } from '@/components/sarkarimate-ai-avatar';
import { cn } from '@/lib/classnames';

export interface AIAssistantAction {
  id: string;
  label: string;
  description: string;
  icon: ElementType;
}

interface SarkariMateAIDrawerProps {
  activeAction: AIAssistantAction;
  onActionChange: (action: AIAssistantAction) => void;
  onClose: () => void;
}

export const aiAssistantActions: AIAssistantAction[] = [
  {
    id: 'ask',
    label: 'Find jobs for me',
    description: 'Get job suggestions based on your profile',
    icon: Briefcase,
  },
  {
    id: 'summarize',
    label: 'Check my eligibility',
    description: 'Find out if you are eligible for a job',
    icon: CheckCircle,
  },
  {
    id: 'eligibility',
    label: 'Summarize a notification',
    description: 'Upload PDF and get a simple summary',
    icon: FileText,
  },
  {
    id: 'jobs',
    label: 'Explain in Hindi',
    description: 'Get easy Hindi explanation',
    icon: Languages,
  },
  {
    id: 'compare',
    label: 'Compare two jobs',
    description: 'Compare salary, eligibility, dates, etc.',
    icon: MessageSquare,
  },
];

const quickPrompts = [
  'Latest 10th pass jobs?',
  'How to apply for SSC CGL?',
  'UP Anganwadi vacancy details?',
  'Which jobs are open now?',
  'How to download admit card?',
];

const drawerTabs = [
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'history', label: 'History', icon: History },
] as const;

type DrawerTab = (typeof drawerTabs)[number]['id'];

export function SarkariMateAIDrawer({
  activeAction,
  onActionChange,
  onClose,
}: SarkariMateAIDrawerProps) {
  const [activeTab, setActiveTab] = useState<DrawerTab>('chat');

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/40"
        aria-label="Close SarkariMate AI"
        onClick={onClose}
      />

      <aside className="absolute right-0 top-0 flex h-dvh w-full max-w-sm flex-col bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-200 px-4 py-3">
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#1D4ED8]">
              <Bot className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-sm font-bold text-[#111827]">SarkariMate AI</h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">{activeAction.label}</p>
            </div>
          </div>

          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#1D4ED8]"
            aria-label="Close SarkariMate AI"
            onClick={onClose}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex gap-2 border-b border-slate-200 px-4 py-2.5">
          {drawerTabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.label}
                type="button"
                className={cn(
                  'inline-flex min-h-8 flex-1 items-center justify-center gap-2 rounded-lg px-3 text-xs font-bold',
                  activeTab === tab.id
                    ? 'bg-[#1D4ED8] text-white'
                    : 'border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[#1D4ED8]',
                )}
                aria-pressed={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto bg-slate-50 p-3">
          {activeTab === 'chat' ? (
            <ChatDrawerContent activeAction={activeAction} onActionChange={onActionChange} />
          ) : (
            <HistoryDrawerContent onPromptSelect={() => setActiveTab('chat')} />
          )}
        </div>

        {activeTab === 'chat' ? (
          <div className="border-t border-slate-200 bg-white p-3">
            <button
              type="button"
              className="mb-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 text-sm font-bold text-[#1D4ED8] hover:bg-blue-100"
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              Upload Notification PDF
            </button>

            <form className="flex gap-2" onSubmit={(event) => event.preventDefault()}>
              <div className="relative flex-1">
                <label className="sr-only" htmlFor="sarkarimate-ai-question">
                  Type your question
                </label>
                <input
                  id="sarkarimate-ai-question"
                  className="min-h-10 w-full rounded-lg border border-slate-200 px-3 pr-11 text-sm font-medium text-[#111827] outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                  placeholder="Type your question here..."
                />
                <button
                  type="button"
                  className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-md text-[#1D4ED8] hover:bg-blue-50"
                  aria-label="Upload notification PDF"
                >
                  <Upload className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <button
                type="submit"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#1D4ED8] text-white hover:bg-[#1E40AF]"
                aria-label="Send question"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

function ChatDrawerContent({
  activeAction,
  onActionChange,
}: {
  activeAction: AIAssistantAction;
  onActionChange: (action: AIAssistantAction) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
        <div className="-mb-1 -mt-2 flex h-12 items-center justify-center overflow-visible">
          <SarkariMateAIAvatar size="sm" className="scale-[0.48]" />
        </div>
        <p className="text-sm font-bold text-[#111827]">Hello!</p>
        <p className="mt-2 text-sm font-medium leading-5 text-slate-600">
          I&apos;m SarkariMate AI. Ask me anything about government jobs, exams, eligibility, or
          upload a notification.
        </p>
        <p className="mt-2.5 text-sm font-bold text-slate-700">How can I help you today?</p>
      </div>

      <div className="space-y-2">
        {aiAssistantActions.map((action) => {
          const Icon = action.icon;
          const isActive = activeAction.id === action.id;

          return (
            <button
              key={action.id}
              type="button"
              className={cn(
                'flex w-full items-start gap-2.5 rounded-lg border bg-white p-2.5 text-left shadow-sm transition hover:bg-blue-50',
                isActive ? 'border-blue-200' : 'border-slate-200',
              )}
              onClick={() => onActionChange(action)}
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-blue-50 text-[#1D4ED8]">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-bold text-[#111827]">{action.label}</span>
                <span className="mt-0.5 block text-[11px] font-semibold leading-4 text-slate-500">
                  {action.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#111827]">Trending Questions</h3>
        <div className="mt-2 space-y-1.5">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs font-semibold text-slate-600 hover:bg-white hover:text-[#1D4ED8]"
            >
              <Search className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function HistoryDrawerContent({ onPromptSelect }: { onPromptSelect: () => void }) {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-bold text-[#111827]">Recent History</h3>
        <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">
          Continue from common SarkariMate AI questions.
        </p>
      </div>

      <div className="space-y-2">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left text-xs font-bold text-[#111827] shadow-sm hover:border-blue-200 hover:bg-blue-50 hover:text-[#1D4ED8]"
            onClick={onPromptSelect}
          >
            <History className="h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
