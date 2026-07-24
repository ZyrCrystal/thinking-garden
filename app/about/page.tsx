import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export const metadata = {
  title: "关于 · Thinking Garden",
  description: "关于我相信什么、正在探索什么，以及想创造什么。",
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="05"
        eyebrow="About"
        title="有审美，也能把想法做出来。"
        description="我是一名前端工程师，也把自己看作一个持续学习的创造者。比起罗列会什么，我更愿意谈谈相信什么。"
      />
      <section className="about-story">
        <div className="portrait-mark" aria-hidden="true"><span>想</span><i>做</i></div>
        <div className="about-prose">
          <p className="lead">我喜欢把模糊的问题想清楚，再用设计和代码把它做出来。</p>
          <p>工作中，我长期与数据、图表和复杂业务打交道。我关心的不只是页面是否正确，更关心信息是否被理解、交互是否建立信任，以及一个产品有没有自己的气质。</p>
          <p>工作之外，我在持续探索 AI 产品、动效、影像和写作。这个网站就是这些兴趣交汇的地方：作品可以被复盘，想法可以被修正，审美也可以留下轨迹。</p>
          <div className="beliefs">
            <div><span>01</span><h3>内容优先</h3><p>页面服务内容，而不是让内容迁就形式。</p></div>
            <div><span>02</span><h3>克制表达</h3><p>少一点、准一点，让细节自己产生说服力。</p></div>
            <div><span>03</span><h3>持续生长</h3><p>允许不完整，也愿意不断推翻昨天的答案。</p></div>
          </div>
          <div className="currently">
            <p className="section-index">Currently exploring</p>
            <span>Data Visualization</span><span>AI Product</span><span>Motion</span><span>Writing</span>
          </div>
          <a className="primary-action" href="https://github.com/ZyrCrystal" rel="noreferrer" target="_blank">在 GitHub 找到我 <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
