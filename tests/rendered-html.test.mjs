import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete Korean portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /<title>김수영 \| Software Engineer<\/title>/i);
  assert.match(html, /PLAYER PROFILE/);
  assert.match(html, /PLAYER 01 · READY FOR NEW QUESTS/);
  assert.match(html, /기술보다 문제에서/);
  assert.match(html, /펌웨어, 애플리케이션, 웹과 시스템의 경계를 넘나들며/);
  assert.match(html, /FIRMWARE → PRODUCT/);
  assert.match(html, /OPEN TO NEW QUESTS/);
  assert.match(html, /WORK EXPERIENCE/);
  assert.match(html, /NIMBUS/);
  assert.match(html, /SELECTED PROJECTS/);
  assert.match(html, /SELECT A QUEST/);
  assert.match(html, /PIXEL LAB/);
  assert.match(html, /NEW QUESTS WELCOME/);
  assert.match(html, /href="#experience"[^>]*><span[^>]*>▶<\/span> EXPLORE MY WORK/);
  assert.match(html, /href="#contact"[^>]*>CONTACT ME ↗/);

  const projectChoices = html.match(/<input[^>]*class="project-choice"[^>]*>/g) ?? [];
  const projectDetails = html.match(/class="project-detail"/g) ?? [];
  const projectModalCloses = html.match(/class="project-modal-close pixel"/g) ?? [];
  const labCards = html.match(/class="lab-card"/g) ?? [];
  assert.equal(projectChoices.length, 10);
  assert.equal(projectDetails.length, 10);
  assert.equal(projectModalCloses.length, 10);
  assert.equal(labCards.length, 6);
  projectChoices.forEach((choice) => assert.doesNotMatch(choice, /\bchecked\b/i));
  assert.match(html, /class="project-dismiss-choice"[^>]*id="quest-dismiss"/);
  assert.match(html, /class="project-modal-backdrop"[^>]*for="quest-dismiss"/);
  assert.match(html, /KRX-RS/);
  assert.match(html, /AHOYKEYBOARD/);
  assert.match(html, /DISTRIBUTED NEWS ANALYTICS/);
  assert.match(html, /SMART ATTENDANCE/);
  assert.match(html, /펌웨어·운영 도구·현장 배포를 잇는 RP2040 통합 시스템/);
  assert.match(html, /서버·단말기·앱을 연결한 자동 출결 프로토타입/);
  assert.match(html, /HADOOP ARCHIVE/);
  assert.match(html, /ALEXA ARCHIVE/);
  assert.match(html, /CRAWLER ARCHIVE/);
  assert.match(html, /Repo Tutor/);
  assert.match(html, /JC4880 Rust Labs/);
  assert.match(html, /Lofree SpaceFn/);
  assert.doesNotMatch(html, />News Graph</);

  const navigation = html.match(/<nav aria-label="주요 메뉴">([\s\S]*?)<\/nav>/i);
  assert.ok(navigation);
  assert.match(navigation[1], /href="#profile"[^>]*>PROFILE<\/a>/);
  assert.match(navigation[1], /href="#experience"[^>]*>EXPERIENCE<\/a>/);
  assert.match(navigation[1], /href="#projects"[^>]*>PROJECTS<\/a>/);
  assert.match(navigation[1], /href="#lab"[^>]*>LAB<\/a>/);
  assert.ok(navigation[1].indexOf("#profile") < navigation[1].indexOf("#experience"));
  assert.ok(navigation[1].indexOf("#experience") < navigation[1].indexOf("#projects"));
  assert.ok(navigation[1].indexOf("#projects") < navigation[1].indexOf("#lab"));
  assert.ok(html.indexOf('id="experience"') < html.indexOf('id="projects"'));
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps public assets and GitHub Pages deployment ready", async () => {
  await Promise.all([
    access(new URL("../public/og-problem-first.png", import.meta.url)),
    access(new URL("../public/resume.md", import.meta.url)),
    access(new URL("../scripts/export-static.mjs", import.meta.url)),
    access(new URL("../.github/workflows/deploy-pages.yml", import.meta.url)),
  ]);

  const [resume, page, styles, layout, packageJson] = await Promise.all([
    readFile(new URL("../public/resume.md", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(resume, /010-4817-4382/);
  assert.match(page, /project-quest-window/);
  assert.match(page, /slug: "smart-attendance"/);
  assert.match(page, /project-option-summary/);
  assert.match(styles, /\.project-choice:checked/);
  assert.match(styles, /#quest-smart-attendance:checked/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(styles, /height:\s*clamp\(560px,calc\(100svh - 320px\),650px\)/);
  assert.match(styles, /\.projects-section \{ min-height: calc\(100svh - 68px\);/);
  assert.match(styles, /\.project-option-copy strong \{[^}]*font-size: 16px;/);
  assert.match(styles, /\.project-detail-grid p \{[^}]*font-size: 17px;/);
  assert.match(styles, /\.project-choice, \.project-dismiss-choice \{ position: fixed; top: 50%;/);
  assert.match(styles, /\.project-list \{[^}]*scrollbar-gutter: auto;/);
  assert.match(styles, /\.project-detail-stage \{[^}]*scrollbar-gutter: auto;/);
  assert.match(styles, /@media \(max-width: 1440px\)/);
  assert.match(styles, /@media \(max-width: 900px\)/);
  assert.match(styles, /@media \(min-width: 901px\) and \(max-height: 780px\)/);
  assert.match(styles, /height:\s*clamp\(430px,calc\(100svh - 220px\),560px\)/);
  assert.match(styles, /\.project-detail-stage \{ height: auto; min-height: 560px; overflow: visible; \}/);
  assert.match(styles, /@media \(pointer: coarse\) and \(min-width: 761px\)/);
  assert.match(styles, /html:has\(\.project-choice:checked\), body:has\(\.project-choice:checked\)/);
  assert.match(styles, /html \{ max-width: 100%; overflow-x: hidden; overflow-x: clip;/);
  assert.match(styles, /\.project-option-summary \{ display: -webkit-box;[^}]*-webkit-line-clamp: 2;/);
  assert.match(styles, /\.project-list \{[^}]*touch-action: pan-y;/);
  assert.match(styles, /\.project-detail \{[^}]*overflow-x: clip; overflow-y: auto;/);
  assert.match(styles, /grid-template-areas: "no copy arrow" "\. state arrow"/);
  assert.match(styles, /\.project-choice:checked ~ \.project-quest-layout \.project-modal-backdrop/);
  assert.match(styles, /@media \(min-width: 560px\) and \(max-width: 760px\)/);
  assert.match(styles, /\.project-quest-layout \{ display: block; height: auto; min-height: 0; border: 0; \}/);
  assert.match(layout, /og-problem-first\.png/);
  assert.match(packageJson, /"pages:export"/);
});
