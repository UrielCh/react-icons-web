import { defineConfig } from "@twind/core"
import presetTailwind from "@twind/preset-tailwind";
import { type Options } from "./plugins/twindv1.ts";

const twConfig = {
  ...defineConfig({
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
  }
} ;
export default twConfig as unknown as Options;
