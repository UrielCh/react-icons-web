import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import { IconBaseProps } from "https://deno.land/x/react_icons@0.2.3/lib/mod.tsx";
import { providers } from "./providers.ts"

interface Props {
  //     icons: Array<[string, ((props: IconBaseProps) => JSX.Element)]>
  icons: { [key: string]: (props: IconBaseProps) => JSX.Element };
  libId: keyof typeof providers;
}

export function IconSet(props: Props & JSX.HTMLAttributes<HTMLButtonElement>) {
  const icons = Object.entries(props.icons);
  const provider = providers[props.libId];
  const { name } = provider;
  const md_code_block = 'bg-zinc-800 block rounded-xl p-4 font-mono font-semibold text-lg text-white';
  const md_string = 'text-lime-300';
  const md_special = 'text-purple-400';
  const md_keyword = 'text-cyan-300';

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <div class="flex flex-col p-2 text-zinc-800">
        <h1 class="text-6xl py-3 pt-8">{name}</h1>
        <table class="text-left">
          <tbody>
            <tr>
            <th class="font-bold text-xl">Licence</th>
            <td><a href={provider.licence[1]} class="text-sky-600 font-semibold">{provider.licence[0]}</a></td>
            </tr>
            <tr>
            <th class="font-bold text-xl">Project</th>
            <td><a href={provider.projectUrl} class="text-sky-600 font-semibold">{provider.projectUrl}</a></td>
            </tr>
          </tbody>
        </table>
        <h2 class="text-4xl py-3">Import map</h2>
        
        <pre class={md_code_block}>
        <span class={md_special}>{"{"}</span><br/>
        {"  "} <span class={md_string}>"react-icons/{props.libId}"</span><span class={md_special}>: </span><span class={md_string}>"https://deno.land/x/react_icons@0.2.3/{props.libId}/mod.ts"</span><span class={md_special}>,</span><br/>
        <span class={md_special}>{"}"}</span>
        </pre>

        <h2 class="text-4xl py-3">Import</h2>
        <pre class={md_code_block}>
        <span class={md_keyword}>import</span> * <span class={md_keyword}>as</span> {props.libId} <span class={md_keyword}>from</span> <span class="text-green-500">"react-icons/{props.libId}"</span><span class={md_special}>;</span>
        </pre>

        <h2 class="text-4xl py-3">Icons</h2>
        <div class="mx-auto flex flex-wrap block gap-4">
          {icons.map(([name, ico]) => (
            <div class="flex flex-col items-center ">
              <div class="p-2 w-48 flex items-center flex-col border rounded-xl">
                <div class="p-6 min-h-[64px]">{ico({ })}</div>
              </div>
              <div class="mt-2">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
