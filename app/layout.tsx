import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seobaeksol.github.io"),
  title: "김수영 | Software Engineer",
  description:
    "펌웨어, 애플리케이션, 웹과 시스템의 경계를 넘나들며 문제에 필요한 기술을 하나의 해법으로 연결하는 소프트웨어 엔지니어 김수영의 포트폴리오입니다.",
  authors: [{ name: "김수영", url: "https://github.com/seobaeksol" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "김수영 | 기술보다 문제에서 출발합니다",
    description: "펌웨어, 애플리케이션, 웹과 시스템의 경계를 넘나들며 문제에 필요한 기술을 하나의 해법으로 연결합니다.",
    images: [{ url: "/og-problem-first.png", width: 1731, height: 909, alt: "SUYOUNG.DEV — Problem First. Firmware · Application · Web · Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "김수영 | 기술보다 문제에서 출발합니다",
    description: "펌웨어, 애플리케이션, 웹과 시스템의 경계를 넘나들며 문제에 필요한 기술을 하나의 해법으로 연결합니다.",
    images: ["/og-problem-first.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
