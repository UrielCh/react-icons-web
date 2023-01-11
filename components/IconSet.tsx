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

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <div class="flex flex-col justify-center p-2 text-zinc-800">
        <h1 class="text-6xl py-3">{name}</h1>
        <div class="">licence: <a href={provider.licence[1]}>{provider.licence[0]}</a></div>
        <div class="">Project: <a href={provider.projectUrl}>{provider.projectUrl}</a></div>
        <h2 class="text-4xl py-3">Import map</h2>
        <h2 class="text-4xl py-3">Icons</h2>
        <div class="mx-auto flex flex-wrap block gap-4">
          {icons.map(([name, ico]) => (
            <div class="flex flex-col items-center shadow-dark-900 ">
              <div class="p-2 w-48 flex items-center flex-col border rounded-xl">
                <div class="p-6">{ico({ size: 64 })}</div>
              </div>
              <div class="mt-2">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
