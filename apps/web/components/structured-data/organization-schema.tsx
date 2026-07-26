export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',

    name: 'SarkariMate',

    url: 'https://sarkarimate.com',

    logo: {
      '@type': 'ImageObject',
      url: 'https://sarkarimate.com/assets/images/logo.png',
    },

    description:
      'SarkariMate provides the latest Government Jobs, Admit Cards, Results, Answer Keys, Syllabus and Official Notifications in one place.',

    sameAs: [
      // Add these later when available
      // 'https://www.linkedin.com/company/sarkarimate',
      // 'https://www.youtube.com/@SarkariMate',
      // 'https://x.com/SarkariMate',
    ],
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
