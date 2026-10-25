export type Lang = 'en' | 'zh';

export type Localized<T = string> = Record<Lang, T>;

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  kind: 'orcid' | 'researchgate' | 'github' | 'email';
}

export interface NowItem {
  label: Localized;
  value: Localized;
}

export interface ResearchDirection {
  index: string;
  title: Localized;
  description: Localized;
  tags: Localized<string[]>;
}

export interface Project {
  name: string;
  year: string;
  description: Localized;
  tags: string[];
  href: string;
  status: Localized;
}

export interface ExperienceItem {
  period: Localized;
  role: Localized;
  organization: Localized;
  summary: Localized;
  kind: Localized;
}

const location: Localized = {
  en: 'Singapore · Hangzhou',
  zh: '新加坡 · 杭州',
};

const focus: Localized = {
  en: 'Textile composites & impact mechanics',
  zh: '纺织复合材料与冲击力学',
};

export const site = {
  name: 'Qingsong Wei',
  givenName: 'Qingsong',
  familyName: 'Wei',
  initials: 'Q',
  url: 'https://qingsong-research.example.workers.dev',
  email: 'wqs@zstu.edu.cn',
  location,
  role: {
    en: 'Researcher in textile composites & impact mechanics',
    zh: '纺织复合材料与冲击力学研究者',
  },
  tagline: {
    en: 'Research, in the open.',
    zh: '研究，在开放中发生。',
  },
  intro: {
    en: "I'm Qingsong Wei, a researcher working on how three-dimensional woven fabrics and textile composites respond to ballistic impact. My work combines finite element modelling, experiments, and architecture-level design. This site collects the work as it becomes public.",
    zh: '我是 Qingsong Wei，研究三维机织物与纺织复合材料在弹道冲击下的响应。我的工作结合有限元建模、实验与织物结构层面的设计。这个网站收集那些正在公开的工作。',
  },
  portrait: {
    src: '/images/portrait-placeholder.svg',
    alt: {
      en: 'Abstract portrait placeholder with a large Q monogram',
      zh: '带有巨大 Q 字母组合的抽象人像占位图',
    },
    caption: {
      en: 'Portrait placeholder · 4:5',
      zh: '照片占位 · 4:5',
    },
  },
  socials: [
    {
      label: 'ORCID',
      href: 'https://orcid.org/0000-0001-6164-350X',
      handle: '0000-0001-6164-350X',
      kind: 'orcid',
    },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Qingsong-Wei-3',
      handle: 'Qingsong-Wei-3',
      kind: 'researchgate',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/DenyW',
      handle: '@DenyW',
      kind: 'github',
    },
    {
      label: 'Email',
      href: 'mailto:wqs@zstu.edu.cn',
      handle: 'wqs@zstu.edu.cn',
      kind: 'email',
    },
  ] satisfies SocialLink[],
  now: [
    {
      label: { en: 'Based in', zh: '所在地' },
      value: location,
    },
    {
      label: { en: 'Focus', zh: '研究领域' },
      value: focus,
    },
    {
      label: { en: 'Mode', zh: '工作方式' },
      value: { en: 'Open to collaboration', zh: '开放协作' },
    },
  ] satisfies NowItem[],
  research: {
    intro: {
      en: 'My work follows one question through several scales: how does fabric architecture shape the way a textile composite absorbs and distributes impact energy? The three directions below are the lines I keep returning to.',
      zh: '我的工作围绕一个问题在多个尺度上展开：织物结构如何塑造纺织复合材料吸收与分散冲击能量的方式？下面三条，是我持续回到的线索。',
    },
    directions: [
      {
        index: '01',
        title: {
          en: 'Ballistic impact of 3D woven fabrics',
          zh: '三维机织物的弹道冲击',
        },
        description: {
          en: 'Penetration, deformation, and energy absorption in three-dimensional woven fabrics — how projectile geometry, clamping, impact angle, and strain rate change the failure mechanism.',
          zh: '三维机织物中的侵彻、变形与能量吸收——弹体几何、夹持方式、冲击角度与应变率如何改变失效机制。',
        },
        tags: {
          en: ['Ballistic penetration', '3D fabric', 'Damage'],
          zh: ['弹道侵彻', '三维织物', '损伤'],
        },
      },
      {
        index: '02',
        title: {
          en: 'Multi-scale modelling of textile composites',
          zh: '纺织复合材料的多尺度建模',
        },
        description: {
          en: 'Finite element models that connect fibre bundles, yarns, fabric architecture, and structural response, with high-strain-rate material behaviour made explicit.',
          zh: '连接纤维束、纱线、织物结构与整体响应的有限元模型，并显式处理高应变率下的材料行为。',
        },
        tags: {
          en: ['Finite element analysis', 'Multi-scale', 'Strain rate'],
          zh: ['有限元分析', '多尺度', '应变率'],
        },
      },
      {
        index: '03',
        title: {
          en: 'Architecture–performance design',
          zh: '结构与性能设计',
        },
        description: {
          en: 'Comparative studies of angle-interlock, orthogonal, layer-to-layer, and hybrid architectures — using fabric structure as a design variable for protective composites.',
          zh: '对角联锁、正交、层间与混杂结构进行比较研究——把织物结构作为防护复合材料的设计变量。',
        },
        tags: {
          en: ['Fabric architecture', 'Composites', 'Design'],
          zh: ['织物结构', '复合材料', '设计'],
        },
      },
    ] satisfies ResearchDirection[],
  },
  projects: [
    {
      name: 'btc-etf-alert',
      year: '2026',
      description: {
        en: 'A daily US spot Bitcoin ETF flow monitor. It sends an email only when the absolute net flow crosses US$100 million.',
        zh: '一个每日美国现货比特币 ETF 资金流监测工具，仅在净流入或流出的绝对值超过 1 亿美元时发送邮件。',
      },
      tags: ['Python', 'GitHub Actions', 'Market data'],
      href: 'https://github.com/DenyW/btc-etf-alert',
      status: { en: 'Open source', zh: '开源' },
    },
    {
      name: 'fedwatch-email-monitor',
      year: '2026',
      description: {
        en: 'Personal FedWatch probability alerts with source-linked macro context, delivered by scheduled GitHub Actions.',
        zh: '通过定时 GitHub Actions 发送个人 FedWatch 概率提醒，并附上可追溯来源的宏观背景。',
      },
      tags: ['Python', 'Macro data', 'Automation'],
      href: 'https://github.com/DenyW/fedwatch-email-monitor',
      status: { en: 'Open source', zh: '开源' },
    },
    {
      name: 'qingsong-research',
      year: '2026',
      description: {
        en: 'This site: a bilingual, open-source research website built with Astro and deployed as static assets on Cloudflare Workers.',
        zh: '这个网站本身：用 Astro 构建、以静态资源部署在 Cloudflare Workers 上的双语开源科研网站。',
      },
      tags: ['Astro', 'Cloudflare', 'Bilingual'],
      href: 'https://github.com/DenyW/qingsong-research',
      status: { en: 'Open source', zh: '开源' },
    },
  ] satisfies Project[],
  experience: [
    {
      period: { en: 'Present', zh: '至今' },
      role: { en: 'Researcher', zh: '研究者' },
      organization: {
        en: 'Zhejiang Sci-Tech University · College of Textile Science and Engineering',
        zh: '浙江理工大学 · 纺织科学与工程学院',
      },
      summary: {
        en: 'Current appointment in the College of Textile Science and Engineering, Hangzhou.',
        zh: '现任教于纺织科学与工程学院，杭州。',
      },
      kind: { en: 'Appointment', zh: '任职' },
    },
    {
      period: { en: '2026.09 — 2027.09', zh: '2026.09 — 2027.09' },
      role: { en: 'Visiting Scholar', zh: '访问学者' },
      organization: {
        en: 'National University of Singapore · College of Design and Engineering',
        zh: '新加坡国立大学 · 设计与工程学院',
      },
      summary: {
        en: 'Research visit in the College of Design and Engineering, Singapore.',
        zh: '在设计与工程学院开展研究访问，新加坡。',
      },
      kind: { en: 'Visiting', zh: '访问' },
    },
    {
      period: { en: '2024.04 — 2026.04', zh: '2024.04 — 2026.04' },
      role: { en: 'Postdoctoral Researcher', zh: '博士后研究员' },
      organization: {
        en: 'Fujian Normal University · College of Chemistry and Materials',
        zh: '福建师范大学 · 化学与材料学院',
      },
      summary: {
        en: 'Postdoctoral research in the College of Chemistry and Materials, Fuzhou.',
        zh: '在化学与材料学院从事博士后研究，福州。',
      },
      kind: { en: 'Research', zh: '研究' },
    },
    {
      period: { en: '2018.03 — 2021.12', zh: '2018.03 — 2021.12' },
      role: { en: 'PhD', zh: '博士' },
      organization: {
        en: 'Donghua University · College of Textiles',
        zh: '东华大学 · 纺织学院',
      },
      summary: {
        en: 'Doctoral research in the College of Textiles, Shanghai.',
        zh: '在纺织学院攻读博士，上海。',
      },
      kind: { en: 'Education', zh: '教育' },
    },
    {
      period: { en: '2026.10 — 2027.07', zh: '2026.10 — 2027.07' },
      role: { en: 'Guest Editor', zh: '客座编辑' },
      organization: { en: 'Polymers (MDPI)', zh: 'Polymers（MDPI）' },
      summary: {
        en: 'Editorial service for the journal Polymers.',
        zh: '为期刊 Polymers 提供编辑服务。',
      },
      kind: { en: 'Service', zh: '服务' },
    },
  ] satisfies ExperienceItem[],
  contact: {
    title: {
      en: "Let's make ideas legible.",
      zh: '让想法变得可读。',
    },
    body: {
      en: 'If you work on textile composites, impact mechanics, or multiscale modelling — or want to discuss a collaboration — write to me.',
      zh: '如果你研究纺织复合材料、冲击力学或多尺度建模，或想讨论合作，欢迎来信。',
    },
  },
} as const;
