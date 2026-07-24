export const projects = [
  {
    slug: "data-storytelling",
    number: "01",
    category: "Data visualization",
    year: "2026",
    title: "让复杂数据一眼可读",
    summary: "用清晰的信息层级与渐进式交互，把密集指标变成一条可以被理解的故事。",
    challenge: "业务看板承载了大量指标，但用户很难判断什么重要、变化发生在哪里，以及下一步该做什么。",
    approach: "先建立“概览—异常—细节”的阅读顺序，再通过颜色、位置和动效保持变化的上下文，让每一次交互都回答一个问题。",
    result: "从一屏堆满图表，收敛为三个决策层级；让数据从展示结果，变成支持判断的产品语言。",
    tags: ["ECharts", "Information Design", "Interaction"],
    accent: "chart",
  },
  {
    slug: "motion-language",
    number: "02",
    category: "Motion study",
    year: "2026",
    title: "动效不只是装饰",
    summary: "一套围绕状态变化、空间关系与情绪反馈建立的界面动效语言。",
    challenge: "动效很容易变成视觉噪音。真正的问题不是“要不要动”，而是用户是否理解刚刚发生了什么。",
    approach: "把动效分成解释、确认、引导三类，为持续时间、缓动和位移建立明确规则，并优先支持减少动态效果。",
    result: "动画不再是一组孤立特效，而成为帮助用户建立产品心智模型的连续语言。",
    tags: ["Motion", "React", "Prototyping"],
    accent: "motion",
  },
  {
    slug: "product-thinking",
    number: "03",
    category: "Product thinking",
    year: "2025",
    title: "从问题到体验",
    summary: "记录一个模糊需求如何经过理解、取舍、原型与验证，最终成为可用的产品体验。",
    challenge: "需求最初只有一句“让信息更好找”，但不同角色对“好找”的理解完全不同。",
    approach: "从任务而不是页面出发，梳理角色、频率与失败成本；用低成本原型验证信息架构后再进入视觉设计。",
    result: "减少了入口数量，却缩短了核心路径。更重要的是，团队拥有了一套共同讨论取舍的依据。",
    tags: ["Product Design", "UX", "Frontend"],
    accent: "product",
  },
];

export const articles = [
  {
    slug: "quiet-experiences",
    category: "产品思考",
    date: "2026.07.18",
    readingTime: "6 min",
    title: "好的体验，往往发生在用户没有注意到的地方",
    summary: "关于克制、反馈和那些看似微小，却决定产品质感的设计选择。",
  },
  {
    slug: "charts-as-language",
    category: "数据可视化",
    date: "2026.06.27",
    readingTime: "8 min",
    title: "把图表当成一种语言，而不是组件",
    summary: "一张图表如何通过层级、节奏与上下文，真正帮助人做出判断。",
  },
  {
    slug: "ai-interface",
    category: "AI × 设计",
    date: "2026.05.12",
    readingTime: "5 min",
    title: "AI 产品需要新的界面礼仪",
    summary: "当结果不再确定，界面应该如何表达信心、等待、修正与控制权。",
  },
];

export const notes = [
  { date: "2026.07.24", text: "界面不是容器，它本身就是观点。", tag: "Design" },
  { date: "2026.07.18", text: "如果一个动画不能帮助理解，就删掉。", tag: "Motion" },
  { date: "2026.07.09", text: "做少一点，但把每一个细节想清楚。", tag: "Craft" },
  { date: "2026.06.21", text: "先问用户需要做出什么判断，再决定应该画哪一种图。", tag: "Data" },
  { date: "2026.06.02", text: "个人网站不是作品的仓库，而是你如何看待世界的编辑结果。", tag: "Thinking" },
  { date: "2026.05.16", text: "不完整的想法也值得被记录，因为变化本身就是内容。", tag: "Garden" },
];

export const inspirations = [
  { type: "Website", title: "克制的信息密度", note: "用排版而不是装饰建立层级。", color: "green" },
  { type: "Interaction", title: "有理由的动效", note: "每一次移动都解释状态从哪里来。", color: "coral" },
  { type: "Book", title: "设计中的设计", note: "日常不是设计的背景，而是设计本身。", color: "cream" },
  { type: "Color", title: "自然的草绿色", note: "理性、生命力，以及一点不严肃。", color: "lime" },
  { type: "Typography", title: "中文的呼吸感", note: "字距、行距和留白共同决定阅读节奏。", color: "ink" },
  { type: "Idea", title: "数字花园", note: "让内容持续生长，而不是等待完成。", color: "mint" },
];
