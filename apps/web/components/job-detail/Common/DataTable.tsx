import { ChevronDown, ExternalLink, FileText } from 'lucide-react';
import type { DetailTableColumn, DetailTableRow } from '@/components/job-detail/types';

interface DataTableProps {
  columns: DetailTableColumn[];
  rows: DetailTableRow[];
}

export function DataTable({ columns, rows }: DataTableProps) {
  const vacancyColumns = getVacancyColumns(columns);

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
                    <TableCell
                      column={column}
                      rowValues={row.values}
                      value={row.values[column.key]}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {vacancyColumns ? (
        <MobileVacancyCards columns={vacancyColumns} rows={rows} />
      ) : (
        <div className="grid gap-3 md:hidden">
          {rows.map((row) => (
            <article key={row.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dl className="grid gap-2">
                {columns.map((column) => (
                  <div key={column.key} className="grid gap-1">
                    <dt className="text-xs font-bold uppercase text-slate-500">{column.label}</dt>
                    <dd className="text-sm font-semibold text-slate-900">
                      <TableCell
                        column={column}
                        rowValues={row.values}
                        value={row.values[column.key]}
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileVacancyCards({
  columns,
  rows,
}: {
  columns: VacancyColumns;
  rows: DetailTableRow[];
}) {
  return (
    <div className="grid gap-3 md:hidden">
      {rows.map((row, index) => {
        const postName = row.values[columns.postName.key];
        const totalPosts = row.values[columns.totalPosts.key];
        const qualification = columns.qualification
          ? row.values[columns.qualification.key]
          : undefined;
        const lastDate = columns.lastDate ? row.values[columns.lastDate.key] : undefined;
        const notification = columns.notification
          ? row.values[columns.notification.key]
          : undefined;

        return (
          <article
            key={row.id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="min-w-0 text-base font-bold leading-6 text-[#111827]">{postName}</h3>
              <span className="shrink-0 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-[#1D4ED8] ring-1 ring-blue-100">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <dl className="mt-4 border-t border-slate-100 pt-4">
              <div>
                <dt className="text-sm font-bold text-slate-500">Total Posts</dt>
                <dd className="mt-1 text-2xl font-bold leading-7 text-[#1D4ED8]">
                  {formatPostCount(totalPosts)}
                </dd>
              </div>

              {hasCellValue(qualification) ? (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <dt className="text-sm font-bold text-[#111827]">Qualification</dt>
                  <dd className="mt-1 text-sm font-medium leading-6 text-slate-700">
                    <details className="group">
                      <summary className="cursor-pointer list-none marker:hidden">
                        <span className="line-clamp-3 text-sm font-medium leading-6 text-slate-700 group-open:hidden">
                          {qualification}
                        </span>
                        <span className="mt-3 flex items-center justify-center gap-2 text-sm font-bold text-[#1D4ED8]">
                          <span className="group-open:hidden">Read More</span>
                          <span className="hidden group-open:inline">Show Less</span>
                          <ChevronDown
                            className="h-4 w-4 transition-transform group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </span>
                      </summary>
                      <span className="mt-1 hidden text-sm font-medium leading-6 text-slate-700 group-open:block">
                        {qualification}
                      </span>
                    </details>
                  </dd>
                </div>
              ) : null}

              {columns.lastDate ? (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <dt className="text-sm font-bold text-slate-500">Last Date</dt>
                  <dd className="mt-1 text-sm font-bold text-[#111827]">
                    <TableCell column={columns.lastDate} rowValues={row.values} value={lastDate} />
                  </dd>
                </div>
              ) : null}

              {columns.notification ? (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <dt className="text-sm font-bold text-slate-500">Notification</dt>
                  <dd className="mt-2">
                    <TableCell
                      column={columns.notification}
                      rowValues={row.values}
                      value={notification}
                    />
                  </dd>
                </div>
              ) : null}
            </dl>
          </article>
        );
      })}
    </div>
  );
}

interface VacancyColumns {
  postName: DetailTableColumn;
  totalPosts: DetailTableColumn;
  qualification?: DetailTableColumn;
  lastDate?: DetailTableColumn;
  notification?: DetailTableColumn;
}

function getVacancyColumns(columns: DetailTableColumn[]): VacancyColumns | null {
  const postName = columns.find((column) => /post.*name/i.test(column.key));
  const totalPosts = columns.find((column) => /total.*posts/i.test(column.key));
  const qualification = columns.find((column) => /qualification/i.test(column.key));
  const lastDate = columns.find((column) => /last.*date/i.test(column.key));
  const notification = columns.find((column) => /notification/i.test(column.key));

  if (!postName || !totalPosts) {
    return null;
  }

  return { postName, totalPosts, qualification, lastDate, notification };
}

function formatPostCount(value: DetailTableRow['values'][string]) {
  if (typeof value === 'number') {
    return new Intl.NumberFormat('en-IN').format(value);
  }

  if (typeof value === 'string' && /^\d+$/.test(value.trim())) {
    return new Intl.NumberFormat('en-IN').format(Number(value));
  }

  return value;
}

function TableCell({
  column,
  rowValues,
  value,
}: {
  column: DetailTableColumn;
  rowValues: DetailTableRow['values'];
  value: DetailTableRow['values'][string];
}) {
  if (!hasCellValue(value)) {
    return '-';
  }

  if (column.kind === 'action') {
    const href = column.hrefKey ? rowValues[column.hrefKey] : undefined;
    const label = value;

    if (typeof href === 'string' && href.trim()) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-8 min-w-20 items-center justify-center gap-1.5 rounded-md bg-[#0B5ED7] px-4 text-sm font-bold text-white shadow-sm hover:bg-[#0847A6]"
        >
          {label}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      );
    }

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

function hasCellValue(value: DetailTableRow['values'][string]) {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  return true;
}
