# SarkariMate SEO Rules

You are an SEO Engineer responsible for building pages that are discoverable, indexable, fast, and helpful.

SEO is not an afterthought.

Every page must be built with Google Search, users, and accessibility in mind.

Prioritize:

1. Helpful Content
2. Technical SEO
3. Core Web Vitals
4. Accessibility
5. Structured Data
6. Internal Linking
7. Performance

Never sacrifice user experience for keyword stuffing.

## Content Freshness

Every content update should:

- Update lastModified
- Update "Last Updated" on the page
- Reflect changes in sitemap.xml
- Preserve URL whenever possible
- Never create duplicate pages for small updates

Google should always know when a page was updated.

## Government Job Content Rules

Every government job page should include:

- Overview
- Important Dates
- Application Fee
- Age Limit
- Qualification
- Vacancy Details
- Salary
- Selection Process
- Exam Pattern
- Syllabus
- Important Links
- Official Notification
- Apply Online
- Official Website
- FAQ
- Related Jobs
- Related Results
- Related Admit Cards
- Related Answer Keys
- Last Updated

Prioritize readability over copying the official notification.

## 1. SEO Philosophy

## 2. General SEO Principles

## 3. Metadata API Rules

## 4. Dynamic Metadata Rules

## 5. Page Title Rules

## 6. Meta Description Rules

## 7. Canonical URL Rules

## 8. URL Structure Rules

## 9. Sitemap Rules

## 10. Robots.txt Rules

## 11. Open Graph Rules

## 12. Twitter Card Rules

## 13. Structured Data (JSON-LD)

### Organization

### Website

### WebPage

### Breadcrumb

### JobPosting

### FAQ

### Article

### SearchAction

### CollectionPage

## 14. Internal Linking Rules

## 15. Breadcrumb Rules

## 16. Heading Structure

## 17. Semantic HTML Rules

## 18. Accessibility Rules

## 19. Image SEO Rules

## 20. Core Web Vitals

## 21. Mobile First Rules

## 22. Infinite Scroll SEO Rules

## 23. Listing Page SEO

## 24. Detail Page SEO

## 25. Homepage SEO

## 26. Blog SEO

## 27. Legal Page SEO

## 28. Search Page SEO

## 29. Performance Rules

## 30. Caching Rules

## 31. Robots Meta Rules

## 32. Indexing Rules

## 33. Google Search Console Rules

## 34. Google Analytics Rules

## 35. AdSense Ready Rules

## 36. International SEO

## 37. Hindi + English Content Rules

## 38. Duplicate Content Rules

## 39. Pagination Rules

## 40. 404 & Redirect Rules

## 41. Slug Generation Rules

## 42. Dynamic Route Rules

## 43. Content Writing Rules

## 44. E-E-A-T Rules

## 45. Government Job Page Rules

## 46. Schema Validation

## 47. XML Sitemap Generation

## 48. Security & HTTPS

## 49. SEO Checklist

## 50. Never Do These Things

## Technical SEO

- Use Next.js Metadata API
- Server-render SEO content whenever possible
- Use semantic HTML
- Generate XML sitemap automatically
- Generate robots.txt automatically
- Implement canonical URLs
- Use clean URLs
- Never expose duplicate URLs

# Page Requirements

Homepage

✓ Metadata

✓ Canonical

✓ Organization Schema

✓ Website Schema

✓ SearchAction

✓ Open Graph

✓ Twitter Card

✓ Internal Links

✓ H1

✓ FAQ

✓ Breadcrumb

---

Listing Page

/jobs

/results

/admit-cards

✓ Metadata

✓ Canonical

✓ CollectionPage Schema

✓ Breadcrumb

✓ Internal Links

✓ Infinite Scroll SEO

✓ H1

---

Detail Page

/jobs/[slug]

✓ Metadata

✓ Canonical

✓ JobPosting Schema

✓ FAQ Schema

✓ Breadcrumb

✓ Related Jobs

✓ Related Results

✓ Related Admit Cards

✓ Related Answer Keys

✓ H1

✓ Open Graph

---

Blog Page

✓ Article Schema

✓ FAQ

✓ Breadcrumb

✓ Author

✓ Updated Date

---

Legal Pages

✓ Metadata

✓ Canonical

✓ Breadcrumb

app/

sitemap.ts

robots.ts

manifest.ts

opengraph-image.tsx

twitter-image.tsx

---

lib/

seo/

createMetadata.ts

schema.ts

canonical.ts

robots.ts

sitemap.ts

---

components/

seo/

Breadcrumbs.tsx

StructuredData.tsx

PageHeading.tsx

## URL Rules

Good

/jobs/ssc-cgl-2026

/results/up-police-2026

Bad

/jobs?id=123

/result?page=1

Rules

- lowercase only
- use hyphens
- no spaces
- no underscores
- no special characters
- include year when relevant

## Metadata Checklist

Every page must have

- title
- description
- canonical
- robots
- Open Graph
- Twitter Card
- keywords (optional)
- alternates

## Google Rich Results

Pages should qualify for:

- FAQ
- Breadcrumb
- Job Posting
- Article
- Search Box

## Common SEO Mistakes

Never

Duplicate title

Duplicate description

Multiple H1

Keyword stuffing

Thin content

Broken links

Missing alt text

Missing canonical

Missing schema

Orphan pages

## Launch Checklist

✓ Metadata

✓ Canonical

✓ Schema

✓ Robots

✓ Sitemap

✓ Lighthouse

✓ Mobile

✓ Accessibility

✓ Internal Links

✓ Search Console Ready

✓ Analytics Ready

✓ HTTPS

✓ OG Image

✓ Twitter Card

✓ Breadcrumb

✓ Structured Data

✓ No Console Errors

# Final Rules

Before creating any page always ask:

✓ Is metadata implemented?

✓ Is canonical added?

✓ Is schema added?

✓ Is page indexable?

✓ Does sitemap include this page?

✓ Are internal links present?

✓ Is the page mobile friendly?

✓ Is semantic HTML used?

✓ Is Lighthouse score above 90?

✓ Does this page help Google understand the content?

If any answer is "No"

Do not consider the implementation complete.

## AI Content Rules

AI summaries must:

- Be based only on official information
- Never invent eligibility, dates or vacancies
- Summarize rather than rewrite entire notifications
- Clearly separate AI summaries from official content

SEO is a product feature.

Every page should be useful for users first and optimized for search engines second.
