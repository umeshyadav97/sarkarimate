import type { SyllabusGuide } from '../../types/syllabus';

export const sscCglSyllabus: SyllabusGuide = {
  slug: 'ssc-cgl',
  title: 'SSC CGL Syllabus Guide 2026',
  examName: 'SSC CGL',
  organization: 'Staff Selection Commission (SSC)',
  category: 'SSC',
  badgeLabel: 'Graduate Level Exam',
  updatedDate: '2026-07-16T00:00:00Z',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Syllabus', href: '/syllabus' },
    { label: 'SSC CGL Syllabus Guide 2026', href: '/syllabus/ssc-cgl' },
  ],
  heroFacts: [
    { label: 'Conducting Body', value: 'Staff Selection Commission', tone: 'blue' },
    { label: 'Exam Mode', value: 'Online', tone: 'blue' },
    { label: 'Exam Level', value: 'Graduate', tone: 'blue' },
    { label: 'Selection Process', value: 'Tier 1, Tier 2, DV', tone: 'slate' },
    { label: 'Official Website', value: 'ssc.gov.in', tone: 'blue' },
  ],
  quickActions: [
    { label: 'Download Syllabus PDF', href: '#syllabus', type: 'download' },
    { label: 'View Latest Notification', href: '/ssc-cgl', type: 'notification' },
    { label: 'Official Website', href: 'https://ssc.gov.in', type: 'official' },
    { label: 'Apply Online', href: 'https://ssc.gov.in', type: 'apply' },
  ],
  overviewDescription:
    'SSC CGL (Combined Graduate Level) exam is conducted for recruitment to various Group B and Group C posts in different Ministries, Departments, and Organizations of the Government of India.',
  overviewHighlights: [
    { label: 'Total Posts', value: '60,000+ (Expected)', tone: 'blue' },
    { label: 'Vacancies', value: '1000+', tone: 'blue' },
    { label: 'Age Limit', value: '18 - 32 Years', tone: 'blue' },
  ],
  overview: {
    title: 'SSC CGL Overview',
    description:
      'SSC CGL (Combined Graduate Level) exam is conducted for recruitment to various Group B and Group C posts in different Ministries, Departments, and Organizations of the Government of India.',
    highlights: [
      { label: 'Total Posts', value: '60,000+ (Expected)', tone: 'blue' },
      { label: 'Vacancies', value: '1000+', tone: 'blue' },
      { label: 'Age Limit', value: '18 - 32 Years', tone: 'blue' },
    ],
  },
  syllabus: [
    {
      name: 'General Intelligence & Reasoning',
      topics: [
        'Analogy',
        'Coding-Decoding',
        'Puzzles',
        'Series',
        'Blood Relation',
        'Seating Arrangement',
      ],
    },
    {
      name: 'Quantitative Aptitude',
      topics: [
        'Arithmetic',
        'Algebra',
        'Geometry',
        'Trigonometry',
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
        'Cloze Test',
        'Para Jumbles',
        'Fill in the Blanks',
      ],
    },
    {
      name: 'General Awareness',
      topics: [
        'History',
        'Geography',
        'Polity',
        'Economy',
        'Current Affairs',
        'Science',
        'Static GK',
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
          subjects: 'Quantitative Aptitude, English Language, Statistics, General Studies',
          questions: 'Various',
          marks: '600',
          duration: '90 Minutes',
          negativeMarking: '0.50 Marks',
        },
      },
    ],
  },
  selectionProcess: ['Tier 1', 'Tier 2', 'Skill Test', 'Document Verification', 'Final Merit'],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Best strategy, study plan and important tips',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for each subject',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'Tier 1 & Tier 2 previous year papers',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'Year-wise cutoff for all categories',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'Study Timeline',
      description: 'Month-wise study plan for better syllabus',
      href: '#study-plan',
      tone: 'blue',
    },
  ],
  tier1CutoffHeading: 'SSC CGL Tier-1 Cutoff (Out of 200)',
  tier2CutoffHeading: 'SSC CGL Tier-2 Cutoff (Out of 600)',
  tier1Cutoff: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'general', label: 'General (UR)' },
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
          general: '145.00 - 152.00 (Expected)',
          obc: '140.00 - 146.00 (Expected)',
          sc: '122.00 - 128.00 (Expected)',
          st: '110.00 - 116.00 (Expected)',
          ews: '138.00 - 144.00 (Expected)',
        },
      },
      {
        id: '2025',
        values: {
          year: '2025',
          general: '136.83',
          obc: '130.37',
          sc: '114.97',
          st: '106.37',
          ews: '127.42',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '153.19',
          obc: '146.26',
          sc: '126.46',
          st: '111.89',
          ews: '142.02',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '150.05',
          obc: '145.94',
          sc: '126.68',
          st: '118.17',
          ews: '143.44',
        },
      },
    ],
  },
  tier2Cutoff: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'general', label: 'General (UR)' },
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
          general: '310.00 - 325.00 (Expected)',
          obc: '302.00 - 315.00 (Expected)',
          sc: '275.00 - 290.00 (Expected)',
          st: '260.00 - 275.00 (Expected)',
          ews: '305.00 - 318.00 (Expected)',
        },
      },
      {
        id: '2025',
        values: {
          year: '2025',
          general: '312.50',
          obc: '305.20',
          sc: '278.40',
          st: '265.10',
          ews: '308.00',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '338.83',
          obc: '337.88',
          sc: '324.37',
          st: '315.02',
          ews: '338.01',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '287.00',
          obc: '271.00',
          sc: '252.00',
          st: '241.00',
          ews: '265.00',
        },
      },
    ],
  },
  sidebarHighlights: [
    { title: 'Negative Marking', value: '0.50 Marks' },
    { title: 'Age Limit', value: '18 - 32 Years', description: 'As on 01/08/2026' },
    { title: 'Educational Qualification', value: "Bachelor's Degree in any stream" },
    { title: 'Application Fee', value: 'Rs 100 (Gen/OBC/EWS), Rs 0 (SC/ST/PwBD/Female)' },
    { title: 'Exam Duration', value: 'Tier 1 - 60 Minutes, Tier 2 - 90 Minutes' },
  ],
  faqs: [
    {
      question: 'Is there negative marking in SSC CGL?',
      answer:
        'Yes. SSC CGL has negative marking. The exact deduction should be verified from the latest official notification.',
    },
    {
      question: 'Which is better: SSC CGL or CHSL?',
      answer:
        'SSC CGL is graduate-level and usually offers higher-level posts, while SSC CHSL is 12th-level. The better option depends on your qualification and target post.',
    },
    {
      question: 'How many attempts are allowed in SSC CGL?',
      answer:
        'SSC generally does not set a fixed attempt count. Eligibility mainly depends on age limit and category rules.',
    },
    {
      question: 'Is coaching necessary for SSC CGL?',
      answer:
        'Coaching is optional. A clear syllabus, regular practice, previous year papers, and mock tests can also build strong exam readiness.',
    },
    {
      question: 'Can final year students apply?',
      answer:
        'Final year eligibility depends on the qualification cut-off date mentioned in the latest official notification.',
    },
    {
      question: 'What is the cut-off for SSC CGL?',
      answer:
        'Cutoff changes every year based on vacancies, paper level, category, and number of candidates.',
    },
    {
      question: 'What is the salary after selection?',
      answer: 'Salary depends on the selected post, pay level, department, and posting location.',
    },
    {
      question: 'What is the age relaxation in SSC CGL?',
      answer:
        'Age relaxation is provided as per government rules for eligible reserved categories.',
    },
  ],
  seo: {
    title: 'SSC CGL Syllabus Guide 2026 | SarkariMate',
    description:
      'Complete syllabus, exam pattern, study strategy, recommended books, previous year papers, cutoff and FAQs.',
    canonical: '/syllabus/ssc-cgl',
    keywords: ['SSC CGL', 'SSC', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default sscCglSyllabus;
