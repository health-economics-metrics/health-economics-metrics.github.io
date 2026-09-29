#!/usr/bin/env node
// Vendor the Lily Design System themes this site offers into static/, since
// they have to be real files under the site's own origin for the theme
// picker to fetch by URL (`themesUrl` + a slug) and for <link rel=
// "stylesheet"> in app.html — an npm package's export map resolves for
// import statements, not for a browser requesting a URL.
//
// Every default theme ships — not a curated subset — matching PickerBar's
// own DEFAULT_THEMES catalog, so the theme picker never offers a theme
// this site can't actually load.
//
// Source: the @lilydesignsystem/themes npm dependency (see package.json) —
// an ordinary, versioned package, not a local Lily checkout.
// Run after upgrading that dependency:  npm run sync:lily

import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packageJsonUrl = import.meta.resolve('@lilydesignsystem/themes/package.json');
const themesSrc = join(dirname(fileURLToPath(packageJsonUrl)), 'dist');
const themesOut = join(siteRoot, 'static', 'assets', 'themes');

const themeFiles = (await readdir(themesSrc)).filter((name) => name.endsWith('.css')).sort();

await rm(themesOut, { recursive: true, force: true });
await mkdir(themesOut, { recursive: true });

for (const file of themeFiles) {
	await copyFile(join(themesSrc, file), join(themesOut, file));
}

console.log(`Vendored ${themeFiles.length} Lily theme(s) from @lilydesignsystem/themes.`);
