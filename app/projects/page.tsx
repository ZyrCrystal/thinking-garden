import Link from "next/link";
import { projects } from "../content";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export const metadata = {
  title: "作品 · Thinking Garden",
  description: "数据可视化、动效与产品设计案例。",
};

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="01"
        eyebrow="Projects"
        title="作品不是结果，是思考留下的轨迹。"
        description="这里展示的不只是最后一张漂亮截图，也包括问题如何被理解、取舍如何发生，以及下一次我会怎样做得更好。"
      />
      <section className="archive-grid">
        {projects.map((project) => (
          <Link className="archive-card" href={`/projects/${project.slug}`} key={project.slug}>
            <div className={`project-visual ${project.accent}`}>
              <span className="project-number">{project.number}</span>
              <div className="visual-shape" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <span className="project-type">{project.category}</span>
            </div>
            <div className="archive-copy">
              <p>{project.year} · {project.category}</p>
              <h2>{project.title}</h2>
              <span>{project.summary}</span>
              <b>查看案例 →</b>
            </div>
          </Link>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
