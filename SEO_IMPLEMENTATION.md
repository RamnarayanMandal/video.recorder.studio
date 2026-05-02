# SEO Implementation Notes

## Google Search Console setup

1. Open https://search.google.com/search-console/welcome.
2. Add the URL-prefix property `https://video-recorder-studio.vercel.app/`.
3. Choose the HTML tag verification method.
4. Copy the verification token and add it in `app/components/SeoHead.tsx` only after Search Console gives you the real value.
5. Deploy, click Verify, then submit `https://video-recorder-studio.vercel.app/sitemap.xml`.
6. Use URL Inspection for `https://video-recorder-studio.vercel.app/` and request indexing.

## Custom domain recommendation

Move from the `vercel.app` subdomain to a branded domain such as `videorecorderstudio.com` or `videorecorder.studio`. In Vercel, add the domain under Project Settings > Domains, point DNS to Vercel, set the branded domain as primary, then update `SITE_URL` in `app/components/SeoHead.tsx`, `public/robots.txt`, and `public/sitemap.xml`.

## PageSpeed and Core Web Vitals checklist

1. Keep the landing page mostly server-rendered. The current `JsonLd`, metadata, and release fetch run on the server; keep client state limited to OS detection, downloads, and FAQ accordion.
2. Cache same-request GitHub release fetches with `react.cache`, already applied in `app/components/lib/github-release.ts`, to avoid duplicate release API work.
3. Add explicit dimensions for important images. The OG image is `1200x630`; use fixed width/height whenever it appears in UI to prevent CLS.
4. Replace inline hover handlers with CSS classes over time. This reduces hydrated JavaScript and improves INP on low-end devices.
5. Keep Google Fonts loaded through `next/font`, already used in `app/layout.tsx`, so font files are self-hosted and layout shift is controlled.
6. Add long-lived caching for immutable static assets in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico|woff2)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

7. For the Electron app's Vite bundle, split heavy recording and FFmpeg UI code away from first paint:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          recording: ["@ffmpeg/ffmpeg"]
        }
      }
    }
  }
});
```

8. Lazy-load non-critical preview/media sections with `next/dynamic` if Lighthouse shows the app mock affecting LCP.
9. Preconnect only to origins used during first paint. Avoid adding broad preconnects for GitHub because the release fetch is server-side.
10. Run Lighthouse on Vercel production, not only locally: `npx lighthouse https://video-recorder-studio.vercel.app/ --view`.

## Backlink acquisition plan

| Site | Submit URL | What to write | Est. DA |
| --- | --- | --- | --- |
| Product Hunt | https://www.producthunt.com/posts/new | Launch as "Video Recorder Studio - free open-source screen + webcam recorder with MP4 exports and no watermark." Add GIF/screenshot, GitHub link, and maker comment explaining why it is a lighter OBS alternative. | 90+ |
| Hacker News Show HN | https://news.ycombinator.com/submit | Title: "Show HN: Video Recorder Studio - a free open-source screen and webcam recorder". Link the GitHub repo or landing page, then explain Electron, React, FFmpeg, and no-watermark exports in the first comment. | 90+ |
| AlternativeTo | https://alternativeto.net/software/add/ | Submit as an OBS Studio alternative. Emphasize desktop screen recording, webcam overlay, Windows/macOS/Linux builds, and open-source licensing. | 85+ |
| SourceForge | https://sourceforge.net/create/ | Create a project mirror with release downloads, screenshots, license, GitHub repo, and categories "Screen Capture" and "Video Capture". | 90+ |
| LibHunt | https://www.libhunt.com/repo/submit | Submit the GitHub repo and suggest it as an alternative to OBS Studio or other open-source screen capture tools. | 70+ |
| RepoRanker | https://reporanker.com/submit | Submit the GitHub repository. Ask for peer reviews focused on recording reliability, installer clarity, and FFmpeg conversion workflow. | 20+ |
| GitDB | https://gitdb.net/submit | Submit `https://github.com/RamnarayanMandal/video-recorder-studio` so it is indexed for repository analytics and related-project discovery. | 20+ |
| OPEN_SRC.ME | https://opensrc.me/submit | Position it as an open-source alternative to paid screen recorders and complex streaming tools. Upload `/og-image.png` as the screenshot. | 25+ |
| Just OpenSource | https://justopensource.xyz/ | Submit a free open-source tool listing: "Desktop screen + webcam recorder with audio capture, MP4 conversion, and no watermarks." | 20+ |
| OpenSourceAlternative.to | https://opensourcealternative.to/submit | Submit as an open-source alternative to Camtasia, ScreenFlow, Bandicam, or Loom for local desktop recording. | 35+ |

