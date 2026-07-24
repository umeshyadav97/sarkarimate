import type { SyllabusGuide } from '../../types/syllabus';

export const ibpsClerkSyllabus: SyllabusGuide = {
  slug: 'ibps-clerk',
  title: 'IBPS Clerk Syllabus Guide 2026',
  examName: 'IBPS Clerk',
  organization: 'Institute of Banking Personnel Selection (IBPS)',
  category: 'Banking',
  updatedDate: '2026-07-16T00:00:00Z',
  breadcrumbs: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Syllabus',
      href: '/syllabus',
    },
    {
      label: 'IBPS Clerk Syllabus Guide 2026',
      href: '/syllabus/ibps-clerk',
    },
  ],
  badgeLabel: 'Banking Clerk Exam',
  heroFacts: [
    {
      label: 'Conducting Body',
      value: 'Institute of Banking Personnel Selection (IBPS)',
      tone: 'blue',
    },
    {
      label: 'Exam Mode',
      value: 'Online',
      tone: 'blue',
    },
    {
      label: 'Exam Level',
      value: 'Graduate',
      tone: 'blue',
    },
    {
      label: 'Selection Process',
      value: 'Prelims, Mains',
      tone: 'slate',
    },
    {
      label: 'Official Website',
      value: 'ibps.in',
      tone: 'blue',
    },
  ],
  quickActions: [
    {
      label: 'Download Syllabus PDF',
      href: '#syllabus',
      type: 'download',
    },
    {
      label: 'View Latest Notification',
      href: '/ibps-clerk',
      type: 'notification',
    },
    {
      label: 'Official Website',
      href: 'https://www.ibps.in',
      type: 'official',
    },
    {
      label: 'Apply Online',
      href: 'https://www.ibps.in',
      type: 'apply',
    },
  ],
  overviewDescription:
    'IBPS Clerk (Customer Service Associate) Examination is conducted annually by the Institute of Banking Personnel Selection (IBPS) to recruit candidates for clerical cadre posts in participating public sector banks across India. The recruitment process consists of Preliminary Examination and Main Examination.',
  overviewHighlights: [
    {
      label: 'Participating Banks',
      value: '11 Public Sector Banks',
      tone: 'blue',
    },
    {
      label: 'Vacancies',
      value: '6000+ (Expected)',
      tone: 'blue',
    },
    {
      label: 'Age Limit',
      value: '20 - 28 Years',
      tone: 'blue',
    },
  ],
  syllabus: [
    {
      name: 'English Language',
      topics: [
        'Reading Comprehension',
        'Cloze Test',
        'Error Detection',
        'Sentence Improvement',
        'Para Jumbles',
        'Fill in the Blanks',
        'Vocabulary',
        'Synonyms & Antonyms',
        'Word Swap',
      ],
    },
    {
      name: 'Quantitative Aptitude',
      topics: [
        'Simplification',
        'Approximation',
        'Number Series',
        'Quadratic Equations',
        'Data Interpretation',
        'Percentage',
        'Profit & Loss',
        'Ratio & Proportion',
        'Time & Work',
        'Time, Speed & Distance',
        'Simple Interest',
        'Probability',
      ],
    },
    {
      name: 'Reasoning Ability',
      topics: [
        'Puzzles',
        'Seating Arrangement',
        'Coding-Decoding',
        'Blood Relation',
        'Direction Sense',
        'Syllogism',
        'Inequality',
        'Order & Ranking',
        'Input-Output',
        'Logical Reasoning',
      ],
    },
    {
      name: 'General / Financial Awareness',
      topics: [
        'Current Affairs',
        'Banking Awareness',
        'Financial Awareness',
        'RBI',
        'Budget',
        'Government Schemes',
        'Economy',
        'Static GK',
      ],
    },
    {
      name: 'Computer Aptitude',
      topics: [
        'Computer Fundamentals',
        'Operating Systems',
        'MS Office',
        'Internet',
        'Networking',
        'Computer Security',
        'Database Basics',
      ],
    },
  ],
  examPattern: {
    columns: [
      {
        key: 'stage',
        label: 'Stage',
      },
      {
        key: 'subjects',
        label: 'Subjects',
      },
      {
        key: 'questions',
        label: 'Questions',
      },
      {
        key: 'marks',
        label: 'Marks',
      },
      {
        key: 'duration',
        label: 'Duration',
      },
      {
        key: 'negativeMarking',
        label: 'Negative Marking',
      },
    ],
    rows: [
      {
        id: 'prelims',
        values: {
          stage: 'Preliminary Examination',
          subjects: 'English, Numerical Ability, Reasoning',
          questions: '100',
          marks: '100',
          duration: '60 Minutes',
          negativeMarking: '0.25 Marks',
        },
      },
      {
        id: 'mains',
        values: {
          stage: 'Main Examination',
          subjects:
            'General/Financial Awareness, General English, Reasoning Ability & Computer Aptitude, Quantitative Aptitude',
          questions: '190',
          marks: '200',
          duration: '160 Minutes',
          negativeMarking: '0.25 Marks',
        },
      },
    ],
  },
  selectionProcess: [
    'Preliminary Examination',
    'Main Examination',
    'Document Verification',
    'Final Merit',
  ],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Complete preparation strategy for IBPS Clerk',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for IBPS Clerk preparation',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'Memory-based papers with solutions',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'State-wise & category-wise cutoff marks',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'Mock Test Plan',
      description: 'Section-wise practice and mock schedule',
      href: '#study-plan',
      tone: 'blue',
    },
  ],
  tier1CutoffHeading: 'IBPS Clerk Tier-1 (Prelims) Cutoff (Out of 100)',
  tier2CutoffHeading: 'IBPS Clerk Tier-2 (Mains) Final Allotment Cutoff (Normalized Out of 100)',
  tier1Cutoff: {
    columns: [
      {
        key: 'year',
        label: 'Year',
      },
      {
        key: 'general',
        label: 'General',
      },
      {
        key: 'obc',
        label: 'OBC',
      },
      {
        key: 'sc',
        label: 'SC',
      },
      {
        key: 'st',
        label: 'ST',
      },
      {
        key: 'ews',
        label: 'EWS',
      },
    ],
    rows: [
      {
        id: '2026',
        values: {
          year: '2026',
          general: '75.00 - 82.00 (Expected)',
          obc: '72.00 - 79.00 (Expected)',
          sc: '65.00 - 72.00 (Expected)',
          st: '58.00 - 65.00 (Expected)',
          ews: '73.00 - 80.00 (Expected)',
        },
      },
      {
        id: '2025',
        values: {
          year: '2025',
          general: '69.75',
          obc: '69.75',
          sc: '63.00',
          st: '57.75',
          ews: '68.50',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '79.00',
          obc: '79.00',
          sc: '70.75',
          st: '65.00',
          ews: '78.25',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '79.25',
          obc: '76.00',
          sc: '68.50',
          st: '61.25',
          ews: '78.50',
        },
      },
    ],
  },
  tier2Cutoff: {
    columns: [
      {
        key: 'year',
        label: 'Year',
      },
      {
        key: 'general',
        label: 'General',
      },
      {
        key: 'obc',
        label: 'OBC',
      },
      {
        key: 'sc',
        label: 'SC',
      },
      {
        key: 'st',
        label: 'ST',
      },
      {
        key: 'ews',
        label: 'EWS',
      },
    ],
    rows: [
      {
        id: '2026',
        values: {
          year: '2026',
          general: '38.00 - 42.00 (Expected)',
          obc: '35.00 - 39.00 (Expected)',
          sc: '30.00 - 34.00 (Expected)',
          st: '26.00 - 30.00 (Expected)',
          ews: '36.00 - 40.00 (Expected)',
        },
      },
      {
        id: '2025',
        values: {
          year: '2025',
          general: '39.50',
          obc: '36.75',
          sc: '31.25',
          st: '27.50',
          ews: '37.00',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '37.75',
          obc: '33.50',
          sc: '28.50',
          st: '26.13',
          ews: '35.63',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '38.25',
          obc: '34.63',
          sc: '32.50',
          st: '28.38',
          ews: '35.75',
        },
      },
    ],
  },
  sidebarHighlights: [
    {
      title: 'Negative Marking',
      value: '0.25 Marks',
    },
    {
      title: 'Age Limit',
      value: '20 - 28 Years',
      description: 'Age relaxation applicable as per government rules',
    },
    {
      title: 'Educational Qualification',
      value: "Bachelor's Degree in any Discipline",
    },
    {
      title: 'Application Fee',
      value: 'Rs 850 (General/OBC/EWS), Rs 175 (SC/ST/PwBD)',
    },
    {
      title: 'Exam Duration',
      value: 'Prelims: 60 Minutes | Mains: 160 Minutes',
    },
  ],
  faqs: [
    {
      question: 'What is the educational qualification required for IBPS Clerk?',
      answer:
        "Candidates must possess a Bachelor's Degree in any discipline from a recognized university.",
    },
    {
      question: 'Is there negative marking in IBPS Clerk?',
      answer:
        'Yes. One-fourth (0.25) of the marks assigned to a question are deducted for every incorrect answer in both Preliminary and Main examinations.',
    },
    {
      question: 'Is there an interview in IBPS Clerk recruitment?',
      answer:
        'No. IBPS Clerk recruitment does not include an interview. Final selection is based on Main Examination merit.',
    },
    {
      question: 'Can final year students apply for IBPS Clerk?',
      answer:
        'Candidates must possess the required graduation qualification by the date specified in the official notification.',
    },
    {
      question: 'How many attempts are allowed in IBPS Clerk?',
      answer:
        'There is no fixed attempt limit. Candidates can apply until they satisfy the prescribed upper age limit.',
    },
    {
      question: 'What is the salary of an IBPS Clerk?',
      answer:
        'The initial basic pay of an IBPS Clerk is approximately Rs. 24,000 plus DA, HRA, transport allowance and other admissible benefits.',
    },
    {
      question: 'Which banks participate in IBPS Clerk recruitment?',
      answer:
        'IBPS Clerk recruitment is conducted for participating public sector banks including Bank of Baroda, Canara Bank, Central Bank of India, Indian Bank, Punjab National Bank, Union Bank of India, UCO Bank, Bank of Maharashtra and others.',
    },
    {
      question: 'How often is the IBPS Clerk examination conducted?',
      answer: 'IBPS Clerk recruitment is generally conducted once every year.',
    },
  ],
  overview: {
    title: 'IBPS Clerk Overview',
    description:
      'IBPS Clerk (Customer Service Associate) Examination is conducted annually by the Institute of Banking Personnel Selection (IBPS) to recruit candidates for clerical cadre posts in participating public sector banks across India. The recruitment process consists of Preliminary Examination and Main Examination.',
    highlights: [
      {
        label: 'Participating Banks',
        value: '11 Public Sector Banks',
        tone: 'blue',
      },
      {
        label: 'Vacancies',
        value: '6000+ (Expected)',
        tone: 'blue',
      },
      {
        label: 'Age Limit',
        value: '20 - 28 Years',
        tone: 'blue',
      },
    ],
  },
  seo: {
    title: 'IBPS Clerk Syllabus Guide 2026 | SarkariMate',
    description:
      'IBPS Clerk (Customer Service Associate) Examination is conducted annually by the Institute of Banking Personnel Selection (IBPS) to recruit candidates for clerical cadre posts in participating public sector banks across India. The recruitment process consists of Preliminary Examination and Main Examination.',
    canonical: '/syllabus/ibps-clerk',
    keywords: ['IBPS Clerk', 'Banking', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default ibpsClerkSyllabus;
