import Link from 'next/link';
import { FileText } from 'lucide-react';
import type { ListingColumn, ListingItem } from '@/components/listing/types';

const detailIdCachePrefix = 'sarkarimate:job-detail-id:';

interface ListingTableProps {
  actionLabel: string;
  columns: ListingColumn[];
  items: ListingItem[];
  startIndex: number;
}

function cacheDetailId(item: ListingItem) {
  if (!item.detailId) {
    return;
  }

  const slug = item.href.split('/').filter(Boolean).at(-1);

  if (!slug) {
    return;
  }

  window.localStorage.setItem(`${detailIdCachePrefix}${slug}`, item.detailId);
}

export function ListingTable({ actionLabel, columns, items, startIndex }: ListingTableProps) {
  if (items.length === 0) {
    return (
      <div className="px-4 py-8 text-center">
        <h2 className="text-lg font-bold text-[#111827]">No listings found</h2>
        <p className="mt-2 text-sm font-medium text-slate-600">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-50 text-xs font-bold uppercase text-[#111827]">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className={column.key === 'index' ? 'px-4 py-4' : 'px-5 py-4'}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {items.map((item, index) => (
              <tr key={item.id} className="bg-white">
                <td className="px-4 py-4 text-sm font-bold text-[#111827]">{startIndex + index}</td>
                <td className="p-4">
                  <Link
                    className="text-sm font-bold text-[#073b82] hover:text-[#1D4ED8]"
                    href={item.href}
                    onClick={() => cacheDetailId(item)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="p-4 text-sm font-medium text-[#111827]">{item.organization}</td>
                <td className="p-4 text-sm font-medium text-[#111827]">{item.updatedDate}</td>
                <td className="p-4">
                  <Link
                    className="inline-flex min-h-9 w-full min-w-24 items-center justify-center whitespace-nowrap rounded-md border border-[#1D4ED8] px-4 text-sm font-bold text-[#1D4ED8] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    href={item.href}
                    onClick={() => cacheDetailId(item)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {actionLabel}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-5 bg-[#F8FAFC] p-3 md:hidden">
        {items.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
          >
            <Link
              className="block border-b border-slate-200 pb-3 text-base font-bold leading-6 text-[#071B3D]"
              href={item.href}
              onClick={() => cacheDetailId(item)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.title}
            </Link>
            <dl className="grid grid-cols-2 py-3">
              <div>
                <dt className="text-xs font-bold text-slate-600">Organization</dt>
                <dd className="mt-2 text-sm font-bold text-[#071B3D]">{item.organization}</dd>
              </div>
              <div className="border-l border-slate-200 pl-5">
                <dt className="text-xs font-bold text-slate-600">Updated Date</dt>
                <dd className="mt-2 text-sm font-bold text-[#071B3D]">{item.updatedDate}</dd>
              </div>
            </dl>
            <Link
              className="inline-flex min-h-10 w-full items-center justify-center gap-3 whitespace-nowrap rounded-lg border border-[#1D4ED8] px-4 text-sm font-bold text-[#1D4ED8] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100"
              href={item.href}
              onClick={() => cacheDetailId(item)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FileText className="h-5 w-5" aria-hidden="true" />
              {actionLabel}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
