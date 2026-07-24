import type { SyllabusGuide } from '../../types/syllabus';

export const sbiClerkSyllabus: SyllabusGuide = {
  slug: 'sbi-clerk',
  title: 'SBI Clerk Syllabus Guide 2026',
  examName: 'SBI Clerk',
  organization: 'State Bank of India (SBI)',
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
      label: 'SBI Clerk Syllabus Guide 2026',
      href: '/syllabus/sbi-clerk',
    },
  ],
  badgeLabel: 'Banking Clerk Exam',
  heroFacts: [
    {
      label: 'Conducting Body',
      value: 'State Bank of India (SBI)',
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
      value: 'Prelims, Mains, Language Test',
      tone: 'slate',
    },
    {
      label: 'Official Website',
      value: 'sbi.co.in',
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
      href: '/sbi-clerk',
      type: 'notification',
    },
    {
      label: 'Official Website',
      href: 'https://sbi.co.in',
      type: 'official',
    },
    {
      label: 'Apply Online',
      href: 'https://sbi.co.in',
      type: 'apply',
    },
  ],
  overviewDescription:
    'SBI Clerk (Junior Associate) Examination is conducted by the State Bank of India to recruit candidates for the post of Junior Associate (Customer Support & Sales) in SBI branches across India. The recruitment process consists of Preliminary Examination, Main Examination, document verification, and a local language proficiency test wherever applicable.',
  overviewHighlights: [
    {
      label: 'Post',
      value: 'Junior Associate (Clerk)',
      tone: 'blue',
    },
    {
      label: 'Vacancies',
      value: '13,000+ (Expected)',
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
        'Computer Hardware',
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
            'General/Financial Awareness, General English, Quantitative Aptitude, Reasoning & Computer Aptitude',
          questions: '190',
          marks: '200',
          duration: '2 Hours 40 Minutes',
          negativeMarking: '0.25 Marks',
        },
      },
      {
        id: 'language-test',
        values: {
          stage: 'Local Language Test',
          subjects: 'Language Proficiency',
          questions: '-',
          marks: 'Qualifying',
          duration: 'As Scheduled',
          negativeMarking: 'No',
        },
      },
    ],
  },
  selectionProcess: [
    'Preliminary Examination',
    'Main Examination',
    'Local Language Test (If Applicable)',
    'Document Verification',
    'Final Merit',
  ],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Complete SBI Clerk preparation strategy',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for SBI Clerk preparation',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'Memory-based SBI Clerk papers with solutions',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'State-wise & category-wise cutoff',
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
          general: '73.50',
          obc: '69.25',
          sc: '61.75',
          st: '56.50',
          ews: '71.25',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '71.00',
          obc: '67.50',
          sc: '59.75',
          st: '54.25',
          ews: '69.00',
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
      value: 'Rs 750 (General/OBC/EWS), Nil (SC/ST/PwBD)',
    },
    {
      title: 'Exam Duration',
      value: 'Prelims: 60 Minutes | Mains: 2 Hours 40 Minutes',
    },
  ],
  faqs: [
    {
      question: 'What is the qualification required for SBI Clerk?',
      answer:
        "Candidates must possess a Bachelor's Degree in any discipline from a recognized university.",
    },
    {
      question: 'Is there negative marking in SBI Clerk?',
      answer:
        'Yes. One-fourth (0.25) of the marks assigned to a question are deducted for every incorrect answer in both Preliminary and Main examinations.',
    },
    {
      question: 'Can final year students apply for SBI Clerk?',
      answer:
        'Candidates must possess the required graduation qualification by the date mentioned in the official notification.',
    },
    {
      question: 'Is there an interview in SBI Clerk recruitment?',
      answer:
        'No. SBI Clerk recruitment does not include an interview. Final selection is based on Main Examination merit, document verification, and language proficiency where applicable.',
    },
    {
      question: 'How many attempts are allowed in SBI Clerk?',
      answer:
        'There is no fixed attempt limit. Candidates may apply until they reach the prescribed upper age limit.',
    },
    {
      question: 'What is the salary of an SBI Clerk?',
      answer:
        'The starting gross monthly salary of an SBI Junior Associate is approximately Rs. 46,000 to Rs. 48,000 depending on the place of posting and allowances.',
    },
    {
      question: 'Is local language knowledge mandatory for SBI Clerk?',
      answer:
        'Yes. Candidates must be proficient in the specified local language of the state or union territory they apply for. A language proficiency test may be conducted if required.',
    },
    {
      question: 'How often is the SBI Clerk examination conducted?',
      answer:
        "SBI Clerk recruitment is generally conducted once every year based on the bank's vacancy requirements.",
    },
  ],
  overview: {
    title: 'SBI Clerk Overview',
    description:
      'SBI Clerk (Junior Associate) Examination is conducted by the State Bank of India to recruit candidates for the post of Junior Associate (Customer Support & Sales) in SBI branches across India. The recruitment process consists of Preliminary Examination, Main Examination, document verification, and a local language proficiency test wherever applicable.',
    highlights: [
      {
        label: 'Post',
        value: 'Junior Associate (Clerk)',
        tone: 'blue',
      },
      {
        label: 'Vacancies',
        value: '13,000+ (Expected)',
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
    title: 'SBI Clerk Syllabus Guide 2026 | SarkariMate',
    description:
      'SBI Clerk (Junior Associate) Examination is conducted by the State Bank of India to recruit candidates for the post of Junior Associate (Customer Support & Sales) in SBI branches across India. The recruitment process consists of Preliminary Examination, Main Examination, document verification, and a local language proficiency test wherever applicable.',
    canonical: '/syllabus/sbi-clerk',
    keywords: ['SBI Clerk', 'Banking', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default sbiClerkSyllabus;
