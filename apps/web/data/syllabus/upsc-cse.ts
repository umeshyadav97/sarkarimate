import type { SyllabusGuide } from '../../types/syllabus';

export const upscCseSyllabus: SyllabusGuide = {
  slug: 'upsc-cse',
  title: 'UPSC CSE Syllabus Guide 2026',
  examName: 'UPSC CSE',
  organization: 'Union Public Service Commission (UPSC)',
  category: 'UPSC',
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
      label: 'UPSC CSE Syllabus Guide 2026',
      href: '/syllabus/upsc-cse',
    },
  ],
  badgeLabel: 'Civil Services Examination',
  heroFacts: [
    {
      label: 'Conducting Body',
      value: 'Union Public Service Commission',
      tone: 'blue',
    },
    {
      label: 'Exam Mode',
      value: 'Offline',
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
      value: 'upsc.gov.in',
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
      href: '/upsc-cse',
      type: 'notification',
    },
    {
      label: 'Official Website',
      href: 'https://upsc.gov.in',
      type: 'official',
    },
    {
      label: 'Apply Online',
      href: 'https://upsconline.nic.in',
      type: 'apply',
    },
  ],
  overviewDescription:
    'The UPSC Civil Services Examination (CSE) is conducted annually to recruit candidates for prestigious services such as IAS, IPS, IFS, IRS, and other Central Civil Services through a three-stage selection process comprising Preliminary Examination, Main Examination, and Personality Test.',
  overviewHighlights: [
    {
      label: 'Services',
      value: '24+ Civil Services',
      tone: 'blue',
    },
    {
      label: 'Vacancies',
      value: '900-1200 (Approx.)',
      tone: 'blue',
    },
    {
      label: 'Age Limit',
      value: '21 - 32 Years',
      tone: 'blue',
    },
  ],
  syllabus: [
    {
      name: 'General Studies Paper I (Prelims)',
      topics: [
        'Current Events',
        'History of India',
        'Indian Polity \u0026 Governance',
        'Geography',
        'Economic \u0026 Social Development',
        'Environment \u0026 Ecology',
        'General Science',
      ],
    },
    {
      name: 'CSAT (General Studies Paper II)',
      topics: [
        'Comprehension',
        'Logical Reasoning',
        'Analytical Ability',
        'Decision Making',
        'Basic Numeracy',
        'Data Interpretation',
      ],
    },
    {
      name: 'General Studies (Mains)',
      topics: [
        'Indian Heritage \u0026 Culture',
        'Governance',
        'Constitution',
        'International Relations',
        'Economy',
        'Science \u0026 Technology',
        'Environment',
        'Internal Security',
        'Ethics',
      ],
    },
    {
      name: 'Essay \u0026 Optional Subject',
      topics: ['Essay Writing', 'Optional Subject Paper I', 'Optional Subject Paper II'],
    },
  ],
  examPattern: {
    columns: [
      {
        key: 'stage',
        label: 'Stage',
      },
      {
        key: 'papers',
        label: 'Papers',
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
        key: 'mode',
        label: 'Mode',
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
          papers: 'GS Paper I + CSAT',
          marks: '400',
          duration: '2 Hours Each',
          mode: 'Offline',
          negativeMarking: '1/3 Marks',
        },
      },
      {
        id: 'mains',
        values: {
          stage: 'Main Examination',
          papers: '9 Papers',
          marks: '1750',
          duration: '3 Hours Each',
          mode: 'Offline',
          negativeMarking: 'No',
        },
      },
      {
        id: 'interview',
        values: {
          stage: 'Personality Test',
          papers: 'Interview',
          marks: '275',
          duration: 'Varies',
          mode: 'Offline',
          negativeMarking: 'No',
        },
      },
    ],
  },
  selectionProcess: [
    'Preliminary Examination',
    'Main Examination',
    'Personality Test (Interview)',
    'Final Merit List',
  ],
  resources: [
    {
      title: 'Study Strategy',
      description: 'Preparation strategy for Prelims \u0026 Mains',
      href: '#study-plan',
      tone: 'blue',
    },
    {
      title: 'Recommended Books',
      description: 'Best books for UPSC preparation',
      href: '#recommended-books',
      tone: 'orange',
    },
    {
      title: 'Previous Year Papers',
      description: 'UPSC Previous Year Question Papers',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Previous Year Cutoff',
      description: 'Category-wise UPSC Cutoff',
      href: '#previous-year-cutoff',
      tone: 'blue',
    },
    {
      title: 'Preparation Timeline',
      description: '12 Month UPSC Study Plan',
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
          general: '87.98',
          obc: '87.28',
          sc: '79.03',
          st: '74.23',
          ews: '85.92',
        },
      },
      {
        id: '2023',
        values: {
          year: '2023',
          general: '75.41',
          obc: '74.75',
          sc: '59.25',
          st: '47.82',
          ews: '68.02',
        },
      },
    ],
  },
  sidebarHighlights: [
    {
      title: 'Negative Marking',
      value: '1/3 Marks (Prelims Only)',
    },
    {
      title: 'Age Limit',
      value: '21 - 32 Years',
      description: 'General Category',
    },
    {
      title: 'Educational Qualification',
      value: 'Bachelor\u0027s Degree from a Recognized University',
    },
    {
      title: 'Application Fee',
      value: 'Rs 100 (General/OBC/EWS), Nil (SC/ST/Female/PwBD)',
    },
    {
      title: 'Exam Duration',
      value: 'Prelims: 2 Hours Each, Mains: 3 Hours Each',
    },
  ],
  faqs: [
    {
      question: 'How many attempts are allowed in UPSC?',
      answer:
        'General category candidates get 6 attempts. OBC candidates get 9 attempts, while SC/ST candidates can attempt until the upper age limit.',
    },
    {
      question: 'Is there negative marking in UPSC Prelims?',
      answer:
        'Yes. One-third of the marks assigned to a question are deducted for every incorrect answer.',
    },
    {
      question: 'Can final year students apply for UPSC?',
      answer:
        'Yes, provided they fulfill the educational qualification before the prescribed cutoff date mentioned in the official notification.',
    },
    {
      question: 'Is UPSC conducted online?',
      answer: 'No. UPSC Civil Services Examination is conducted in offline pen-and-paper mode.',
    },
    {
      question: 'Which optional subject is best for UPSC?',
      answer:
        'There is no universally best optional subject. Candidates should choose based on interest, graduation background, and availability of study resources.',
    },
    {
      question: 'What is the qualifying mark for CSAT?',
      answer: 'Candidates must score at least 33% marks in CSAT (General Studies Paper II).',
    },
    {
      question: 'What is the salary of an IAS officer?',
      answer:
        'The basic salary of an entry-level IAS officer starts at Pay Level 10 under the 7th CPC, along with various allowances.',
    },
    {
      question: 'How long should one prepare for UPSC?',
      answer:
        'Most successful candidates prepare for around 10 to 18 months with a structured study plan and regular revision.',
    },
  ],
  seo: {
    title: 'UPSC CSE Syllabus Guide 2026 | SarkariMate',
    description:
      'The UPSC Civil Services Examination (CSE) is conducted annually to recruit candidates for prestigious services such as IAS, IPS, IFS, IRS, and other Central Civil Services through a three-stage selection process comprising Preliminary Examination, Main Examination, and Personality Test.',
    canonical: '/syllabus/upsc-cse',
    keywords: ['UPSC CSE', 'UPSC', 'syllabus', 'exam pattern'],
  },
};

export default upscCseSyllabus;
