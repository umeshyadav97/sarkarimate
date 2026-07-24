import syllabusResponse from '@/features/listings/store/syllabus.json';
import { getAllSyllabusGuides, getSyllabus } from '@/lib/syllabus/getSyllabus';
import type {
  SyllabusGuide,
  SyllabusMetric,
  SyllabusResource,
  SyllabusTable,
  SyllabusSubject,
} from '@/types/syllabus';

type SyllabusListItem = (typeof syllabusResponse.data.items)[number];

interface CategoryTemplate {
  subjects: SyllabusSubject[];
  selectionProcess: string[];
  patternSubjects: string;
}

const siteUrl = 'https://sarkarimate.com';

const categoryTemplates: Record<string, CategoryTemplate> = {
  SSC: {
    subjects: [
      createSubject('General Intelligence & Reasoning', [
        'Analogy',
        'Coding Decoding',
        'Blood Relation',
        'Series',
        'Puzzle',
      ]),
      createSubject('Quantitative Aptitude', [
        'Arithmetic',
        'Algebra',
        'Geometry',
        'Mensuration',
        'Data Interpretation',
      ]),
      createSubject('English Language', [
        'Reading Comprehension',
        'Grammar',
        'Vocabulary',
        'Cloze Test',
        'Para Jumbles',
      ]),
      createSubject('General Awareness', [
        'History',
        'Geography',
        'Polity',
        'Economy',
        'Current Affairs',
      ]),
    ],
    selectionProcess: [
      'Tier 1',
      'Tier 2',
      'Skill Test / PET if applicable',
      'Document Verification',
      'Final Merit',
    ],
    patternSubjects: 'Reasoning, Quantitative Aptitude, English, General Awareness',
  },
  UPSC: {
    subjects: [
      createSubject('General Studies', [
        'History',
        'Geography',
        'Polity',
        'Economy',
        'Environment',
      ]),
      createSubject('CSAT', ['Comprehension', 'Reasoning', 'Numeracy', 'Decision Making']),
      createSubject('Essay', ['Current issues', 'Social topics', 'Governance', 'Ethics']),
      createSubject('Optional Subject', ['Paper 1 topics', 'Paper 2 topics', 'Answer writing']),
    ],
    selectionProcess: [
      'Preliminary Examination',
      'Main Examination',
      'Personality Test',
      'Final Merit',
    ],
    patternSubjects: 'General Studies, CSAT, Essay, Optional Subject',
  },
  Railway: {
    subjects: [
      createSubject('Mathematics', [
        'Number System',
        'Percentage',
        'Profit and Loss',
        'Time and Work',
      ]),
      createSubject('General Intelligence', [
        'Analogies',
        'Coding Decoding',
        'Syllogism',
        'Venn Diagram',
      ]),
      createSubject('General Awareness', [
        'Current Affairs',
        'Railway facts',
        'History',
        'Geography',
      ]),
      createSubject('General Science', ['Physics', 'Chemistry', 'Biology', 'Environment']),
    ],
    selectionProcess: [
      'CBT 1',
      'CBT 2 if applicable',
      'Skill / PET if applicable',
      'Document Verification',
      'Medical Test',
    ],
    patternSubjects: 'Mathematics, Reasoning, General Awareness, General Science',
  },
  Banking: {
    subjects: [
      createSubject('Reasoning Ability', [
        'Puzzle',
        'Seating Arrangement',
        'Inequality',
        'Syllogism',
      ]),
      createSubject('Quantitative Aptitude', [
        'Simplification',
        'DI',
        'Arithmetic',
        'Number Series',
      ]),
      createSubject('English Language', ['Reading Comprehension', 'Error Detection', 'Cloze Test']),
      createSubject('General / Banking Awareness', [
        'Banking terms',
        'Current Affairs',
        'RBI updates',
      ]),
    ],
    selectionProcess: [
      'Preliminary Examination',
      'Main Examination',
      'Interview if applicable',
      'Final Merit',
    ],
    patternSubjects: 'Reasoning, Quantitative Aptitude, English, Banking Awareness',
  },
};

