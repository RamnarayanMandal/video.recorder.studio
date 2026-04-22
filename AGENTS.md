<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
📁 app/
   globals.css        ← Google Fonts + CSS variables + animations
   page.tsx           ← Sirf imports + assembly (50 lines!)

📁 lib/
   constants.ts       ← Saara data ek jagah (PLATFORMS, FEATURES, CHANGELOG, TECH)

📁 components/
   Background.tsx     ← Fixed blobs + grid
   Navbar.tsx         ← Header + nav links
   Hero.tsx           ← H1 + stats + tech chips
   DownloadCard.tsx   ← Smart OS-detected download card (Hero ke andar)
   AppMock.tsx        ← Animated app preview
   Features.tsx       ← 9 feature cards grid
   Changelog.tsx      ← v1.0.6 release notes
   DownloadSection.tsx← 3 platform cards + build from source
   TechStack.tsx      ← Tech badges
   Footer.tsx         ← Footer nav
   Toast.tsx          ← Download confirmation popup
   icons/
     Icons.tsx        ← Saare SVG icons ek jagah
