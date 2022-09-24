import { IS_BROWSER } from "$fresh/runtime.ts";

export default function main(_state: {}) {
  if (IS_BROWSER) {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js";
    document.head.appendChild(script);
  }
}
