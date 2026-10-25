import type { Lang } from '../data/site';

/**
 * The site publishes a single English edition. These helpers keep route
 * construction in one place so links stay consistent across components.
 */
export function homePath(_lang?: Lang): string {
  return '/';
}

export function insightsPath(_lang?: Lang): string {
  return '/insights/';
}

export function publicationsPath(_lang?: Lang): string {
  return '/publications/';
}

export function insightPath(slug: string, _lang?: Lang): string {
  return `/insights/${slug}/`;
}
