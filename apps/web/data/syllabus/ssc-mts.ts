import type { SyllabusGuide } from '../../types/syllabus';

export const sscMtsSyllabus: SyllabusGuide = {
  slug: 'ssc-mts',
  title: 'SSC MTS Syllabus Guide 2026',
  examName: 'SSC MTS',
  organization: 'Staff Selection Commission (SSC)',
  category: 'SSC',
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
      label: 'SSC MTS Syllabus Guide 2026',
      href: '/syllabus/ssc-mts',
    },
  ],
  badgeLabel: '10th Pass Government Exam',
  heroFacts: [
    {
      label: 'Conducting Body',
      value: 'Staff Selection Commission',
      tone: 'blue',
    },
    {
      label: 'Exam Mode',
      value: 'Online',
      tone: 'blue',
    },
    {
      label: 'Exam Level',
      value: '10th Pass',
      tone: 'blue',
    },
    {
      label: 'Selection Process',
      value: 'CBT, PET/PST (Havaldar), DV',
      tone: 'slate',
    },
    {
      label: 'Official Website',
      value: 'ssc.gov.in',
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
      href: '/ssc-mts',
      type: 'notification',
    },
    {
      label: 'Official Website',
      href: 'https://ssc.gov.in',
      type: 'official',
    },
    {
      label: 'Apply Online',
      href: 'https://ssc.gov.in',
      type: 'apply',
    },
  ],
  overviewDescription:
    'SSC Multi Tasking Staff (MTS) Examination is conducted by the Staff Selection Commission to recruit candidates for Multi Tasking Staff (Non-Technical) and Havaldar posts in various Ministries, Departments, Constitutional Bodies, and Offices of the Government of India. Candidates applying for Havaldar posts must also qualify the Physical Efficiency Test (PET) and Physical Standard Test (PST).',
  overviewHighlights: [
    {
      label: 'Posts',
      value: 'MTS & Havaldar',
      tone: 'blue',
    },
    {
      label: 'Vacancies',
      value: '8,000+ (Expected)',
      tone: 'blue',
    },
    {
      label: 'Age Limit',
      value: '18 - 25 / 18 - 27 Years',
      tone: 'blue',
    },
  ],
  syllabus: [
    {
      name: 'Numerical & Mathematical Ability',
      topics: [
        'Number System',
        'Decimals & Fractions',
        'LCM & HCF',
        'Percentage',
        'Ratio & Proportion',
        'Average',
        'Profit & Loss',
        'Simple Interest',
        'Time & Work',
        'Time, Speed & Distance',
        'Mensuration',
        'Data Interpretation',
      ],
    },
    {
      name: 'Reasoning Ability & Problem Solving',
      topics: [
        'Analogies',
        'Classification',
        'Coding-Decoding',
        'Series',
        'Blood Relation',
        'Direction Sense',
        'Puzzle',
        'Venn Diagram',
        'Statement & Conclusion',
        'Non-Verbal Reasoning',
      ],
    },
    {
      name: 'General Awareness',
      topics: [
        'Current Affairs',
        'History',
        'Geography',
        'Indian Polity',
        'Indian Economy',
        'General Science',
        'Environment',
        'Sports',
        'Awards',
        'Important Days',
        'Books & Authors',
        'Static GK',
      ],
    },
    {
      name: 'English Language & Comprehension',
      topics: [
        'Reading Comprehension',
        'Vocabulary',
        'Grammar',
        'Synonyms & Antonyms',
        'Error Detection',
        'Fill in the Blanks',
        'Sentence Improvement',
        'Idioms & Phrases',
        'Spelling Correction',
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
        id: 'cbt',
        values: {
          stage: 'Computer Based Examination',
          subjects: 'Numerical Ability, Reasoning, General Awareness, English',
          questions: '90',
          marks: '270',
          duration: '90 Minutes',
          negativeMarking: '1 Mark (Session II)',
        },
      },
      {
        id: 'pet-pst',
        values: {
          stage: 'PET / PST (Havaldar Only)',
          subjects: 'Physical Efficiency & Standards',
          questions: '-',
          marks: 'Qualifying',
          duration: 'As Scheduled',
          negativeMarking: 'No',
        },
      },
    ],
  },
  selectionProcess: [
    'Computer Based Examination',
    'PET / PST (Havaldar Only)',
    'Document Verification',
    'Final Merit',
  ],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Complete preparation strategy for SSC MTS',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for SSC MTS preparation',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'SSC MTS previous year papers with solutions',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'Category-wise & state-wise cutoff',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'Mock Test Plan',
      description: 'Subject-wise practice and revision plan',
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
          general: '142.75',
          obc: '139.50',
          sc: '126.40',
          st: '119.35',
          ews: '140.80',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '138.60',
          obc: '135.90',
          sc: '123.15',
          st: '116.40',
          ews: '136.75',
        },
      },
    ],
  },
  sidebarHighlights: [
    {
      title: 'Negative Marking',
      value: '1 Mark (Session II)',
    },
    {
      title: 'Age Limit',
      value: '18 - 25 / 18 - 27 Years',
      description: 'Depends on the post',
    },
    {
      title: 'Educational Qualification',
      value: '10th Pass from a Recognized Board',
    },
    {
      title: 'Application Fee',
      value: 'Rs 100 (Gen/OBC/EWS), Rs 0 (SC/ST/PwBD/Female)',
    },
    {
      title: 'Exam Duration',
      value: 'Computer Based Test - 90 Minutes',
    },
  ],
  faqs: [
    {
      question: 'What is the educational qualification for SSC MTS?',
      answer:
        'Candidates must have passed Matriculation (10th Class) or an equivalent examination from a recognized board.',
    },
    {
      question: 'Is there negative marking in SSC MTS?',
      answer:
        'Yes. There is no negative marking in Session I, while Session II has a negative marking of 1 mark for every incorrect answer.',
    },
    {
      question: 'What posts are filled through SSC MTS?',
      answer:
        'SSC MTS recruits candidates for Multi Tasking Staff (Non-Technical) and Havaldar posts in various government departments.',
    },
    {
      question: 'Is PET compulsory in SSC MTS?',
      answer:
        'PET/PST is compulsory only for candidates applying for the Havaldar post. It is not required for Multi Tasking Staff (MTS) posts.',
    },
    {
      question: 'How many attempts are allowed in SSC MTS?',
      answer:
        'There is no fixed attempt limit. Candidates can apply as long as they satisfy the prescribed age and eligibility criteria.',
    },
    {
      question: 'What is the salary of SSC MTS employees?',
      answer:
        'SSC MTS employees are generally appointed under Pay Level 1 with a basic pay of Rs. 18,000 along with applicable allowances.',
    },
    {
      question: 'What is the age limit for SSC MTS?',
      answer:
        'The age limit is generally 18-25 years or 18-27 years depending on the post. Age relaxation is provided for eligible reserved categories.',
    },
    {
      question: 'Is SSC MTS conducted every year?',
      answer:
        'Yes. The Staff Selection Commission generally conducts the SSC MTS examination every year based on vacancy requirements.',
    },
  ],
  overview: {
    title: 'SSC MTS Overview',
    description:
      'SSC Multi Tasking Staff (MTS) Examination is conducted by the Staff Selection Commission to recruit candidates for Multi Tasking Staff (Non-Technical) and Havaldar posts in various Ministries, Departments, Constitutional Bodies, and Offices of the Government of India. Candidates applying for Havaldar posts must also qualify the Physical Efficiency Test (PET) and Physical Standard Test (PST).',
    highlights: [
      {
        label: 'Posts',
        value: 'MTS & Havaldar',
        tone: 'blue',
      },
      {
        label: 'Vacancies',
        value: '8,000+ (Expected)',
        tone: 'blue',
      },
      {
        label: 'Age Limit',
        value: '18 - 25 / 18 - 27 Years',
        tone: 'blue',
      },
    ],
  },
  seo: {
    title: 'SSC MTS Syllabus Guide 2026 | SarkariMate',
    description:
      'SSC Multi Tasking Staff (MTS) Examination is conducted by the Staff Selection Commission to recruit candidates for Multi Tasking Staff (Non-Technical) and Havaldar posts in various Ministries, Departments, Constitutional Bodies, and Offices of the Government of India. Candidates applying for Havaldar posts must also qualify the Physical Efficiency Test (PET) and Physical Standard Test (PST).',
    canonical: '/syllabus/ssc-mts',
    keywords: ['SSC MTS', 'SSC', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default sscMtsSyllabus;
