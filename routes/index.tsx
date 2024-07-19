// import { JSX } from "preact";
import { Head } from "$fresh/runtime.ts";
import SideBar from "Sidebar";
import { providers } from "../components/providers.ts";
import miniFormater from "../components/miniFormater.tsx";

const title = "React-icon for preact";

// const kw = (text:string) => ( <span class="md-keyword">{text}</span>);
// const special = (text:string) => ( <span class='md-special'>{text}</span>);
// const str = (text:string) => ( <span class='md-string'>{text}</span>);
// const std = (text:string) => ( <span>{text}</span>);

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
        Include popular icons in your preact projects easily with @preact-icons,
        which utilizes ES6 imports that allows you to include only the icons
        that your project is using.
        </div>
        <div>
        @preact-icons is a preact port of <a href="https://react-icons.github.io/react-icons/">react-icons</a>.
        </div>
        <br/>

        <h2 class="text-4xl py-3">Installation (for deno project)</h2>
        <pre class="md-code-block">
        {Object.keys(providers).map((libId) => <>
          {miniFormater("bash", '  ', "deno", " ", "add", " ", `"@preact-icons/${libId}"`, '\n')}
        </>)}
        </pre>

        <h2 class="text-4xl py-3">Usage</h2>
        <pre class='md-code-block'>
        {miniFormater("js", 'import ', '{ ', 'FaBeer', ' } ', 'from ', '"@preact-icons/fa"', ";", '\n')}
        {miniFormater("js", 'export ', 'default ', 'function ', 'comp', '()', ' {', '\n')}
        {miniFormater("js", '  ', 'return ', '<h3>', 'Lets go for a ', '<FaBeer/>', '?', '</h3>', '\n', '}', '\n')}
        </pre>

        <h2 class="text-4xl py-3">optimal Usage</h2>
        <pre class='md-code-block'>
        {miniFormater("js", 'import ', 'FaBeer', ' from ', '"@preact-icons/fa/FaBeer"', ";", '\n')}
        {miniFormater("js", 'export ', 'default ', 'function ', 'comp', '()', ' {', '\n')}
        {miniFormater("js", '  ', 'return ', '<h3>', 'Lets go for a ', '<FaBeer/>', '?', '</h3>', '\n', '}', '\n')}
        </pre>


      </div>
    </div>
  );
}
