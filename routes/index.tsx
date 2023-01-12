import { Head } from "$fresh/runtime.ts";
import * as bs from "react-icons/bs";
import { IconSet } from "../components/IconSet.tsx";
import { SideBar } from "../components/sidebar.tsx";
import { providers } from "../components/providers.ts";

const title = "React icon for deno";
const md_code_block =
  "bg-zinc-800 block rounded-xl p-4 font-mono font-semibold text-lg text-white";
const md_string = "text-lime-300";
const md_special = "text-purple-400";
const md_keyword = "text-cyan-300";

const kw = (text:string) => ( <span class={md_keyword}>{text}</span>);
const special = (text:string) => ( <span class={md_special}>{text}</span>);
const str = (text:string) => ( <span class={md_string}>{text}</span>);
const std = (text:string) => ( <span>{text}</span>);

export default function Home() {

  return (
    <div class="flex h-full">
      <SideBar />
      <Head>
        <title>{title}</title>
      </Head>

      <div class="flex flex-col p-2 text-zinc-800">
        <h1 class="text-6xl py-3 pt-8">{title}</h1>
        <div>
        Include popular icons in your React projects easily with react-icons,
        which utilizes ES6 imports that allows you to include only the icons
        that your project is using.
        </div>
        <br/>
        <div>First update your <span class="font-mono">import_map.json</span> with:</div>

        <h2 class="text-4xl py-3">Import map</h2>
        <pre class={md_code_block}>
        <span class={md_special}>{"{"}</span><br/>

        {Object.keys(providers).map((libId) => <>
          {"  "} <span class={md_string}>"react-icons/{libId}"</span><span class={md_special}>: </span><span class={md_string}>"https://deno.land/x/react_icons@0.2.3/{libId}/mod.ts"</span><span class={md_special}>,</span><br/>
        </>)}
        <span class={md_special}>{"}"}</span>
        </pre>

        <h2 class="text-4xl py-3">Usage</h2>
        <pre class={md_code_block}>
        {kw('import ')}{special('{')}{std(' FaBeer ')}{special('}')}{kw(' from ')}{str('"react-icons/fa"')}{special(';')}<br/>
        <br/>
        {kw('export default function ')}{std('comp')}{special('() {')}<br/>
        {'  '}{kw('return ')}{std('<')}{kw('h3')}{std('> Lets go for a <')}{kw('FaBeer')}{std('/>? </')}{kw('h3')}{std('>')}<br/>
        {kw('}')}<br/>
        </pre>
      </div>
    </div>
  );
}
