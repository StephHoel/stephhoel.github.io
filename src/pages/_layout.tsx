import type { PropsWithChildren } from "react";
import { Profile } from "../components/Profile";
import { SocialMedias } from "../components/SocialMedias";
import { ToggleButton } from "../components/ToggleButton";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="mx-auto mt-20 py-10 max-w-4xl flex-grow lg:grid">
        <Profile />
        <ToggleButton />
        <SocialMedias />

        {children}
      </main>

      <footer className="flex items-center justify-center text-sm py-4">
        Steph Hoel © 2024
      </footer>
    </div>
  )
};
