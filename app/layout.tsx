import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seobaeksol.github.io"),
  title: "김수영 | Software Engineer",
  description:
    "차량·장비 통신, 보안 시험 자동화, Windows 도구와 저수준 시스템을 연결하는 소프트웨어 엔지니어 김수영의 포트폴리오입니다.",
  authors: [{ name: "김수영", url: "https://github.com/seobaeksol" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "김수영 | Systems, Tools & Automation",
    description: "저수준 통신부터 안전한 시험 실행과 운영 도구까지, 끝까지 작동하는 시스템을 만듭니다.",
    images: [{ url: "/og.png", width: 1792, height: 941, alt: "SUYOUNG.DEV — Kim Suyoung, Systems · Tools · Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "김수영 | Systems, Tools & Automation",
    description: "저수준 통신부터 안전한 시험 실행과 운영 도구까지, 끝까지 작동하는 시스템을 만듭니다.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
