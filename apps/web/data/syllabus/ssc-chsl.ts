import type { SyllabusGuide } from '../../types/syllabus';

export const sscChslSyllabus: SyllabusGuide = {
  slug: 'ssc-chsl',
  title: 'SSC CHSL Syllabus Guide 2026',
  examName: 'SSC CHSL',
  organization: 'Staff Selection Commission (SSC)',
  category: 'SSC',
  badgeLabel: '12th Level Exam',
  updatedDate: '2026-07-16T00:00:00Z',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Syllabus', href: '/syllabus' },
    { label: 'SSC CHSL Syllabus Guide 2026', href: '/syllabus/ssc-chsl' },
  ],
  heroFacts: [
    { label: 'Conducting Body', value: 'Staff Selection Commission', tone: 'blue' },
    { label: 'Exam Mode', value: 'Online', tone: 'blue' },
    { label: 'Exam Level', value: '12th Pass', tone: 'blue' },
    { label: 'Selection Process', value: 'Tier 1, Tier 2, DV', tone: 'slate' },
    { label: 'Official Website', value: 'ssc.gov.in', tone: 'blue' },
  ],
  quickActions: [
    { label: 'Download Syllabus PDF', href: '#syllabus', type: 'download' },
    { label: 'View Latest Notification', href: '/ssc-chsl', type: 'notification' },
    { label: 'Official Website', href: 'https://ssc.gov.in', type: 'official' },
    { label: 'Apply Online', href: 'https://ssc.gov.in', type: 'apply' },
  ],
  overviewDescription:
    'SSC CHSL (Combined Higher Secondary Level) Examination is conducted by the Staff Selection Commission to recruit candidates for various Group C posts such as Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO), and Data Entry Operator Grade A in various Ministries, Departments, and Government Offices.',
  overviewHighlights: [
    { label: 'Posts', value: 'LDC, JSA, DEO', tone: 'blue' },
    { label: 'Vacancies', value: '3000+ (Expected)', tone: 'blue' },
    { label: 'Age Limit', value: '18 - 27 Years', tone: 'blue' },
  ],
  overview: {
    title: 'SSC CHSL Overview',
    description:
      'SSC CHSL (Combined Higher Secondary Level) Examination is conducted by the Staff Selection Commission to recruit candidates for various Group C posts such as Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO), and Data Entry Operator Grade A in various Ministries, Departments, and Government Offices.',
    highlights: [
      { label: 'Posts', value: 'LDC, JSA, DEO', tone: 'blue' },
      { label: 'Vacancies', value: '3000+ (Expected)', tone: 'blue' },
      { label: 'Age Limit', value: '18 - 27 Years', tone: 'blue' },
    ],
  },
  syllabus: [
    {
      name: 'General Intelligence & Reasoning',
      topics: [
        'Analogy',
        'Coding-Decoding',
        'Classification',
        'Series',
        'Blood Relation',
        'Direction Sense',
        'Puzzle',
        'Matrix',
        'Venn Diagram',
        'Embedded Figures',
      ],
    },
    {
      name: 'Quantitative Aptitude',
      topics: [
        'Number System',
        'Arithmetic',
        'Percentage',
        'Profit & Loss',
        'Simple & Compound Interest',
        'Time & Work',
        'Time, Speed & Distance',
        'Algebra',
        'Geometry',
        'Mensuration',
        'Data Interpretation',
      ],
    },
    {
      name: 'English Language',
      topics: [
        'Reading Comprehension',
        'Grammar',
        'Vocabulary',
        'Synonyms & Antonyms',
        'Error Detection',
        'Fill in the Blanks',
        'Cloze Test',
        'Sentence Improvement',
        'Para Jumbles',
        'Active & Passive Voice',
      ],
    },
    {
      name: 'General Awareness',
      topics: [
        'History',
        'Geography',
        'Indian Polity',
        'Economy',
        'Current Affairs',
        'Science',
        'Static GK',
        'Books & Authors',
        'Sports',
        'Important Days & Awards',
      ],
    },
  ],
  examPattern: {
    columns: [
      { key: 'tier', label: 'Tier' },
      { key: 'subjects', label: 'Subjects' },
      { key: 'questions', label: 'Questions' },
      { key: 'marks', label: 'Marks' },
      { key: 'duration', label: 'Duration' },
      { key: 'negativeMarking', label: 'Negative Marking' },
    ],
    rows: [
      {
        id: 'tier-1',
        values: {
          tier: 'Tier 1 (Computer Based)',
          subjects: 'Reasoning, Quantitative Aptitude, English, General Awareness',
          questions: '100',
          marks: '200',
          duration: '60 Minutes',
          negativeMarking: '0.50 Marks',
        },
      },
      {
        id: 'tier-2',
        values: {
          tier: 'Tier 2 (Computer Based)',
          subjects:
            'Mathematical Abilities, Reasoning, English, General Awareness, Computer Knowledge',
          questions: '135',
          marks: '405',
          duration: '2 Hours 15 Minutes',
          negativeMarking: '1 Mark (Section I & II)',
        },
      },
    ],
  },
  selectionProcess: [
    'Tier 1',
    'Tier 2',
    'Skill Test / Typing Test',
    'Document Verification',
    'Final Merit',
  ],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Preparation strategy and subject-wise study plan',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for SSC CHSL preparation',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'SSC CHSL previous year question papers',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'Category-wise previous year cutoff',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'Study Timeline',
      description: '90-Day preparation roadmap',
      href: '#study-plan',
      tone: 'blue',
    },
  ],
  tier1CutoffHeading: 'SSC CHSL Tier-1 Cutoff (Out of 200)',
  tier2CutoffHeading: 'SSC CHSL Tier-2 Cutoff (Out of 405)',
  tier1Cutoff: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'general', label: 'General' },
      { key: 'obc', label: 'OBC' },
      { key: 'sc', label: 'SC' },
      { key: 'st', label: 'ST' },
      { key: 'ews', label: 'EWS' },
    ],
    rows: [
      {
        id: '2026',
        values: {
          year: '2026',
          general: '137.00 - 142.00 (Expected)',
          obc: '132.00 - 136.00 (Expected)',
          sc: '128.00 - 133.00 (Expected)',
          st: '122.00 - 127.00 (Expected)',
          ews: '134.00 - 138.00 (Expected)',
        },
      },
      {
        id: '2025',
        values: {
          year: '2025',
          general: '139.50',
          obc: '134.20',
          sc: '131.10',
          st: '126.00',
          ews: '135.80',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '157.36',
          obc: '156.61',
          sc: '139.68',
          st: '129.44',
          ews: '150.51',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '153.91',
          obc: '152.26',
          sc: '136.41',
          st: '124.52',
          ews: '151.09',
        },
      },
    ],
  },
  tier2Cutoff: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'general', label: 'General' },
      { key: 'obc', label: 'OBC' },
      { key: 'sc', label: 'SC' },
      { key: 'st', label: 'ST' },
      { key: 'ews', label: 'EWS' },
    ],
    rows: [
      {
        id: '2026',
        values: {
          year: '2026',
          general: '300.00 - 315.00 (Expected)',
          obc: '292.00 - 305.00 (Expected)',
          sc: '270.00 - 282.00 (Expected)',
          st: '255.00 - 268.00 (Expected)',
          ews: '295.00 - 308.00 (Expected)',
        },
      },
      {
        id: '2025',
        values: {
          year: '2025',
          general: '308.00',
          obc: '301.50',
          sc: '276.00',
          st: '262.50',
          ews: '302.00',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '322.00',
          obc: '318.50',
          sc: '291.00',
          st: '280.00',
          ews: '317.00',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '300.00',
          obc: '295.00',
          sc: '272.00',
          st: '260.00',
          ews: '294.00',
        },
      },
    ],
  },
  sidebarHighlights: [
    { title: 'Negative Marking', value: 'Tier 1: 0.50 Marks | Tier 2: 1 Mark' },
    {
      title: 'Age Limit',
      value: '18 - 27 Years',
      description: 'As per official notification',
    },
    {
      title: 'Educational Qualification',
      value: 'Passed 12th (Higher Secondary) from a Recognized Board',
    },
    { title: 'Application Fee', value: 'Rs 100 (Gen/OBC/EWS), Rs 0 (SC/ST/PwBD/Female)' },
    { title: 'Exam Duration', value: 'Tier 1 - 60 Minutes | Tier 2 - 2 Hours 15 Minutes' },
  ],
  faqs: [
    {
      question: 'What is the qualification required for SSC CHSL?',
      answer:
        'Candidates must have passed 10+2 (Higher Secondary) or an equivalent examination from a recognized board.',
    },
    {
      question: 'Is there negative marking in SSC CHSL?',
      answer:
        'Yes. Tier 1 has a negative marking of 0.50 marks, while Tier 2 has a negative marking of 1 mark for specified sections.',
    },
    {
      question: 'Can final year 12th students apply?',
      answer:
        'Candidates must possess the required qualification by the date mentioned in the official notification.',
    },
    {
      question: 'What posts are offered through SSC CHSL?',
      answer:
        'SSC CHSL recruits for Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO), and DEO Grade A.',
    },
    {
      question: 'Is there a typing test in SSC CHSL?',
      answer:
        'Yes. Depending on the post applied for, candidates have to qualify the Typing Test or Skill Test.',
    },
    {
      question: 'How many attempts are allowed in SSC CHSL?',
      answer:
        'There is no fixed attempt limit. Candidates can apply until they reach the prescribed upper age limit.',
    },
    {
      question: 'What is the salary after SSC CHSL selection?',
      answer:
        'The salary depends on the post and pay level. Most posts fall under Pay Level 2 to Pay Level 4 along with applicable allowances.',
    },
    {
      question: 'What is the age relaxation in SSC CHSL?',
      answer:
        'Age relaxation is available for reserved categories as per Government of India rules.',
    },
  ],
  seo: {
    title: 'SSC CHSL Syllabus Guide 2026 | SarkariMate',
    description:
      'Latest syllabus, exam pattern, study strategy, books, previous year papers and cutoff.',
    canonical: '/syllabus/ssc-chsl',
    keywords: ['SSC CHSL', 'SSC', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default sscChslSyllabus;
