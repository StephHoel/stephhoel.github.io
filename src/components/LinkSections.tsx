export function LinkSections() {
  return (
    <div className="my-4 space-y-4">
      {/* botões de links */}
      {links.map(link => (
        <a
          key={link.title}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-center 
        rounded-[36px] text-base min-h-[65px] my-4 flex
        bg-zinc-900 items-center justify-center cursor-pointer align-middle font-[500] uppercase min-w-[64px] py-2 px-[55px] w-full lg:hover:bg-zinc-800"
        >
          {link.title}
        </a>
      ))}
    </div>
  )
}

const links = [
  {
    title: 'Blog',
    href: 'https://stephhoel.github.io/StephHoel/'
  }
]
