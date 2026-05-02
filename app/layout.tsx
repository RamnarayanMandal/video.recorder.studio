import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { buildSeoMetadata, viewport } from "./components/SeoHead";
import { getGitHubRelease } from "./components/lib/github-release";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export { viewport };

export async function generateMetadata(): Promise<Metadata> {
  const release = await getGitHubRelease();
  return buildSeoMetadata(release);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const release = await getGitHubRelease();

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <meta name="google-site-verification" content="u29tTL78RoIEw8rVx6DKagPpTxflPUxeeR0VZp5VnQk" />
        <link rel="preconnect" href="https://github.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd release={release} />
        {children}
      </body>
    </html>
  );
}