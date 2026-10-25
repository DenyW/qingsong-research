import type { Lang, Localized } from './site';

export type InsightBlock =
  | { type: 'p'; text: Localized }
  | { type: 'h2'; text: Localized }
  | { type: 'quote'; text: Localized }
  | { type: 'list'; items: Localized<string[]> };

export interface Insight {
  slug: string;
  date: string;
  readingTime: number;
  tags: Localized<string[]>;
  title: Localized;
  excerpt: Localized;
  body: InsightBlock[];
}

export const insights: Insight[] = [
  {
    slug: 'a-research-website-is-a-living-document',
    date: '2026-10-25',
    readingTime: 3,
    tags: {
      en: ['Open research', 'Writing', 'Web'],
      zh: ['开放研究', '写作', '网络'],
    },
    title: {
      en: 'A research website should be a living document',
      zh: '科研网站应当是一份活的文档',
    },
    excerpt: {
      en: 'Most academic homepages are digital business cards. I want this one to work more like a public notebook — dated, versioned, and open to correction.',
      zh: '大多数学术主页像一张数字名片。我希望这个网站更像一份公开的笔记本：有日期、有版本，也允许被修正。',
    },
    body: [
      {
        type: 'p',
        text: {
          en: 'The first version of an academic website usually appears at a particular moment: a job market, a conference, a grant application. It is designed to look finished. Then it stays finished for years.',
          zh: '学术网站的第一个版本，通常出现在某个特定时刻：求职、会议、基金申请。它被设计成“已完成”的样子，然后在接下来几年里一直保持那个样子。',
        },
      },
      {
        type: 'p',
        text: {
          en: 'I understand the impulse. A personal site is a claim about who you are, and claims are easier to make when they are polished. But research is not polished. It is a sequence of partial answers, abandoned methods, and corrections.',
          zh: '我理解这种冲动。个人网站是关于“我是谁”的声明，而声明越精致，越容易被接受。但研究本身并不精致。它是一连串不完整的答案、被放弃的方法和修正。',
        },
      },
      {
        type: 'h2',
        text: { en: 'Three commitments', zh: '三个承诺' },
      },
      {
        type: 'p',
        text: {
          en: 'This site is an attempt to work in the open without turning every thought into a performance. Three commitments follow.',
          zh: '这个网站尝试在开放中工作，但不把每一个念头都变成表演。为此有三个承诺。',
        },
      },
      {
        type: 'list',
        items: {
          en: [
            'Date the thinking. Notes carry a date because ideas change.',
            'Show the tools. Methods and code are part of the argument, not an appendix.',
            'Keep a changelog. The site is versioned; corrections are visible.',
          ],
          zh: [
            '给思考标上日期。笔记有日期，因为想法会变。',
            '把工具摆出来。方法与代码是论证的一部分，不是附录。',
            '保留变更记录。网站有版本，修正可以被看见。',
          ],
        },
      },
      {
        type: 'p',
        text: {
          en: 'None of this replaces peer review. A website is not a journal. But it can make the space between publications more legible — the questions, the dead ends, the small tools that make a result possible.',
          zh: '这些都不能替代同行评审。网站不是期刊。但它可以让论文之间的空间变得更可读——那些问题、死胡同，以及让结果成为可能的小工具。',
        },
      },
      {
        type: 'quote',
        text: {
          en: 'The point is not to publish faster. The point is to leave a better trail.',
          zh: '重点不是更快地发表，而是留下更清楚的轨迹。',
        },
      },
      {
        type: 'p',
        text: {
          en: 'This first version is deliberately small. The source is on GitHub. If something is wrong, the most useful response is an issue or an email, not a silent correction in a private file.',
          zh: '第一个版本刻意做得很小。源码在 GitHub 上。如果有错误，最有用的回应是提交 issue 或写信，而不是在私人文件里默默改掉。',
        },
      },
    ],
  },
  {
    slug: 'bilingual-is-a-design-constraint',
    date: '2026-10-12',
    readingTime: 4,
    tags: {
      en: ['Bilingual', 'Design', 'Communication'],
      zh: ['双语', '设计', '沟通'],
    },
    title: {
      en: 'Bilingual is a design constraint, not a translation task',
      zh: '双语是一种设计约束，而非翻译任务',
    },
    excerpt: {
      en: 'English is the default here, but Chinese is not an afterthought. Designing for two reading cultures changes the structure, not just the words.',
      zh: '这里默认使用英文，但中文不是事后补上的附件。为两种阅读文化做设计，改变的是结构，而不只是字词。',
    },
    body: [
      {
        type: 'p',
        text: {
          en: 'A language toggle is easy to add. A bilingual website is harder. The moment two languages share a layout, assumptions about sentence length, hierarchy, and tone become visible.',
          zh: '加一个语言切换按钮很容易。做一个真正的双语网站要难得多。当两种语言共用一套版式，关于句子长度、层级和语气的假设就会暴露出来。',
        },
      },
      {
        type: 'p',
        text: {
          en: 'English and Chinese do not distribute meaning in the same way. A headline that feels crisp in English can feel breathless in Chinese. A parenthetical aside that works in one language can stop the sentence in the other.',
          zh: '英文和中文分配意义的方式并不相同。一个在英文里干脆利落的标题，直译成中文可能显得气喘吁吁；一个在英文里自然的括号补充，换到中文里可能让句子停住。',
        },
      },
      {
        type: 'h2',
        text: { en: 'Default, not dominance', zh: '默认，不等于主导' },
      },
      {
        type: 'p',
        text: {
          en: 'English is the default because much of the relevant literature and many potential readers work in English. Default is a routing decision, not a claim about importance. The Chinese version is written as a Chinese text, not a mirror of the English one.',
          zh: '默认英文，是因为相关文献和潜在读者中有很多使用英文。默认是一种路由选择，不是关于重要性的判断。中文版是作为中文文本书写的，不是英文版的镜像。',
        },
      },
      {
        type: 'p',
        text: {
          en: 'In practice, that means rewriting. Some paragraphs are shorter. Some technical terms stay in English because the English term is the working term. Some explanations are longer because the context is different.',
          zh: '在实践中，这意味着重写。有些段落更短；有些术语保留英文，因为英文就是工作语言；有些解释更长，因为语境不同。',
        },
      },
      {
        type: 'h2',
        text: { en: 'What the toggle really toggles', zh: '切换按钮真正切换的是什么' },
      },
      {
        type: 'p',
        text: {
          en: 'The toggle changes more than words. It changes rhythm, examples, and sometimes the order of an argument. It also changes who the page is addressing. A bilingual site should make both audiences feel addressed, not one audience feel translated.',
          zh: '它切换的不只是词。它改变节奏、例子，有时也改变论证的顺序。它还改变页面在对谁说话。双语网站应该让两种读者都感到被直接称呼，而不是让其中一种读者读到的像是译文。',
        },
      },
      {
        type: 'quote',
        text: {
          en: 'Translation asks: how do I say this in the other language? Bilingual design asks: what does this reader need here?',
          zh: '翻译问的是：这句话用另一种语言怎么说？双语设计问的是：这里的读者需要什么？',
        },
      },
      {
        type: 'p',
        text: {
          en: 'This site will keep changing as the two versions diverge. That is not a failure of consistency. It is the point.',
          zh: '随着两个版本逐渐分化，这个网站会继续变化。这不是一致性失败，而正是重点。',
        },
      },
    ],
  },
  {
    slug: 'small-tools-visible-methods',
    date: '2026-09-28',
    readingTime: 3,
    tags: {
      en: ['Methods', 'Open source', 'Tools'],
      zh: ['方法', '开源', '工具'],
    },
    title: {
      en: 'Small tools, visible methods',
      zh: '小工具，可见的方法',
    },
    excerpt: {
      en: 'Research infrastructure is often invisible. A few small, documented tools can make a method easier to inspect — and easier to trust.',
      zh: '研究基础设施常常是隐形的。几个被认真记录的小工具，可以让方法更容易被检查，也更容易被信任。',
    },
    body: [
      {
        type: 'p',
        text: {
          en: 'A method section describes what happened. It rarely includes the small scripts, scheduled jobs, and data-cleaning decisions that made it happen. Those choices are part of the method, even when they never reach the paper.',
          zh: '方法部分会描述发生了什么，却很少包含那些让事情发生的小脚本、定时任务和数据清洗决定。这些选择是方法的一部分，即使它们从未进入论文。',
        },
      },
      {
        type: 'p',
        text: {
          en: 'I like small tools for this reason. A monitor that sends one email when a threshold is crossed is not a research finding. But it is a legible piece of infrastructure: the rule is explicit, the source is linked, and the failure modes are visible.',
          zh: '我喜欢小工具，原因就在这里。一个在阈值被触发时只发一封邮件的监测器，不是研究发现。但它是一块可读的基础设施：规则明确、来源可追、失败模式可见。',
        },
      },
      {
        type: 'h2',
        text: { en: 'Inspectable by default', zh: '默认可检查' },
      },
      {
        type: 'p',
        text: {
          en: 'The projects on this site are built around a simple preference: make the smallest thing that answers the question, then document how it works. A scheduled workflow is easier to audit than a dashboard nobody remembers to open.',
          zh: '这个网站上的项目遵循一个简单的偏好：做能回答问题的最小东西，然后说明它如何工作。一个定时工作流，比一个没人记得打开的仪表盘更容易审计。',
        },
      },
      {
        type: 'p',
        text: {
          en: 'This is also why the site itself is open source. The design, the bilingual content model, and the deployment are not separate from the argument. They are a demonstration of the kind of infrastructure I want research to have: modest, readable, and easy to fork.',
          zh: '这也是网站本身开源的原因。设计、双语内容模型和部署方式，不是论证之外的东西。它们展示了我希望研究拥有怎样的基础设施：克制、可读、容易复制。',
        },
      },
      {
        type: 'quote',
        text: {
          en: 'A tool becomes method when someone else can inspect it.',
          zh: '当一个工具能被别人检查时，它就成为了方法。',
        },
      },
      {
        type: 'p',
        text: {
          en: 'Not every tool needs to be public. Some data cannot be. But the default can still be: show the rule, show the source, show the uncertainty. The rest is detail.',
          zh: '不是每个工具都需要公开，有些数据也不能公开。但默认仍然可以是：展示规则、展示来源、展示不确定性。其余都是细节。',
        },
      },
    ],
  },
];

export const insightsByDate = [...insights].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function formatInsightDate(date: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00Z`));
}
