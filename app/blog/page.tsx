import Link from "next/link";
import { articles } from "../content";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export const metadata = {
  title: "文章 · Thinking Garden",
  description: "关于前端、设计、数据可视化与产品的长期文章。",
};

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="02"
        eyebrow="Blog"
        title="把一个问题，认真地想完整。"
        description="Blog 是经过整理与沉淀的长期内容。每篇文章只回答一个清晰的问题，希望几年以后依然值得阅读。"
      />
      <section className="article-archive">
        {articles.map((article, index) => (
          <Link className="article-row" href={`/blog/${article.slug}`} key={article.slug}>
            <span>0{index + 1}</span>
            <div><p>{article.category} · {article.readingTime}</p><h2>{article.title}</h2><em>{article.summary}</em></div>
            <time>{article.date}</time>
          </Link>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
