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
  assert.match(html, /SELECTED WORK/);
  assert.match(html, /NIMBUS/);
  assert.match(html, /ADVENTURE LOG/);
  assert.match(html, /PIXEL LAB/);
  assert.match(html, /QUEST COMPLETE/);
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
  assert.match(page, /project-card/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(layout, /og\.png/);
  assert.match(packageJson, /"pages:export"/);
});
