import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { buildSeoMetadata, viewport } from "./components/SeoHead";
import { getGitHubRelease } from "./components/lib/github-release";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd release={release} />
        {children}
      </body>
    </html>
  );
}
