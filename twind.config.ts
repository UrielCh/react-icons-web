import { defineConfig } from "@twind/core"
import presetTailwind from "@twind/preset-tailwind";
import { type Options } from "./plugins/twindv1.ts";
import { type Preset } from "@twind/core";
import { type TailwindTheme } from "@twind/preset-tailwind";

// TODO switch to https://deno.land/x/freshwind@4.0.0 (https://github.com/EccentricVamp/freshwind)

const twConfig: Options = {
  ...defineConfig<TailwindTheme, Preset<TailwindTheme>[]>({
    rules: [],
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
