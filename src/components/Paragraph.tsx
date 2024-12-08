import type { PropsWithChildren } from "react";

export function Paragraph({ children }: PropsWithChildren) {
  return <p className="flex gap-2 items-center text-left w-full">{children}</p>
}
