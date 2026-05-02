import HomeClient from "./components/HomeClient";
import { getGitHubRelease } from "./components/lib/github-release";

export const dynamic = "force-dynamic";

export default async function Page() {
  const release = await getGitHubRelease();

  return <HomeClient release={release} />;
}
