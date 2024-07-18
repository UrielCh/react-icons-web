import { JSX } from "preact";
import type { IconBaseProps } from "@preact-icons/common";
import { providers } from "../components/providers.ts";
import IconSetHeader from './IconSetHeader.tsx';

interface Props {
  //     icons: Array<[string, ((props: IconBaseProps) => JSX.Element)]>
  icons: { [key: string]: (props: IconBaseProps) => JSX.Element };
  libId: keyof typeof providers;
}

const code = `
function handleClick(event) {
  const parent = event.currentTarget;
  const dataIco = parent.dataset.ico;
  const dataLibId = parent.dataset.libid;
  console.log({dataIco, dataLibId});
  const ename = document.getElementById('one-name');
  const eimp = document.getElementById('one-import');
  ename.textContent = dataIco;
  eimp.textContent = '"@preact-icons/' + dataLibId + '/' + dataIco + '.ts"';
}
const icoElements = document.querySelectorAll('.ico');
icoElements.forEach(function (element) {element.addEventListener('click', handleClick);});
`

export default function IconSet(
  props: Props & JSX.HTMLAttributes<HTMLButtonElement>,
) {
  const icons: Array<[name: string, componant: (props: IconBaseProps & { attr?: Record<string, string> }) => JSX.Element]> = Object.entries(props.icons);
  const { libId } = props;
  const provider = providers[libId];
  const { name } = provider;
  return (
    <>
      <div class="container mx-auto p-2 text-zinc-800">
        <IconSetHeader libId={libId} provider={provider} first={icons[0][0]} />
        <input
          type="text"
          value={`import * as ${libId}} from "@preact-icons/${libId}}";`}
          id="myInput"
          class="hidden"
        >
        </input>

        <h2 class="text-4xl py-3">{icons.length} Icons</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {icons.map(([name, ico]) => {
            // class: "text-center w-48 "
            return <div class="flex flex-col items-center justify-center text-center min-h-[64px] ico" data-ico={name} data-libid={libId}>
              {/*<div class="p-2 w-48 flex items-center flex-col border rounded-xl">*/}
              <div class="p-6 box-border p-4 border-2 rounded-md shadow-black">
                {ico({ class: "w-10 h-10", size: 28 })}
              </div>
              {/*</div>*/}
              <div class="mt-2">{name}</div>
            </div>
          })}
        </div>
      </div>
      <script dangerouslySetInnerHTML={{__html: code}}></script>
    </>
  );
}
