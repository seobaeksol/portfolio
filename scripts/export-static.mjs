import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const sourceUrl = process.env.PAGES_SOURCE_URL ?? "http://127.0.0.1:3001/";
const outputDir = resolve("site");

function getPublicBase() {
  if (process.env.PAGES_PUBLIC_URL) {
    return `${process.env.PAGES_PUBLIC_URL.replace(/\/$/, "")}/`;
  }

  const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "seobaeksol/portfolio").split("/");
  const isUserSite = repository?.toLowerCase() === `${owner}.github.io`.toLowerCase();
  return isUserSite
    ? `https://${owner}.github.io/`
    : `https://${owner}.github.io/${repository}/`;
}

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`Could not render ${sourceUrl}: ${response.status} ${response.statusText}`);
}

let html = await response.text();
const publicBase = getPublicBase();

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
  .replaceAll('href="/_next/', 'href="./_next/')
  .replaceAll('href="/resume.md"', 'href="./resume.md"')
  .replaceAll("https://seobaeksol.github.io/og.png", `${publicBase}og.png`)
  .replace("</head>", '<link rel="icon" href="data:,"/></head>');

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(resolve("dist/client"), outputDir, { recursive: true });
await writeFile(resolve(outputDir, "index.html"), html, "utf8");
await writeFile(resolve(outputDir, ".nojekyll"), "", "utf8");

console.log(`GitHub Pages export created at ${outputDir}`);
console.log(`Social preview URL: ${publicBase}og.png`);
