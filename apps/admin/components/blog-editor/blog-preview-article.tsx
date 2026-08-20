import { CalendarDays, Clock, FolderOpen, UserCircle } from 'lucide-react';
import type { BlogBlock, BlogPostForm } from '@/components/blog-editor/blog-editor-model';

interface BlogPreviewArticleProps {
  post: BlogPostForm;
  blocks: BlogBlock[];
}

export function BlogPreviewArticle({ post, blocks }: BlogPreviewArticleProps) {
  const visibleBlocks = blocks.filter((block) => block.enabled);
  const summaryBlock = visibleBlocks.find((block) => block.type === 'summary');

  return (
    <article className="admin-card blog-content-preview mx-auto max-w-5xl p-8 lg:p-10">
      <span className="inline-flex rounded-md bg-[var(--selected)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
        {categoryLabel(post.category)}
      </span>

      <h1 className="mt-5 max-w-4xl">{post.title || 'Untitled Blog Post'}</h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--text-secondary)]">
        <span className="inline-flex items-center gap-1.5">
          <UserCircle className="h-4 w-4" strokeWidth={2.3} aria-hidden="true" />
          By SarkariMate Team
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4" strokeWidth={2.3} aria-hidden="true" />
          07 Jul 2026
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FolderOpen className="h-4 w-4" strokeWidth={2.3} aria-hidden="true" />
          {categoryLabel(post.category)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" strokeWidth={2.3} aria-hidden="true" />5 min read
        </span>
      </div>

      {post.showFeaturedImage ? (
        <div
          className="mt-6 grid min-h-52 place-items-center overflow-hidden rounded-lg bg-[linear-gradient(180deg,#d9ebff_0%,#f5d2a5_100%)] bg-cover bg-center text-center"
          style={
            post.featuredImageDataUrl
              ? { backgroundImage: `url(${post.featuredImageDataUrl})` }
              : undefined
          }
        >
          {!post.featuredImageDataUrl ? (
            <div className="rounded-xl bg-white/55 px-10 py-6 shadow-sm backdrop-blur-sm">
              <p className="text-5xl font-bold tracking-normal text-[var(--text-primary)]">BCECE</p>
            </div>
          ) : null}
        </div>
      ) : null}

      {post.excerpt || summaryBlock?.content ? (
        <div className="mt-5 rounded-lg border border-[var(--primary)] bg-[var(--selected)] p-5">
          <p>{post.excerpt || summaryBlock?.content}</p>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5">
        {visibleBlocks
          .filter((block) => block.type !== 'hero' && block.type !== 'summary')
          .map((block) => (
            <section key={block.id}>
              <h2>{block.title}</h2>
              {block.type === 'list' ? (
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  {block.content
                    .split('\n')
                    .filter(Boolean)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              ) : block.type === 'table' || block.type === 'links' ? (
                <div className="mt-3 overflow-hidden rounded-lg border border-[var(--border)]">
                  {block.content
                    .split('\n')
                    .filter(Boolean)
                    .map((item) => (
                      <p
                        key={item}
                        className="border-b border-[var(--border)] px-4 py-3 last:border-b-0"
                      >
                        {item}
                      </p>
                    ))}
                </div>
              ) : (
                <p className="mt-3 whitespace-pre-line">{block.content}</p>
              )}
            </section>
          ))}
      </div>
    </article>
  );
}

function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    'latest-update': 'Latest Update',
    'exam-guide': 'Exam Guide',
    'student-help': 'Student Help',
  };

  return labels[category] ?? category;
}
