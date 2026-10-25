export type Lang = 'en' | 'zh';

export type Localized<T = string> = Record<Lang, T>;

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  kind: 'orcid' | 'linkedin' | 'researchgate' | 'github' | 'email';
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

export interface FundingItem {
  period: string;
  title: string;
  funder: string;
  amount: string;
  role: string;
  reference?: string;
}

export interface PatentItem {
  title: string;
  number: string;
  application: string;
  filed: string;
  status: 'Granted' | 'Pending' | 'Expired';
  statusNote: string;
  assignee: string;
  href: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
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
  url: 'https://qingsong-research.drwell86.workers.dev',
  email: 'wqs@zstu.edu.cn',
  location,
  role: {
    en: 'Lecturer (Assistant Professor) · Textile composites & impact mechanics',
    zh: '讲师（助理教授）· 纺织复合材料与冲击力学',
  },
  tagline: {
    en: 'Research, in the open.',
    zh: '研究，在开放中发生。',
  },
  intro: {
    en: "I'm Qingsong Wei, a Lecturer (Assistant Professor) working on how three-dimensional woven fabrics and textile composites respond to ballistic impact. My work combines meso-scale finite element modelling, gas-gun experiments, and architecture-level design. This site collects the work as it becomes public.",
    zh: '我是 Qingsong Wei，讲师（助理教授），研究三维机织物与纺织复合材料在弹道冲击下的响应。我的工作结合细观有限元建模、气炮实验与织物结构层面的设计。这个网站收集那些正在公开的工作。',
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
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/qingsong-wei-12a410237/',
      handle: 'in/qingsong-wei-12a410237',
      kind: 'linkedin',
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
      en: 'My work follows one question through several scales: how does fabric architecture shape the way a textile composite absorbs and distributes impact energy? I combine meso-scale finite element modelling (ABAQUS/LS-DYNA), gas-gun experiments, digital image correlation, and physics-informed surrogates to connect yarn-level damage with structural response.',
      zh: '我的工作围绕一个问题在多个尺度上展开：织物结构如何塑造纺织复合材料吸收与分散冲击能量的方式？我结合细观有限元建模（ABAQUS/LS-DYNA）、气炮实验、数字图像相关与物理信息代理模型，把纱线尺度损伤与结构响应连接起来。',
    },
    directions: [
      {
        index: '01',
        title: {
          en: 'Ballistic impact of 3D woven fabrics',
          zh: '三维机织物的弹道冲击',
        },
        description: {
          en: 'Penetration, deformation, and energy absorption in three-dimensional woven fabrics — how projectile geometry, clamping, impact angle, and strain rate change the failure mechanism. Experimental work uses gas-gun impact testing and digital image correlation.',
          zh: '三维机织物中的侵彻、变形与能量吸收——弹体几何、夹持方式、冲击角度与应变率如何改变失效机制。实验工作采用气炮冲击测试与数字图像相关。',
        },
        tags: {
          en: ['Ballistic penetration', '3D fabric', 'DIC'],
          zh: ['弹道侵彻', '三维织物', '数字图像相关'],
        },
      },
      {
        index: '02',
        title: {
          en: 'Multi-scale modelling of textile composites',
          zh: '纺织复合材料的多尺度建模',
        },
        description: {
          en: 'Meso-scale finite element models that connect fibre bundles, yarns, fabric architecture, and structural response, with high-strain-rate behaviour and progressive damage made explicit. Recent work extends these models with physics-informed neural networks and Gaussian-process surrogates.',
          zh: '连接纤维束、纱线、织物结构与整体响应的细观有限元模型，并显式处理高应变率行为与渐进损伤。近期工作将这些模型与物理信息神经网络、高斯过程代理模型结合。',
        },
        tags: {
          en: ['ABAQUS', 'LS-DYNA', 'Multi-scale', 'PINN'],
          zh: ['ABAQUS', 'LS-DYNA', '多尺度', '物理信息神经网络'],
        },
      },
      {
        index: '03',
        title: {
          en: 'Architecture–performance design',
          zh: '结构与性能设计',
        },
        description: {
          en: 'Comparative studies of angle-interlock, orthogonal, layer-to-layer, and hybrid architectures — using fabric structure as a design variable for protective composites in Kevlar, CFRP, and GFRP systems.',
          zh: '对角联锁、正交、层间与混杂结构进行比较研究——把织物结构作为 Kevlar、CFRP 与 GFRP 防护复合材料的设计变量。',
        },
        tags: {
          en: ['Fabric architecture', 'Composites', 'Energy absorption'],
          zh: ['织物结构', '复合材料', '能量吸收'],
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
        en: 'This site: an open-source research website built with Astro and deployed as static assets on Cloudflare Workers.',
        zh: '这个网站本身：用 Astro 构建、以静态资源部署在 Cloudflare Workers 上的开源科研网站。',
      },
      tags: ['Astro', 'Cloudflare', 'Static site'],
      href: 'https://github.com/DenyW/qingsong-research',
      status: { en: 'Open source', zh: '开源' },
    },
  ] satisfies Project[],
  experience: [
    {
      period: { en: '2021 — Present', zh: '2021 — 至今' },
      role: { en: 'Lecturer (Assistant Professor)', zh: '讲师（助理教授）' },
      organization: {
        en: 'Zhejiang Sci-Tech University · School of Textile Science and Engineering',
        zh: '浙江理工大学 · 纺织科学与工程学院',
      },
      summary: {
        en: 'Lecturer in the School of Textile Science and Engineering, Hangzhou. Research on 3D woven textile composites, ballistic impact, and meso-scale finite element modelling.',
        zh: '任教于纺织科学与工程学院，杭州。研究三维机织纺织复合材料、弹道冲击与细观有限元建模。',
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
      period: { en: '2024.05 — 2026.05', zh: '2024.05 — 2026.05' },
      role: { en: 'Postdoctoral Researcher', zh: '博士后研究员' },
      organization: {
        en: 'Fujian Normal University · School of Chemistry and Materials Science',
        zh: '福建师范大学 · 化学与材料科学学院',
      },
      summary: {
        en: 'Postdoctoral research in the School of Chemistry and Materials Science, Fuzhou.',
        zh: '在化学与材料科学学院从事博士后研究，福州。',
      },
      kind: { en: 'Research', zh: '研究' },
    },
    {
      period: { en: '2016 — 2021', zh: '2016 — 2021' },
      role: { en: 'PhD in Textile Science and Engineering', zh: '纺织科学与工程博士' },
      organization: {
        en: 'Donghua University · College of Textiles',
        zh: '东华大学 · 纺织学院',
      },
      summary: {
        en: 'Doctoral research on the ballistic impact mechanics of 3D woven textile composites. Supervisors: Prof. Gu Bohong and Prof. Sun Baozhong.',
        zh: '研究三维机织纺织复合材料的弹道冲击力学。导师：顾伯洪教授、孙宝忠教授。',
      },
      kind: { en: 'Education', zh: '教育' },
    },
    {
      period: { en: '2010 — 2014', zh: '2010 — 2014' },
      role: { en: 'B.Eng. in Textile Engineering', zh: '纺织工程学士' },
      organization: {
        en: 'Nantong University · Jiangsu',
        zh: '南通大学 · 江苏',
      },
      summary: {
        en: 'Undergraduate training in textile engineering.',
        zh: '纺织工程本科训练。',
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
    {
      period: { en: 'Present', zh: '至今' },
      role: { en: 'Young Editorial Board Member', zh: '青年编委' },
      organization: { en: 'Cotton Textile Technology', zh: '棉纺织技术' },
      summary: {
        en: 'Young editorial board member for the journal Cotton Textile Technology.',
        zh: '担任《棉纺织技术》青年编委。',
      },
      kind: { en: 'Service', zh: '服务' },
    },
    {
      period: { en: 'Present', zh: '至今' },
      role: { en: 'Committee Member', zh: '委员' },
      organization: {
        en: 'Textile-Structured Composites Committee · Chinese Society for Composite Materials',
        zh: '纺织结构复合材料专业委员会 · 中国复合材料学会',
      },
      summary: {
        en: 'Member of the Textile-Structured Composites Committee.',
        zh: '中国复合材料学会纺织结构复合材料专业委员会委员。',
      },
      kind: { en: 'Service', zh: '服务' },
    },
  ] satisfies ExperienceItem[],
  funding: [
    {
      period: '2025 — 2027',
      title: 'Adaptive Protection and Impact Mechanism of Functionally Zoned 3D Fabrics',
      funder: 'Zhejiang Department of Education',
      amount: 'RMB 20,000',
      role: 'PI',
    },
    {
      period: '2023 — 2025',
      title: 'Ballistic Mechanical Behavior and Structural Optimisation of 3D Angle Interlock Fabrics',
      funder: 'Zhejiang Natural Science Foundation (ZJNSF)',
      amount: 'RMB 100,000',
      role: 'PI',
      reference: 'LQ23A020008',
    },
    {
      period: '2021 — 2024',
      title: 'Ballistic Penetration Mechanism and Mesoscopic Damage of 3D Angle Interlock Fabrics',
      funder: 'Zhejiang Sci-Tech University',
      amount: 'RMB 120,000',
      role: 'PI',
      reference: '22202007-Y',
    },
    {
      period: '2020 — 2022',
      title: 'Temperature Aging and Ballistic Impact Coupling Effects on Non-woven Fabrics',
      funder: 'Donghua University',
      amount: 'RMB 20,000',
      role: 'PI',
      reference: 'CUSF-DH-D-2021013',
    },
    {
      period: '2024 — 2026',
      title: 'Self-healing Flexible Perovskite Composite Nanofiber Membranes',
      funder: 'Zhejiang Natural Science Foundation (ZJNSF)',
      amount: 'RMB 100,000',
      role: 'Co-Investigator',
      reference: 'LY24E030004',
    },
    {
      period: '2018 — 2021',
      title: 'Multi-scale Thermal Oxidative Aging of Braided Composites',
      funder: 'National Natural Science Foundation of China (NSFC)',
      amount: 'RMB 500,000',
      role: 'Co-Investigator',
      reference: '51875099',
    },
  ] satisfies FundingItem[],
  patents: [
    {
      title:
        'An experimental testing method and apparatus for determining the impact resistance of fabrics',
      number: 'CN120142045B',
      application: 'CN202510298810.8',
      filed: '13 Mar 2025',
      status: 'Granted',
      statusNote: 'Published 13 Jun 2025 · granted 18 Nov 2025 · active',
      assignee: 'Zhejiang Sci-Tech University',
      href: 'https://patents.google.com/patent/CN120142045B/en',
    },
    {
      title: 'Production process of seamless one-piece bulletproof helmet',
      number: 'CN119753913A',
      application: 'CN202510052858.0',
      filed: '14 Jan 2025',
      status: 'Pending',
      statusNote: 'Published 4 Apr 2025 · rejection issued 26 Jun 2026',
      assignee: 'Zhejiang Sci-Tech University',
      href: 'https://patents.google.com/patent/CN119753913A/en',
    },
    {
      title: 'A three-way woven bulletproof structure',
      number: 'CN119374415A',
      application: 'CN202411852079.0',
      filed: '16 Dec 2024',
      status: 'Pending',
      statusNote: 'Published 28 Jan 2025 · under examination',
      assignee: 'Zhejiang Sci-Tech University',
      href: 'https://patents.google.com/patent/CN119374415A/en',
    },
    {
      title: 'Surrounding type bulletproof and stab-resistant schoolbag',
      number: 'CN210008649U',
      application: 'CN201920255550.6U',
      filed: '28 Feb 2019',
      status: 'Expired',
      statusNote: 'Granted 4 Feb 2020 · expired 28 Feb 2023 (annual fee)',
      assignee: 'Donghua University',
      href: 'https://patents.google.com/patent/CN210008649U/en',
    },
  ] satisfies PatentItem[],
  skills: [
    {
      label: 'FEA & simulation',
      items: ['ABAQUS (VUMAT/VUSDFLD)', 'LS-DYNA', 'ANSYS', 'TexGen', 'WiseTex'],
    },
    {
      label: 'Programming',
      items: ['Python', 'MATLAB', 'Fortran user subroutines'],
    },
    {
      label: 'Experimental',
      items: ['Gas-gun ballistic testing (50–900 m/s)', 'Drop-weight impact', 'DIC', 'SEM'],
    },
    {
      label: 'Machine learning',
      items: [
        'Physics-informed neural networks',
        'Surrogate modelling',
        'Gaussian process regression',
      ],
    },
  ] satisfies SkillGroup[],
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
