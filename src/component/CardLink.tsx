import { ChildrenProps } from '../lib/Interfaces'

interface Props extends ChildrenProps {
  href: string
}

export default function CardLink({ children, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-center 
        rounded-[36px] text-base min-h-[65px] my-4 flex
        bg-zinc-900 items-center justify-center cursor-pointer align-middle font-[500] uppercase min-w-[64px] py-2 px-[55px] w-full lg:hover:bg-zinc-800"
    >
      {children}
    </a>
  )
}
