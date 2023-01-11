import { providers } from "./components/providers.ts"
import * as path from "https://deno.land/std@0.171.0/path/mod.ts";

for (const k of Object.keys(providers)) {
    const content = `import * as ${k} from "react-icons/${k}";
import { IconSet } from "../components/IconSet.tsx";
export default function Home() { return (<IconSet libId="${k}" icons={${k}}/>);}
`
    const dest = path.join('routes', `${k}.tsx`);
    Deno.writeTextFileSync(dest, content);
}
