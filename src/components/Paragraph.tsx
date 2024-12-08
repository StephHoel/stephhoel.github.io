import type { PropsWithChildren } from "react";

export function Paragraph({ children }: PropsWithChildren) {
  return <p className="flex gap-2 items-center text-[#e8e6e3de] ">{children}</p>
}
