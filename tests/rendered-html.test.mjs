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
  assert.match(html, /WORK EXPERIENCE/);
  assert.match(html, /NIMBUS/);
  assert.match(html, /SELECTED PROJECTS/);
  assert.match(html, /SELECT A QUEST/);
  assert.match(html, /PIXEL LAB/);
  assert.match(html, /QUEST COMPLETE/);
  assert.match(html, /href="#experience"[^>]*><span[^>]*>▶<\/span> VIEW EXPERIENCE/);

  const projectChoices = html.match(/<input[^>]*class="project-choice"[^>]*>/g) ?? [];
  const projectDetails = html.match(/class="project-detail"/g) ?? [];
  const labCards = html.match(/class="lab-card"/g) ?? [];
  assert.equal(projectChoices.length, 10);
  assert.equal(projectDetails.length, 10);
  assert.equal(labCards.length, 6);
  projectChoices.forEach((choice) => assert.doesNotMatch(choice, /\bchecked\b/i));
  assert.match(html, /KRX-RS/);
  assert.match(html, /AHOYKEYBOARD/);
  assert.match(html, /DISTRIBUTED NEWS ANALYTICS/);
  assert.match(html, /SMART ATTENDANCE/);
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
    access(new URL("../public/og.png", import.meta.url)),
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
  assert.match(styles, /\.project-choice:checked/);
  assert.match(styles, /#quest-smart-attendance:checked/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(layout, /og\.png/);
  assert.match(packageJson, /"pages:export"/);
});
