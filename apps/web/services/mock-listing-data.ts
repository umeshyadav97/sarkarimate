import type { ListingItem } from '@/components/listing';

const mockJobDetailHref = '/jobs/up-anganwadi-bharti-recruitment-2026';

const titlesByEndpoint: Record<string, string[]> = {
  '/jobs': [
    'UP Police Constable Recruitment 2026',
    'SSC CGL 2026 Online Form',
    'RRB Technician Recruitment 2026',
    'Bihar Police Sub Inspector SI 2026',
    'UP Anganwadi Bharti Online Form 2026',
    'Indian Navy Agniveer SSR Recruitment 2026',
  ],
  '/results': [
    'Bihar ITI CAT 2026 1st Round Allotment Result',
    'Bihar DCECE-PE 2026 1st Round Allotment Result',
    'IERT Prayagraj Exam Result 2026',
    'JPSC ACF Mains Result 2026',
    'MPESB ASI and Subedar Final Result 2026 - Out',
    'UP PGT Final Result 2026 - Out',
  ],
  '/admit-cards': [
    'SSC CHSL Tier 1 Admit Card 2026',
    'UP Police Constable PET Admit Card 2026',
    'RRB Technician CBT Admit Card 2026',
    'BPSC TRE 4 Admit Card 2026',
    'Bihar Police SI Main Admit Card 2026',
    'Delhi Police Head Constable Admit Card 2026',
  ],
  '/answer-keys': [
    'SSC CGL Tier 1 Answer Key 2026',
    'UPSSSC PET Answer Key 2026',
    'RRB NTPC CBT Answer Key 2026',
    'BPSC Teacher Exam Answer Key 2026',
    'HSSC CET Group C Answer Key 2026',
    'MPESB Group 4 Answer Key 2026',
  ],
  '/syllabus': [
    'SSC CGL 2026 Syllabus',
    'UP Police Constable Syllabus 2026',
    'RRB Technician Syllabus 2026',
    'BPSC Teacher Syllabus 2026',
    'Bihar Police SI Syllabus 2026',
    'UPSSSC PET Syllabus 2026',
  ],
  '/schemes': [
    'PM Kisan Samman Nidhi Yojana',
    'Ayushman Bharat Health Card Scheme',
    'UP Scholarship Scheme 2026',
    'Bihar Student Credit Card Scheme',
    'PM Vishwakarma Yojana',
    'Ladli Behna Yojana',
  ],
};

const organizations = [
  'BCECEB',
  'IERT Prayagraj',
  'JPSC',
  'MPESB',
  'UPPSC',
  'UP Board',
  'HPSC',
  'HSSC',
  'LIC HFL',
  'SSC',
  'RRB',
  'BPSC',
];

const states = ['Bihar', 'Uttar Pradesh', 'Madhya Pradesh', 'Haryana', 'Delhi', 'Rajasthan'];

export function getMockListingItems(endpoint: string): ListingItem[] {
  const titles = titlesByEndpoint[endpoint] ?? titlesByEndpoint['/results'];

  return Array.from({ length: 96 }, (_, index) => {
    const title = titles[index % titles.length];
    const organization = organizations[index % organizations.length];
    const day = String(7 - (index % 7)).padStart(2, '0');
    const year = index > 72 ? '2024' : index > 42 ? '2025' : '2026';

    return {
      id: `${endpoint.replace('/', '')}-${index + 1}`,
      title,
      organization,
      updatedDate: `${day} Jul ${year}`,
      year,
      state: states[index % states.length],
      href: endpoint === '/jobs' ? mockJobDetailHref : '#',
    };
  });
}
