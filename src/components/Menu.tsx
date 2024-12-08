import type { Routes } from "../lib/interfaces"

interface Props {
  links: Routes[]
  row?: boolean
}

export function Menu({ links, row = false }: Props) {
  return (
    <ul className={`list-none flex justify-center ${row ? 'flex-row' : 'flex-col'} gap-4 py-6`}>
      {links.map(link => (
        <li key={link.title}>
          <a
            href={link.path}
            className="flex items-center justify-center px-6 py-4 bg-[var(--surface-color)] border border-[var(--stroke-color)] rounded-lg backdrop-blur-[4px] webkit-backdrop-blur-[4px] text-center font-medium text-current no-underline transition-colors duration-200 hover:bg-[var(--surface-color-hover)] hover:border-[var(--text-color)]"
          >{link.title}</a>
        </li>
      ))}
    </ul>
  )
}