import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import miniFormater from "./miniFormater.tsx";
import { Provider, providers } from "./providers.ts";
// import { SiJsr } from "@preact-icons/si";
import { GenIcon, IconBaseProps } from "@preact-icons/common";
import { VNode } from "preact";

interface Props {
  libId: keyof typeof providers;
  provider: Provider;
  first: string;
}

/**
 * Real Jsr icon
 */
export function RealJsr(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg", attr: { viewBox: "0 0 13 7" }, child: [
      { tag: "path", attr: { d: "M0,2h2v-2h7v1h4v4h-2v2h-7v-1h-4", fill: "#083344" } },
      { tag: "g", attr: { fill: "#f7df1e" }, child: [
        { tag: "path", attr: { d: "M1,3h1v1h1v-3h1v4h-3" } },
        { tag: "path", attr: { d: "M5,1h3v1h-2v1h2v3h-3v-1h2v-1h-2" } },
        { tag: "path", attr: { d: "M9,2h3v2h-1v-1h-1v3h-1" } }
      ] },
    ]
  })(props);
}

/**
 * Real Deno icon
 */
export function RealDeno(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({
    tag: "svg", attr: { viewBox: "0 0 5120 5120" }, child: [
      { tag: "path", attr: { d: "M2560 0a2560 2560 0 1 1 0 5120 2560 2560 0 0 1 0-5120z" } },
      { tag: "path", attr: { d: "M2460 1449c-744 0-1324 469-1324 1052 0 550 533 901 1359 884l25-1 91-3-23 60 3 6a668 668 0 0 1 18 47l2 6 3 10 4 14 3 9 4 10 3 11 4 16 5 17 3 11 5 18 5 19 4 19 5 20 4 14 5 22 5 22 7 30 3 16 5 24 5 25 6 26 7 37 6 30 8 42 4 21 7 33 6 34 8 46 9 48 8 50 9 51 9 52 9 54 9 56 7 43 11 73 5 30 12 77 9 63 8 48 9 66 5 33c549-73 1037-339 1393-728l11-12-51-190-135-505-84-314-74-276-46-168-29-106-17-64-16-56-6-24-4-13-2-7-2-6c-78-251-229-473-435-634-242-189-549-288-907-288zm-654 2669c-65-18-133 20-152 85l-1 3-112 416a2287 2287 0 0 0 215 93l17 7 121-451 1-3c16-66-23-133-89-150zm697-305c-66-18-134 20-153 85l-1 3-170 630v3a125 125 0 0 0 241 65l1-3 170-630v-3l3-14 1-5-4-21-6-29-4-18a125 125 0 0 0-78-63zm-1185-649-8 19-1 4-170 630-1 3a125 125 0 0 0 241 66l1-3 154-572c-80-42-153-92-216-147zm-405-725c-66-17-134 21-153 85l-1 3-170 630v3a125 125 0 0 0 241 66l1-3 170-630v-3c16-66-23-133-88-151zm3811-143c-65-17-133 21-152 85l-1 3-170 630-1 3a125 125 0 0 0 242 66v-3l171-630v-4c16-65-23-132-89-150zM542 1455a2284 2284 0 0 0-267 838 124 124 0 0 0 62 38c65 17 133-21 152-85l1-3 170-630 1-3c16-66-23-133-89-151a127 127 0 0 0-30-4zm3752 4c-66-17-133 21-153 85v3l-170 630-1 3a125 125 0 0 0 241 66l1-3 170-630 1-3c16-66-24-133-89-151z", fill:"#fff" } },
      { tag: "path", attr: { d: "M2620 1870a160 160 0 1 1 0 320 160 160 0 0 1 0-320z" } },
      { tag: "path", attr: { d: "M1282 860c-65-17-133 21-152 85l-1 3-170 630-1 3a125 125 0 0 0 241 66l1-3 170-630 1-4c16-65-23-132-89-150zm2185 119c-66-17-134 21-153 85l-1 3-114 424a1399 1399 0 0 1 211 128l11 9 134-495v-3c16-66-23-133-88-151zM2355 269a2299 2299 0 0 0-238 34l-17 3-158 587-1 3a125 125 0 0 0 241 65l1-3 170-630 1-3a124 124 0 0 0 1-56zm1564 435-33 124-1 3a125 125 0 0 0 241 65l1-3 4-13a2312 2312 0 0 0-197-165l-15-11zm-989-414-60 223-1 3a125 125 0 0 0 241 65l1-3 63-235a2286 2286 0 0 0-226-50l-18-3z", fill:"#fff" } },
    ]
  })(props);
}


//   <a href={`https://jsr.io/@preact-icons/${libId}`}><RealJsr className={"inline"} size={64}></RealJsr></a>
export default function IconSetHeader(
  props: Props & JSX.HTMLAttributes<HTMLButtonElement>,
) {
  const { provider, libId, first } = props;
  const { name } = provider;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h1 class="text-6xl py-3 pt-8">{name} <a href={`https://jsr.io/@preact-icons/${libId}`}><RealJsr className={"inline"} size={64}></RealJsr></a></h1>
      <p><a href={`https://jsr.io/@preact-icons/${libId}`} rel="nofollow"><img src={`https://jsr.io/badges/@preact-icons/${libId}`} alt="JSR"></img></a></p>
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

      <h2 class="text-4xl py-3">install</h2>

      <pre class="md-code-block">
        {miniFormater("bash", "deno", " ", 'add', " ", `"@preact-icons/${libId}"`, '\n')}
      </pre>

      <h2 class="text-4xl py-3">Import</h2>
      <pre class="md-code-block" id="importStatement">
        {miniFormater("js", "import ", '*', ' as ', `${libId}`, ' from ', `"@preact-icons/${libId}"`, ';', '\n')}
      </pre>

      <h2 class="text-4xl py-3">import just one</h2>
      <pre class="md-code-block" id="importStatementOne">
        {miniFormater("js", "import ", '{ ', { text: first, attr: { id: 'one-name' } }, " }", ' from ', `"@preact-icons/${libId}"`, ';', '\n')}
        {miniFormater("js", "// ", 'or ', '\n')}
        {miniFormater("js", "import ", { text: first, attr: { id: 'one-name' } }, ' from ', { text: `"@preact-icons/${libId}/${first}"`, attr: { id: 'one-import' } }, ';', '\n')}
      </pre>
    </>
  );
}
