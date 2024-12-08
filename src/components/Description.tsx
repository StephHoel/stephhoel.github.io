import { EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { GrayBlock } from "./GrayBlock";
import { Paragraph } from "./Paragraph";

export function Description() {
  return (
    <GrayBlock>
      {/* descrição, email e localização */}
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
    </GrayBlock>
  )
}