import { inspirations } from "../content";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export const metadata = {
  title: "灵感 · Thinking Garden",
  description: "塑造审美的作品、交互、书与想法。",
};

export default function InspirationPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="04"
        eyebrow="Inspiration"
        title="收藏不是囤积，而是表达观点。"
        description="这里保存塑造我审美的作品、交互、书与想法。每一条收藏都回答同一个问题：为什么它值得被记住？"
      />
      <section className="inspiration-grid">
        {inspirations.map((item, index) => (
          <article className={`inspiration-card ${item.color}`} key={item.title}>
            <span>0{index + 1} / {item.type}</span>
            <div className="inspiration-shape" aria-hidden="true" />
            <h2>{item.title}</h2>
            <p>{item.note}</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
