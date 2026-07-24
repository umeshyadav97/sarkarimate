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
  cutoff: {
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
        id: '2025',
        values: {
          year: '2025',
          general: 'To Be Updated',
          obc: 'To Be Updated',
          sc: 'To Be Updated',
          st: 'To Be Updated',
          ews: 'To Be Updated',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '77.00',
          obc: '74.25',
          sc: '67.50',
          st: '61.00',
          ews: '75.50',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '75.25',
          obc: '72.50',
          sc: '65.75',
          st: '59.50',
          ews: '73.75',
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
