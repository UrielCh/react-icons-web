import { JSX } from "preact";
import { IconBaseProps } from "https://deno.land/x/react_icons@0.2.3/lib/mod.tsx";
import { providers } from "../components/providers.ts";
import IconSetHeader from './IconSetHeader.tsx';

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
      <div class="flex flex-col p-2 text-zinc-800">
        <IconSetHeader libId={libId} provider={provider}/>
        <input
          type="text"
          value={`import * as ${libId}} from "react-icons/${libId}}";`}
          id="myInput"
          class="hidden"
        >
        </input>

        <h2 class="text-4xl py-3">{icons.length} Icons</h2>
        <div class="mx-auto flex flex-wrap block gap-4">
          {icons.map(([name, ico]) => {
            const svg = ico({ class: "text-center w-48 " });
            return <div class="flex flex-col items-center justify-center text-center min-h-[64px]">
              {/*<div class="p-2 w-48 flex items-center flex-col border rounded-xl">*/}
              <div class="p-6 box-border p-4 border-2 rounded-md shadow-black">
                {svg}
              </div>
              {/*</div>*/}
              <div class="mt-2">{name}</div>
            </div>
          })}
        </div>
      </div>
    </>
  );
}
