import { providers } from "./components/providers.ts"
import * as path from "@std/path";

for (const k of Object.keys(providers)) {
    // if (k.startsWith('io')) continue;
    // if (k.startsWith('hi')) continue;
    // if (k.startsWith('rx')) continue;
    const content = `
import * as ${k} from "@preact-icons/${k}";
import IconSet from "IconSet";
import SideBar from "Sidebar";
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
