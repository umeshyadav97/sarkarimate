import type { PreparationTable } from '@/types/preparation';

interface SidebarCutoffCardProps {
  cutoff?: PreparationTable;
}

export function SidebarCutoffCard({ cutoff }: SidebarCutoffCardProps) {
  if (!cutoff?.rows.length) {
    return null;
  }

  return (
    <aside className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-base font-bold text-[#1D4ED8]">Previous Year Cutoff (Tier 1)</h2>
      <div className="mt-4">
        <CompactCutoffTable cutoff={cutoff} />
      </div>
      <a
        href="#"
        className="mt-3 flex min-h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-3 text-xs font-bold text-[#1D4ED8] hover:border-[#1D4ED8]"
      >
        View Cutoff (Tier 2)
      </a>
    </aside>
  );
}

function CompactCutoffTable({ cutoff }: { cutoff: PreparationTable }) {
  return (
    <div className="overflow-hidden rounded-md border border-slate-200">
      <table className="w-full table-fixed text-left">
        <thead className="bg-slate-50 text-[10px] font-bold text-[#111827]">
          <tr>
            {cutoff.columns.map((column) => (
              <th key={column.key} className="px-2 py-2">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-[10px] font-semibold text-slate-800">
          {cutoff.rows.map((row) => (
            <tr key={row.id}>
              {cutoff.columns.map((column) => (
                <td key={column.key} className="px-2 py-2">
                  {row.values[column.key] ?? '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
