import { JSX } from "preact";

export default function BaseIcon({ class: extraClass = "", ...props }: JSX.SVGAttributes<SVGSVGElement>) {
  const commonClassNames = [
    "w-4",
    "h-4",
  ];
  const classNames = commonClassNames.concat([extraClass]);

  return <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props} class={classNames.join(" ")} />;
}
