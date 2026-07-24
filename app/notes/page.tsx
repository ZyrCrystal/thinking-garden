import { notes } from "../content";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export const metadata = {
  title: "笔记 · Thinking Garden",
  description: "一张公开的工作台，记录正在发生的思考。",
};

export default function NotesPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="03"
        eyebrow="Notes"
        title="允许想法保持未完成。"
        description="Notes 是公开的工作台：一句话、一个发现、一次踩坑，或者一个还没有答案的问题。真实比完整更重要。"
      />
      <section className="note-stream">
        {notes.map((note, index) => (
          <article key={note.date + note.text}>
            <span>0{index + 1}</span>
            <time>{note.date}</time>
            <p>{note.text}</p>
            <b>{note.tag}</b>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
