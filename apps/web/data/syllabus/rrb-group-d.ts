import type { SyllabusGuide } from '../../types/syllabus';

export const rrbGroupDSyllabus: SyllabusGuide = {
  slug: 'rrb-group-d',
  title: 'RRB Group D Syllabus Guide 2026',
  examName: 'RRB Group D',
  organization: 'Railway Recruitment Board (RRB)',
  category: 'Railway',
  badgeLabel: 'Level 1 Railway Exam',
  updatedDate: '2026-07-29T00:00:00Z',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Syllabus', href: '/syllabus' },
    { label: 'RRB Group D Syllabus Guide 2026', href: '/syllabus/rrb-group-d' },
  ],
  heroFacts: [
    { label: 'Conducting Body', value: 'Railway Recruitment Board', tone: 'blue' },
    { label: 'Exam Mode', value: 'Computer Based Test (CBT)', tone: 'blue' },
    { label: 'Post Level', value: 'Level 1 (7th CPC Pay Matrix)', tone: 'blue' },
    { label: 'Selection Process', value: 'CBT, PET, DV & Medical', tone: 'slate' },
    { label: 'Official Website', value: 'rrbcdg.gov.in', tone: 'blue' },
  ],
  quickActions: [
    { label: 'Download Syllabus PDF', href: '#syllabus', type: 'download' },
    { label: 'View Latest Notification', href: '/rrb-group-d', type: 'notification' },
    { label: 'Official Website', href: 'https://www.rrbcdg.gov.in', type: 'official' },
    { label: 'Apply Online', href: 'https://rrbapply.gov.in', type: 'apply' },
  ],
  overviewDescription:
    'RRB Group D is a Railway Recruitment Board examination for Level 1 posts such as Pointsman, Assistant, Track Maintainer, Assistant Loco Shed, Assistant Operations, and Assistant TL & AC. The CEN 09/2025 recruitment includes 22,195 vacancies.',
  overviewHighlights: [
    { label: 'Vacancies', value: '22,195', tone: 'blue' },
    { label: 'Exam Dates', value: '3 - 21 August 2026', tone: 'blue' },
    { label: 'Exam Shifts', value: '3 Shifts', tone: 'blue' },
  ],
  overview: {
    title: 'RRB Group D Overview',
    description:
      'The Railway Recruitment Board is conducting the RRB Group D CEN 09/2025 recruitment for Level 1 railway posts. The first stage is a Computer Based Test, followed by the Physical Efficiency Test, Document Verification, and Medical Examination.',
    highlights: [
      { label: 'Advertisement Number', value: 'CEN 09/2025', tone: 'blue' },
      { label: 'Vacancies', value: '22,195', tone: 'blue' },
      { label: 'Applicants', value: 'Approximately 1 Crore', tone: 'blue' },
    ],
  },
  syllabus: [
    {
      name: 'General Science',
      topics: [
        'General Science section',
        '25 objective-type questions',
        '25 marks',
        'Detailed chapter-wise topics should be verified from the official syllabus notice',
      ],
    },
    {
      name: 'Mathematics',
      topics: [
        'Mathematics section',
        '25 objective-type questions',
        '25 marks',
        'Practise formulas, calculations, speed, and accuracy',
      ],
    },
    {
      name: 'General Intelligence & Reasoning',
      topics: [
        'General Intelligence and Reasoning section',
        '30 objective-type questions',
        '30 marks',
        'Practise previous year papers and mock tests regularly',
      ],
    },
    {
      name: 'General Awareness & Current Affairs',
      topics: [
        'General Awareness and Current Affairs section',
        '20 objective-type questions',
        '20 marks',
        'Revise current affairs, important facts, and short notes',
      ],
    },
  ],
  examPattern: {
    columns: [
      { key: 'tier', label: 'Stage / Section' },
      { key: 'subjects', label: 'Subjects' },
      { key: 'questions', label: 'Questions' },
      { key: 'marks', label: 'Marks' },
      { key: 'duration', label: 'Duration' },
      { key: 'negativeMarking', label: 'Negative Marking' },
    ],
    rows: [
      {
        id: 'general-science',
        values: {
          tier: 'CBT',
          subjects: 'General Science',
          questions: '25',
          marks: '25',
          duration: '90 Minutes total',
          negativeMarking: 'Verify from official notification',
        },
      },
      {
        id: 'mathematics',
        values: {
          tier: 'CBT',
          subjects: 'Mathematics',
          questions: '25',
          marks: '25',
          duration: '90 Minutes total',
          negativeMarking: 'Verify from official notification',
        },
      },
      {
        id: 'reasoning',
        values: {
          tier: 'CBT',
          subjects: 'General Intelligence and Reasoning',
          questions: '30',
          marks: '30',
          duration: '90 Minutes total',
          negativeMarking: 'Verify from official notification',
        },
      },
      {
        id: 'general-awareness',
        values: {
          tier: 'CBT',
          subjects: 'General Awareness and Current Affairs',
          questions: '20',
          marks: '20',
          duration: '90 Minutes total',
          negativeMarking: 'Verify from official notification',
        },
      },
      {
        id: 'total',
        values: {
          tier: 'CBT Total',
          subjects: 'All four sections',
          questions: '100',
          marks: '100',
          duration: '90 Minutes (120 Minutes for PwD candidates)',
          negativeMarking: 'Verify from official notification',
        },
      },
    ],
  },
  selectionProcess: [
    'Computer Based Test (CBT)',
    'Physical Efficiency Test (PET)',
    'Document Verification',
    'Medical Examination',
    'Final Selection',
  ],
  resources: [
    {
      title: 'Exam Schedule',
      description: 'Date-wise CBT schedule from 3 to 21 August 2026',
      href: '#exam-schedule',
      tone: 'blue',
    },
    {
      title: 'City Intimation Slip',
      description: 'Check allotted exam city before the admit card release',
      href: '#city-intimation-slip',
      tone: 'orange',
    },
    {
      title: 'Admit Card',
      description: 'Download the hall ticket from the candidate login portal',
      href: '#admit-card',
      tone: 'blue',
    },
    {
      title: 'Previous Year Papers',
      description: 'Practise previous year papers to improve speed and accuracy',
      href: '#previous-year-papers',
      tone: 'blue',
    },
    {
      title: 'Preparation Strategy',
      description: 'Revision, mock tests, short notes, and study-plan guidance',
      href: '#study-plan',
      tone: 'blue',
    },
  ],
  tier1CutoffHeading: 'RRB Group D CBT Cutoff',
  tier2CutoffHeading: 'RRB Group D PET / Final Cutoff',
  tier1Cutoff: {
    columns: [
      { key: 'year', label: 'Year' },
      { key: 'general', label: 'General (UR)' },
      { key: 'obc', label: 'OBC' },
      { key: 'sc', label: 'SC' },
      { key: 'st', label: 'ST' },
      { key: 'ews', label: 'EWS' },
    ],
    rows: [],
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
    rows: [],
  },
  sidebarHighlights: [
    { title: 'Advertisement Number', value: 'CEN 09/2025' },
    { title: 'Vacancies', value: '22,195 Level 1 Posts' },
    {
      title: 'Exam Date',
      value: '3 - 21 August 2026',
      description: 'CBT will be conducted on notified dates in three shifts',
    },
    {
      title: 'City Intimation Slip',
      value: 'From 24 July 2026',
      description: 'Released date-wise before the scheduled examination',
    },
    {
      title: 'Admit Card',
      value: 'From 31 July 2026',
      description: 'Available through the candidate login portal',
    },
    {
      title: 'Exam Duration',
      value: '90 Minutes',
      description: '120 minutes for PwD candidates',
    },
    {
      title: 'Exam Timings',
      value: '9:00 AM, 12:45 PM & 4:30 PM',
      description: 'Three shifts with separate reporting and gate-closing times',
    },
  ],
  faqs: [
    {
      question: 'When will the RRB Group D Exam 2026 be conducted?',
      answer:
        'The RRB Group D CBT under CEN 09/2025 is scheduled from 3 August to 21 August 2026 on the notified examination dates.',
    },
    {
      question: 'How many vacancies are available in RRB Group D 2026?',
      answer:
        'A total of 22,195 Level 1 vacancies are mentioned for the CEN 09/2025 recruitment cycle.',
    },
    {
      question: 'What is the RRB Group D selection process?',
      answer:
        'The selection process includes a Computer Based Test, Physical Efficiency Test, Document Verification, and Medical Examination.',
    },
    {
      question: 'What is the RRB Group D CBT exam pattern?',
      answer:
        'The CBT contains 100 objective-type questions for 100 marks from General Science, Mathematics, General Intelligence and Reasoning, and General Awareness and Current Affairs.',
    },
    {
      question: 'How long is the RRB Group D CBT?',
      answer: 'The CBT duration is 90 minutes. PwD candidates are allotted 120 minutes.',
    },
    {
      question: 'When will the RRB Group D city intimation slip be released?',
      answer:
        'The city intimation slip started releasing from 24 July 2026 and is issued date-wise before each scheduled examination.',
    },
    {
      question: 'When will the RRB Group D admit card be released?',
      answer:
        'The admit card release starts from 31 July 2026 and is made available according to the candidate’s examination date.',
    },
    {
      question: 'How can candidates download the city intimation slip?',
      answer:
        'Candidates should open the official RRB website, select the CEN 09/2025 city-intimation link, log in using their registration credentials, complete the captcha, and download the slip.',
    },
    {
      question: 'Which posts are included in RRB Group D?',
      answer:
        'The recruitment includes posts such as Pointsman, Assistant, Track Maintainer, Assistant Loco Shed, Assistant Operations, and Assistant TL & AC.',
    },
    {
      question: 'Is the RRB Group D Exam 2026 postponed?',
      answer:
        'The supplied source states that no official postponement notification had been issued and candidates should prepare according to the announced schedule.',
    },
  ],
  seo: {
    title: 'RRB Group D Syllabus Guide 2026 | SarkariMate',
    description:
      'RRB Group D 2026 syllabus, CBT exam pattern, selection process, exam dates, city slip, admit card details, preparation guidance and FAQs.',
    canonical: '/syllabus/rrb-group-d',
    keywords: [
      'RRB Group D syllabus 2026',
      'RRB Group D exam pattern',
      'Railway Group D syllabus',
      'CEN 09/2025',
      'RRB Group D exam date 2026',
      'RRB Group D admit card',
      'RRB Group D city slip',
    ],
  },
};

export default rrbGroupDSyllabus;
