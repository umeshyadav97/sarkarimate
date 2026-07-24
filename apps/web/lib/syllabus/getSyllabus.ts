import { syllabusMap, type SyllabusSlug } from './syllabusMap';
import type { SyllabusGuide } from '../../types/syllabus';

const syllabusLookup: Record<string, SyllabusGuide> = syllabusMap;

export function getSyllabus(slug: string): SyllabusGuide | null {
  return syllabusLookup[slug] ?? null;
}

export function getAllSyllabusGuides(): SyllabusGuide[] {
  return Array.from(
    new Map(Object.values(syllabusMap).map((guide) => [guide.slug, guide])).values(),
  );
}

export function isSyllabusSlug(slug: string): slug is SyllabusSlug {
  return slug in syllabusLookup;
}
