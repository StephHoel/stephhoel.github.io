import { ChildrenProps } from '../lib/Interfaces'

interface Props extends ChildrenProps {
  href: string
}

export default function Link({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="lg:hover:text-zinc-500"
    >
      {children}
    </a>
  )
}
