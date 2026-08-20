'use client';

import Link from 'next/link';
import { ChevronDown, Eye, LayoutGrid, Menu, Save } from 'lucide-react';
import { useState } from 'react';
import { AdminContentLayout } from '@/components/admin/admin-content-layout';
import { AdminPageHeader } from '@/components/admin/admin-page-header';
import { AdminButton, AdminCard } from '@/components/admin/admin-ui';
import { BlogContentBlockList } from '@/components/blog-editor/blog-content-block-list';
import { BlogPostBasics } from '@/components/blog-editor/blog-post-basics';
import { BlogPostSettings } from '@/components/blog-editor/blog-post-settings';
import {
  blogPostDraftStorageKey,
  initialBlogBlocks,
  initialPostForm,
  type BlogBlock,
  type BlogPostPayload,
  type BlogPostForm,
} from '@/components/blog-editor/blog-editor-model';

export function AddNewBlogPostPage() {
  const [post, setPost] = useState<BlogPostForm>(initialPostForm);
  const [blocks, setBlocks] = useState<BlogBlock[]>(initialBlogBlocks);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);

  const updatePost = (updates: Partial<BlogPostForm>) => {
    setPost((current) => ({ ...current, ...updates }));
  };

  const updateBlock = (blockId: string, updates: Partial<BlogBlock>) => {
    setBlocks((current) =>
      current.map((block) => (block.id === blockId ? { ...block, ...updates } : block)),
    );
  };

  const duplicateBlock = (blockId: string) => {
    setBlocks((current) => {
      const blockIndex = current.findIndex((block) => block.id === blockId);

      if (blockIndex === -1) {
        return current;
      }

      const copy = {
        ...current[blockIndex],
        id: `${current[blockIndex].id}-copy-${Date.now()}`,
        title: `${current[blockIndex].title} Copy`,
      };

      return [...current.slice(0, blockIndex + 1), copy, ...current.slice(blockIndex + 1)];
    });
  };

  const deleteBlock = (blockId: string) => {
    setBlocks((current) => current.filter((block) => block.id !== blockId));
    setActiveBlockId((current) => (current === blockId ? null : current));
  };

  const payload: BlogPostPayload = {
    post,
    blocks,
  };

  const savePayloadToBrowser = () => {
    window.localStorage.setItem(blogPostDraftStorageKey, JSON.stringify(payload));
  };

  const logPayload = (action: 'save-draft' | 'publish') => {
    savePayloadToBrowser();
    console.log(`SarkariMate blog ${action} payload`, payload);
  };

  const handleFeaturedImageUpload = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => {
      updatePost({
        featuredImageName: file.name,
        featuredImageDataUrl: typeof reader.result === 'string' ? reader.result : '',
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <AdminPageHeader
        title="Add New Blog Post"
        icon={<LayoutGrid className="h-7 w-7" strokeWidth={2.3} aria-hidden="true" />}
        actions={
          <>
            <AdminButton variant="secondary" onClick={() => logPayload('save-draft')}>
              <Save className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
              Save Draft
            </AdminButton>
            <Link
              href="/posts/preview"
              className="admin-button admin-button-secondary"
              onClick={savePayloadToBrowser}
            >
              <Eye className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
              Preview
            </Link>
            <AdminButton onClick={() => logPayload('publish')}>
              Publish
              <ChevronDown className="h-4 w-4" strokeWidth={2.4} aria-hidden="true" />
            </AdminButton>
          </>
        }
      />

      <AdminContentLayout
        rightPanel={
          <BlogPostSettings
            post={post}
            updatePost={updatePost}
            onSaveDraft={() => logPayload('save-draft')}
            onPublish={() => logPayload('publish')}
            onPreview={savePayloadToBrowser}
            onFeaturedImageUpload={handleFeaturedImageUpload}
          />
        }
      >
        <div className="grid gap-5">
          <BlogPostBasics post={post} updatePost={updatePost} />
          <BlogContentBlockList
            blocks={blocks}
            activeBlockId={activeBlockId}
            setActiveBlockId={setActiveBlockId}
            updateBlock={updateBlock}
            duplicateBlock={duplicateBlock}
            deleteBlock={deleteBlock}
          />
          <AdminCard className="flex items-center gap-3 border-[var(--border)] bg-[var(--selected)] p-4 text-sm font-semibold text-[var(--text-primary)]">
            <Menu
              className="h-5 w-5 shrink-0 text-[var(--primary)]"
              strokeWidth={2.4}
              aria-hidden="true"
            />
            Tip: Use blocks to create a rich and engaging post. You can add, duplicate, hide or
            reorder blocks anytime.
          </AdminCard>
        </div>
      </AdminContentLayout>
    </>
  );
}
