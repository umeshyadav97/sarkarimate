export type BlogBlockType =
  'hero' | 'summary' | 'text' | 'list' | 'table' | 'links' | 'gallery' | 'faq' | 'divider';

export interface BlogBlock {
  id: string;
  title: string;
  type: BlogBlockType;
  content: string;
  detail: string;
  enabled: boolean;
}

export interface BlogPostForm {
  title: string;
  slug: string;
  excerpt: string;
  status: 'draft' | 'review' | 'published';
  category: string;
  showFeaturedImage: boolean;
  showInLatestUpdates: boolean;
  allowComments: boolean;
  sticky: boolean;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  featuredImageName: string;
  featuredImageDataUrl: string;
}

export interface BlogPostPayload {
  post: BlogPostForm;
  blocks: BlogBlock[];
}

export const blogPostDraftStorageKey = 'sarkarimate-admin-blog-post-draft';

export const initialPostForm: BlogPostForm = {
  title: '',
  slug: '',
  excerpt: '',
  status: 'draft',
  category: 'latest-update',
  showFeaturedImage: true,
  showInLatestUpdates: true,
  allowComments: true,
  sticky: false,
  seoTitle: '',
  metaDescription: '',
  focusKeyword: '',
  featuredImageName: '',
  featuredImageDataUrl: '',
};

export const initialBlogBlocks: BlogBlock[] = [
  {
    id: 'hero',
    title: 'Header Image / Hero',
    type: 'hero',
    content: 'india-govt-job-update-2026.jpg',
    detail: 'india-govt-job-update-2026.jpg',
    enabled: true,
  },
  {
    id: 'summary',
    title: 'Short Summary',
    type: 'summary',
    content:
      'A quick overview of the latest update. Edit this block to write the summary that appears near the top of the article.',
    detail: 'A quick overview of the latest update...',
    enabled: true,
  },
  {
    id: 'intro',
    title: 'Introduction / Overview',
    type: 'text',
    content: 'Here you can add the introduction or overview of the news.',
    detail: 'Here you can add the introduction or overview of the news...',
    enabled: true,
  },
  {
    id: 'points',
    title: 'Important Points',
    type: 'list',
    content: 'First important point goes here.\nSecond important point goes here.',
    detail: 'First important point goes here.',
    enabled: true,
  },
  {
    id: 'vacancy',
    title: 'Vacancy Details (Table)',
    type: 'table',
    content: '4 columns - 8 rows',
    detail: '4 columns - 8 rows',
    enabled: true,
  },
  {
    id: 'main',
    title: 'Main Content / Details',
    type: 'text',
    content: 'This is the main content of the post. You can add all details here.',
    detail: 'This is the main content of the post...',
    enabled: true,
  },
  {
    id: 'links',
    title: 'Important Links',
    type: 'links',
    content: 'Official Website\nResult Link\nCounselling Portal',
    detail: '3 links added',
    enabled: true,
  },
  {
    id: 'gallery',
    title: 'Image Gallery',
    type: 'gallery',
    content: '5 images',
    detail: '5 images',
    enabled: true,
  },
  {
    id: 'faq',
    title: 'FAQ (Optional)',
    type: 'faq',
    content: '4 questions added',
    detail: '4 questions added',
    enabled: true,
  },
  {
    id: 'conclusion',
    title: 'Bottom Line / Conclusion',
    type: 'text',
    content: 'This is the conclusion or bottom line of the post.',
    detail: 'This is the conclusion or bottom line of the post...',
    enabled: true,
  },
];
