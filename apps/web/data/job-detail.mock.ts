import type { DetailPageData } from '@/components/job-detail/types';

export const jobDetailMock: DetailPageData = {
  pageType: 'jobs',
  slug: 'up-anganwadi-bharti-recruitment-2026',
  title: 'UP Anganwadi Bharti Recruitment 2026',
  status: {
    label: 'Application Open',
    tone: 'green',
  },
  organization: 'Uttar Pradesh Government',
  location: 'Uttar Pradesh',
  postedDate: '2026-07-05',
  updatedDate: '2026-07-07',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Uttar Pradesh', href: '/jobs?state=Uttar%20Pradesh' },
    {
      label: 'UP Anganwadi Bharti Recruitment 2026',
      href: '/jobs/up-anganwadi-bharti-recruitment-2026',
    },
  ],
  keyInformation: [
    { label: 'Last Date', value: 'District Wise', tone: 'red' },
    { label: 'Total Posts', value: '60,000+', tone: 'green' },
    { label: 'Age Limit', value: '18 - 35 Years', tone: 'green' },
    { label: 'Qualification', value: '12th Pass', tone: 'green' },
    { label: 'Application Fee', value: 'Rs 0 (Free)', tone: 'green' },
    { label: 'Gender', value: 'Female Only', tone: 'red' },
  ],
  alert:
    'This recruitment is for Anganwadi Worker and Helper posts in different districts of Uttar Pradesh.',
  actions: [
    { label: 'Apply Online', href: '#important-links', variant: 'primary' },
    { label: 'Official Notification', href: '#important-links', variant: 'secondary' },
    { label: 'Official Website', href: '#important-links', variant: 'secondary' },
  ],
  about: {
    title: 'About This Recruitment',
    body: [
      'UP Anganwadi Bharti Recruitment 2026 for 60,000+ posts has been announced district wise by the Uttar Pradesh Government.',
      'Eligible candidates can review important dates, qualification, age limit, district vacancy and official application links before applying.',
    ],
  },
  importantDates: [
    { label: 'Notification Released', value: 'November 2025', tone: 'green' },
    { label: 'Application Started', value: 'November 2025', tone: 'green' },
    { label: 'Last Date to Apply', value: 'District Wise', tone: 'red' },
    { label: 'Merit List', value: 'To be announced', tone: 'slate' },
    { label: 'Document Verification', value: 'To be announced', tone: 'slate' },
  ],
  vacancy: {
    title: 'Vacancy Details (District Wise)',
    columns: [
      { key: 'district', label: 'District Name' },
      { key: 'postType', label: 'Post Type' },
      { key: 'posts', label: 'No. of Posts' },
      { key: 'lastDate', label: 'Last Date' },
      { key: 'notification', label: 'Notification', kind: 'document' },
      { key: 'action', label: 'Apply Now', kind: 'action' },
    ],
    rows: [
      {
        id: 'varanasi',
        values: {
          district: 'Varanasi',
          postType: 'Worker',
          posts: '187',
          lastDate: '2026-07-31',
          notification: 'View PDF',
          action: 'Apply',
        },
      },
      {
        id: 'pratapgarh',
        values: {
          district: 'Pratapgarh',
          postType: 'Worker',
          posts: '250',
          lastDate: '2026-07-28',
          notification: 'View PDF',
          action: 'Apply',
        },
      },
      {
        id: 'bhadohi',
        values: {
          district: 'Bhadohi',
          postType: 'Worker',
          posts: '108',
          lastDate: '2026-07-25',
          notification: 'View PDF',
          action: 'Apply',
        },
      },
      {
        id: 'mathura',
        values: {
          district: 'Mathura',
          postType: 'Worker',
          posts: '236',
          lastDate: '2026-07-24',
          notification: 'View PDF',
          action: 'Apply',
        },
      },
    ],
  },
  eligibility: [
    'Candidate must be a resident of Uttar Pradesh.',
    'Candidate must have passed 12th from a recognized board.',
    'Female candidates only.',
    'Age relaxation is applicable as per government rules.',
  ],
  howToApply: [
    'Open the official district-wise application link.',
    'Read the notification instructions before starting the form.',
    'Fill personal, qualification and address details carefully.',
    'Submit the form and keep the acknowledgement for future reference.',
  ],
  ageLimit: [
    { label: 'Minimum Age', value: '18 Years', tone: 'green' },
    { label: 'Maximum Age', value: '35 Years', tone: 'green' },
    { label: 'Age Reference Date', value: '2026-07-01', tone: 'slate' },
  ],
  ageLimitNote: 'Age relaxation will be provided as per the rules of UP Anganwadi.',
  applicationFee: [{ label: 'All Candidates', value: 'Rs 0', tone: 'green' }],
  applicationFeeNote: 'There is no application fee for any candidate.',
  selectionProcess: [
    { title: 'Merit List', date: 'Based on 12th marks', status: 'active' },
    { title: 'Document Verification', date: 'Original documents check', status: 'upcoming' },
    { title: 'Final Selection', date: 'District wise final list', status: 'upcoming' },
  ],
  importantLinks: [
    { label: 'Apply Online', href: '#', description: 'District wise application portal' },
    { label: 'Official Notification', href: '#', description: 'PDF notification and instructions' },
    { label: 'Official Website', href: '#', description: 'Department website' },
  ],
  faqs: [
    {
      question: 'Who can apply for this update?',
      answer:
        'Candidates should check the official notification for district-wise eligibility before applying.',
    },
    {
      question: 'Is there any application fee?',
      answer: 'The mock information shows no application fee for any candidate.',
    },
    {
      question: 'Where should candidates apply?',
      answer:
        'Candidates should use the official district-wise application link listed on this page.',
    },
  ],
  timeline: [
    { title: 'Notification Released', date: 'November 2025', status: 'complete' },
    { title: 'Application Started', date: 'November 2025', status: 'complete' },
    { title: 'Last Date to Apply', date: 'District Wise', status: 'active' },
    { title: 'Merit List', date: 'To be announced', status: 'upcoming' },
    { title: 'Document Verification', date: 'To be announced', status: 'upcoming' },
    { title: 'Final Selection', date: 'To be announced', status: 'upcoming' },
  ],
  relatedContent: [
    {
      title: 'Related Jobs',
      buttonText: 'View All Jobs',
      href: '/jobs',
      items: [
        { label: 'UP Police Constable Recruitment 2026', href: '/jobs/up-police-constable-2026' },
        { label: 'SSC CGL Recruitment 2026', href: '/jobs/ssc-cgl-2026' },
        { label: 'Railway Group D Recruitment 2026', href: '/jobs/railway-group-d-2026' },
      ],
    },
    {
      title: 'Related Results',
      buttonText: 'View All Results',
      href: '/results',
      items: [
        { label: 'UP Police SI Result 2026', href: '/results/up-police-si-result-2026' },
        { label: 'UPSSSC PET Result 2025', href: '/results/upsssc-pet-result-2025' },
        { label: 'SSC CGL Tier 1 Result 2026', href: '/results/ssc-cgl-tier-1-result-2026' },
      ],
    },
    {
      title: 'Related Admit Cards',
      buttonText: 'View All Admit Cards',
      href: '/admit-cards',
      items: [
        {
          label: 'UP Police Constable Admit Card 2026',
          href: '/admit-cards/up-police-constable-2026',
        },
        { label: 'UPSSSC PET Admit Card 2025', href: '/admit-cards/upsssc-pet-2025' },
        { label: 'SSC CGL Tier 1 Admit Card 2026', href: '/admit-cards/ssc-cgl-tier-1-2026' },
      ],
    },
    {
      title: 'Related Answer Keys',
      buttonText: 'View All Answer Keys',
      href: '/answer-keys',
      items: [
        { label: 'UP Police SI Answer Key 2026', href: '/answer-keys/up-police-si-2026' },
        { label: 'UPSSSC PET Answer Key 2025', href: '/answer-keys/upsssc-pet-2025' },
        { label: 'SSC CGL Tier 1 Answer Key 2026', href: '/answer-keys/ssc-cgl-tier-1-2026' },
      ],
    },
  ],
  seo: {
    title: 'UP Anganwadi Bharti Recruitment 2026',
    description:
      'Check UP Anganwadi Bharti Recruitment 2026 details including important dates, eligibility, age limit, vacancy, application fee and official links.',
    canonical: '/jobs/up-anganwadi-bharti-recruitment-2026',
    keywords: ['UP Anganwadi Bharti 2026', 'Anganwadi recruitment', 'Uttar Pradesh vacancy'],
  },
};
