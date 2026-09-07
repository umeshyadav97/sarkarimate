export function getDetailRouteSlug(item: { slug: string; displaySlug?: string | null }) {
  return item.displaySlug || createDisplaySlugFromSlug(item.slug);
}

export function isMatchingDetailRouteSlug(
  item: { slug: string; displaySlug?: string | null },
  routeSlug: string,
) {
  return item.slug === routeSlug || getDetailRouteSlug(item) === routeSlug;
}

function createDisplaySlugFromSlug(slug: string) {
  return slug.replace(
    /-(?:out|updated|released|declared|available|re-open|reopen)?-?[a-f0-9]{8}$/i,
    '',
  );
}
