export type HomeQuickAccessType =
  | 'jobs'
  | 'latest_job'
  | 'admit-card'
  | 'admit_card'
  | 'result'
  | 'answer-key'
  | 'answer_key'
  | 'syllabus'
  | 'all';

export interface HomeQuickAccessEntry {
  label: string;
  count: string;
  href: string;
  type: HomeQuickAccessType;
}

export interface HomeJobEntry {
  title: string;
  organization: string;
  slug: string;
  lastDate: string;
  status: string;
}

export interface HomeDeadlineEntry {
  title: string;
  organization: string;
  slug: string;
  lastDate: string;
  daysLeft: number;
}

export interface HomeResultEntry {
  title: string;
  organization: string;
  slug: string;
  resultDate: string;
}

export interface HomeCategoryEntry {
  name: string;
  slug: string;
  count: number;
}

export interface HomeStats {
  totalJobs: number;
  activeJobs?: number;
  resultsDeclared: number;
  activeUsers?: number;
  admitCards?: number;
  answerKeys?: number;
}

export interface HomePageStore {
  popularSearches: string[];
  quickAccess: HomeQuickAccessEntry[];
  latestJobs: HomeJobEntry[];
  upcomingDeadlines: HomeDeadlineEntry[];
  latestResults: HomeResultEntry[];
  categories: HomeCategoryEntry[];
  stats: HomeStats;
}

