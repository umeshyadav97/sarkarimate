import { Bell, CalendarDays, CloudUpload, Eye, Search } from 'lucide-react';
import Link from 'next/link';
import {
  AdminButton,
  AdminCard,
  AdminInput,
  AdminSelect,
  AdminTextarea,
  AdminToggle,
} from '@/components/admin/admin-ui';
import type { BlogPostForm } from '@/components/blog-editor/blog-editor-model';

interface BlogPostSettingsProps {
  post: BlogPostForm;
  updatePost: (updates: Partial<BlogPostForm>) => void;
  onSaveDraft?: () => void;
  onPublish?: () => void;
  onPreview?: () => void;
  onFeaturedImageUpload?: (file: File) => void;
}

export function BlogPostSettings({
  post,
  updatePost,
  onSaveDraft,
  onPublish,
  onPreview,
  onFeaturedImageUpload,
}: BlogPostSettingsProps) {
  return (
    <div className="grid gap-4">
      <AdminCard className="p-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">Publish</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <AdminButton variant="secondary" onClick={onSaveDraft}>
            Save Draft
          </AdminButton>
          <Link
            href="/posts/preview"
            className="admin-button admin-button-secondary"
            onClick={onPreview}
          >
            <Eye className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
            Preview
          </Link>
        </div>
        <div className="mt-4 grid gap-3 text-sm text-[var(--text-secondary)]">
          <p className="flex items-center gap-2">
            <Bell
              className="h-4 w-4 text-[var(--text-muted)]"
              strokeWidth={2.3}
              aria-hidden="true"
            />
            Status: <strong>{post.status === 'draft' ? 'Draft' : post.status}</strong>{' '}
            <button className="font-semibold text-[var(--primary)]">Edit</button>
          </p>
          <p className="flex items-center gap-2">
            <Eye
              className="h-4 w-4 text-[var(--text-muted)]"
              strokeWidth={2.3}
              aria-hidden="true"
            />
            Visibility: <strong>Public</strong>{' '}
            <button className="font-semibold text-[var(--primary)]">Edit</button>
          </p>
          <p className="flex items-center gap-2">
            <CalendarDays
              className="h-4 w-4 text-[var(--text-muted)]"
              strokeWidth={2.3}
              aria-hidden="true"
            />
            Publish: <strong>Immediately</strong>{' '}
            <button className="font-semibold text-[var(--primary)]">Edit</button>
          </p>
        </div>
        <AdminButton className="mt-4 w-full" onClick={onPublish}>
          Publish
        </AdminButton>
      </AdminCard>

      <AdminCard className="p-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">Post Category</h2>
        <div className="mt-4">
          <AdminSelect
            label="Select Category"
            value={post.category}
            onChange={(event) => updatePost({ category: event.target.value })}
          >
            <option value="latest-update">Latest Update</option>
            <option value="exam-guide">Exam Guide</option>
            <option value="student-help">Student Help</option>
          </AdminSelect>
        </div>
        <p className="mt-2 text-xs font-normal text-[var(--text-muted)]">
          Choose the most relevant category
        </p>
      </AdminCard>

      <AdminCard className="p-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">Main / Featured Image</h2>
        <label className="mt-4 grid min-h-28 cursor-pointer place-items-center overflow-hidden rounded-lg border border-dashed border-[var(--primary)] bg-[var(--selected)] p-4 text-center">
          {post.featuredImageDataUrl ? (
            <span
              className="block h-32 w-full rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${post.featuredImageDataUrl})` }}
              aria-hidden="true"
            />
          ) : (
            <span>
              <CloudUpload
                className="mx-auto h-8 w-8 text-[var(--primary)]"
                strokeWidth={2.3}
                aria-hidden="true"
              />
              <span className="mt-2 block text-sm font-semibold text-[var(--text-primary)]">
                Upload image
              </span>
              <span className="block text-xs text-[var(--text-muted)]">
                Recommended size: 1200x630px
              </span>
            </span>
          )}
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (file) {
                onFeaturedImageUpload?.(file);
              }
            }}
          />
        </label>
        {post.featuredImageName ? (
          <p className="mt-2 truncate text-xs font-medium text-[var(--text-secondary)]">
            {post.featuredImageName}
          </p>
        ) : null}
        <div className="mt-3">
          <AdminToggle
            label="Show image at the top of the post"
            checked={post.showFeaturedImage}
            onChange={(checked) => updatePost({ showFeaturedImage: checked })}
          />
        </div>
      </AdminCard>

      <AdminCard className="p-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">Post Settings</h2>
        <div className="mt-4 grid gap-3">
          <AdminToggle
            label="Show in Latest Updates"
            checked={post.showInLatestUpdates}
            onChange={(checked) => updatePost({ showInLatestUpdates: checked })}
          />
          <AdminToggle
            label="Allow Comments"
            checked={post.allowComments}
            onChange={(checked) => updatePost({ allowComments: checked })}
          />
          <AdminToggle
            label="Make this post sticky"
            checked={post.sticky}
            onChange={(checked) => updatePost({ sticky: checked })}
          />
        </div>
      </AdminCard>

      <AdminCard className="p-4">
        <h2 className="flex items-center gap-2 text-base font-bold text-[var(--text-primary)]">
          <Search className="h-4 w-4" strokeWidth={2.3} aria-hidden="true" />
          SEO Settings
        </h2>
        <div className="mt-4 grid gap-4">
          <AdminInput
            label="SEO Title"
            placeholder="Enter SEO title..."
            maxLength={60}
            value={post.seoTitle}
            onChange={(event) => updatePost({ seoTitle: event.target.value })}
          />
          <AdminTextarea
            label="Meta Description"
            placeholder="Enter meta description..."
            className="min-h-24"
            maxLength={160}
            value={post.metaDescription}
            onChange={(event) => updatePost({ metaDescription: event.target.value })}
          />
          <AdminInput
            label="Focus Keyword (Optional)"
            placeholder="Enter focus keyword..."
            value={post.focusKeyword}
            onChange={(event) => updatePost({ focusKeyword: event.target.value })}
          />
        </div>
      </AdminCard>
    </div>
  );
}
