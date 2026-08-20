import {
  Bold,
  ChevronDown,
  ChevronUp,
  Copy,
  GripVertical,
  Image,
  Italic,
  Link,
  List,
  Pencil,
  Pilcrow,
  Table,
  Text,
  Trash2,
  Underline,
} from 'lucide-react';
import { useState } from 'react';
import { AdminButton } from '@/components/admin/admin-ui';
import type { BlogBlock, BlogBlockType } from '@/components/blog-editor/blog-editor-model';

interface BlogContentBlockListProps {
  blocks: BlogBlock[];
  activeBlockId: string | null;
  setActiveBlockId: (blockId: string | null) => void;
  updateBlock: (blockId: string, updates: Partial<BlogBlock>) => void;
  duplicateBlock: (blockId: string) => void;
  deleteBlock: (blockId: string) => void;
}

const blockIcons: Record<BlogBlockType, typeof Text> = {
  hero: Image,
  summary: Text,
  text: Text,
  list: List,
  table: Table,
  links: Link,
  gallery: Image,
  faq: List,
  divider: Pilcrow,
};

export function BlogContentBlockList({
  blocks,
  activeBlockId,
  setActiveBlockId,
  updateBlock,
  duplicateBlock,
  deleteBlock,
}: BlogContentBlockListProps) {
  return (
    <section className="admin-card p-5">
      <header className="flex flex-col justify-between gap-3 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-start">
        <div>
          <h2 className="text-base font-bold text-[var(--text-primary)]">Content Blocks</h2>
          <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
            Build your post using blocks. Add, remove and reorder blocks as you like.
          </p>
        </div>
      </header>

      <div className="mt-4 grid gap-2">
        {blocks.map((block) => (
          <EditableBlockRow
            key={block.id}
            block={block}
            isActive={activeBlockId === block.id}
            setActiveBlockId={setActiveBlockId}
            updateBlock={updateBlock}
            duplicateBlock={duplicateBlock}
            deleteBlock={deleteBlock}
          />
        ))}
      </div>
    </section>
  );
}

function EditableBlockRow({
  block,
  isActive,
  setActiveBlockId,
  updateBlock,
  duplicateBlock,
  deleteBlock,
}: {
  block: BlogBlock;
  isActive: boolean;
  setActiveBlockId: (blockId: string | null) => void;
  updateBlock: (blockId: string, updates: Partial<BlogBlock>) => void;
  duplicateBlock: (blockId: string) => void;
  deleteBlock: (blockId: string) => void;
}) {
  const [draft, setDraft] = useState(block.content);
  const Icon = blockIcons[block.type];

  const openEditor = () => {
    setDraft(block.content);
    setActiveBlockId(block.id);
  };

  const saveBlock = () => {
    updateBlock(block.id, {
      content: draft,
      detail: draft.split('\n')[0]?.slice(0, 72) || block.detail,
    });
    setActiveBlockId(null);
  };

  if (isActive) {
    return (
      <article className="rounded-lg border border-[var(--primary)] bg-[var(--surface)]">
        <div className="grid min-h-14 items-center gap-3 border-b border-[var(--border)] px-3 py-2 sm:grid-cols-[24px_32px_minmax(0,1fr)_120px]">
          <GripVertical
            className="h-4 w-4 text-[var(--primary)]"
            strokeWidth={2.3}
            aria-hidden="true"
          />
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--selected)] text-[var(--primary)]">
            <Icon className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
          </span>
          <input
            className="admin-input min-h-9 px-3 text-sm font-semibold"
            value={block.title}
            onChange={(event) => updateBlock(block.id, { title: event.target.value })}
          />
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className={`h-5 w-9 rounded-full p-0.5 ${
                block.enabled ? 'bg-[var(--success)]' : 'bg-[var(--input-border)]'
              }`}
              aria-label={block.enabled ? 'Disable block' : 'Enable block'}
              onClick={() => updateBlock(block.id, { enabled: !block.enabled })}
            >
              <span
                className={`block h-4 w-4 rounded-full bg-white transition-transform ${
                  block.enabled ? 'translate-x-4' : ''
                }`}
              />
            </button>
            <button
              type="button"
              className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border)] text-[var(--text-primary)]"
              aria-label="Collapse block"
              onClick={() => setActiveBlockId(null)}
            >
              <ChevronUp className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border)] text-[var(--danger)]"
              aria-label="Delete block"
              onClick={() => deleteBlock(block.id)}
            >
              <Trash2 className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mx-4 my-4 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] sm:mx-12">
          <div className="flex min-h-11 items-center gap-3 border-b border-[var(--border)] px-4 text-[var(--text-primary)]">
            <button
              className="min-w-28 text-left text-sm text-[var(--text-secondary)]"
              type="button"
            >
              Normal
            </button>
            {[Bold, Italic, Underline, List, Pilcrow, Link].map((ToolbarIcon, index) => (
              <button
                key={index}
                type="button"
                className="grid h-8 w-8 place-items-center rounded-md"
              >
                <ToolbarIcon className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
              </button>
            ))}
          </div>
          <textarea
            className="admin-input min-h-44 rounded-none border-0 px-4 py-4 leading-7 focus:shadow-none"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
          />
          <div className="flex min-h-9 items-center justify-between border-t border-[var(--border)] px-4 text-xs text-[var(--text-muted)]">
            <span>{draft.trim() ? draft.trim().split(/\s+/).length : 0} WORDS</span>
            <span>TEXT BLOCK</span>
          </div>
        </div>

        <div className="flex gap-3 px-4 pb-4 sm:px-12">
          <AdminButton onClick={saveBlock}>Save</AdminButton>
          <AdminButton variant="secondary" onClick={() => setActiveBlockId(null)}>
            Cancel
          </AdminButton>
        </div>
      </article>
    );
  }

  return (
    <article className="grid min-h-12 items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 hover:bg-[var(--selected)] sm:grid-cols-[24px_32px_minmax(0,1fr)_minmax(140px,260px)_128px]">
      <GripVertical
        className="h-4 w-4 text-[var(--text-muted)]"
        strokeWidth={2.3}
        aria-hidden="true"
      />
      <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--selected)] text-[var(--primary)]">
        <Icon className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
      </span>
      <p className="text-sm font-semibold text-[var(--text-primary)]">{block.title}</p>
      <p className="truncate text-sm font-normal text-[var(--text-secondary)]">{block.detail}</p>
      <div className="flex items-center gap-2 sm:justify-end">
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--selected)] hover:text-[var(--primary)]"
          aria-label="Edit block"
          onClick={openEditor}
        >
          <Pencil className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--selected)] hover:text-[var(--primary)]"
          aria-label="Duplicate block"
          onClick={() => duplicateBlock(block.id)}
        >
          <Copy className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--selected)] hover:text-[var(--danger)]"
          aria-label="Delete block"
          onClick={() => deleteBlock(block.id)}
        >
          <Trash2 className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--selected)] hover:text-[var(--primary)]"
          aria-label="Open block"
          onClick={openEditor}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
