import { PluginRenderContext } from "$fresh/src/server/types.ts";

export const flowbitePlugin = {
    name: "flowbite",
    entrypoints: {"main": "https://raw.githubusercontent.com/khuongduybui/fresh-flowbite/0.0.1-1.5.3/plugin.ts"},
    render(ctx: PluginRenderContext) {
      ctx.render();
      return {
        scripts: [
          {
            entrypoint: "main",
            state: {}
          }
        ]
      }
    }
  };
