import { defineConfig, type Preset } from "@twind/core"
import presetTailwind, { type TailwindTheme } from "@twind/preset-tailwind";
import { type Options } from "./plugins/twindv1.ts";

// TODO switch to https://deno.land/x/freshwind@4.0.0 (https://github.com/EccentricVamp/freshwind)

const twConfig: Options = {
  ...defineConfig<TailwindTheme, Preset<TailwindTheme>[]>({
    rules: [
      ["code-string", "text-green-500"],
      ['md_string', 'text-lime-300'],
      ['md_special', 'text-purple-400'],
      ['md_keyword', 'text-cyan-300'],
    ],
    presets: [presetTailwind()],
  }),
  // darkMode: 'class',
  selfURL: import.meta.url,
};

twConfig.theme.extend = {
  spacing: {
    '128': '38rem',
  },
  animation: {
  },
  boxShadow: {
  },
  keyframes: {
  },
  colors: {
  },
  textColor: {
  }
};

export default twConfig;
