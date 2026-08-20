'use client';

import Link from 'next/link';
import { ChevronDown, Eye, LayoutGrid, Save, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AdminContentLayout } from '@/components/admin/admin-content-layout';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { AdminButton } from '@/components/admin/admin-ui';
import { BlogPreviewArticle } from '@/components/blog-editor/blog-preview-article';
import { BlogPreviewSettings } from '@/components/blog-editor/blog-preview-settings';
import {
  blogPostDraftStorageKey,
  initialBlogBlocks,
  initialPostForm,
  type BlogPostPayload,
} from '@/components/blog-editor/blog-editor-model';

export function BlogPostPreviewPage() {
  const [payload, setPayload] = useState<BlogPostPayload>({
    post: initialPostForm,
    blocks: initialBlogBlocks,
  });

  useEffect(() => {
    const savedPayload = window.localStorage.getItem(blogPostDraftStorageKey);

    if (!savedPayload) {
      return;
    }

    try {
      setPayload(JSON.parse(savedPayload) as BlogPostPayload);
    } catch {
      setPayload({ post: initialPostForm, blocks: initialBlogBlocks });
    }
  }, []);

  return (
    <>
      <AdminPageHeader
        title="Add New Blog Post"
        icon={<LayoutGrid className="h-7 w-7" strokeWidth={2.3} aria-hidden="true" />}
        actions={
          <>
            <AdminButton variant="secondary">
              <Save className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
              Save Draft
            </AdminButton>
            <Link href="/posts/new" className="admin-button admin-button-primary">
              <Eye className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
              Previewing
            </Link>
            <AdminButton>
              Publish
              <ChevronDown className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
            </AdminButton>
          </>
        }
      />

      <div className="border-b border-[var(--border)] bg-[var(--selected)] px-4 py-4 text-sm font-medium text-[var(--text-primary)] sm:px-6 xl:px-7">
        <span className="inline-flex items-center gap-2">
          <Search className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
          This is how your post will look on the website.
        </span>
      </div>

      <AdminContentLayout rightPanel={<BlogPreviewSettings post={payload.post} />}>
        <BlogPreviewArticle post={payload.post} blocks={payload.blocks} />
      </AdminContentLayout>
    </>
  );
}
