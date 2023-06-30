import { ComponentChildren, JSX } from "preact";
import { Head } from "$fresh/runtime.ts";

export type PageProps = JSX.HTMLAttributes<HTMLBodyElement> & {
  title?: string;
};

export default function Page({ class: extraClass = "", title, ...props }: PageProps) {
  const commonClassNames = [
    "bg-white",
    "text-gray-900",
    "dark:(bg-gray-900 text-white)",
  ];
  const classNames = [...commonClassNames, extraClass];

  const head = title
    ? (
      <Head>
        <title>{title}</title>
      </Head>
    )
    : null;

  return (
    <>
      {head}
      <body {...props} class={classNames.join(" ")} />
    </>
  );
}
