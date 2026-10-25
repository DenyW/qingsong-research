import type { Lang } from '../data/site';

const en = {
  'site.title': 'Qingsong Wei — Research, in the open',
  'site.titleSuffix': 'Research, in the open',
  'site.description':
    'The research website of Qingsong Wei: publications on 3D woven fabric composites and ballistic impact, selected projects, and field notes.',

  'a11y.skip': 'Skip to content',
  'a11y.external': 'opens in a new tab',
  'a11y.menu': 'Open menu',
  'a11y.closeMenu': 'Close menu',
  'a11y.mainNav': 'Main navigation',
  'a11y.footerNav': 'Footer navigation',

  'nav.home': 'Home',
  'nav.research': 'Research',
  'nav.publications': 'Publications',
  'nav.projects': 'Projects',
  'nav.insights': 'Field notes',
  'nav.experience': 'Experience',
  'nav.funding': 'Funding',
  'nav.contact': 'Contact',

  'hero.eyebrow': 'Personal research site · 2026',
  'hero.status': 'Open to collaboration',
  'hero.now': 'Now',
  'hero.ctaResearch': 'Explore research',
  'hero.ctaNotes': 'Read field notes',
  'hero.scroll': 'Scroll to explore',

  'section.research': 'Research',
  'section.researchTitle': 'Questions I keep returning to',
  'section.publications': 'Publications',
  'section.publicationsTitle': 'Selected publications',
  'section.projects': 'Projects & open source',
  'section.projectsTitle': 'Things I build',
  'section.insights': 'Field notes',
  'section.insightsTitle': 'Notes in progress',
  'section.experience': 'Experience',
  'section.experienceTitle': 'Appointments, education, and service',
  'section.funding': 'Funding & patents',
  'section.fundingTitle': 'Work behind the papers',
  'section.fundingLede':
    'Research funding, patents, and the methods that support the modelling and experiments. Funding follows the CV updated in August 2026; patent records and legal status follow Google Patents.',
  'section.contact': 'Contact',

  'publications.verified': 'Verified against ORCID & Crossref',
  'publications.homeLede':
    'A selection of peer-reviewed journal articles. The full list, with DOIs, is on the publications page.',
  'publications.all': 'All publications',
  'publications.pageTitle': 'Publications',
  'publications.pageKicker': 'Peer-reviewed work',
  'publications.pageLede':
    'Journal articles on textile composites, impact mechanics, and related material behaviour. Bibliographic data is verified against ORCID and Crossref.',
  'publications.sourceNote':
    'Source: ORCID record 0000-0001-6164-350X and Crossref metadata. Titles and author order follow the published record.',
  'publications.statsWorks': 'journal articles',
  'publications.statsFirst': 'first-author papers',
  'publications.statsYears': 'years covered',
  'publications.works': 'works',
  'publications.updated': 'Last updated October 2026',
  'publications.doi': 'DOI',
  'publications.firstAuthor': 'First author',
  'publications.coAuthor': 'Co-author',
  'publications.authors': 'Authors',
  'publications.venue': 'Venue',
  'publications.read': 'Read paper',

  'funding.research': 'Research funding',
  'funding.patents': 'Patents',
  'funding.methods': 'Methods & tools',
  'funding.pi': 'PI',
  'funding.coi': 'Co-I',
  'funding.source':
    'Sources: CV (August 2026); patent data and status via Google Patents (October 2026).',

  'projects.github': 'More on GitHub',
  'projects.view': 'View project',
  'projects.status': 'Status',

  'insights.all': 'All field notes',
  'insights.read': 'Read note',
  'insights.minRead': 'min read',
  'insights.back': 'All notes',
  'insights.published': 'Published',
  'insights.next': 'Next note',
  'insights.prev': 'Previous note',
  'insights.pageTitle': 'Field notes',
  'insights.pageLede':
    'Short essays on open research, clear writing, and the small tools that make methods visible.',
  'insights.rss': 'RSS feed',
  'insights.empty': 'No notes yet.',

  'contact.email': 'Email',
  'contact.location': 'Based in',
  'contact.elsewhere': 'Elsewhere',
  'contact.availability': 'Open to research conversations and collaborations.',

  'footer.built': 'Built with Astro. Static on Cloudflare Workers.',
  'footer.source': 'Source on GitHub',
  'footer.license': 'Code MIT · Content CC BY 4.0',
  'footer.top': 'Back to top',
  'footer.rights': 'All rights reserved.',

  'notFound.kicker': '404',
  'notFound.title': 'This page is not in the notebook.',
  'notFound.body':
    'The link may be old, or the note may have moved. Start from the homepage, or browse the field notes.',
  'notFound.home': 'Back home',
  'notFound.notes': 'Browse field notes',

  'meta.insightsTitle': 'Field notes',
  'meta.insightsDescription':
    'Short essays by Qingsong Wei on open research, clear writing, and small tools.',
  'meta.publicationsTitle': 'Publications',
  'meta.publicationsDescription':
    'Peer-reviewed publications by Qingsong Wei on 3D woven fabric composites, ballistic impact, and textile modelling.',
  'meta.notFoundTitle': 'Page not found',
} as const;

