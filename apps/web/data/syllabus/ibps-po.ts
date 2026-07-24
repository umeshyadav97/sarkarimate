import type { SyllabusGuide } from '../../types/syllabus';

export const ibpsPoSyllabus: SyllabusGuide = {
  slug: 'ibps-po',
  title: 'IBPS PO Syllabus Guide 2026',
  examName: 'IBPS PO',
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
      label: 'IBPS PO Syllabus Guide 2026',
      href: '/syllabus/ibps-po',
    },
  ],
  badgeLabel: 'Banking Officer Exam',
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
      value: 'Prelims, Mains, Interview',
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
      href: '/ibps-po',
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
    'IBPS Probationary Officer (PO) Examination is conducted annually by the Institute of Banking Personnel Selection (IBPS) to recruit Probationary Officers and Management Trainees in participating public sector banks. The recruitment process consists of Preliminary Examination, Main Examination, and Interview.',
  overviewHighlights: [
    {
      label: 'Participating Banks',
      value: '11 Public Sector Banks',
      tone: 'blue',
    },
    {
      label: 'Vacancies',
      value: '4000+ (Expected)',
      tone: 'blue',
    },
    {
      label: 'Age Limit',
      value: '20 - 30 Years',
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
        'Number Series',
        'Quadratic Equations',
        'Data Interpretation',
        'Percentage',
        'Profit & Loss',
        'Time & Work',
        'Time, Speed & Distance',
        'Ratio & Proportion',
        'Probability',
        'Permutation & Combination',
      ],
    },
    {
      name: 'Reasoning Ability',
      topics: [
        'Puzzles',
        'Seating Arrangement',
        'Syllogism',
        'Coding-Decoding',
        'Blood Relation',
        'Direction Sense',
        'Input-Output',
        'Inequality',
        'Order & Ranking',
        'Logical Reasoning',
      ],
    },
    {
      name: 'General / Economy / Banking Awareness',
      topics: [
        'Current Affairs',
        'Banking Awareness',
        'Financial Awareness',
        'RBI',
        'Budget',
        'Economic Survey',
        'Government Schemes',
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
          subjects: 'English, Quantitative Aptitude, Reasoning',
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
            'Reasoning, English, Quantitative Aptitude, General Awareness, Computer Aptitude, Descriptive Test',
          questions: '155 + Descriptive',
          marks: '225',
          duration: '3 Hours 30 Minutes',
          negativeMarking: '0.25 Marks (Objective)',
        },
      },
      {
        id: 'interview',
        values: {
          stage: 'Interview',
          subjects: 'Personality Assessment',
          questions: '-',
          marks: '100',
          duration: 'As Scheduled',
          negativeMarking: 'No',
        },
      },
    ],
  },
  selectionProcess: ['Preliminary Examination', 'Main Examination', 'Interview', 'Final Merit'],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Preparation strategy for Prelims & Mains',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for IBPS PO preparation',
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
      description: 'Category-wise cutoff marks',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'Mock Test Plan',
      description: 'Section-wise practice & mock schedule',
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
          general: '51.50',
          obc: '51.50',
          sc: '44.00',
          st: '39.00',
          ews: '51.50',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '54.25',
          obc: '54.25',
          sc: '47.50',
          st: '41.00',
          ews: '54.25',
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
      value: '20 - 30 Years',
      description: 'Age relaxation applicable as per rules',
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
      value: 'Prelims: 60 Minutes | Mains: 3 Hours 30 Minutes',
    },
  ],
  faqs: [
    {
      question: 'What is the qualification required for IBPS PO?',
      answer:
        "Candidates must possess a Bachelor's Degree in any discipline from a recognized university.",
    },
    {
      question: 'Is there negative marking in IBPS PO?',
      answer:
        'Yes. One-fourth (0.25) of the marks assigned to a question are deducted for every incorrect answer in the objective tests.',
    },
    {
      question: 'Can final year students apply for IBPS PO?',
      answer:
        'No. Candidates must possess the required graduation qualification on or before the date specified in the official notification.',
    },
    {
      question: 'How many attempts are allowed in IBPS PO?',
      answer:
        'There is no fixed attempt limit. Candidates can apply until they reach the upper age limit prescribed in the notification.',
    },
    {
      question: 'Is the interview mandatory in IBPS PO?',
      answer:
        'Yes. Candidates qualifying the Main Examination must appear for the Interview, which is considered for final selection.',
    },
    {
      question: 'What is the salary of an IBPS PO?',
      answer:
        'The starting basic pay of an IBPS Probationary Officer is approximately Rs. 48,480 under the latest pay structure, along with allowances.',
    },
    {
      question: 'Which banks participate in IBPS PO recruitment?',
      answer:
        'IBPS PO recruitment is conducted for participating Public Sector Banks such as Bank of Baroda, Canara Bank, Central Bank of India, Punjab National Bank, Union Bank of India, Indian Bank, Bank of Maharashtra and others.',
    },
    {
      question: 'How often is the IBPS PO examination conducted?',
      answer: 'IBPS PO is generally conducted once every year.',
    },
  ],
  overview: {
    title: 'IBPS PO Overview',
    description:
      'IBPS Probationary Officer (PO) Examination is conducted annually by the Institute of Banking Personnel Selection (IBPS) to recruit Probationary Officers and Management Trainees in participating public sector banks. The recruitment process consists of Preliminary Examination, Main Examination, and Interview.',
    highlights: [
      {
        label: 'Participating Banks',
        value: '11 Public Sector Banks',
        tone: 'blue',
      },
      {
        label: 'Vacancies',
        value: '4000+ (Expected)',
        tone: 'blue',
      },
      {
        label: 'Age Limit',
        value: '20 - 30 Years',
        tone: 'blue',
      },
    ],
  },
  seo: {
    title: 'IBPS PO Syllabus Guide 2026 | SarkariMate',
    description:
      'IBPS Probationary Officer (PO) Examination is conducted annually by the Institute of Banking Personnel Selection (IBPS) to recruit Probationary Officers and Management Trainees in participating public sector banks. The recruitment process consists of Preliminary Examination, Main Examination, and Interview.',
    canonical: '/syllabus/ibps-po',
    keywords: ['IBPS PO', 'Banking', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default ibpsPoSyllabus;
