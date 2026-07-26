interface Publisher {
  name: string;
  logo: string;
}

interface Author {
  name: string;
}

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image: string;

  url: string;

  datePublished: string;
  dateModified: string;

  author?: Author;

  publisher?: Publisher;
}

export function ArticleSchema({
  headline,
  description,
  image,
  url,
  datePublished,
  dateModified,
  author = {
    name: 'SarkariMate',
  },
  publisher = {
    name: 'SarkariMate',
    logo: 'https://sarkarimate.com/assets/images/logo.png',
  },
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',

    headline,

    description,

    image,

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },

    author: {
      '@type': 'Organization',
      name: author.name,
    },

    publisher: {
      '@type': 'Organization',
      name: publisher.name,

      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
      },
    },

    datePublished,

    dateModified,
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