const zh: Record<keyof typeof en, string> = {
  'site.title': 'Qingsong Wei — 研究，在开放中发生',
  'site.titleSuffix': '研究，在开放中发生',
  'site.description':
    'Qingsong Wei 的科研网站：三维机织物复合材料与弹道冲击研究、论文、项目与现场笔记。',

  'a11y.skip': '跳到正文',
  'a11y.external': '在新标签页打开',
  'a11y.menu': '打开菜单',
  'a11y.closeMenu': '关闭菜单',
  'a11y.mainNav': '主导航',
  'a11y.footerNav': '页脚导航',

  'nav.home': '首页',
  'nav.research': '研究',
  'nav.publications': '论文',
  'nav.projects': '项目',
  'nav.insights': '笔记',
  'nav.experience': '经历',
  'nav.funding': '经费',
  'nav.contact': '联系',

  'hero.eyebrow': '个人科研网站 · 2026',
  'hero.status': '开放协作',
  'hero.now': '此刻',
  'hero.ctaResearch': '浏览研究',
  'hero.ctaNotes': '阅读笔记',
  'hero.scroll': '向下浏览',

  'section.research': '研究',
  'section.researchTitle': '我持续追问的问题',
  'section.publications': '论文',
  'section.publicationsTitle': '代表性论文',
  'section.projects': '项目与开源',
  'section.projectsTitle': '我构建的东西',
  'section.insights': '现场笔记',
  'section.insightsTitle': '进行中的笔记',
  'section.experience': '经历',
  'section.experienceTitle': '任职、教育与服务',
  'section.funding': '经费与专利',
  'section.fundingTitle': '论文背后的工作',
  'section.fundingLede':
    '研究经费、专利，以及支撑建模与实验的方法。经费信息依据 2026 年 8 月更新的简历；专利记录与法律状态依据 Google Patents。',
  'section.contact': '联系',

  'publications.verified': '经 ORCID 与 Crossref 核验',
  'publications.homeLede':
    '同行评审期刊论文选列。完整列表与 DOI 见论文页。',
  'publications.all': '全部论文',
  'publications.pageTitle': '论文',
  'publications.pageKicker': '同行评审工作',
  'publications.pageLede':
    '关于纺织复合材料、冲击力学及相关材料行为的期刊论文。文献信息经 ORCID 与 Crossref 核验。',
  'publications.sourceNote':
    '来源：ORCID 记录 0000-0001-6164-350X 与 Crossref 元数据。标题与作者顺序以发表记录为准。',
  'publications.statsWorks': '篇期刊论文',
  'publications.statsFirst': '篇第一作者论文',
  'publications.statsYears': '年跨度',
  'publications.works': '篇',
  'publications.updated': '最后更新于 2026 年 10 月',
  'publications.doi': 'DOI',
  'publications.firstAuthor': '第一作者',
  'publications.coAuthor': '合作作者',
  'publications.authors': '作者',
  'publications.venue': '发表处',
  'publications.read': '阅读论文',

  'funding.research': '研究经费',
  'funding.patents': '专利',
  'funding.methods': '方法与工具',
  'funding.pi': '主持',
  'funding.coi': '参与',
  'funding.source': '来源：2026 年 8 月简历；专利数据与状态来自 Google Patents（2026 年 10 月）。',

  'projects.github': '更多 GitHub 项目',
  'projects.view': '查看项目',
  'projects.status': '状态',

  'insights.all': '全部笔记',
  'insights.read': '阅读笔记',
  'insights.minRead': '分钟阅读',
  'insights.back': '全部笔记',
  'insights.published': '发布于',
  'insights.next': '下一篇',
  'insights.prev': '上一篇',
  'insights.pageTitle': '现场笔记',
  'insights.pageLede':
    '关于开放研究、清晰写作，以及那些让方法变得可见的小工具的短札。',
  'insights.rss': 'RSS 订阅',
  'insights.empty': '还没有笔记。',

  'contact.email': '邮箱',
  'contact.location': '所在地',
  'contact.elsewhere': '其他地方',
  'contact.availability': '欢迎研究交流与合作。',

  'footer.built': '用 Astro 构建，静态部署于 Cloudflare Workers。',
  'footer.source': 'GitHub 源码',
  'footer.license': '代码 MIT · 内容 CC BY 4.0',
  'footer.top': '回到顶部',
  'footer.rights': '保留所有权利。',

  'notFound.kicker': '404',
  'notFound.title': '这一页不在笔记本里。',
  'notFound.body': '链接可能已经过期，或者笔记换了位置。可以从首页开始，或浏览现场笔记。',
  'notFound.home': '回到首页',
  'notFound.notes': '浏览笔记',

  'meta.insightsTitle': '现场笔记',
  'meta.insightsDescription':
    'Qingsong Wei 关于开放研究、清晰写作与小工具的短札。',
  'meta.publicationsTitle': '论文',
  'meta.publicationsDescription':
    'Qingsong Wei 关于三维机织物复合材料、弹道冲击与纺织建模的同行评审论文。',
  'meta.notFoundTitle': '页面未找到',
};

export const ui = { en, zh };

export type UIKey = keyof typeof en;

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui.en[key];
}
