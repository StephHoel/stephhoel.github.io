import { EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { Menu } from "../components/Menu";
import { Paragraph } from "../components/Paragraph";
import { Section } from "../components/Section";
import { routes } from "../routes/routes";

export function AboutMe() {
  return (
    <>
      <Menu links={routes} row />

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