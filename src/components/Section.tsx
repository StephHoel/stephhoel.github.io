import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string
}

export function Section({ children, title }: Props) {
  return (
    <div className="flex items-center px-6 py-4 bg-[var(--surface-color)] border border-[var(--stroke-color)] rounded-lg backdrop-blur-[4px] webkit-backdrop-blur-[4px] font-medium no-underline flex-col">

      <p className="text-3xl pb-4">
        {title}
      </p>

      {children}
    </div>
  )
}