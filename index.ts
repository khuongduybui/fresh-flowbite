import { Plugin } from "$fresh/server.ts";
import { PluginRenderContext } from "$fresh/src/server/types.ts";

export type FlowbitePluginOptions = Record<never, never>;

export function FlowbitePlugin(options?: FlowbitePluginOptions): Plugin {
  return {
    name: "flowbite",
    entrypoints: {"main": "$flowbite/plugin.ts"},
    render(ctx: PluginRenderContext) {
      ctx.render();
      return {
        scripts: [
          {
            entrypoint: "main",
            state: options ?? {}
          }
        ]
      }
    }
  };
}