const defaultTemplate: CategoryTemplate = {
  subjects: [
    createSubject('General Awareness', ['Current Affairs', 'History', 'Geography', 'Polity']),
    createSubject('Reasoning', ['Analogy', 'Series', 'Coding Decoding', 'Puzzle']),
    createSubject('Quantitative Aptitude', ['Arithmetic', 'Simplification', 'Data Interpretation']),
    createSubject('Subject Knowledge', ['Core concepts', 'Important topics', 'Practice questions']),
  ],
  selectionProcess: [
    'Written Examination',
    'Skill / Physical Test if applicable',
    'Document Verification',
    'Final Merit',
  ],
  patternSubjects: 'General Awareness, Reasoning, Quantitative Aptitude, Subject Knowledge',
};

export function getSyllabusStaticParams() {
  return getAllSyllabusGuides().map((guide) => ({ slug: guide.slug }));
}

export function getSyllabusSitemapEntries() {
  return getAllSyllabusGuides().map((guide) => ({
    url: `${siteUrl}${guide.seo.canonical}`,
    lastModified: parseDate(guide.updatedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));
}

export function getSyllabusGuide(slug: string): SyllabusGuide | null {
  const staticGuide = getSyllabus(slug);

  if (staticGuide) {
    return normalizeSyllabusGuide(staticGuide);
  }

  const item = syllabusResponse.data.items.find((guide) => guide.slug === slug);

  if (!item) {
    return null;
  }

  return mapListItemToSyllabusGuide(item);
}

function normalizeSyllabusGuide(guide: SyllabusGuide): SyllabusGuide {
  const overview =
    guide.overview ??
    (guide.overviewDescription
      ? {
          title: `${guide.examName} Overview`,
          description: guide.overviewDescription,
          highlights: guide.overviewHighlights,
        }
      : undefined);

  return {
    ...guide,
    overview,
    selectionProcess: guide.selectionProcess?.map((step) =>
      typeof step === 'string' ? { title: step } : step,
    ),
  };
}

function mapListItemToSyllabusGuide(item: SyllabusListItem): SyllabusGuide {
  const template = categoryTemplates[item.category] ?? defaultTemplate;
  const title = `${item.examName} Syllabus Guide 2026`;
  const canonical = `/syllabus/${item.slug}`;
  const relatedGuides = syllabusResponse.data.items
    .filter((guide) => guide.slug !== item.slug)
    .slice(0, 4)
    .map((guide) => ({
      title: guide.title,
      href: guide.href,
      category: guide.category,
      description: guide.description,
    }));

  return {
    slug: item.slug,
    title,
    examName: item.examName,
    organization: item.organization,
    category: item.category,
    badgeLabel: item.category,
    updatedDate: formatDisplayDate(item.updatedDate),
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Syllabus', href: '/syllabus' },
      { label: title, href: canonical },
    ],
    heroFacts: createHeroFacts(item),
    quickActions: createQuickActions(item),
    overview: {
      title: `${item.examName} Overview`,
      description: item.description,
      highlights: createOverviewHighlights(item),
    },
    syllabus: template.subjects,
    examPattern: createExamPattern(template),
    selectionProcess: template.selectionProcess.map((step) => ({
      title: step,
    })),
    resources: createResources(item),
    books: createBooks(template.subjects),
    previousPapers: createPreviousPapers(item.examName),
    cutoff: createCutoffTable(),
    studyPlan: createStudyPlan(),
    faqs: [
      {
        question: `What should I study first for ${item.examName}?`,
        answer:
          'Start with the official syllabus, understand the exam pattern, and then revise high-weightage topics with previous year questions.',
      },
      {
        question: `Are previous year papers useful for ${item.examName}?`,
        answer:
          'Yes. Previous year papers help you understand question level, repeated topics, time management, and topic priority.',
      },
      {
        question: 'Should I follow the official notification?',
        answer:
          'Always verify eligibility, dates, fees, syllabus, and instructions from the official notification or official website.',
      },
    ],
    relatedGuides,
    seoContent: [
      {
        title: `${item.examName} Syllabus Guide`,
        body: [
          `${item.examName} syllabus should begin with the latest syllabus, exam pattern, previous year papers, and a realistic study plan.`,
          'Use this page as a structured starting point and verify official updates before filling any form or appearing in the exam.',
        ],
      },
    ],
    seo: {
      title: `${title} | SarkariMate`,
      description: item.description,
      canonical,
      keywords: [item.examName, item.category, 'syllabus', 'syllabus guide', 'exam pattern'].filter(
        (keyword): keyword is string => Boolean(keyword),
      ),
    },
  };
}

function createSubject(name: string, topics: string[], description?: string): SyllabusSubject {
  return { name, topics, description };
}

function createHeroFacts(item: SyllabusListItem): SyllabusMetric[] {
  return [
    { label: 'Conducting Body', value: item.organization, tone: 'blue' },
    { label: 'Exam Category', value: item.category, tone: 'blue' },
    { label: 'Guide Type', value: 'Syllabus Guide', tone: 'slate' },
    { label: 'Last Updated', value: formatDisplayDate(item.updatedDate), tone: 'orange' },
  ];
}

function createOverviewHighlights(item: SyllabusListItem): SyllabusMetric[] {
  return [
    { label: 'Exam', value: item.examName, tone: 'blue' },
    { label: 'Category', value: item.category, tone: 'blue' },
    { label: 'Status', value: 'Updated', tone: 'orange' },
  ];
}

function createQuickActions(item: SyllabusListItem) {
  const downloadUrl = getOptionalString(item, 'downloadUrl');
  const notificationUrl = getOptionalString(item, 'notificationUrl');
  const officialUrl = getOptionalString(item, 'officialUrl');
  const applyUrl = getOptionalString(item, 'applyUrl');

  return [
    downloadUrl ? { label: 'Download PDF', href: downloadUrl, type: 'download' as const } : null,
    notificationUrl
      ? { label: 'Latest Notification', href: notificationUrl, type: 'notification' as const }
      : null,
    officialUrl
      ? { label: 'Official Website', href: officialUrl, type: 'official' as const }
      : null,
    applyUrl ? { label: 'Apply Online', href: applyUrl, type: 'apply' as const } : null,
  ].filter((action): action is NonNullable<typeof action> => Boolean(action));
}

function getOptionalString(item: SyllabusListItem, key: string) {
  const value = (item as Record<string, unknown>)[key];
  return typeof value === 'string' && value.length > 0 ? value : null;
}

function createExamPattern(template: CategoryTemplate): SyllabusTable {
  return {
    columns: [
      { key: 'stage', label: 'Stage' },
      { key: 'subjects', label: 'Subjects' },
      { key: 'questions', label: 'Questions' },
      { key: 'marks', label: 'Marks' },
      { key: 'duration', label: 'Duration' },
    ],
    rows: [
      {
        id: 'stage-1',
        values: {
          stage: 'Stage 1',
          subjects: template.patternSubjects,
          questions: 'As per notification',
          marks: 'As per notification',
          duration: 'Check official notice',
        },
      },
    ],
  };
}

function createResources(item: SyllabusListItem): SyllabusResource[] {
  return [
    {
      title: 'Study Strategy',
      description: `Plan your ${item.examName} syllabus with a topic-first study approach.`,
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Subject-wise book suggestions and study material.',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'Practice old papers to understand exam trends.',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'Review cutoff movement before setting targets.',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'Study Plan',
      description: 'Follow a phased study roadmap.',
      href: '#study-plan',
      tone: 'slate',
    },
    {
      title: 'Important Topics',
      description: 'Prioritize topics based on syllabus coverage.',
      href: '#syllabus',
      tone: 'blue',
    },
  ];
}

function createBooks(subjects: SyllabusSubject[]) {
  return subjects.slice(0, 4).map((subject) => ({
    title: `${subject.name} Standard Book`,
    subject: subject.name,
    description: 'Choose the latest edition and match chapters with the official syllabus.',
  }));
}

function createPreviousPapers(examName: string) {
  return ['2025', '2024', '2023'].map((year) => ({
    title: `${examName} Previous Year Paper ${year}`,
    year,
  }));
}

function createCutoffTable(): SyllabusTable {
  return {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'general', label: 'General' },
      { key: 'obc', label: 'OBC' },
      { key: 'sc', label: 'SC' },
      { key: 'st', label: 'ST' },
    ],
    rows: [],
  };
}

function createStudyPlan() {
  return [
    {
      title: 'Foundation',
      duration: 'Weeks 1-4',
      tasks: ['Read the syllabus', 'Build basic concepts', 'Create subject notes'],
    },
    {
      title: 'Practice',
      duration: 'Weeks 5-8',
      tasks: ['Solve topic-wise questions', 'Attempt sectional tests', 'Revise weak areas'],
    },
    {
      title: 'Revision',
      duration: 'Final weeks',
      tasks: ['Attempt mock tests', 'Revise formulas and notes', 'Analyze previous papers'],
    },
  ];
}

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(parseDate(date));
}

function parseDate(date: string) {
  const parsedDate = new Date(date.includes('T') ? date : `${date}T00:00:00`);
  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
}
