import type { SyllabusGuide } from '../../types/syllabus';

export const sscGdConstableSyllabus: SyllabusGuide = {
  slug: 'ssc-gd-constable',
  title: 'SSC GD Constable Syllabus Guide 2026',
  examName: 'SSC GD Constable',
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
      label: 'SSC GD Constable Syllabus Guide 2026',
      href: '/syllabus/ssc-gd-constable',
    },
  ],
  badgeLabel: '10th Pass Defence Exam',
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
      value: 'CBT, PET/PST, Medical, DV',
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
      href: '/ssc-gd-constable',
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
    'SSC GD Constable Examination is conducted by the Staff Selection Commission for recruitment of Constables (GD) in Central Armed Police Forces (CAPFs), SSF, Assam Rifles, and Sepoys in Narcotics Control Bureau (NCB). The recruitment process includes Computer Based Examination, Physical Efficiency Test (PET), Physical Standard Test (PST), Medical Examination, and Document Verification.',
  overviewHighlights: [
    {
      label: 'Forces',
      value: 'BSF, CISF, CRPF, ITBP, SSB, AR, SSF, NCB',
      tone: 'blue',
    },
    {
      label: 'Vacancies',
      value: '40,000+ (Expected)',
      tone: 'blue',
    },
    {
      label: 'Age Limit',
      value: '18 - 23 Years',
      tone: 'blue',
    },
  ],
  syllabus: [
    {
      name: 'General Intelligence & Reasoning',
      topics: [
        'Analogies',
        'Classification',
        'Coding-Decoding',
        'Series',
        'Blood Relations',
        'Direction Sense',
        'Visual Memory',
        'Spatial Orientation',
        'Arithmetic Reasoning',
        'Non-Verbal Reasoning',
      ],
    },
    {
      name: 'General Knowledge & General Awareness',
      topics: [
        'Current Affairs',
        'History',
        'Geography',
        'Indian Constitution',
        'Polity',
        'Economics',
        'General Science',
        'Sports',
        'Important Days',
        'Books & Authors',
      ],
    },
    {
      name: 'Elementary Mathematics',
      topics: [
        'Number System',
        'Decimals & Fractions',
        'Percentage',
        'Ratio & Proportion',
        'Average',
        'Profit & Loss',
        'Simple Interest',
        'Time & Work',
        'Time, Speed & Distance',
        'Mensuration',
      ],
    },
    {
      name: 'English / Hindi',
      topics: [
        'Reading Comprehension',
        'Grammar',
        'Vocabulary',
        'Synonyms & Antonyms',
        'Error Detection',
        'Sentence Improvement',
        'Fill in the Blanks',
        'Idioms & Phrases',
        'One Word Substitution',
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
          stage: 'Computer Based Test',
          subjects: 'Reasoning, GK, Mathematics, English/Hindi',
          questions: '80',
          marks: '160',
          duration: '60 Minutes',
          negativeMarking: '0.25 Marks',
        },
      },
      {
        id: 'pet-pst',
        values: {
          stage: 'PET / PST',
          subjects: 'Physical Efficiency & Standards',
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
    'Physical Standard Test (PST)',
    'Medical Examination',
    'Document Verification',
    'Final Merit',
  ],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Complete preparation strategy for SSC GD',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for SSC GD preparation',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'SSC GD previous year question papers',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'State & Category-wise cutoff',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'Physical Test Guide',
      description: 'PET & PST preparation tips',
      href: '#physical-test',
      tone: 'blue',
    },
  ],
  cutoffHeading: 'SSC GD Constable CBT Cutoff (Out of 160)',
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
          general: '140.00 - 150.00 (Expected)',
          obc: '135.00 - 145.00 (Expected)',
          sc: '125.00 - 135.00 (Expected)',
          st: '120.00 - 130.00 (Expected)',
          ews: '138.00 - 148.00 (Expected)',
        },
      },
      {
        id: '2025',
        values: {
          year: '2025',
          general: '144.93',
          obc: '143.64',
          sc: '137.51',
          st: '133.12',
          ews: '142.13',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '153.56',
          obc: '152.28',
          sc: '148.21',
          st: '143.65',
          ews: '151.15',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '139.32',
          obc: '137.64',
          sc: '127.33',
          st: '123.04',
          ews: '136.75',
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
      value: '18 - 23 Years',
      description: 'Age relaxation as per government rules',
    },
    {
      title: 'Educational Qualification',
      value: '10th Pass from a Recognized Board',
    },
    {
      title: 'Application Fee',
      value: 'Rs 100 (Gen/OBC/EWS), Rs 0 (SC/ST/Female/Ex-Servicemen)',
    },
    {
      title: 'Physical Test',
      value: 'PET & PST Mandatory',
    },
  ],
  faqs: [
    {
      question: 'What is the educational qualification for SSC GD Constable?',
      answer:
        'Candidates must have passed Matriculation (10th Class) or an equivalent examination from a recognized board.',
    },
    {
      question: 'Is there negative marking in SSC GD?',
      answer:
        'Yes. There is a negative marking of 0.25 marks for every incorrect answer in the Computer Based Examination.',
    },
    {
      question: 'Which forces recruit through SSC GD?',
      answer:
        'SSC GD recruits candidates for BSF, CISF, CRPF, ITBP, SSB, Assam Rifles, SSF, and Sepoy posts in NCB.',
    },
    {
      question: 'Is PET compulsory for SSC GD?',
      answer:
        'Yes. Candidates who qualify the CBT must clear the Physical Efficiency Test (PET) and Physical Standard Test (PST).',
    },
    {
      question: 'What is the age limit for SSC GD?',
      answer:
        'The basic age limit is 18 to 23 years. Age relaxation is applicable for reserved categories as per government rules.',
    },
    {
      question: 'How many attempts are allowed in SSC GD?',
      answer:
        'There is no fixed attempt limit. Candidates may apply as long as they satisfy the age and eligibility criteria.',
    },
    {
      question: 'What is the salary of an SSC GD Constable?',
      answer:
        'SSC GD Constables are generally appointed under Pay Level 3 with a pay scale of Rs. 21,700-69,100 along with applicable allowances.',
    },
    {
      question: 'Is the SSC GD exam conducted every year?',
      answer:
        'Yes. The SSC generally conducts the GD Constable recruitment examination annually, subject to vacancy requirements.',
    },
  ],
  overview: {
    title: 'SSC GD Constable Overview',
    description:
      'SSC GD Constable Examination is conducted by the Staff Selection Commission for recruitment of Constables (GD) in Central Armed Police Forces (CAPFs), SSF, Assam Rifles, and Sepoys in Narcotics Control Bureau (NCB). The recruitment process includes Computer Based Examination, Physical Efficiency Test (PET), Physical Standard Test (PST), Medical Examination, and Document Verification.',
    highlights: [
      {
        label: 'Forces',
        value: 'BSF, CISF, CRPF, ITBP, SSB, AR, SSF, NCB',
        tone: 'blue',
      },
      {
        label: 'Vacancies',
        value: '40,000+ (Expected)',
        tone: 'blue',
      },
      {
        label: 'Age Limit',
        value: '18 - 23 Years',
        tone: 'blue',
      },
    ],
  },
  seo: {
    title: 'SSC GD Constable Syllabus Guide 2026 | SarkariMate',
    description:
      'SSC GD Constable Examination is conducted by the Staff Selection Commission for recruitment of Constables (GD) in Central Armed Police Forces (CAPFs), SSF, Assam Rifles, and Sepoys in Narcotics Control Bureau (NCB). The recruitment process includes Computer Based Examination, Physical Efficiency Test (PET), Physical Standard Test (PST), Medical Examination, and Document Verification.',
    canonical: '/syllabus/ssc-gd-constable',
    keywords: ['SSC GD Constable', 'SSC', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default sscGdConstableSyllabus;
