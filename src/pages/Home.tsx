import { Description } from "../components/Description";
import { Header } from "../components/Header";
import { LinkSections } from "../components/LinkSections";
import { Recomendations } from "../components/Recomendations";

export function Home() {
  return (
    <>
      <Header />
      <Description />
      <LinkSections />
      <Recomendations />
    </>
  )
}