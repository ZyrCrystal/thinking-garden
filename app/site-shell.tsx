const navigation = [
  ["/projects", "作品"],
  ["/blog", "文章"],
  ["/notes", "笔记"],
  ["/inspiration", "灵感"],
  ["/about", "关于"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header inner-header">
      <a className="brand" href="/" aria-label="Thinking Garden 首页">
        <span className="brand-mark" aria-hidden="true">TG</span>
        <span>Thinking Garden</span>
      </a>
      <nav aria-label="主导航">
        {navigation.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="brand" href="/">
        <span className="brand-mark" aria-hidden="true">TG</span>
        <span>Thinking Garden</span>
      </a>
      <p>一个会随时间生长的数字空间。</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}

export function PageIntro({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <p className="section-index">{index} / {eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
