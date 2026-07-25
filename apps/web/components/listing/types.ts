export interface ListingItem {
  id: string;
  detailId?: string;
  title: string;
  organization: string;
  updatedDate: string;
  year: string;
  state: string;
  href: string;
  lastDate: string;
}

export interface ListingStatistic {
  label: string;
  value: string;
  icon: 'file' | 'calendar' | 'clock' | 'building';
  tone: 'blue' | 'green' | 'purple' | 'orange';
}

export interface ListingColumn {
  key: 'index' | 'title' | 'organization' | 'lastDate' | 'action';
  label: string;
}

export interface ListingOption {
  label: string;
  value: string;
}

export interface ListingFilters {
  year: string;
  state: string;
  organization: string;
}

export interface ListingSeoConfig {
  title: string;
  description: string;
  canonical: string;
}

export interface ListingHeroImage {
  src: string;
  alt: string;
  priority?: boolean;
}

export interface ListingPageConfig {
  pageTitle: string;
  breadcrumbLabel: string;
  heroDescription: string;
  heroDescriptionHindi: string;
  heroImage: ListingHeroImage;
  searchPlaceholder: string;
  apiEndpoint: string;
  pageType: string;
  statistics: ListingStatistic[];
  columns: ListingColumn[];
  actionLabel: string;
  filters: {
    years: ListingOption[];
    states: ListingOption[];
    organizations: ListingOption[];
  };
  sidebar: {
    filterTitle: string;
    newsletterTitle: string;
    newsletterDescription: string;
    helpText: string;
  };
  seo: ListingSeoConfig;
}

export interface ListingQuery {
  endpoint: string;
  page: number;
  pageSize: number;
  search: string;
  sort: string;
  filters: ListingFilters;
}

export interface ListingResponse {
  items: ListingItem[];
  total: number;
  hasMore: boolean;
}
