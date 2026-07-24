import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thinking Garden · 用思考连接世界",
  description: "一个记录作品、思考与成长的个人数字花园。关于前端、设计、产品与创造。",
  metadataBase: new URL("https://thinking-garden.example"),
  openGraph: {
    title: "用思考连接世界。",
    description: "作品、思考与成长，一个持续生长的数字空间。",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "用思考连接世界。",
    description: "作品、思考与成长，一个持续生长的数字空间。",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
