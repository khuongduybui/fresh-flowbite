# fresh-flowbite

A [Flowbite](https://flowbite.com/) [plugin](https://fresh.deno.dev/docs/concepts/plugins) for [Deno Fresh](https://fresh.deno.dev/).

## Installation

First of all, create [your fresh app](https://fresh.deno.dev/docs/getting-started/create-a-project) **with `twind` plugin**.

Add Flowbite to your `import_map.json`.

```json
{
  "imports": {
    "$flowbite/": "https://deno.land/x/fresh_flowbite@0.1.0-1.5.3/"
  }
}
```

Consume the Flowbite plugin in your app's `main.ts`.

```ts
import { FlowbitePlugin } from "$flowbite/index.ts";

await start(manifest, {
  plugins: [
    // ...
    twindPlugin(twindConfig),
    FlowbitePlugin(),
    // ...
  ],
});
```

## Usage

Once you have consumed the plugin in your `main.ts`, you can use all Tailwind 2 components from [Flowbite](https://flowbite.com/docs/) anywhere within your app.

### Dark mode

In order to enable dark mode on a page, import the `<Page/>` component and wrap it around everything else. You can additionally provide a `[title]` attribute,
which will become the content of `<title/>`.

For example:

```ts
import Page from "$flowbite/components/Page.tsx";

export default function Blank() {
  return (
    <Page title="Blank Page">
      <div class="p-4 mx-auto max-w-screen-lg">
        {"This page has its background and default text colors automatically changed according to dark mode "}
        <code class="font-semibold">@media</code>
        {" query."}
      </div>
    </Page>
  );
}
```

### Tailwind 3

[@TODO](https://github.com/khuongduybui/fresh-flowbite/issues/2)

## A note about versioning

For now, the versions are `a.b.c-x.y.z` where `a.b.c` is the plugin version and `x.y.z` is the supported Flowbite version. For example, `0.0.1-1.5.3` is the
initial release of plugin, which supports Flowbite 1.5.3.

All tags starting with `0.0.` are **mutable**. Expect breaking changes! Starting from `0.1.`, tags will be **immutable**. However, still expect breaking
changes. Starting from `1.`, semver will kick in and there will be no breaking changes until `2.`.
