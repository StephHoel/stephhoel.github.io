import { Menu } from "../components/Menu";
import { Recomendations } from "../components/Recomendations";
import { links } from "../utils/links";

export function Home() {
  return (
    <>
      <Menu links={links} />

      <Recomendations />
    </>
  )
}