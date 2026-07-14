import { FileText } from 'lucide-react';
import type { DetailTableColumn, DetailTableRow } from '@/components/job-detail/types';

interface DataTableProps {
  columns: DetailTableColumn[];
  rows: DetailTableRow[];
}

export function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div>
      <div className="hidden overflow-hidden rounded-lg border border-slate-200 md:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-50 text-xs font-bold uppercase text-[#111827]">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="border-b border-slate-200 px-5 py-4">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-blue-50/30">
                {columns.map((column) => (
                  <td key={column.key} className="px-5 py-3 text-sm font-medium text-[#111827]">
                    <TableCell column={column} value={row.values[column.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:hidden">
        {rows.map((row) => (
          <article key={row.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <dl className="grid gap-2">
              {columns.map((column) => (
                <div key={column.key} className="flex items-start justify-between gap-4">
                  <dt className="text-xs font-bold uppercase text-slate-500">{column.label}</dt>
                  <dd className="text-right text-sm font-semibold text-slate-900">
                    <TableCell column={column} value={row.values[column.key]} />
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

function TableCell({
  column,
  value,
}: {
  column: DetailTableColumn;
  value: DetailTableRow['values'][string];
}) {
  if (!value) {
    return '-';
  }

  if (column.kind === 'action') {
    return (
      <span className="inline-flex min-h-8 min-w-20 items-center justify-center rounded-md bg-[#0B5ED7] px-4 text-sm font-bold text-white shadow-sm">
        {value}
      </span>
    );
  }

  if (column.kind === 'document') {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700">
        <FileText className="h-4 w-4 text-[#DC2626]" aria-hidden="true" />
        {value}
      </span>
    );
  }

  return value;
}
