export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',

    name: 'SarkariMate',

    alternateName: 'Sarkari Mate',

    url: 'https://sarkarimate.com',

    description:
      'Find the latest Government Jobs, Admit Cards, Results, Answer Keys, Syllabus and Official Notifications in one place.',

    inLanguage: 'en-IN',

    publisher: {
      '@type': 'Organization',
      name: 'SarkariMate',
      url: 'https://sarkarimate.com',
    },

    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sarkarimate.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
