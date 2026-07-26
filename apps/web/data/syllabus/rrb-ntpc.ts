import type { SyllabusGuide } from '../../types/syllabus';

export const rrbNtpcSyllabus: SyllabusGuide = {
  slug: 'rrb-ntpc',
  title: 'RRB NTPC Syllabus Guide 2026',
  examName: 'RRB NTPC',
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
      label: 'RRB NTPC Syllabus Guide 2026',
      href: '/syllabus/rrb-ntpc',
    },
  ],
  badgeLabel: 'Graduate & Undergraduate Level Exam',
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
      value: '12th Pass & Graduate',
      tone: 'blue',
    },
    {
      label: 'Selection Process',
      value: 'CBT 1, CBT 2, Skill Test, DV, Medical',
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
      href: '/rrb-ntpc',
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
    'RRB NTPC (Non-Technical Popular Categories) Examination is conducted by the Railway Recruitment Boards (RRBs) to recruit candidates for various graduate and undergraduate level non-technical posts in Indian Railways including Station Master, Goods Guard, Junior Clerk, Accounts Clerk, Commercial Apprentice, Traffic Assistant and other posts.',
  overviewHighlights: [
    {
      label: 'Posts',
      value: 'Graduate & Undergraduate',
      tone: 'blue',
    },
    {
      label: 'Vacancies',
      value: '10,000+ (Expected)',
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
        'Decimals & Fractions',
        'LCM & HCF',
        'Ratio & Proportion',
        'Percentage',
        'Profit & Loss',
        'Simple & Compound Interest',
        'Time & Work',
        'Time, Speed & Distance',
        'Mensuration',
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
        'Blood Relations',
        'Direction Sense',
        'Syllogism',
        'Venn Diagram',
        'Statement & Conclusion',
        'Decision Making',
        'Mathematical Operations',
      ],
    },
    {
      name: 'General Awareness',
      topics: [
        'Current Affairs',
        'Indian History',
        'Geography',
        'Indian Polity',
        'Indian Economy',
        'General Science',
        'Environment',
        'Art & Culture',
        'Sports',
        'Important Days',
        'Books & Authors',
        'Awards & Honours',
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
        id: 'cbt-1',
        values: {
          stage: 'CBT 1',
          subjects: 'Mathematics, General Intelligence & Reasoning, General Awareness',
          questions: '100',
          marks: '100',
          duration: '90 Minutes',
          negativeMarking: '1/3 Marks',
        },
      },
      {
        id: 'cbt-2',
        values: {
          stage: 'CBT 2',
          subjects: 'Mathematics, General Intelligence & Reasoning, General Awareness',
          questions: '120',
          marks: '120',
          duration: '90 Minutes',
          negativeMarking: '1/3 Marks',
        },
      },
      {
        id: 'skill-test',
        values: {
          stage: 'Typing Skill Test / CBAT (Post Wise)',
          subjects: 'Typing / Aptitude',
          questions: '-',
          marks: 'Qualifying',
          duration: 'As Scheduled',
          negativeMarking: 'No',
        },
      },
    ],
  },
  selectionProcess: [
    'CBT 1',
    'CBT 2',
    'Typing Skill Test / CBAT (Applicable Posts)',
    'Document Verification',
    'Medical Examination',
    'Final Merit',
  ],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Complete RRB NTPC preparation strategy',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for Mathematics, Reasoning & GK',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'RRB NTPC previous year papers with solutions',
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
      title: '90-Day Study Plan',
      description: 'Subject-wise preparation schedule',
      href: '#study-plan',
      tone: 'blue',
    },
  ],
  tier1CutoffHeading: 'RRB NTPC CBT 1 Cutoff (Out of 100)',
  tier2CutoffHeading: 'RRB NTPC CBT 2 Cutoff (Out of 120)',
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
          general: '72.00 - 78.00 (Expected)',
          obc: '68.00 - 74.00 (Expected)',
          sc: '60.00 - 66.00 (Expected)',
          st: '55.00 - 61.00 (Expected)',
          ews: '66.00 - 72.00 (Expected)',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '71.50',
          obc: '65.80',
          sc: '58.20',
          st: '53.40',
          ews: '64.10',
        },
      },
      {
        id: '2021',
        values: {
          year: '2021',
          general: '68.24',
          obc: '62.17',
          sc: '54.39',
          st: '48.58',
          ews: '56.72',
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
          general: '82.00 - 90.00 (Expected)',
          obc: '78.00 - 85.00 (Expected)',
          sc: '68.00 - 75.00 (Expected)',
          st: '62.00 - 68.00 (Expected)',
          ews: '76.00 - 83.00 (Expected)',
        },
      },
      {
        id: '2024',
        values: {
          year: '2024',
          general: '84.33',
          obc: '80.66',
          sc: '71.00',
          st: '65.33',
          ews: '78.50',
        },
      },
      {
        id: '2022',
        values: {
          year: '2022',
          general: '77.33',
          obc: '72.66',
          sc: '62.00',
          st: '57.33',
          ews: '67.00',
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
      description: 'Age relaxation applicable as per rules',
    },
    {
      title: 'Educational Qualification',
      value: "12th Pass / Bachelor's Degree (Post Wise)",
    },
    {
      title: 'Application Fee',
      value: 'Rs 500 (General/OBC/EWS), Rs 250 (SC/ST/PwBD/Female)',
    },
    {
      title: 'Exam Duration',
      value: 'CBT 1 & CBT 2 - 90 Minutes',
    },
  ],
  faqs: [
    {
      question: 'What is RRB NTPC?',
      answer:
        'RRB NTPC is a Railway recruitment examination conducted for various graduate and undergraduate non-technical posts in Indian Railways.',
    },
    {
      question: 'Is there negative marking in RRB NTPC?',
      answer:
        'Yes. One-third (1/3) mark is deducted for every incorrect answer in both CBT 1 and CBT 2.',
    },
    {
      question: 'What is the qualification required for RRB NTPC?',
      answer:
        "The educational qualification depends on the post. Undergraduate posts require 12th pass, while graduate posts require a Bachelor's Degree.",
    },
    {
      question: 'Is there a typing test in RRB NTPC?',
      answer:
        'Yes. Typing Skill Test or Computer Based Aptitude Test (CBAT) is conducted for specific posts only.',
    },
    {
      question: 'How many attempts are allowed in RRB NTPC?',
      answer:
        'There is no fixed attempt limit. Candidates can apply until they satisfy the prescribed age and eligibility criteria.',
    },
    {
      question: 'Which posts are available through RRB NTPC?',
      answer:
        'Popular posts include Station Master, Goods Train Manager, Commercial Apprentice, Traffic Assistant, Senior Clerk, Junior Clerk, Accounts Clerk and others.',
    },
    {
      question: 'What is the salary of RRB NTPC posts?',
      answer:
        'Salary varies by post and pay level, generally ranging from Pay Level 2 to Pay Level 6 along with railway allowances.',
    },
    {
      question: 'Is the RRB NTPC exam conducted every year?',
      answer:
        'RRB NTPC recruitment is conducted whenever vacancies are announced by the Railway Recruitment Boards.',
    },
  ],
  overview: {
    title: 'RRB NTPC Overview',
    description:
      'RRB NTPC (Non-Technical Popular Categories) Examination is conducted by the Railway Recruitment Boards (RRBs) to recruit candidates for various graduate and undergraduate level non-technical posts in Indian Railways including Station Master, Goods Guard, Junior Clerk, Accounts Clerk, Commercial Apprentice, Traffic Assistant and other posts.',
    highlights: [
      {
        label: 'Posts',
        value: 'Graduate & Undergraduate',
        tone: 'blue',
      },
      {
        label: 'Vacancies',
        value: '10,000+ (Expected)',
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
    title: 'RRB NTPC Syllabus Guide 2026 | SarkariMate',
    description:
      'RRB NTPC (Non-Technical Popular Categories) Examination is conducted by the Railway Recruitment Boards (RRBs) to recruit candidates for various graduate and undergraduate level non-technical posts in Indian Railways including Station Master, Goods Guard, Junior Clerk, Accounts Clerk, Commercial Apprentice, Traffic Assistant and other posts.',
    canonical: '/syllabus/rrb-ntpc',
    keywords: ['RRB NTPC', 'Railway', 'syllabus', 'syllabus guide', 'exam pattern'],
  },
};

export default rrbNtpcSyllabus;
