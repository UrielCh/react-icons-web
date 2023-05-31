import { JSX } from "preact";

// const md_code_block = "bg-zinc-800 block rounded-xl p-4 font-mono font-semibold text-lg text-white";
// const code_string = "text-green-500";
const md_string = "text-lime-300";
const md_special = "text-purple-500";

const jsReseverved1 = new Set(["return", "export", "default", 'from', 'import', 'as']);
const jsReseverved2 = new Set(["for", "if", "then", "function"]);
const jsSpecial = new Set(["{", "}", "{}", ":", ',', ';', '()', '(', ')']);

export default function miniFormater(...tokens: string[]): JSX.Element[] {
  const out: JSX.Element[] = [];

  for (const token of tokens) {
    const trimed = token.trim()
    if (trimed.startsWith('"') && trimed.endsWith('"')) {
      out.push(<span class={md_string}>{token}</span>);
    } else if (token.startsWith('<') && token.endsWith('>')) {
        out.push(<span class={md_string}>{token}</span>);
    } else if (jsSpecial.has(trimed)) {
      out.push(<span class="text-yellow-400">{token}</span>);
    } else if (jsReseverved1.has(trimed)) {
      out.push(<span class='text-violet-300'>{token}</span>);
    } else if (jsReseverved2.has(trimed)) {
      out.push(<span class="text-cyan-300">{token}</span>);
    } else if (token == "\n") {
      out.push(<br />);
    } else {
      out.push(<span>{token}</span>);
    }
  }
  return out;
}
