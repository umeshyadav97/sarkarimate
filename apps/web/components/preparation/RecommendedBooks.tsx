import { PreparationSectionCard } from '@/components/preparation/PreparationSectionCard';
import type { RecommendedBook } from '@/types/preparation';

interface RecommendedBooksProps {
  books?: RecommendedBook[];
}

export function RecommendedBooks({ books }: RecommendedBooksProps) {
  if (!books?.length) {
    return null;
  }

  return (
    <PreparationSectionCard id="recommended-books" title="Recommended Books">
      <div className="grid gap-3 sm:grid-cols-2">
        {books.map((book) => (
          <article
            key={`${book.title}-${book.subject}`}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4"
          >
            {book.subject ? (
              <p className="text-xs font-bold uppercase text-[#1D4ED8]">{book.subject}</p>
            ) : null}
            <h3 className="mt-1 text-sm font-bold text-[#111827]">{book.title}</h3>
            {book.author ? (
              <p className="mt-1 text-sm font-semibold text-slate-600">{book.author}</p>
            ) : null}
            {book.description ? (
              <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                {book.description}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </PreparationSectionCard>
  );
}
