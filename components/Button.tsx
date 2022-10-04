import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

enum ButtonVariants {
  primary,
  default,
  dark,
  light,
  green,
  red,
  yellow,
  purple,
}

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof ButtonVariants;
};

export default function Button({ class: extraClass = "", disabled, variant = "default", ...props }: ButtonProps) {
  const commonClassNames = [
    "focus:(ring-4 outline-none)",
    "font-medium",
    "rounded-lg",
    "text-sm",
    "px-5",
    "py-2.5",
    "mr-2",
    "mb-2",
  ];
  const extraClassNamesByVariant = {
    [ButtonVariants.primary]: [
      "text-white",
      "bg-blue-700",
      "hover:bg-blue-800",
      "focus:ring-blue-300",
      "dark:(bg-blue-600 hover:bg-blue-700 focus:ring-blue-800)",
    ],
    [ButtonVariants.default]: [
      "text-gray-900",
      "bg-white",
      "border",
      "border-gray-200",
      "hover:(bg-gray-100 text-blue-700)",
      "focus:(z-10 ring-gray-200)",
      "ark:(focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700)",
    ],
    [ButtonVariants.dark]: [
      "text-white",
      "bg-gray-800",
      "hover:bg-gray-900",
      "focus:ring-gray-300",
      "dark:(bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700)",
    ],
    [ButtonVariants.light]: [
      "text-gray-900",
      "bg-white",
      "border",
      "border-gray-300",
      "hover:bg-gray-100",
      "focus:ring-gray-200",
      "dark:(bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700)",
    ],
    [ButtonVariants.green]: [
      "text-white",
      "bg-green-700",
      "hover:bg-green-800",
      "focus:ring-green-300",
      "dark:(bg-green-600 hover:bg-green-700 focus:ring-green-800)",
    ],
    [ButtonVariants.red]: [
      "text-white",
      "bg-red-700",
      "hover:bg-red-800",
      "focus:ring-red-300",
      "dark:(bg-red-600 hover:bg-red-700 focus:ring-red-900)",
    ],
    [ButtonVariants.yellow]: [
      "text-white",
      "bg-yellow-400",
      "hover:bg-yellow-500",
      "focus:ring-yellow-300",
      "dark:focus:ring-yellow-900",
    ],
    [ButtonVariants.purple]: [
      "text-white",
      "bg-purple-700",
      "hover:bg-purple-800",
      "focus:ring-purple-300",
      "dark:(bg-purple-600 hover:bg-purple-700 focus:ring-purple-900)",
    ],
  };
  const classNames = commonClassNames.concat(
    extraClassNamesByVariant[ButtonVariants[variant]],
    [extraClass],
  );

  return <button {...props} disabled={!IS_BROWSER || disabled} class={classNames.join(" ")} />;
}
