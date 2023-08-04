import { ChildrenProps } from '../lib/Interfaces'

export default function Linha({ children }: ChildrenProps) {
  return <p className="flex gap-2 items-center text-[#e8e6e3de] ">{children}</p>
}
