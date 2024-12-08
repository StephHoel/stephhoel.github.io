import { podcasts } from "../utils/podcasts";
import { Section } from "./Section";

export function Recomendations() {
  return (
    <Section title={"Minhas recomendações"}>
      <div className="font-bold text-lg justify-center flex flex-wrap gap-16 ">
        {podcasts.map(pod => (
          <a
            key={pod.name}
            href={pod.href}
            target="_blank"
            rel="noreferrer"
            className="grid mt-4 justify-center cursor-pointer items-center lg:hover:opacity-70"
          >
            <img
              className="max-w-[80px] max-h-[80px] rounded-full mx-auto"
              src={pod.image}
              alt={`imagem de ${pod.name}`}
            />
            <div className="max-w-[90px] mt-4 overflow-ellipsis text-center">
              {pod.name}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
