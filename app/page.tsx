import Link from "next/link";

const projects = [
  {
    slug: "data-storytelling",
    index: "01",
    type: "Data visualization",
    title: "让复杂数据一眼可读",
    description: "一组关于信息层级、交互反馈与叙事节奏的图表实验。作品集正在生长中。",
    accent: "chart",
  },
  {
    slug: "motion-language",
    index: "02",
    type: "Motion study",
    title: "动效不只是装饰",
    description: "探索动画如何解释变化、建立空间关系，并为产品带来恰到好处的情绪。",
    accent: "motion",
  },
  {
    slug: "product-thinking",
    index: "03",
    type: "Product thinking",
    title: "从问题到体验",
    description: "记录设计选择背后的为什么：理解问题、做出取舍，再把想法变成可用的作品。",
    accent: "product",
  },
];

const notes = [
  ["界面不是容器，它本身就是观点。", "Jul 24"],
  ["如果一个动画不能帮助理解，就删掉。", "Jul 18"],
  ["做少一点，但把每一个细节想清楚。", "Jul 09"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Thinking Garden 首页">
          <span className="brand-mark" aria-hidden="true">TG</span>
          <span>Thinking Garden</span>
        </Link>
        <nav aria-label="主导航">
          <Link href="/projects">作品</Link>
          <Link href="/blog">文章</Link>
          <Link href="/notes">笔记</Link>
          <Link href="/inspiration">灵感</Link>
          <Link href="/about">关于</Link>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Hello, stranger. 欢迎来到我的数字花园。</p>
          <h1>用思考<br />连接世界<span className="hero-dot">。</span></h1>
          <p className="hero-intro">
            我是一名前端工程师，关心设计、产品与技术如何共同创造
            <em>有用，也有温度</em>的体验。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">开始探索 <span aria-hidden="true">↘</span></a>
            <span className="availability"><i aria-hidden="true" /> Open to interesting ideas</span>
          </div>
        </div>

        <div className="hero-art" aria-label="一个象征思考与连接的抽象花园">
          <div className="sun" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="thought-card thought-one">想法</div>
          <div className="thought-card thought-two">行动</div>
          <div className="thought-card thought-three">连接</div>
          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✺</div>
          <div className="ground">
            <span className="stem stem-one" />
            <span className="stem stem-two" />
            <span className="stem stem-three" />
          </div>
        </div>
        <a className="scroll-cue" href="#work" aria-label="向下浏览"><span>SCROLL TO EXPLORE</span><b aria-hidden="true">↓</b></a>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div><p className="section-index">01 / SELECTED WORK</p><h2>把思考，做成作品。</h2></div>
          <p>不只展示结果，也记录问题、取舍与复盘。<br />每个作品都是一次完整的思考过程。</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.index}>
              <div className={`project-visual ${project.accent}`}>
                <span className="project-number">{project.index}</span>
                <div className="visual-shape" aria-hidden="true"><i /><i /><i /><i /><i /></div>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link className="text-link" href={`/projects/${project.slug}`}>查看完整案例 <b aria-hidden="true">→</b></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section writing-section" id="writing">
        <div className="feature-story">
          <p className="section-index">02 / LATEST WRITING</p>
          <p className="story-meta">产品思考 · 6 min read</p>
          <h2>好的体验，往往发生在用户没有注意到的地方。</h2>
          <p className="story-summary">关于克制、反馈和那些看似微小，却决定产品质感的设计选择。这会是数字花园里的第一篇长文。</p>
          <Link className="outline-action" href="/blog/quiet-experiences">阅读全文 <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="story-poster" aria-hidden="true">
          <div className="poster-window"><span /><span /><span /></div>
          <p>TASTE</p><div className="poster-line" /><small>is how it feels</small>
        </div>
      </section>

      <section className="section notes-section" id="notes">
        <div className="notes-intro">
          <p className="section-index">03 / RECENT NOTES</p>
          <h2>正在发生的思考</h2>
          <p>不完整也没关系。这里是一张公开的工作台，记录还在生长的想法。</p>
        </div>
        <div className="notes-list">
          {notes.map(([text, date], index) => (
            <article key={text}><span>0{index + 1}</span><p>{text}</p><time>{date}</time></article>
          ))}
        </div>
        <Link className="section-more" href="/notes">查看全部笔记 <span aria-hidden="true">→</span></Link>
      </section>

      <section className="about-section" id="about">
        <div className="about-mark" aria-hidden="true">想</div>
        <div>
          <p className="section-index">04 / ABOUT</p>
          <h2>一个有点较真的创造者。</h2>
          <p>我喜欢把模糊的问题想清楚，再用设计与代码把它做出来。目前专注于数据可视化、动效与 AI 产品体验，也持续收藏那些让我眼前一亮的作品。</p>
          <Link href="/about">MORE ABOUT ME <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">TG</span><span>Thinking Garden</span></a>
        <p>一个会随时间生长的数字空间。</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
