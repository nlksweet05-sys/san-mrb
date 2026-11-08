# Wedding Invitation – Lakshitha & Sanath

React + Vite static site. Free on Vercel Hobby.

## Before you deploy
1. Put your instrumental track at `public/music/wedding-background.mp3` (royalty-free/licensed; keep under ~3 MB). The site works without it (music button just shows unavailable).
2. Put a 1200×630 JPG at `public/og-invitation.jpg` (WhatsApp preview image).
3. Edit all details in `src/config/wedding.js`. After you know your Vercel URL, replace `YOUR-SITE.vercel.app` in `index.html` (3 places) and `websiteUrl` in the config.

## Run locally
`npm install` then `npm run dev` (needs Node 18+). Production check: `npm run build`.

## Deploy (free)
1. Create a free account at github.com. 2. Create a new repository. 3. Upload ALL project files (not node_modules) via "Add file → Upload files" and commit.
4. Create a free account at vercel.com ("Continue with GitHub"). 5. Add New → Project → import your repo.
6. Framework preset: **Vite**. 7. Build command `npm run build`, output `dist`, install `npm install`. 8. Click **Deploy**.
9. Open the URL. 10. Test on Android and iPhone. 11. Share the URL on WhatsApp.

## Updating later
Edit `src/config/wedding.js` on GitHub (pencil icon) → Commit. Vercel redeploys automatically in about a minute.
