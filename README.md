# GTA 6 Stakeout – website

Static site for GitHub Pages. No build step, no dependencies, no cookies or tracking.

## Publish (first time)

1. Repository: **https://github.com/Ikeruuu/gta6stakeout** (public). Live address: `https://ikeruuu.github.io/gta6stakeout/`.
2. Everything inside this `web/` folder goes in the root of the repo (not the `web` folder itself). The `.nojekyll` file must be included.
3. Because it is a project site (served under `/gta6stakeout/`), `404.html` uses absolute paths starting with `/gta6stakeout/`. Every other page uses relative paths.
4. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**.
5. After a minute or two the site is live at `https://ikeruuu.github.io/gta6stakeout`.
6. Put that link in every bio (X, Instagram, TikTok, YouTube).

If you use another account or repo name, the address changes: update `canonical`, `og:image` in `index.html`, `robots.txt` and `sitemap.xml`.

## Custom domain (optional)

Buy the domain, add a `CNAME` file here with just the domain (for example `gta6stakeout.com`), set the DNS records GitHub shows under Settings → Pages, and update the URLs listed above.

## Updating content

- All text, clips, tips and numbers live in `assets/js/data.js`. Edit only that file.
- New clip: add `{ yt: 'VIDEO_ID', title, credit }` and a 405x720 frame at `assets/img/clips/VIDEO_ID.jpg`.
- New tip: add `{ tag, title, text, img?, credit }`. Images go in `assets/img/posts/` (720 px wide).
- Numbers and quotes: only from primary sources, the same ones recorded in `facts.md`.

## Preview locally

From the project folder: `node tools/serve-web.js`, then open `http://localhost:8080`.

## Credits and rights

Fan page, not affiliated with Rockstar Games or Take-Two Interactive. Screenshots © Rockstar Games, used with credit. Creator clips and frames are credited on every card; takedown requests via @gta6stakeout on X.
