import { JSX } from "preact";

// const md_code_block = "bg-zinc-800 block rounded-xl p-4 font-mono font-semibold text-lg text-white";
// const code_string = "text-green-500";
const md_string = "text-lime-300";
// const md_special = "text-purple-500";
const comment_cls = "text-gray-500";

// const jsReseverved1 = new Set(["return", "export", "default", 'from', 'import', 'as']);
// const jsReseverved2 = new Set(["for", "if", "then", "function"]);
// const jsSpecial = new Set(["{", "}", "{}", ":", ',', ';', '()', '(', ')']);


const formatModes = {
  "bash": {
    commentLine: "#",
    commentStart: "/*",
    commentEnd: "*/",
    resevedKw1: new Set(["deno"]),
    resevedKw2: new Set(["for", "if", "then", "function"]),
    resevedKw3: new Set(["{", "}", "{}", ":", ',', ';', '()', '(', ')']),
  },
  "js": {
    commentLine: "//",
    commentStart: "/*",
    commentEnd: "*/",
    resevedKw1: new Set(["if", "return", "export", "default", 'from', 'import', 'as']),
    resevedKw2: new Set(["for", "if", "then", "function"]),
    resevedKw3: new Set(["{", "}", "{}", ":", ',', ';', '()', '(', ')']),
  },
} as const;


export default function miniFormater(type: "bash" | "js", ...tokens: Array<string | {text: string, attr: Record<string, string>}>): JSX.Element[] {
  const out: JSX.Element[] = [];
  const formatMode = formatModes[type] || formatModes["js"];
  let isCommentMono = false;
  let isCommentMulti = false;
  for (const elm of tokens) {
    let token = '';
    let attrs = {} as Record<string, string>;
    if (typeof elm == "string") {
      token = elm;
      if (token.startsWith(formatMode.commentLine)) {
        isCommentMono = true;
      }
      if (token.startsWith(formatMode.commentStart)) {
        isCommentMulti = true;
      }
    } else {
      token = elm.text;
      attrs = elm.attr;
    }
    
    const trimed = token.trim()
    if (trimed.startsWith('"') && trimed.endsWith('"')) {
      out.push(<span {...attrs} class={md_string}>{token}</span>);
    } else if (token.startsWith('<') && token.endsWith('>')) {
      out.push(<span {...attrs} class={md_string}>{token}</span>);
    } else if (formatMode.resevedKw3.has(trimed)) {
      out.push(<span {...attrs} class="text-yellow-400">{token}</span>);
    } else if (formatMode.resevedKw1.has(trimed)) {
      out.push(<span {...attrs} class='text-violet-300'>{token}</span>);
    } else if (formatMode.resevedKw2.has(trimed)) {
      out.push(<span {...attrs} class="text-cyan-300">{token}</span>);
    } else if (token == "\n") {
      out.push(<br />);
      isCommentMono = false;
    } else {
      if (isCommentMono || isCommentMulti) {
        attrs.class = comment_cls;
      }
      out.push(<span {...attrs}>{token}</span>);
    }
    if (token.endsWith(formatMode.commentEnd)) {
      isCommentMulti = false;
    }
  }
  return out;
}
