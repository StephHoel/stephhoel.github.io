import { ChildrenProps } from '../lib/Interfaces'

export default function Titulo({ children }: ChildrenProps) {
  return <p className="font-bold">{children}</p>
}