export const homePageStore: HomePageStore = {
  popularSearches: ['SSC CGL', 'UP Police', 'RRB NTPC', 'UP Anganwadi', 'Bihar Police', 'IBPS PO'],
  quickAccess: [
    {
      label: 'Latest Jobs',
      count: '18',
      href: '/jobs',
      type: 'jobs',
    },
    {
      label: 'Admit Cards',
      count: '10',
      href: '/admit-cards',
      type: 'admit-card',
    },
    {
      label: 'Results',
      count: '10',
      href: '/results',
      type: 'result',
    },
    {
      label: 'Answer Key',
      count: '10',
      href: '/answer-key',
      type: 'answer-key',
    },
    {
      label: 'Syllabus',
      count: '8',
      href: '/syllabus',
      type: 'syllabus',
    },
    // {
    //   label: 'Schemes',
    //   count: '5',
    //   href: '/schemes',
    //   type: 'scheme',
    // },
    {
      label: 'All Exams',
      count: '150+',
      href: '/categories',
      type: 'all',
    },
  ],
  latestJobs: [
    {
      title: 'Railway RRB Section Controller Online Form 2026',
      organization: 'Railway Recruitment Board',
      slug: 'railway-rrb-section-controller-online-form-2026',
      lastDate: '2026-07-31',
      status: 'active',
    },
    {
      title: 'UPSSSC OTR One Time Registration Online Form 2026',
      organization: 'Uttar Pradesh Subordinate Services Selection Commission',
      slug: 'upsssc-otr-one-time-registration-2026',
      lastDate: '2026-08-05',
      status: 'active',
    },
    {
      title: 'Indian Army SSC Technical 68th Men April 2027 Online Form',
      organization: 'Indian Army',
      slug: 'indian-army-ssc-technical-68th-men-april-2027',
      lastDate: '2026-08-12',
      status: 'active',
    },
    {
      title: 'IDBI Bank Specialist Officer SO Online Form 2026',
      organization: 'IDBI Bank',
      slug: 'idbi-bank-specialist-officer-so-online-form-2026',
      lastDate: '2026-08-03',
      status: 'active',
    },
    {
      title: 'UPSRTC Bus Conductor Online Form 2026',
      organization: 'Uttar Pradesh State Road Transport Corporation',
      slug: 'upsrtc-bus-conductor-online-form-2026',
      lastDate: '2026-07-25',
      status: 'active',
    },
    {
      title: 'SBI Assistant Manager Law, Deputy Manager Law Online Form 2026',
      organization: 'State Bank of India',
      slug: 'sbi-assistant-manager-law-online-form-2026',
      lastDate: '2026-07-29',
      status: 'active',
    },
    {
      title: 'UPSC Civil Services IFS Mains Online Form 2026',
      organization: 'Union Public Service Commission',
      slug: 'upsc-civil-services-ifs-mains-online-form-2026',
      lastDate: '2026-08-15',
      status: 'active',
    },
    {
      title: 'UPSSSC Auditor / Assistant Accountant Online Form 2026',
      organization: 'UPSSSC',
      slug: 'upsssc-auditor-assistant-accountant-2026',
      lastDate: '2026-08-18',
      status: 'active',
    },
    {
      title: 'UP Anganwadi Bharti Online Form 2026',
      organization: 'Uttar Pradesh Government',
      slug: 'up-anganwadi-bharti-online-form-2026',
      lastDate: '2026-07-28',
      status: 'active',
    },
    {
      title: 'UPSRTC Gorakhpur Bus Conductor Online Form 2026',
      organization: 'UPSRTC',
      slug: 'upsrtc-gorakhpur-bus-conductor-online-form-2026',
      lastDate: '2026-08-02',
      status: 'active',
    },
    {
      title: 'DSSSB Various Post Online Form 2026',
      organization: 'Delhi Subordinate Services Selection Board',
      slug: 'dsssb-various-post-online-form-2026',
      lastDate: '2026-08-09',
      status: 'active',
    },
    {
      title: 'BSUSC Bihar Assistant Professor Online Form 2026',
      organization: 'Bihar State University Service Commission',
      slug: 'bsusc-bihar-assistant-professor-online-form-2026',
      lastDate: '2026-08-22',
      status: 'active',
    },
    {
      title: 'Delhi High Court Higher Judicial Service HJS Online Form 2026',
      organization: 'Delhi High Court',
      slug: 'delhi-high-court-hjs-online-form-2026',
      lastDate: '2026-08-14',
      status: 'active',
    },
    {
      title: 'UPPSC Pre Online Form 2026',
      organization: 'Uttar Pradesh Public Service Commission',
      slug: 'uppsc-pre-online-form-2026',
      lastDate: '2026-08-16',
      status: 'active',
    },
    {
      title: 'Railway RRB Technician Online Form 2026',
      organization: 'Railway Recruitment Board',
      slug: 'railway-rrb-technician-online-form-2026',
      lastDate: '2026-07-30',
      status: 'active',
    },
    {
      title: 'IBPS SO XVII Online Form 2026',
      organization: 'Institute of Banking Personnel Selection',
      slug: 'ibps-so-xvii-online-form-2026',
      lastDate: '2026-08-20',
      status: 'active',
    },
    {
      title: 'IBPS PO MT XVII Online Form 2026',
      organization: 'Institute of Banking Personnel Selection',
      slug: 'ibps-po-mt-xvii-online-form-2026',
      lastDate: '2026-08-18',
      status: 'active',
    },
    {
      title: 'NEET PG Online Form 2026',
      organization: 'National Board of Examinations',
      slug: 'neet-pg-online-form-2026',
      lastDate: '2026-08-25',
      status: 'active',
    },
    {
      title: 'NVS Class 6 Online Form 2027-28',
      organization: 'Navodaya Vidyalaya Samiti',
      slug: 'nvs-class-6-online-form-2027-28',
      lastDate: '2026-08-26',
      status: 'active',
    },
    {
      title: 'Jharkhand Teacher Eligibility Test Online Form 2026',
      organization: 'Jharkhand Academic Council',
      slug: 'jharkhand-teacher-eligibility-test-2026',
      lastDate: '2026-08-28',
      status: 'active',
    },
  ],
  upcomingDeadlines: [
    {
      title: 'UP Anganwadi Bharti 2026',
      organization: 'Uttar Pradesh Government',
      slug: 'up-anganwadi-bharti-2026',
      lastDate: '2026-07-31',
      daysLeft: 6,
    },
    {
      title: 'RRB Technician Recruitment 2026',
      organization: 'Railway Recruitment Board',
      slug: 'rrb-technician-2026',
      lastDate: '2026-08-04',
      daysLeft: 10,
    },
    {
      title: 'Bihar Police SI Recruitment 2026',
      organization: 'BPSSC',
      slug: 'bihar-police-si-2026',
      lastDate: '2026-08-06',
      daysLeft: 12,
    },
    {
      title: 'SSC CGL 2026',
      organization: 'Staff Selection Commission',
      slug: 'ssc-cgl-2026',
      lastDate: '2026-08-10',
      daysLeft: 16,
    },
    {
      title: 'UP Police Constable Recruitment 2026',
      organization: 'Uttar Pradesh Police',
      slug: 'up-police-constable-2026',
      lastDate: '2026-08-12',
      daysLeft: 18,
    },
  ],
  latestResults: [
    {
      title: 'RRB NTPC Graduate CBTST Result 2026',
      organization: 'Railway Recruitment Board',
      slug: 'rrb-ntpc-graduate-cbtst-result-2026',
      resultDate: '2026-07-14',
    },
    {
      title: 'Indian Army Agniveer CEE Result 2026',
      organization: 'Indian Army',
      slug: 'indian-army-agniveer-cee-result-2026',
      resultDate: '2026-07-14',
    },
    {
      title: 'NTA NEET UG Re-Exam Result 2026',
      organization: 'National Testing Agency',
      slug: 'nta-neet-ug-re-exam-result-2026',
      resultDate: '2026-07-13',
    },
    {
      title: 'JPU UG 2nd Merit List 2026',
      organization: 'Jai Prakash University',
      slug: 'jpu-ug-2nd-merit-list-2026',
      resultDate: '2026-07-12',
    },
    {
      title: 'Magadh University UG 2nd Merit List 2026',
      organization: 'Magadh University',
      slug: 'magadh-university-ug-2nd-merit-list-2026',
      resultDate: '2026-07-11',
    },
  ],
  categories: [
    { name: 'SSC', slug: 'ssc', count: 186 },
    { name: 'Railway', slug: 'railway', count: 142 },
    { name: 'Banking', slug: 'banking', count: 94 },
    { name: 'UPSC', slug: 'upsc', count: 28 },
    { name: 'Defence', slug: 'defence', count: 81 },
    { name: 'Teaching', slug: 'teaching', count: 123 },
    { name: 'State Jobs', slug: 'state-jobs', count: 214 },
    { name: 'Police', slug: 'police', count: 97 },
    // { name: 'All Categories', slug: 'all-categories', count: 971 },
  ],
  stats: {
    totalJobs: 18,
    activeJobs: 18,
    resultsDeclared: 10,
    activeUsers: 0,
  },
};
