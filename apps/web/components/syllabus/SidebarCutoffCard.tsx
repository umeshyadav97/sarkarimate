'use client';

import { useState } from 'react';
import type { SyllabusTable } from '@/types/syllabus';

interface SidebarCutoffCardProps {
  cutoff?: SyllabusTable;
  tier2Cutoff?: SyllabusTable;
}

export function SidebarCutoffCard({ cutoff, tier2Cutoff }: SidebarCutoffCardProps) {
  const [showTier2Cutoff, setShowTier2Cutoff] = useState(false);

  if (!cutoff?.rows.length) {
    return null;
  }

  const hasTier2Cutoff = Boolean(tier2Cutoff?.rows.length);

  return (
    <aside
      data-syllabus-cutoff-card
      className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <h2 className="text-xl font-bold text-[#111827]">
        Previous Year Cutoff{hasTier2Cutoff ? ' (Tier 1)' : ''}
      </h2>
      <div className="mt-4">
        <CompactCutoffTable cutoff={cutoff} />
      </div>
      {hasTier2Cutoff ? (
        <button
          type="button"
          onClick={() => setShowTier2Cutoff((current) => !current)}
          className="mt-4 flex min-h-11 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-[#1D4ED8] hover:border-[#1D4ED8]"
        >
          {showTier2Cutoff ? 'Hide Cutoff (Tier 2)' : 'View Cutoff (Tier 2)'}
        </button>
      ) : null}
      {showTier2Cutoff && tier2Cutoff ? (
        <div className="mt-4">
          <h3 className="mb-3 text-base font-bold text-[#111827]">Previous Year Cutoff (Tier 2)</h3>
          <CompactCutoffTable cutoff={tier2Cutoff} />
        </div>
      ) : null}
    </aside>
  );
}

function CompactCutoffTable({ cutoff }: { cutoff: SyllabusTable }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full table-fixed text-left">
        <thead className="bg-slate-50 text-xs font-bold text-[#111827]">
          <tr>
            {cutoff.columns.map((column) => (
              <th key={column.key} className="px-1.5 py-2 text-center first:text-left sm:px-2">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-800">
          {cutoff.rows.map((row) => (
            <tr key={row.id}>
              {cutoff.columns.map((column) => (
                <td
                  key={column.key}
                  className="border-r border-slate-100 px-1.5 py-2 text-center align-middle last:border-r-0 first:text-left sm:px-2"
                >
                  <CompactCutoffValue value={row.values[column.key]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompactCutoffValue({ value }: { value: SyllabusTable['rows'][number]['values'][string] }) {
  if (!value) {
    return '-';
  }

  if (typeof value === 'string' && value.toLowerCase() === 'to be updated') {
    return (
      <span className="inline-flex max-w-full items-center rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold leading-4 text-amber-700 ring-1 ring-amber-100">
        To be updated
      </span>
    );
  }

  return <span className="break-words leading-5">{value}</span>;
}
