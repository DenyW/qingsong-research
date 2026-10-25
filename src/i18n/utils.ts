import type { Lang } from '../data/site';

export const languages: Lang[] = ['en', 'zh'];

export function getLangFromUrl(url: URL): Lang {
  return url.pathname === '/zh' || url.pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function stripLocale(pathname: string): string {
  const clean = pathname.split(/[?#]/)[0];
  if (clean === '/zh' || clean === '/zh/') return '/';
  if (clean.startsWith('/zh/')) return clean.slice(3) || '/';
  return clean || '/';
}

export function localizePath(pathname: string, lang: Lang): string {
  const base = stripLocale(pathname);
  const withSlash = base === '/' ? '/' : `${base.replace(/\/+$/, '')}/`;
  if (lang === 'en') return withSlash;
  return withSlash === '/' ? '/zh/' : `/zh${withSlash}`;
}

export function switchLangPath(pathname: string, lang: Lang): string {
  return localizePath(pathname, lang === 'en' ? 'zh' : 'en');
}

export function homePath(lang: Lang): string {
  return lang === 'zh' ? '/zh/' : '/';
}

export function insightsPath(lang: Lang): string {
  return lang === 'zh' ? '/zh/insights/' : '/insights/';
}

export function publicationsPath(lang: Lang): string {
  return lang === 'zh' ? '/zh/publications/' : '/publications/';
}

export function insightPath(slug: string, lang: Lang): string {
  return lang === 'zh' ? `/zh/insights/${slug}/` : `/insights/${slug}/`;
}

