import { notFound } from "next/navigation";
import { articles } from "../../content";
import { SiteFooter, SiteHeader } from "../../site-shell";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="longform">
        <header>
          <p className="section-index">{article.category} / {article.readingTime}</p>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <time>{article.date}</time>
        </header>
        <div className="article-body">
          <p className="lead">真正有质感的体验，很少靠一个醒目的功能完成。它更像是一连串细小而一致的选择：在正确的时候回应，在不需要的时候保持安静。</p>
          <h2>体验首先是一种判断</h2>
          <p>设计不是往页面里添加更多东西，而是判断什么值得留下。清晰的层级、可以预期的反馈、刚刚好的等待状态，这些不会成为宣传截图，却会在每一次使用中累积信任。</p>
          <blockquote>如果一个细节无法帮助理解、建立信任或推动任务，它就应该被重新审视。</blockquote>
          <h2>克制不等于没有表达</h2>
          <p>克制是一种更准确的表达。颜色只在需要强调时出现，动画只在状态变化时发生，文字只说用户此刻需要知道的事。页面因此更安静，但产品的观点会更清楚。</p>
          <h2>让细节形成系统</h2>
          <p>单个精致的按钮不能创造完整体验。真正重要的是规则是否一致：相同的行为获得相同反馈，相同的层级使用相同语言，错误与成功都能被清楚理解。</p>
          <hr />
          <p>这篇文章会随着实践继续更新。数字花园里的内容不必假装完成，它可以诚实地保留变化。</p>
        </div>
        <a className="back-link" href="/blog">← 返回全部文章</a>
      </article>
      <SiteFooter />
    </main>
  );
}
