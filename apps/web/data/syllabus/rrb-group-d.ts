import type { SyllabusGuide } from '../../types/syllabus';

export const rrbGroupDSyllabus: SyllabusGuide = {
  slug: 'rrb-group-d',
  title: 'RRB Group D Syllabus Guide 2026',
  examName: 'RRB Group D',
  organization: 'Railway Recruitment Board (RRB)',
  category: 'Railway',
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
      label: 'RRB Group D Syllabus Guide 2026',
      href: '/syllabus/rrb-group-d',
    },
  ],
  badgeLabel: '10th Pass Railway Exam',
  heroFacts: [
    {
      label: 'Conducting Body',
      value: 'Railway Recruitment Boards (RRBs)',
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
      value: 'CBT, PET, DV, Medical',
      tone: 'slate',
    },
    {
      label: 'Official Website',
      value: 'indianrailways.gov.in',
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
      href: '/rrb-group-d',
      type: 'notification',
    },
    {
      label: 'Official Website',
      href: 'https://www.rrbcdg.gov.in',
      type: 'official',
    },
    {
      label: 'Apply Online',
      href: 'https://www.rrbcdg.gov.in',
      type: 'apply',
    },
  ],
  overviewDescription:
    'RRB Group D Examination is conducted by the Railway Recruitment Boards (RRBs) to recruit candidates for various Level-1 posts in Indian Railways such as Track Maintainer Grade-IV, Assistant Pointsman, Assistant in various departments, Hospital Assistant and other technical support staff. The recruitment process includes Computer Based Test (CBT), Physical Efficiency Test (PET), Document Verification, and Medical Examination.',
  overviewHighlights: [
    {
      label: 'Posts',
      value: 'Level-1 Railway Posts',
      tone: 'blue',
    },
    {
      label: 'Vacancies',
      value: '30,000+ (Expected)',
      tone: 'blue',
    },
    {
      label: 'Age Limit',
      value: '18 - 36 Years',
      tone: 'blue',
    },
  ],
  syllabus: [
    {
      name: 'Mathematics',
      topics: [
        'Number System',
        'BODMAS',
        'Decimals & Fractions',
        'LCM & HCF',
        'Ratio & Proportion',
        'Percentage',
        'Mensuration',
        'Time & Work',
        'Time, Speed & Distance',
        'Simple & Compound Interest',
        'Profit & Loss',
        'Algebra',
        'Geometry',
        'Trigonometry',
        'Data Interpretation',
      ],
    },
    {
      name: 'General Intelligence & Reasoning',
      topics: [
        'Analogies',
        'Coding-Decoding',
        'Series',
        'Classification',
        'Puzzle',
        'Blood Relation',
        'Direction Sense',
        'Statement & Conclusion',
        'Syllogism',
        'Venn Diagram',
        'Decision Making',
        'Mathematical Operations',
      ],
    },
    {
      name: 'General Science',
      topics: [
        'Physics',
        'Chemistry',
        'Biology',
        'Everyday Science',
        'Scientific Instruments',
        'Human Body',
        'Nutrition',
        'Environment',
      ],
    },
    {
      name: 'General Awareness & Current Affairs',
      topics: [
        'Current Affairs',
        'Indian History',
        'Geography',
        'Indian Polity',
        'Economics',
        'Sports',
        'Culture',
        'Awards & Honours',
        'Important Days',
        'Books & Authors',
        'Railways',
        'Static GK',
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
          stage: 'Computer Based Test',
          subjects: 'Mathematics, Reasoning, General Science, General Awareness',
          questions: '100',
          marks: '100',
          duration: '90 Minutes',
          negativeMarking: '1/3 Marks',
        },
      },
      {
        id: 'pet',
        values: {
          stage: 'Physical Efficiency Test',
          subjects: 'Running & Physical Fitness',
          questions: '-',
          marks: 'Qualifying',
          duration: 'As Scheduled',
          negativeMarking: 'No',
        },
      },
      {
        id: 'medical',
        values: {
          stage: 'Medical Examination',
          subjects: 'Medical Fitness',
          questions: '-',
          marks: 'Qualifying',
          duration: 'As Scheduled',
          negativeMarking: 'No',
        },
      },
    ],
  },
  selectionProcess: [
    'Computer Based Test (CBT)',
    'Physical Efficiency Test (PET)',
    'Document Verification',
    'Medical Examination',
    'Final Merit',
  ],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Complete preparation strategy for RRB Group D',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for Mathematics, Science & Reasoning',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'RRB Group D previous year papers with solutions',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'Zone-wise and category-wise cutoff',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'PET Preparation',
      description: 'Physical test requirements and preparation guide',
      href: '#physical-test',
      tone: 'blue',
    },
  ],
  cutoffHeading: 'RRB Group D CBT Cutoff (Out of 100)',
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
        id: '2026',
        values: {
          year: '2026',
          general: '75.31',
          obc: '73.12',
          sc: '67.16',
          st: '63.59',
          ews: '68.60',
        },
      },
      {
        id: '2022',
        values: {
          year: '2022',
          general: '68.32',
          obc: '61.66',
          sc: '54.02',
          st: '54.08',
          ews: '48.76',
        },
      },
      {
        id: '2018',
        values: {
          year: '2018',
          general: '73.73',
          obc: '70.10',
          sc: '63.37',
          st: '60.62',
          ews: 'N/A',
        },
      },
    ],
  },
  sidebarHighlights: [
    {
      title: 'Negative Marking',
      value: '1/3 Marks',
    },
    {
      title: 'Age Limit',
      value: '18 - 36 Years',
      description: 'Age relaxation applicable as per government rules',
    },
    {
      title: 'Educational Qualification',
      value: '10th Pass / ITI / NAC (Post Wise)',
    },
    {
      title: 'Application Fee',
      value: 'Rs 500 (General/OBC/EWS), Rs 250 (SC/ST/PwBD/Female/Transgender)',
    },
    {
      title: 'Physical Test',
      value: 'PET Mandatory',
    },
  ],
  faqs: [
    {
      question: 'What is the qualification required for RRB Group D?',
      answer:
        'Candidates must have passed Class 10th, ITI, or possess an equivalent National Apprenticeship Certificate (NAC) from NCVT as specified in the official notification.',
    },
    {
      question: 'Is there negative marking in RRB Group D?',
      answer:
        'Yes. One-third (1/3) mark is deducted for every incorrect answer in the Computer Based Test.',
    },
    {
      question: 'Is PET compulsory in RRB Group D?',
      answer:
        'Yes. Candidates qualifying the CBT must clear the Physical Efficiency Test (PET) to be considered for further stages.',
    },
    {
      question: 'What is the age limit for RRB Group D?',
      answer:
        'The basic age limit is generally 18 to 36 years. Age relaxation is provided for reserved categories as per government rules.',
    },
    {
      question: 'How many attempts are allowed in RRB Group D?',
      answer:
        'There is no fixed attempt limit. Candidates may apply until they reach the maximum permissible age.',
    },
    {
      question: 'What posts are available under RRB Group D?',
      answer:
        'Popular posts include Track Maintainer Grade-IV, Assistant Pointsman, Assistant in Electrical, Mechanical, Engineering, Signal & Telecommunication departments, Hospital Assistant and Porter.',
    },
    {
      question: 'What is the salary of RRB Group D employees?',
      answer:
        'RRB Group D employees are appointed under Pay Level-1 of the 7th CPC with a basic pay of Rs. 18,000 along with DA, HRA, TA and other railway allowances.',
    },
    {
      question: 'Is RRB Group D conducted every year?',
      answer:
        'No. The recruitment is conducted whenever vacancies are notified by the Railway Recruitment Boards.',
    },
  ],
  overview: {
    title: 'RRB Group D Overview',
    description:
      'RRB Group D Examination is conducted by the Railway Recruitment Boards (RRBs) to recruit candidates for various Level-1 posts in Indian Railways such as Track Maintainer Grade-IV, Assistant Pointsman, Assistant in various departments, Hospital Assistant and other technical support staff. The recruitment process includes Computer Based Test (CBT), Physical Efficiency Test (PET), Document Verification, and Medical Examination.',
    highlights: [
      {
        label: 'Posts',
        value: 'Level-1 Railway Posts',
        tone: 'blue',
      },
      {
        label: 'Vacancies',
        value: '30,000+ (Expected)',
        tone: 'blue',
      },
      {
        label: 'Age Limit',
        value: '18 - 36 Years',
        tone: 'blue',
      },
    ],
  },
  seo: {
    title: 'RRB Group D Syllabus Guide 2026 | SarkariMate',
    description:
      'RRB Group D Examination is conducted by the Railway Recruitment Boards (RRBs) to recruit candidates for various Level-1 posts in Indian Railways such as Track Maintainer Grade-IV, Assistant Pointsman, Assistant in various departments, Hospital Assistant and other technical support staff. The recruitment process includes Computer Based Test (CBT), Physical Efficiency Test (PET), Document Verification, and Medical Examination.',
    canonical: '/syllabus/rrb-group-d',
    keywords: ['RRB Group D', 'Railway', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default rrbGroupDSyllabus;
