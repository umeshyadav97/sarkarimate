import { AdminButton } from '@/components/admin/admin-ui';
import type { BlogPostForm } from '@/components/blog-editor/blog-editor-model';

interface BlogPostBasicsProps {
  post: BlogPostForm;
  updatePost: (updates: Partial<BlogPostForm>) => void;
}

export function BlogPostBasics({ post, updatePost }: BlogPostBasicsProps) {
  return (
    <section className="admin-card grid gap-5 p-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <label
          className="text-[13px] font-semibold text-[var(--text-primary)]"
          htmlFor="post-title"
        >
          Post Title <span className="text-[var(--danger)]">*</span>
        </label>
        <div className="relative mt-2">
          <input
            id="post-title"
            className="admin-input px-3 pr-14"
            placeholder="Enter post title here..."
            maxLength={120}
            value={post.title}
            onChange={(event) => updatePost({ title: event.target.value })}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-normal text-[var(--text-muted)]">
            {post.title.length}/120
          </span>
        </div>
      </div>

      <div>
        <label
          className="text-[13px] font-semibold text-[var(--text-primary)]"
          htmlFor="post-excerpt"
        >
          Short Description / Excerpt
        </label>
        <div className="relative mt-2">
          <textarea
            id="post-excerpt"
            className="admin-input min-h-24 px-3 py-3 pr-14 leading-6"
            placeholder="Write a short description for this post..."
            maxLength={160}
            value={post.excerpt}
            onChange={(event) => updatePost({ excerpt: event.target.value })}
          />
          <span className="absolute right-3 top-3 text-xs font-normal text-[var(--text-muted)]">
            {post.excerpt.length}/160
          </span>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-2 text-sm sm:flex-row sm:items-center lg:col-span-2">
        <span className="shrink-0 font-medium text-[var(--text-secondary)]">Permalink:</span>
        <span className="shrink-0 font-semibold text-[var(--primary)]">
          https://sarkarimate.com/blog/
        </span>
        <input
          className="admin-input min-h-9 min-w-0 flex-1 px-3 text-sm"
          placeholder="enter-your-post-slug"
          value={post.slug}
          onChange={(event) => updatePost({ slug: event.target.value })}
        />
        <AdminButton variant="secondary" className="min-h-9 shrink-0 px-3">
          Edit
        </AdminButton>
      </div>
    </section>
  );
}
