import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../content";
import { SiteFooter, SiteHeader } from "../../site-shell";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <SiteHeader />
      <article className="case-study">
        <header className="case-hero">
          <p className="section-index">{project.number} / {project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </header>
        <div className={`case-canvas ${project.accent}`}>
          <span>{project.category}</span>
          <strong>{project.number}</strong>
          <div className="case-orbit" />
        </div>
        <div className="case-sections">
          <section><span>01</span><div><h2>背景与问题</h2><p>{project.challenge}</p></div></section>
          <section><span>02</span><div><h2>思考与方法</h2><p>{project.approach}</p></div></section>
          <section><span>03</span><div><h2>结果与复盘</h2><p>{project.result}</p></div></section>
        </div>
        <div className="next-case">
          <p>继续探索</p>
          <Link href="/projects">返回全部作品 <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
