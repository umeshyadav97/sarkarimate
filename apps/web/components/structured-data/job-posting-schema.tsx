interface HiringOrganization {
  name: string;
  website?: string;
  logo?: string;
}

interface JobPostingSchemaProps {
  title: string;
  description: string;
  slug: string;

  datePosted: string;
  validThrough: string;

  employmentType?: string;

  hiringOrganization: HiringOrganization;

  jobLocationCountry?: string;

  baseSalary?: {
    currency: string;
    minValue?: number;
    maxValue?: number;
    unitText?: string;
  };
}

export function JobPostingSchema({
  title,
  description,
  slug,
  datePosted,
  validThrough,
  employmentType = 'FULL_TIME',
  hiringOrganization,
  jobLocationCountry = 'IN',
  baseSalary,
}: JobPostingSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',

    title,

    description,

    datePosted,

    validThrough,

    employmentType,

    url: `https://sarkarimate.com/${slug}`,

    hiringOrganization: {
      '@type': 'Organization',
      name: hiringOrganization.name,
      sameAs: hiringOrganization.website,
      ...(hiringOrganization.logo && {
        logo: hiringOrganization.logo,
      }),
    },

    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: jobLocationCountry,
      },
    },
  };

  if (baseSalary) {
    schema.baseSalary = {
      '@type': 'MonetaryAmount',
      currency: baseSalary.currency,
      value: {
        '@type': 'QuantitativeValue',
        ...(baseSalary.minValue && {
          minValue: baseSalary.minValue,
        }),
        ...(baseSalary.maxValue && {
          maxValue: baseSalary.maxValue,
        }),
        unitText: baseSalary.unitText ?? 'MONTH',
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
