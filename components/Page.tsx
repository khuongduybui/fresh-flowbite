import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

export type PageProps = {
  children: ComponentChildren;
  title?: string;
};

export default function Page({ children, title }: PageProps) {
  return (
    <>
      {title
        ? (
          <Head>
            <title>{title}</title>
          </Head>
        )
        : null}

      <body class="bg-white text-gray-900 dark:(bg-gray-900 text-white)">
        {children}
      </body>
    </>
  );
}
