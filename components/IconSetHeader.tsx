import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import miniFormater from "./miniFormater.tsx";
import { Provider, providers } from "./providers.ts";

interface Props {
  libId: keyof typeof providers;
  provider: Provider;
}

export default function IconSetHeader(
  props: Props & JSX.HTMLAttributes<HTMLButtonElement>,
) {
  const { provider, libId } = props;
  const { name } = provider;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
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

      <pre class="md-code-block">
        {miniFormater("{", '\n',
       "  ", `"react-icons/${libId}"`, ': ', `"https://deno.land/x/react_icons@0.2.3/${libId}/mod.ts"`, ',', '\n',
        "}", '\n')}
      </pre>

      <h2 class="text-4xl py-3">Import</h2>
      <pre class="md-code-block" id="importStatement">
      {miniFormater("import ", '*', ' as ', `${libId}`, ' from ', `"react-icons/${libId}"`, ';', '\n')}
      </pre>
    </>
  );
}
