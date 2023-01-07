import { FlowbitePluginOptions } from "./index.ts";

export function injectScript(source: string, async = false, defer = false) {
  const script = document.createElement("script");
  script.src = source;
  script.async = async;
  script.defer = defer;
  document.head.appendChild(script);
}

export function injectStylesheet(source: string) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = source;
  document.head.appendChild(stylesheet);
}

export default function main(state: FlowbitePluginOptions) {
  injectScript("https://unpkg.com/flowbite@1.6.0/dist/flowbite.js");
  (state?.additionalScripts ?? []).forEach((script) => injectScript(script));
  (state?.additionalStylesheets ?? []).forEach((stylesheet) => injectStylesheet(stylesheet));
}
