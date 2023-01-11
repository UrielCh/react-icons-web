import { providers } from "./components/providers.ts"
import * as path from "https://deno.land/std@0.171.0/path/mod.ts";

for (const k of Object.keys(providers)) {
    if (k.startsWith('io')) continue;
    if (k.startsWith('hi')) continue;
    if (k.startsWith('rx')) continue;
    const content = `
import * as ${k} from "react-icons/${k}";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
export default function Page() {
  return (
    <div class="flex h-full">
      <SideBar/>
      <IconSet libId="${k}" icons={${k}}/>
    </div>
  );
}
`
    const dest = path.join('routes', `${k}.tsx`);
    Deno.writeTextFileSync(dest, content);
}
