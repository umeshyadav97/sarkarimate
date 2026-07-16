import type { PreparationTable } from '@/types/preparation';

interface PreparationDataTableProps {
  table: PreparationTable;
}

export function PreparationDataTable({ table }: PreparationDataTableProps) {
  if (table.rows.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="hidden overflow-hidden rounded-lg border border-slate-200 md:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-50 text-xs font-bold uppercase text-slate-700">
            <tr>
              {table.columns.map((column) => (
                <th
                  key={column.key}
                  className="border-b border-slate-200 px-3 py-3 text-center first:text-left"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {table.rows.map((row) => (
              <tr key={row.id} className="hover:bg-blue-50/30">
                {table.columns.map((column) => (
                  <td
                    key={column.key}
                    className="border-r border-slate-100 px-3 py-3 text-center text-xs font-semibold leading-5 text-slate-800 last:border-r-0 first:text-left"
                  >
                    <TableValue columnKey={column.key} value={row.values[column.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:hidden">
        {table.rows.map((row) => (
          <article key={row.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <dl className="grid gap-3">
              {table.columns.map((column) => (
                <div key={column.key} className="grid gap-1">
                  <dt className="text-xs font-bold uppercase text-slate-500">{column.label}</dt>
                  <dd className="text-sm font-semibold text-[#111827]">
                    <TableValue columnKey={column.key} value={row.values[column.key]} />
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

function TableValue({
  columnKey,
  value,
}: {
  columnKey: string;
  value: PreparationTable['rows'][number]['values'][string];
}) {
  if (!value) {
    return '-';
  }

  if (columnKey === 'subjects' && typeof value === 'string') {
    return (
      <ul className="list-disc space-y-0.5 pl-4 text-left">
        {value.split(',').map((subject) => (
          <li key={subject.trim()}>{subject.trim()}</li>
        ))}
      </ul>
    );
  }

  return value;
}
