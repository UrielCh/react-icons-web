import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import { IconBaseProps } from "https://deno.land/x/react_icons@0.2.3/lib/mod.tsx";
import { providers } from "../components/providers.ts";
import miniFormater from "./miniFormater.tsx";

interface Props {
  //     icons: Array<[string, ((props: IconBaseProps) => JSX.Element)]>
  icons: { [key: string]: (props: IconBaseProps) => JSX.Element };
  libId: keyof typeof providers;
}

export default function IconSet(
  props: Props & JSX.HTMLAttributes<HTMLButtonElement>,
) {
  const icons = Object.entries(props.icons);
  const { libId } = props;
  const provider = providers[libId];
  const { name } = provider;
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
              <td>
                <a
                  href={provider.licence[1]}
                  class="text-sky-600 font-semibold"
                >
                  {provider.licence[0]}
                </a>
              </td>
            </tr>
            <tr>
              <th class="font-bold text-xl">Project</th>
              <td>
                <a
                  href={provider.projectUrl}
                  class="text-sky-600 font-semibold"
                >
                  {provider.projectUrl}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 class="text-4xl py-3">Import map</h2>

        <pre class='md-code-block'>
          {miniFormater("{", '\n',
         "  ", `"react-icons/${libId}"`, ': ', `"https://deno.land/x/react_icons@0.2.3/${libId}/mod.ts"`, ',', '\n',
          "}", '\n')}
        </pre>

        <h2 class="text-4xl py-3">Import</h2>
        <pre class='md-code-block' id="importStatement">
        {miniFormater("import ", '*', ' as ', `${libId}`, ' from ', `"react-icons/${libId}"`, ';', '\n')}
        </pre>
        <input
          type="text"
          value={`import * as ${libId}} from "react-icons/${libId}}";`}
          id="myInput"
          class="hidden"
        >
        </input>

        <h2 class="text-4xl py-3">{icons.length} Icons</h2>
        <div class="mx-auto flex flex-wrap block gap-4">
          {icons.map(([name, ico]) => (
            <div class="flex flex-col items-center justify-center text-center min-h-[64px]">
              {/*<div class="p-2 w-48 flex items-center flex-col border rounded-xl">*/}
              <div class="p-6 box-border p-4 border-2 rounded-md shadow-black">
                {ico({ class: "text-center w-48 " })}
              </div>
              {/*</div>*/}
              <div class="mt-2">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
