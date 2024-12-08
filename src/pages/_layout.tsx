import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="mx-auto pt-12 lg:w-3/4 lg:grid">
        {children}
      </main>

      <footer className="flex items-center justify-center text-sm pb-4">
        @ Steph Hoel 2023 (background por&nbsp;
        <a
          href="https://unsplash.com/pt-br/@florianolv"
          target="_blank"
          rel="noreferrer"
          className="lg:hover:text-zinc-400"
        >
          Florian Olivo
        </a>
        )
      </footer>
    </>
  )
};
