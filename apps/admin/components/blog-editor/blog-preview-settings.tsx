import { Eye, Send } from 'lucide-react';
import {
  AdminButton,
  AdminCard,
  AdminInput,
  AdminSelect,
  AdminTextarea,
  AdminToggle,
} from '@/components/admin/admin-ui';
import type { BlogPostForm } from '@/components/blog-editor/blog-editor-model';

export function BlogPreviewSettings({ post }: { post: BlogPostForm }) {
  return (
    <div className="grid gap-4">
      <AdminCard className="p-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">Publish</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <AdminButton variant="secondary">Save Draft</AdminButton>
          <AdminButton variant="secondary">
            <Eye className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
            Preview
          </AdminButton>
        </div>
        <div className="mt-4 grid gap-3 text-sm text-[var(--text-secondary)]">
          <p>
            Status: <strong>{post.status === 'draft' ? 'Draft' : post.status}</strong>
          </p>
          <p>
            Visibility: <strong>Public</strong>
          </p>
          <p>
            Publish: <strong>Immediately</strong>
          </p>
        </div>
        <AdminButton className="mt-4 w-full">
          <Send className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
          Publish
        </AdminButton>
      </AdminCard>

      <AdminCard className="p-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">Post Category</h2>
        <div className="mt-4">
          <AdminSelect label="Select Category" value={post.category} disabled>
            <option value="latest-update">Latest Update</option>
            <option value="exam-guide">Exam Guide</option>
            <option value="student-help">Student Help</option>
          </AdminSelect>
        </div>
      </AdminCard>

      <AdminCard className="p-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">Main / Featured Image</h2>
        <div
          className="mt-4 grid min-h-28 place-items-center overflow-hidden rounded-lg bg-[linear-gradient(180deg,#d9ebff_0%,#f5d2a5_100%)] bg-cover bg-center text-center"
          style={
            post.featuredImageDataUrl
              ? { backgroundImage: `url(${post.featuredImageDataUrl})` }
              : undefined
          }
        >
          {!post.featuredImageDataUrl ? (
            <p className="text-3xl font-bold text-[var(--text-primary)]">BCECE</p>
          ) : null}
        </div>
        <AdminButton variant="secondary" className="mx-auto mt-3 flex">
          Change Image
        </AdminButton>
        <div className="mt-3">
          <AdminToggle label="Show image at the top of the post" checked={post.showFeaturedImage} />
        </div>
      </AdminCard>

      <AdminCard className="p-4">
        <h2 className="text-base font-bold text-[var(--text-primary)]">SEO Settings</h2>
        <div className="mt-4 grid gap-4">
          <AdminInput label="SEO Title" value={post.seoTitle} readOnly />
          <AdminTextarea
            label="Meta Description"
            value={post.metaDescription}
            readOnly
            className="min-h-24"
          />
          <AdminInput label="Focus Keyword (Optional)" value={post.focusKeyword} readOnly />
        </div>
      </AdminCard>
    </div>
  );
}
