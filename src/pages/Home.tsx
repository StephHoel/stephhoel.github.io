import { EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { useState } from "react";
import { Menu } from "../components/Menu";
import { Paragraph } from "../components/Paragraph";
import { Recomendations } from "../components/Recomendations";
import { Section } from "../components/Section";
import { links } from "../utils/links";

export function Home() {
  const [isHome, setIsHome] = useState(true)

  if (!isHome) {
    return (
      <>
        <ul className={"list-none flex justify-center flex-col gap-4 py-6"}>
          <li>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              onClick={() => setIsHome(true)}
              className="flex items-center justify-center px-6 py-4 bg-[var(--surface-color)] border border-[var(--stroke-color)] rounded-lg backdrop-blur-[4px] webkit-backdrop-blur-[4px] text-center font-medium text-current no-underline transition-colors duration-200 hover:bg-[var(--surface-color-hover)] hover:border-[var(--text-color)]"
            >Voltar à Home</div>
          </li>
        </ul>

        <Section title={"Sobre Mim"}>
          <Paragraph>Desenvolvedora de Sistemas</Paragraph>
          <Paragraph>Tecnóloga em Sistemas para Internet</Paragraph>
          <Paragraph>Técnica em Programação de Jogos Digitais</Paragraph>
          <Paragraph>Sou Gamer de simuladores & Tutora de 3 doguinhos</Paragraph>
          <Paragraph>Fui Youtuber (em uma época remota)</Paragraph>
          <Paragraph>
            <EnvelopeSimple />
            steph.hoel@gmail.com
          </Paragraph>
          <Paragraph>
            <MapPin />
            Rio de Janeiro
          </Paragraph>
        </Section>
      </>
    )
  }

  return (
    <>
      <Menu links={links} />

      <Recomendations />
    </>
  )
}

