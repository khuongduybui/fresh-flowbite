import { IS_BROWSER } from "$fresh/runtime.ts";
import { FlowbitePluginOptions } from "./index.ts";

export default function main(_state: FlowbitePluginOptions) {
  if (IS_BROWSER) {
    const injectScript = (source: string) => {
      const script = document.createElement("script");
      script.src = source;
      document.head.appendChild(script);
    }
    const _injectStylesheet = (source: string) => {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = source;
      document.head.appendChild(stylesheet);
    }
    injectScript("https://unpkg.com/flowbite@1.5.3/dist/flowbite.js");
  }
}
